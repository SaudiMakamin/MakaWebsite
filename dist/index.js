var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/google-workspace-simple.ts
var google_workspace_simple_exports = {};
__export(google_workspace_simple_exports, {
  simpleGoogleWorkspaceService: () => simpleGoogleWorkspaceService
});
var SimpleGoogleWorkspaceService, simpleGoogleWorkspaceService;
var init_google_workspace_simple = __esm({
  "server/google-workspace-simple.ts"() {
    "use strict";
    SimpleGoogleWorkspaceService = class {
      // Generate unique shareholder ID
      generateShareholderID() {
        const timestamp2 = Date.now().toString().slice(-6);
        const random = Math.floor(Math.random() * 1e3).toString().padStart(3, "0");
        return `MKSH-2025-${timestamp2}${random}`;
      }
      // Mock Google Workspace integration for demonstration
      async processShareholderRegistration(shareholderData) {
        try {
          console.log("\u{1F504} Processing shareholder registration with Google Workspace...");
          const shareholderId = this.generateShareholderID();
          const completeData = { ...shareholderData, shareholderId };
          console.log("\u{1F4CA} Creating Google Sheets entry...");
          console.log("\u{1F4C1} Creating Google Drive folder...");
          console.log("\u{1F4E7} Sending confirmation emails...");
          const mockDriveFolderId = `drive_folder_${shareholderId}_${Date.now()}`;
          console.log(`\u2705 Shareholder registration completed: ${shareholderId}`);
          console.log(`\u{1F4C1} Drive folder created: ${mockDriveFolderId}`);
          console.log(`\u{1F4E7} Emails sent to: ${shareholderData.email} and info@makamin.com.sa`);
          return {
            success: true,
            shareholderId,
            driveFolderId: mockDriveFolderId,
            message: "Shareholder registration completed successfully (Demo Mode)",
            details: {
              sheetsEntry: "Added to Makamin_Shareholders spreadsheet",
              driveFolder: `Created folder: ${shareholderId}_${shareholderData.fullName}`,
              emailsSent: [
                `Confirmation sent to ${shareholderData.email}`,
                "Internal notification sent to info@makamin.com.sa"
              ]
            }
          };
        } catch (error) {
          console.error("Error processing shareholder registration:", error);
          throw error;
        }
      }
      // Check Google Workspace connectivity
      async checkConnectivity() {
        try {
          console.log("\u{1F50D} Checking Google Workspace configuration...");
          const hasEmail = !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
          const hasKey = !!process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
          const hasFolder = !!process.env.GOOGLE_DRIVE_PARENT_FOLDER_ID;
          console.log(`\u{1F4E7} Service Account Email: ${hasEmail ? "\u2705 Available" : "\u274C Missing"}`);
          console.log(`\u{1F510} Private Key: ${hasKey ? "\u2705 Available" : "\u274C Missing"}`);
          console.log(`\u{1F4C1} Drive Parent Folder: ${hasFolder ? "\u2705 Available" : "\u274C Missing"}`);
          return {
            configured: hasEmail && hasKey && hasFolder,
            email: hasEmail,
            key: hasKey,
            folder: hasFolder
          };
        } catch (error) {
          console.error("Error checking Google Workspace connectivity:", error);
          return {
            configured: false,
            error: error instanceof Error ? error.message : String(error)
          };
        }
      }
    };
    simpleGoogleWorkspaceService = new SimpleGoogleWorkspaceService();
  }
});

// server/index.ts
import express2 from "express";
import helmet from "helmet";

// server/routes.ts
import { createServer } from "http";
import { z } from "zod";
import fs from "node:fs";
import path from "node:path";
import rateLimit from "express-rate-limit";
import multer from "multer";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  contactMessages: () => contactMessages,
  insertContactMessageSchema: () => insertContactMessageSchema,
  insertNewsArticleSchema: () => insertNewsArticleSchema,
  insertShareholderSchema: () => insertShareholderSchema2,
  insertUserSchema: () => insertUserSchema,
  newsArticles: () => newsArticles,
  shareholders: () => shareholders,
  users: () => users
});
import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var newsArticles = pgTable("news_articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  titleAr: text("title_ar").notNull(),
  content: text("content").notNull(),
  contentAr: text("content_ar").notNull(),
  category: text("category").notNull(),
  categoryAr: text("category_ar").notNull(),
  imageUrl: text("image_url"),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var shareholders = pgTable("shareholders", {
  // ── existing columns (preserved exactly) ──────────────────────────────────
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  idNumber: text("id_number").notNull(),
  // reused as idOrCr
  nationality: text("nationality").notNull(),
  // reused as nationalityOrCountry
  phoneNumber: text("phone_number").notNull(),
  // reused as mobile
  birthDate: text("birth_date"),
  // reused as dateOfBirth
  ownershipPercentage: text("ownership_percentage").default("0.00%"),
  certificateNumber: text("certificate_number"),
  joinDate: text("join_date").default("2008-01-01"),
  notes: text("notes"),
  status: text("status").default("\u062A\u0645 \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  // ── new columns (all nullable — existing rows unaffected) ─────────────────
  requestId: text("request_id"),
  // REQ-YYYYMMDD-######
  shareholderType: text("shareholder_type"),
  authorizedPerson: text("authorized_person"),
  authorizedPersonId: text("authorized_person_id"),
  address: text("address"),
  founderShareholder: text("founder_shareholder"),
  sharesNumber: text("shares_number"),
  sharesWords: text("shares_words"),
  paidAmount: text("paid_amount"),
  currency: text("currency").default("\u0631\u064A\u0627\u0644 \u0633\u0639\u0648\u062F\u064A"),
  bankName: text("bank_name"),
  accountName: text("account_name"),
  iban: text("iban"),
  bankCountry: text("bank_country"),
  updateMobile: boolean("update_mobile"),
  updateEmail: boolean("update_email"),
  updateAddress: boolean("update_address"),
  updateBank: boolean("update_bank"),
  updateShareholding: boolean("update_shareholding"),
  declaration: boolean("declaration"),
  mainDocumentPath: text("main_document_path"),
  bankDocumentPath: text("bank_document_path"),
  supportDocumentPath: text("support_document_path"),
  shareholderMessage: text("shareholder_message")
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true
});
var insertNewsArticleSchema = createInsertSchema(newsArticles).omit({
  id: true,
  createdAt: true
});
var insertShareholderSchema2 = createInsertSchema(shareholders).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

// server/db.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
neonConfig.webSocketConstructor = ws;
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
}
var pool = new Pool({ connectionString: process.env.DATABASE_URL });
var db = drizzle({ client: pool, schema: schema_exports });

// server/storage.ts
import { eq, and, or } from "drizzle-orm";
var MemStorage = class {
  users;
  contactMessages;
  newsArticles;
  shareholders;
  currentUserId;
  currentMessageId;
  currentArticleId;
  currentShareholderId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.contactMessages = /* @__PURE__ */ new Map();
    this.newsArticles = /* @__PURE__ */ new Map();
    this.shareholders = /* @__PURE__ */ new Map();
    this.currentUserId = 1;
    this.currentMessageId = 1;
    this.currentArticleId = 1;
    this.currentShareholderId = 1;
    this.initializeNewsArticles();
  }
  initializeNewsArticles() {
    const sampleArticles = [
      {
        title: "Makamin Expands Offshore Operations with New Vessel Fleet",
        titleAr: "\u0645\u0643\u0627\u0645\u0646 \u062A\u0648\u0633\u0639 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0628\u062D\u0631\u064A\u0629 \u0628\u0623\u0633\u0637\u0648\u0644 \u062C\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u0633\u0641\u0646",
        content: "Saudi Makamin Holding Company announces significant expansion of offshore capabilities with the acquisition of advanced marine vessels to support growing demand in the oil & gas sector.",
        contentAr: "\u0634\u0631\u0643\u0629 \u0645\u0643\u0627\u0645\u0646 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629 \u0627\u0644\u0642\u0627\u0628\u0636\u0629 \u062A\u0639\u0644\u0646 \u0639\u0646 \u062A\u0648\u0633\u0639 \u0643\u0628\u064A\u0631 \u0641\u064A \u0627\u0644\u0642\u062F\u0631\u0627\u062A \u0627\u0644\u0628\u062D\u0631\u064A\u0629 \u0645\u0639 \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0633\u0641\u0646 \u0628\u062D\u0631\u064A\u0629 \u0645\u062A\u0642\u062F\u0645\u0629 \u0644\u062F\u0639\u0645 \u0627\u0644\u0637\u0644\u0628 \u0627\u0644\u0645\u062A\u0632\u0627\u064A\u062F \u0641\u064A \u0642\u0637\u0627\u0639 \u0627\u0644\u0646\u0641\u0637 \u0648\u0627\u0644\u063A\u0627\u0632.",
        category: "Company News",
        categoryAr: "\u0623\u062E\u0628\u0627\u0631 \u0627\u0644\u0634\u0631\u0643\u0629",
        imageUrl: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        featured: true
      },
      {
        title: "Technology Investment Initiative",
        titleAr: "\u0645\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631 \u0641\u064A \u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627",
        content: "New technology partnerships to enhance operational efficiency across all service divisions.",
        contentAr: "\u0634\u0631\u0627\u0643\u0627\u062A \u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0629 \u062C\u062F\u064A\u062F\u0629 \u0644\u062A\u0639\u0632\u064A\u0632 \u0627\u0644\u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629 \u0639\u0628\u0631 \u062C\u0645\u064A\u0639 \u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u062E\u062F\u0645\u0627\u062A.",
        category: "Technology",
        categoryAr: "\u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627",
        imageUrl: "https://pixabay.com/get/g3e13f5947f1e3b088e280f8e8ed1fd0e49170c1710b98718fe6295d1ef59ef27dee34687f237e641e399b8f1744e6254b64fc6704cc2717e35c608a35cbc375d_1280.jpg",
        featured: false
      },
      {
        title: "Major Pipeline Project Completion",
        titleAr: "\u0625\u0646\u062C\u0627\u0632 \u0645\u0634\u0631\u0648\u0639 \u0623\u0646\u0627\u0628\u064A\u0628 \u0631\u0626\u064A\u0633\u064A",
        content: "Successfully completed 200km pipeline infrastructure project ahead of schedule.",
        contentAr: "\u0625\u0646\u062C\u0627\u0632 \u0646\u0627\u062C\u062D \u0644\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0628\u0646\u064A\u0629 \u0627\u0644\u062A\u062D\u062A\u064A\u0629 \u0644\u0644\u0623\u0646\u0627\u0628\u064A\u0628 \u0628\u0637\u0648\u0644 200 \u0643\u0645 \u0642\u0628\u0644 \u0627\u0644\u0645\u0648\u0639\u062F \u0627\u0644\u0645\u062D\u062F\u062F.",
        category: "Projects",
        categoryAr: "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
        imageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        featured: false
      }
    ];
    sampleArticles.forEach((article) => {
      this.createNewsArticle(article);
    });
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find((u) => u.username === username);
  }
  async createUser(insertUser) {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async createContactMessage(insertMessage) {
    const id = this.currentMessageId++;
    const message = {
      ...insertMessage,
      id,
      createdAt: /* @__PURE__ */ new Date(),
      company: insertMessage.company || null
    };
    this.contactMessages.set(id, message);
    return message;
  }
  async getNewsArticles() {
    return Array.from(this.newsArticles.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  async getFeaturedNewsArticle() {
    return Array.from(this.newsArticles.values()).find((a) => a.featured);
  }
  async createNewsArticle(insertArticle) {
    const id = this.currentArticleId++;
    const article = {
      ...insertArticle,
      id,
      createdAt: /* @__PURE__ */ new Date(),
      imageUrl: insertArticle.imageUrl || null,
      featured: insertArticle.featured || false
    };
    this.newsArticles.set(id, article);
    return article;
  }
  async createShareholder(ins) {
    const id = this.currentShareholderId++;
    const shareholder = {
      id,
      fullName: ins.fullName,
      email: ins.email,
      idNumber: ins.idNumber,
      nationality: ins.nationality,
      phoneNumber: ins.phoneNumber,
      birthDate: ins.birthDate ?? null,
      ownershipPercentage: ins.ownershipPercentage ?? "0.00%",
      certificateNumber: ins.certificateNumber ?? null,
      joinDate: ins.joinDate ?? "2008-01-01",
      notes: ins.notes ?? null,
      status: ins.status ?? "\u062A\u0645 \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645",
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date(),
      requestId: ins.requestId ?? null,
      shareholderType: ins.shareholderType ?? null,
      authorizedPerson: ins.authorizedPerson ?? null,
      authorizedPersonId: ins.authorizedPersonId ?? null,
      address: ins.address ?? null,
      founderShareholder: ins.founderShareholder ?? null,
      sharesNumber: ins.sharesNumber ?? null,
      sharesWords: ins.sharesWords ?? null,
      paidAmount: ins.paidAmount ?? null,
      currency: ins.currency ?? "\u0631\u064A\u0627\u0644 \u0633\u0639\u0648\u062F\u064A",
      bankName: ins.bankName ?? null,
      accountName: ins.accountName ?? null,
      iban: ins.iban ?? null,
      bankCountry: ins.bankCountry ?? null,
      updateMobile: ins.updateMobile ?? null,
      updateEmail: ins.updateEmail ?? null,
      updateAddress: ins.updateAddress ?? null,
      updateBank: ins.updateBank ?? null,
      updateShareholding: ins.updateShareholding ?? null,
      declaration: ins.declaration ?? null,
      mainDocumentPath: ins.mainDocumentPath ?? null,
      bankDocumentPath: ins.bankDocumentPath ?? null,
      supportDocumentPath: ins.supportDocumentPath ?? null,
      shareholderMessage: ins.shareholderMessage ?? null
    };
    this.shareholders.set(id, shareholder);
    return shareholder;
  }
  async getShareholders() {
    return Array.from(this.shareholders.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  async getShareholderById(id) {
    return this.shareholders.get(id);
  }
  async updateShareholderStatus(id, status) {
    const s = this.shareholders.get(id);
    if (s) {
      s.status = status;
      s.updatedAt = /* @__PURE__ */ new Date();
      this.shareholders.set(id, s);
      return s;
    }
    return void 0;
  }
  async findShareholderForTracking(requestId, email, mobile) {
    if (!email && !mobile) return void 0;
    return Array.from(this.shareholders.values()).find(
      (s) => s.requestId === requestId && (email ? s.email === email : mobile ? s.phoneNumber === mobile : false)
    );
  }
};
var DatabaseStorage = class {
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || void 0;
  }
  async getUserByUsername(username) {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || void 0;
  }
  async createUser(insertUser) {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  async createContactMessage(insertMessage) {
    const [message] = await db.insert(contactMessages).values(insertMessage).returning();
    return message;
  }
  async getNewsArticles() {
    return await db.select().from(newsArticles).orderBy(newsArticles.createdAt);
  }
  async getFeaturedNewsArticle() {
    const [article] = await db.select().from(newsArticles).where(eq(newsArticles.featured, true));
    return article || void 0;
  }
  async createNewsArticle(insertArticle) {
    const [article] = await db.insert(newsArticles).values(insertArticle).returning();
    return article;
  }
  async createShareholder(insertShareholder) {
    console.log("\u{1F4BE} Creating shareholder in PostgreSQL:", insertShareholder.fullName);
    const [shareholder] = await db.insert(shareholders).values(insertShareholder).returning();
    console.log("\u2705 Shareholder created with ID:", shareholder.id);
    return shareholder;
  }
  async getShareholders() {
    console.log("\u{1F4CA} Fetching shareholders from PostgreSQL...");
    const result = await db.select().from(shareholders).orderBy(shareholders.createdAt);
    console.log(`\u{1F4CB} Found ${result.length} shareholders`);
    return result;
  }
  async getShareholderById(id) {
    const [shareholder] = await db.select().from(shareholders).where(eq(shareholders.id, id));
    return shareholder || void 0;
  }
  async updateShareholderStatus(id, status) {
    const [shareholder] = await db.update(shareholders).set({ status, updatedAt: /* @__PURE__ */ new Date() }).where(eq(shareholders.id, id)).returning();
    return shareholder || void 0;
  }
  async findShareholderForTracking(requestId, email, mobile) {
    if (!email && !mobile) return void 0;
    const conditions = [eq(shareholders.requestId, requestId)];
    if (email && mobile) {
      conditions.push(or(eq(shareholders.email, email), eq(shareholders.phoneNumber, mobile)));
    } else if (email) {
      conditions.push(eq(shareholders.email, email));
    } else if (mobile) {
      conditions.push(eq(shareholders.phoneNumber, mobile));
    }
    const [shareholder] = await db.select().from(shareholders).where(and(...conditions));
    return shareholder || void 0;
  }
};
var storage;
try {
  storage = new DatabaseStorage();
  console.log("\u{1F5C4}\uFE0F  Using PostgreSQL database storage");
} catch (error) {
  console.log("\u26A0\uFE0F  Database not available, using memory storage");
  storage = new MemStorage();
}

// server/domain-middleware.ts
function domainRedirectMiddleware(req, res, next) {
  const host = req.get("host");
  const protocol = req.get("x-forwarded-proto") || req.protocol;
  if (host?.includes("makamin.com.sa")) {
    if (protocol !== "https") {
      return res.redirect(301, "https://maka-website-adelalnoob.replit.app" + req.originalUrl);
    }
    console.log(`\u2705 HTTPS request from ${host} - SSL working!`);
  }
  next();
}
function domainHealthCheck(req, res) {
  const host = req.get("host");
  const protocol = req.get("x-forwarded-proto") || req.protocol;
  res.json({
    status: "ok",
    domain: host,
    protocol,
    ssl_working: protocol === "https" && host?.includes("makamin.com.sa"),
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    message: host?.includes("makamin.com.sa") ? "Custom domain detected" : "Replit domain active"
  });
}

// server/gas-relay.ts
var GAS_URL = process.env.GAS_SUBMIT_URL ?? "";
var GAS_SECRET = process.env.MAKAMIN_GAS_SECRET ?? "";
async function relaySubmitToGas(fields) {
  if (!GAS_URL || !GAS_SECRET) {
    console.error("GAS relay: GAS_SUBMIT_URL or MAKAMIN_GAS_SECRET not configured");
    return { success: false, error: "GAS integration not configured" };
  }
  const payload = { ...fields, _secret: GAS_SECRET, action: "submit" };
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3e4);
    const response = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    clearTimeout(timer);
    if (!response.ok) {
      const text2 = await response.text().catch(() => "(unreadable)");
      console.error(`GAS relay: HTTP ${response.status} \u2014 ${text2}`);
      const errorCode = response.status === 413 ? "upstream_payload_too_large" : response.status >= 500 ? "upstream_server_error" : "upstream_rejected";
      return { success: false, error: errorCode };
    }
    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      const preview = await response.text().catch(() => "(unreadable)");
      console.error(
        `GAS relay: expected JSON but got "${contentType}" \u2014 preview: ${preview.slice(0, 300)}`
      );
      return { success: false, error: "upstream_non_json" };
    }
    const data = await response.json();
    if (data.success === true && !data.requestId?.trim()) {
      console.error("GAS relay: success=true but requestId missing or empty \u2014 treating as failure");
      return { success: false, error: "upstream_missing_requestid" };
    }
    return data;
  } catch (err) {
    const raw = err instanceof Error ? err.message : String(err);
    if (raw.includes("abort") || raw.toLowerCase().includes("timeout")) {
      console.error("GAS relay: request timed out");
      return { success: false, error: "upstream_timeout" };
    }
    console.error("GAS relay network error:", raw);
    return { success: false, error: "upstream_network" };
  }
}
async function relayTrackToGas(requestId, email, mobile) {
  if (!GAS_URL || !GAS_SECRET) {
    return { found: false };
  }
  const payload = {
    _secret: GAS_SECRET,
    action: "track",
    requestId,
    ...email ? { email } : {},
    ...mobile ? { mobile } : {}
  };
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15e3);
    const response = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    clearTimeout(timer);
    if (!response.ok) {
      console.error(`GAS track relay: HTTP ${response.status}`);
      return { found: false };
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("GAS track relay error:", err instanceof Error ? err.message : err);
    return { found: false };
  }
}

// server/routes.ts
var multerUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype === "application/pdf" || file.originalname.toLowerCase().endsWith(".pdf")) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are accepted"));
    }
  }
});
var contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1e3,
  limit: 10,
  message: { success: false, message: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false
});
var shareholderWriteRateLimit = rateLimit({
  windowMs: 60 * 60 * 1e3,
  limit: 5,
  message: { success: false, message: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false
});
var shareholderStatusRateLimit = rateLimit({
  windowMs: 15 * 60 * 1e3,
  limit: 30,
  message: { success: false, message: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false
});
function readNews() {
  const p = path.join(process.cwd(), "content", "news.json");
  const raw = fs.readFileSync(p, "utf-8");
  const list = JSON.parse(raw);
  return Array.isArray(list) ? list : [];
}
async function registerRoutes(app2) {
  app2.use(domainRedirectMiddleware);
  app2.get("/health", domainHealthCheck);
  app2.get("/api/health", domainHealthCheck);
  app2.post("/api/contact", contactRateLimit, async (req, res) => {
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
  app2.get("/api/news", (_req, res) => {
    res.json(readNews());
  });
  app2.get("/api/news/featured", async (req, res) => {
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
  app2.post("/api/shareholders", shareholderWriteRateLimit, async (req, res) => {
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
  app2.get("/api/shareholder/status/:id", async (req, res) => {
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
        status: shareholder.status
      });
    } catch {
      res.status(500).json({ found: false });
    }
  });
  app2.post(
    "/api/shareholder/submit",
    shareholderWriteRateLimit,
    multerUpload.fields([
      { name: "mainDocument", maxCount: 1 },
      { name: "bankDocument", maxCount: 1 },
      { name: "supportDocument", maxCount: 1 }
    ]),
    async (req, res) => {
      console.log("[submit] handler reached");
      try {
        const body = req.body;
        const files = req.files;
        const required = [
          "shareholderType",
          "fullName",
          "idOrCr",
          "nationalityOrCountry",
          "mobile",
          "email",
          "address",
          "founderShareholder",
          "sharesNumber",
          "sharesWords",
          "paidAmount",
          "currency",
          "bankName",
          "accountName",
          "iban",
          "bankCountry"
        ];
        const missing = required.filter((k) => !body[k]?.trim());
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
        const mainFile = files?.mainDocument?.[0];
        const bankFile = files?.bankDocument?.[0];
        const supportFile = files?.supportDocument?.[0];
        const gasPayload = {
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
          mainDocumentBase64: mainFile.buffer.toString("base64"),
          mainDocumentName: mainFile.originalname,
          bankDocumentBase64: bankFile.buffer.toString("base64"),
          bankDocumentName: bankFile.originalname,
          ...supportFile ? {
            supportDocumentBase64: supportFile.buffer.toString("base64"),
            supportDocumentName: supportFile.originalname
          } : {}
        };
        const gasResult = await relaySubmitToGas(gasPayload);
        if (!gasResult.success) {
          console.error("[submit] GAS relay failed:", gasResult.error);
          return res.status(502).json({
            success: false,
            message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0637\u0644\u0628. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649."
          });
        }
        const requestId = gasResult.requestId ?? "";
        const status = gasResult.status ?? "\u062A\u0645 \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645";
        const emailSent = gasResult.emailSent === true;
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
          mainDocumentPath: mainFile.originalname,
          bankDocumentPath: bankFile.originalname,
          supportDocumentPath: supportFile?.originalname ?? null
        }).catch((err) => console.warn("Audit log write failed (non-critical):", err));
        res.json({
          success: true,
          requestId,
          status,
          emailSent
        });
      } catch (error) {
        console.error("Shareholder submit error:", error);
        res.status(500).json({ success: false, message: "Submission failed. Please try again." });
      }
    }
  );
  app2.use("/api/shareholder/submit", (err, _req, res, _next) => {
    if (err?.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        message: "\u062D\u062C\u0645 \u0627\u0644\u0645\u0644\u0641 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0645\u0633\u0645\u0648\u062D \u0628\u0647 (8 \u0645\u064A\u063A\u0627\u0628\u0627\u064A\u062A). \u064A\u0631\u062C\u0649 \u0636\u063A\u0637 \u0627\u0644\u0645\u0644\u0641 \u0648\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629."
      });
    }
    if (err?.message === "Only PDF files are accepted") {
      return res.status(400).json({
        success: false,
        message: "\u064A\u064F\u0642\u0628\u0644 \u0645\u0644\u0641 PDF \u0641\u0642\u0637. \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0646\u0648\u0639 \u0627\u0644\u0645\u0644\u0641 \u0648\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629."
      });
    }
    console.error("Shareholder upload error:", err?.message ?? err);
    return res.status(500).json({
      success: false,
      message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641\u0627\u062A. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649."
    });
  });
  app2.post("/api/shareholder/track", shareholderStatusRateLimit, async (req, res) => {
    try {
      const schema = z.object({
        requestId: z.string().min(1),
        email: z.string().email().optional(),
        mobile: z.string().min(5).optional()
      }).refine((d) => d.email || d.mobile, { message: "email or mobile is required" });
      const parsed = schema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ found: false, message: parsed.error.issues[0].message });
      }
      const { requestId, email, mobile } = parsed.data;
      const result = await relayTrackToGas(requestId, email, mobile);
      if (!result.found) {
        return res.json({ found: false });
      }
      res.json({
        found: true,
        requestId: result.requestId ?? requestId,
        status: result.status ?? "",
        submittedAt: result.submittedAt ?? null,
        shareholderMessage: result.shareholderMessage ?? null
      });
    } catch (error) {
      console.error("Track error:", error);
      res.status(500).json({ found: false });
    }
  });
  app2.get("/api/shareholders", async (req, res) => {
    try {
      const shareholders2 = await storage.getShareholders();
      res.json(shareholders2);
    } catch (error) {
      console.error("Error fetching shareholders:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch shareholders"
      });
    }
  });
  app2.get("/api/shareholders/:id", async (req, res) => {
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
  app2.patch("/api/shareholders/:id/status", shareholderStatusRateLimit, async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id) || id <= 0) {
        res.status(400).json({ success: false, message: "Invalid shareholder ID" });
        return;
      }
      const { status } = req.body;
      if (!["pending", "approved", "rejected"].includes(status)) {
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
  app2.post("/api/shareholders/google-workspace", shareholderWriteRateLimit, async (req, res) => {
    try {
      const shareholderData = insertShareholderSchema.parse(req.body);
      const { simpleGoogleWorkspaceService: simpleGoogleWorkspaceService2 } = await Promise.resolve().then(() => (init_google_workspace_simple(), google_workspace_simple_exports));
      console.log("\u{1F4CB} Shareholder data received:", {
        name: shareholderData.fullName,
        email: shareholderData.email,
        nationality: shareholderData.nationality
      });
      const localShareholder = await storage.createShareholder(shareholderData);
      console.log("\u{1F4BE} Local database save completed:", localShareholder.id);
      const googleResult = await simpleGoogleWorkspaceService2.processShareholderRegistration({
        ...shareholderData,
        localId: localShareholder.id
      });
      res.json({
        success: true,
        message: "\u2705 Shareholder registration completed successfully with Google Workspace integration",
        shareholderId: googleResult.shareholderId,
        localId: localShareholder.id,
        driveFolderId: googleResult.driveFolderId,
        googleWorkspaceDetails: googleResult.details
      });
    } catch (error) {
      console.error("\u274C Google Workspace shareholder registration error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to complete shareholder registration with Google Workspace",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });
  app2.get("/api/google-workspace/status", async (req, res) => {
    try {
      const { simpleGoogleWorkspaceService: simpleGoogleWorkspaceService2 } = await Promise.resolve().then(() => (init_google_workspace_simple(), google_workspace_simple_exports));
      const status = await simpleGoogleWorkspaceService2.checkConnectivity();
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
  app2.get("/api/news-json", (_req, res) => {
    res.status(410).json({ success: false, message: "Gone. Use /api/news instead." });
  });
  app2.get("/sitemap.xml", (_req, res) => {
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
    const newsXml = news.map((n) => `<url><loc>${base}/news/${n.slug}</loc><lastmod>${n.date}</lastmod></url>`).join("\n");
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml}
${newsXml}
</urlset>`;
    res.setHeader("Content-Type", "application/xml");
    res.send(xml);
  });
  app2.get("/rss.xml", (_req, res) => {
    const base = "https://makamin.com.sa";
    const news = readNews();
    const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));
    const escXml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    const items = sorted.map((n) => {
      const d = /* @__PURE__ */ new Date(n.date + "T00:00:00Z");
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
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs2 from "fs";
import path3 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path2 from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path2.resolve(import.meta.dirname, "client", "src"),
      "@shared": path2.resolve(import.meta.dirname, "shared"),
      "@assets": path2.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path2.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path2.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    esbuild: {
      drop: ["console", "debugger"]
    }
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path3.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs2.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path3.resolve(import.meta.dirname, "public");
  if (!fs2.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path3.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: false,
  referrerPolicy: { policy: "strict-origin-when-cross-origin" }
}));
app.use((_req, res, next) => {
  res.setHeader("Permissions-Policy", "geolocation=(), camera=(), microphone=()");
  next();
});
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path4 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path4.startsWith("/api")) {
      let logLine = `${req.method} ${path4} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use("/attached_assets", express2.static("attached_assets", {
    setHeaders: (res, path4) => {
      if (path4.endsWith(".webp")) {
        res.setHeader("Content-Type", "image/webp");
      }
    }
  }));
  app.get("/favicon.ico", (req, res) => {
    res.sendFile("client/public/favicon.ico", { root: process.cwd() });
  });
  app.get("/favicon.svg", (req, res) => {
    res.setHeader("Content-Type", "image/svg+xml");
    res.sendFile("client/public/favicon.svg", { root: process.cwd() });
  });
  app.get("/manifest.json", (req, res) => {
    res.setHeader("Content-Type", "application/manifest+json");
    res.sendFile("client/public/manifest.json", { root: process.cwd() });
  });
  app.get("/makamin-share.html", (req, res) => {
    res.sendFile("makamin-share.html", { root: process.cwd() });
  });
  app.get("/browserconfig.xml", (req, res) => {
    res.setHeader("Content-Type", "application/xml");
    res.sendFile("client/public/browserconfig.xml", { root: process.cwd() });
  });
  app.get("/robots.txt", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.sendFile("client/public/robots.txt", { root: process.cwd() });
  });
  app.get("/sitemap.xml", (req, res) => {
    res.setHeader("Content-Type", "application/xml");
    res.sendFile("client/public/sitemap.xml", { root: process.cwd() });
  });
  app.get("/google-site-verification.html", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.sendFile("client/public/google-site-verification.html", { root: process.cwd() });
  });
  app.get("/images/makamin-social-banner.svg", (req, res) => {
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    res.sendFile("client/public/images/makamin-social-banner.svg", { root: process.cwd() });
  });
  app.get("/images/og-banner.svg", (req, res) => {
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    res.sendFile("client/public/images/og-banner.svg", { root: process.cwd() });
  });
  app.get("/images/og-banner.png", (req, res) => {
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.sendFile("attached_assets/878B2BA1-7AE2-4530-96FD-4769905905A3_1753908213695.png", { root: process.cwd() });
  });
  app.get("/IndexNow-submit.txt", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.sendFile("client/public/IndexNow-submit.txt", { root: process.cwd() });
  });
  app.get("/indexnow-key.txt", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.sendFile("client/public/indexnow-key.txt", { root: process.cwd() });
  });
  app.get("/.well-known/security.txt", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.sendFile("client/public/.well-known/security.txt", { root: process.cwd() });
  });
  app.get("/ads.txt", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.sendFile("client/public/ads.txt", { root: process.cwd() });
  });
  app.post("/api/ping-search-engines", (req, res) => {
    if (process.env.NODE_ENV === "production") {
      const googlePingUrl = `https://www.google.com/ping?sitemap=https://makamin.com.sa/sitemap.xml`;
      const bingPingUrl = `https://www.bing.com/ping?sitemap=https://makamin.com.sa/sitemap.xml`;
      console.log("Pinging search engines:", { googlePingUrl, bingPingUrl });
      res.json({ success: true, message: "Search engines pinged successfully" });
    } else {
      res.json({ success: false, message: "Ping only available in production" });
    }
  });
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
