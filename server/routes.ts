import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import fs from "node:fs";
import path from "node:path";
import { storage } from "./storage";
import { insertContactMessageSchema, insertShareholderSchema } from "@shared/schema";
import { domainRedirectMiddleware, domainHealthCheck } from "./domain-middleware";

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
  app.post("/api/contact", async (req, res) => {
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
  app.post("/api/shareholders", async (req, res) => {
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
      const id = parseInt(req.params.id);
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
  app.patch("/api/shareholders/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
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
  app.post("/api/shareholders/google-workspace", async (req, res) => {
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

  app.get("/sitemap.xml", (req, res) => {
    const base = `${req.protocol}://${req.get("host")}`;
    const news = readNews();

    const urls = [
      `${base}/`,
      `${base}/about`,
      `${base}/services`,
      `${base}/projects`,
      `${base}/certifications`,
      `${base}/contact`,
      `${base}/news`,
      ...news.map((n: any) => `${base}/news/${n.slug}`)
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `<url><loc>${u}</loc></url>`).join("\n")}
</urlset>`;

    res.setHeader("Content-Type", "application/xml");
    res.send(xml);
  });

  const httpServer = createServer(app);
  return httpServer;
}
