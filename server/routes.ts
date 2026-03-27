import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import fs from "node:fs";
import path from "node:path";
import rateLimit from "express-rate-limit";
import multer from "multer";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { domainRedirectMiddleware, domainHealthCheck } from "./domain-middleware";
import { relaySubmitToGas, relayTrackToGas } from "./gas-relay";

// Memory-only storage — files are buffered in RAM, converted to base64, then relayed to GAS.
// No local disk writes for production submissions.
const multerUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype === "application/pdf" || file.originalname.toLowerCase().endsWith(".pdf")) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are accepted"));
    }
  },
});

const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  message: { success: false, message: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

const shareholderWriteRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  message: { success: false, message: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

const shareholderStatusRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 30,
  message: { success: false, message: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

function readNews() {
  const p = path.join(process.cwd(), "content", "news.json");
  const raw = fs.readFileSync(p, "utf-8");
  const list = JSON.parse(raw);
  return Array.isArray(list) ? list : [];
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Domain middleware for custom domain handling
  app.use(domainRedirectMiddleware);
  
  // Domain health check endpoint
  app.get("/health", domainHealthCheck);
  app.get("/api/health", domainHealthCheck);
  
  // Contact form submission
  app.post("/api/contact", contactRateLimit, async (req, res) => {
    try {
      const contactData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(contactData);
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to send message" 
      });
    }
  });

  app.get("/api/news", (_req, res) => {
    res.json(readNews());
  });

  // Get featured news article
  app.get("/api/news/featured", async (req, res) => {
    try {
      const article = await storage.getFeaturedNewsArticle();
      res.json(article);
    } catch (error) {
      console.error("Error fetching featured news:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch featured news" 
      });
    }
  });

  // Shareholder information submission
  app.post("/api/shareholders", shareholderWriteRateLimit, async (req, res) => {
    try {
      const shareholderData = insertShareholderSchema.parse(req.body);
      const shareholder = await storage.createShareholder(shareholderData);
      res.json({ 
        success: true, 
        message: "Shareholder information submitted successfully",
        id: shareholder.id
      });
    } catch (error) {
      console.error("Shareholder submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to submit shareholder information" 
      });
    }
  });

  // Public status lookup — returns limited fields only, no PII
  app.get("/api/shareholder/status/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id) || id <= 0) {
        return res.json({ found: false });
      }
      const shareholder = await storage.getShareholderById(id);
      if (!shareholder) {
        return res.json({ found: false });
      }
      res.json({
        found: true,
        id: shareholder.id,
        receivedAt: shareholder.createdAt,
        status: shareholder.status,
      });
    } catch {
      res.status(500).json({ found: false });
    }
  });

  // Full shareholder submission with file uploads
  app.post(
    "/api/shareholder/submit",
    shareholderWriteRateLimit,
    multerUpload.fields([
      { name: "mainDocument", maxCount: 1 },
      { name: "bankDocument", maxCount: 1 },
      { name: "supportDocument", maxCount: 1 },
    ]),
    async (req, res) => {
      try {
        const body = req.body as Record<string, string>;
        const files = req.files as Record<string, Express.Multer.File[]> | undefined;

        const required = [
          "shareholderType","fullName","idOrCr","nationalityOrCountry",
          "mobile","email","address","founderShareholder",
          "sharesNumber","sharesWords","paidAmount","currency",
          "bankName","accountName","iban","bankCountry",
        ];
        const missing = required.filter(k => !body[k]?.trim());
        if (missing.length) {
          return res.status(400).json({ success: false, message: "Missing required fields", missing });
        }
        if (!files?.mainDocument?.[0]) {
          return res.status(400).json({ success: false, message: "mainDocument is required" });
        }
        if (!files?.bankDocument?.[0]) {
          return res.status(400).json({ success: false, message: "bankDocument is required" });
        }
        if (body.declaration !== "true") {
          return res.status(400).json({ success: false, message: "Declaration must be accepted" });
        }

        // Encode PDFs to base64 for JSON relay to GAS (no disk writes)
        const mainFile = files?.mainDocument?.[0];
        const bankFile = files?.bankDocument?.[0];
        const supportFile = files?.supportDocument?.[0];

        const gasPayload: Record<string, string | boolean> = {
          // Identity & contact
          shareholderType: body.shareholderType,
          fullName: body.fullName,
          idOrCr: body.idOrCr,
          nationalityOrCountry: body.nationalityOrCountry,
          dateOfBirth: body.dateOfBirth || "",
          authorizedPerson: body.authorizedPerson || "",
          authorizedPersonId: body.authorizedPersonId || "",
          mobile: body.mobile,
          email: body.email,
          address: body.address,
          // Shareholding
          founderShareholder: body.founderShareholder,
          sharesNumber: body.sharesNumber,
          sharesWords: body.sharesWords,
          paidAmount: body.paidAmount,
          currency: body.currency,
          // Bank
          bankName: body.bankName,
          accountName: body.accountName,
          iban: body.iban,
          bankCountry: body.bankCountry,
          // Update checkboxes
          updateMobile: body.updateMobile === "true",
          updateEmail: body.updateEmail === "true",
          updateAddress: body.updateAddress === "true",
          updateBank: body.updateBank === "true",
          updateShareholding: body.updateShareholding === "true",
          // Notes
          notes: body.notes || "",
          // Files as base64
          mainDocumentBase64: mainFile!.buffer.toString("base64"),
          mainDocumentName: mainFile!.originalname,
          bankDocumentBase64: bankFile!.buffer.toString("base64"),
          bankDocumentName: bankFile!.originalname,
          ...(supportFile ? {
            supportDocumentBase64: supportFile.buffer.toString("base64"),
            supportDocumentName: supportFile.originalname,
          } : {}),
        };

        // Relay to Google — GAS is the system of record
        const gasResult = await relaySubmitToGas(gasPayload);

        if (!gasResult.success) {
          console.error("GAS relay failed:", gasResult.error);
          return res.status(502).json({
            success: false,
            message: "حدث خطأ في معالجة الطلب. يرجى المحاولة مرة أخرى.",
          });
        }

        const requestId = gasResult.requestId ?? "";
        const status = gasResult.status ?? "تم الاستلام";
        const emailSent = gasResult.emailSent === true;

        // Audit log to PostgreSQL — non-authoritative, non-blocking
        storage.createShareholder({
          fullName: body.fullName,
          email: body.email,
          idNumber: body.idOrCr,
          nationality: body.nationalityOrCountry,
          phoneNumber: body.mobile,
          birthDate: body.dateOfBirth || null,
          notes: body.notes || null,
          status,
          requestId,
          shareholderType: body.shareholderType,
          authorizedPerson: body.authorizedPerson || null,
          authorizedPersonId: body.authorizedPersonId || null,
          address: body.address,
          founderShareholder: body.founderShareholder,
          sharesNumber: body.sharesNumber,
          sharesWords: body.sharesWords,
          paidAmount: body.paidAmount,
          currency: body.currency,
          bankName: body.bankName,
          accountName: body.accountName,
          iban: body.iban,
          bankCountry: body.bankCountry,
          updateMobile: body.updateMobile === "true",
          updateEmail: body.updateEmail === "true",
          updateAddress: body.updateAddress === "true",
          updateBank: body.updateBank === "true",
          updateShareholding: body.updateShareholding === "true",
          declaration: true,
          mainDocumentPath: mainFile!.originalname,
          bankDocumentPath: bankFile!.originalname,
          supportDocumentPath: supportFile?.originalname ?? null,
        }).catch(err => console.warn("Audit log write failed (non-critical):", err));

        res.json({
          success: true,
          requestId,
          status,
          emailSent,
        });
      } catch (error) {
        console.error("Shareholder submit error:", error);
        res.status(500).json({ success: false, message: "Submission failed. Please try again." });
      }
    }
  );

  // Route-scoped multer error handler — submit endpoint only
  // Multer errors bypass the route handler's try/catch; this catches them before the global handler.
  app.use("/api/shareholder/submit", (err: any, _req: any, res: any, _next: any) => {
    if (err?.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        message: "حجم الملف يتجاوز الحد المسموح به (8 ميغابايت). يرجى ضغط الملف وإعادة المحاولة.",
      });
    }
    if (err?.message === "Only PDF files are accepted") {
      return res.status(400).json({
        success: false,
        message: "يُقبل ملف PDF فقط. يرجى التحقق من نوع الملف وإعادة المحاولة.",
      });
    }
    console.error("Shareholder upload error:", err?.message ?? err);
    return res.status(500).json({
      success: false,
      message: "حدث خطأ في رفع الملفات. يرجى المحاولة مرة أخرى.",
    });
  });

  // Track shareholder request — requires requestId + email or mobile
  // Queries GAS (Google Sheet) as the system of record
  app.post("/api/shareholder/track", shareholderStatusRateLimit, async (req, res) => {
    try {
      const schema = z.object({
        requestId: z.string().min(1),
        email: z.string().email().optional(),
        mobile: z.string().min(5).optional(),
      }).refine(d => d.email || d.mobile, { message: "email or mobile is required" });

      const parsed = schema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ found: false, message: parsed.error.issues[0].message });
      }

      const { requestId, email, mobile } = parsed.data;

      // Relay to GAS — Google Sheet is authoritative tracking source
      const result = await relayTrackToGas(requestId, email, mobile);

      if (!result.found) {
        return res.json({ found: false });
      }

      res.json({
        found: true,
        requestId: result.requestId ?? requestId,
        status: result.status ?? "",
        submittedAt: result.submittedAt ?? null,
        shareholderMessage: result.shareholderMessage ?? null,
      });
    } catch (error) {
      console.error("Track error:", error);
      res.status(500).json({ found: false });
    }
  });

  // Get all shareholders (for admin use)
  app.get("/api/shareholders", async (req, res) => {
    try {
      const shareholders = await storage.getShareholders();
      res.json(shareholders);
    } catch (error) {
      console.error("Error fetching shareholders:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch shareholders" 
      });
    }
  });

  // Get specific shareholder by ID
  app.get("/api/shareholders/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id) || id <= 0) {
        res.status(400).json({ success: false, message: "Invalid shareholder ID" });
        return;
      }
      const shareholder = await storage.getShareholderById(id);
      
      if (!shareholder) {
        res.status(404).json({ 
          success: false, 
          message: "Shareholder not found" 
        });
        return;
      }
      
      res.json(shareholder);
    } catch (error) {
      console.error("Error fetching shareholder:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch shareholder" 
      });
    }
  });

  // Update shareholder status (for admin use)
  app.patch("/api/shareholders/:id/status", shareholderStatusRateLimit, async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id) || id <= 0) {
        res.status(400).json({ success: false, message: "Invalid shareholder ID" });
        return;
      }
      const { status } = req.body;
      
      if (!['pending', 'approved', 'rejected'].includes(status)) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid status value" 
        });
        return;
      }
      
      const shareholder = await storage.updateShareholderStatus(id, status);
      
      if (!shareholder) {
        res.status(404).json({ 
          success: false, 
          message: "Shareholder not found" 
        });
        return;
      }
      
      res.json({ 
        success: true, 
        message: "Shareholder status updated successfully",
        shareholder
      });
    } catch (error) {
      console.error("Error updating shareholder status:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to update shareholder status" 
      });
    }
  });

  // Google Workspace Integration - Complete Shareholder Registration
  app.post("/api/shareholders/google-workspace", shareholderWriteRateLimit, async (req, res) => {
    try {
      const shareholderData = insertShareholderSchema.parse(req.body);
      
      // Import Simple Google Workspace service
      const { simpleGoogleWorkspaceService } = await import("./google-workspace-simple");
      
      console.log('📋 Shareholder data received:', {
        name: shareholderData.fullName,
        email: shareholderData.email,
        nationality: shareholderData.nationality
      });
      
      // First save to local database
      const localShareholder = await storage.createShareholder(shareholderData);
      console.log('💾 Local database save completed:', localShareholder.id);
      
      // Then process with Google Workspace (demo mode)
      const googleResult = await simpleGoogleWorkspaceService.processShareholderRegistration({
        ...shareholderData,
        localId: localShareholder.id
      });
      
      res.json({
        success: true,
        message: "✅ Shareholder registration completed successfully with Google Workspace integration",
        shareholderId: googleResult.shareholderId,
        localId: localShareholder.id,
        driveFolderId: googleResult.driveFolderId,
        googleWorkspaceDetails: googleResult.details
      });
    } catch (error) {
      console.error("❌ Google Workspace shareholder registration error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to complete shareholder registration with Google Workspace",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });

  // Google Workspace Connectivity Check
  app.get("/api/google-workspace/status", async (req, res) => {
    try {
      const { simpleGoogleWorkspaceService } = await import("./google-workspace-simple");
      const status = await simpleGoogleWorkspaceService.checkConnectivity();
      
      res.json({
        success: true,
        message: "Google Workspace connectivity check completed",
        ...status
      });
    } catch (error) {
      console.error("Google Workspace status check error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to check Google Workspace status",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });

  app.get("/api/news-json", (_req, res) => {
    res.status(410).json({ success: false, message: "Gone. Use /api/news instead." });
  });

  app.get("/sitemap.xml", (_req, res) => {
    const base = "https://makamin.com.sa";
    const news = readNews();

    const staticPages = [
      `${base}/`,
      `${base}/about`,
      `${base}/services`,
      `${base}/group`,
      `${base}/makamin-holding`,
      `${base}/petroleum-services`,
      `${base}/zencus-international`,
      `${base}/offshore-operations`,
      `${base}/services/pipeline-industrial`,
      `${base}/services/drilling`,
      `${base}/services/geoscience`,
      `${base}/services/industrial-inspection`,
      `${base}/services/zencus`,
      `${base}/services/offshore`,
      `${base}/services/supply-chain`,
      `${base}/services/technical-staffing`,
      `${base}/projects`,
      `${base}/projects/aramco`,
      `${base}/projects/pipeline`,
      `${base}/projects/offshore`,
      `${base}/projects/fleet`,
      `${base}/projects/zencus`,
      `${base}/certifications`,
      `${base}/contact`,
      `${base}/news`,
      `${base}/bahrain-operations`,
      `${base}/headquarters`,
      `${base}/investor-relations`,
      `${base}/malaysia`,
      `${base}/media-coverage`
    ];

    const staticXml = staticPages.map((u) => `<url><loc>${u}</loc></url>`).join("\n");
    const newsXml = news.map((n: any) => `<url><loc>${base}/news/${n.slug}</loc><lastmod>${n.date}</lastmod></url>`).join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml}
${newsXml}
</urlset>`;

    res.setHeader("Content-Type", "application/xml");
    res.send(xml);
  });

  app.get("/rss.xml", (_req, res) => {
    const base = "https://makamin.com.sa";
    const news = readNews();

    const sorted = [...news].sort((a: any, b: any) => b.date.localeCompare(a.date));

    const escXml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

    const items = sorted.map((n: any) => {
      const d = new Date(n.date + "T00:00:00Z");
      const pubDate = d.toUTCString();
      const desc = n.excerpt || "Makamin News update.";
      return `<item><title>${escXml(n.title)}</title><link>${base}/news/${n.slug}</link><guid>${base}/news/${n.slug}</guid><pubDate>${pubDate}</pubDate><description>${escXml(desc)}</description></item>`;
    }).join("\n");

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>Makamin News</title>
<link>${base}/news</link>
<description>Latest news and corporate governance announcements from Makamin Saudi Holding.</description>
${items}
</channel>
</rss>`;

    res.setHeader("Content-Type", "application/rss+xml");
    res.send(rss);
  });

  const httpServer = createServer(app);
  return httpServer;
}
