import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsArticles = pgTable("news_articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  titleAr: text("title_ar").notNull(),
  content: text("content").notNull(),
  contentAr: text("content_ar").notNull(),
  category: text("category").notNull(),
  categoryAr: text("category_ar").notNull(),
  imageUrl: text("image_url"),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const shareholders = pgTable("shareholders", {
  // ── existing columns (preserved exactly) ──────────────────────────────────
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  idNumber: text("id_number").notNull(),         // reused as idOrCr
  nationality: text("nationality").notNull(),     // reused as nationalityOrCountry
  phoneNumber: text("phone_number").notNull(),    // reused as mobile
  birthDate: text("birth_date"),                  // reused as dateOfBirth
  ownershipPercentage: text("ownership_percentage").default("0.00%"),
  certificateNumber: text("certificate_number"),
  joinDate: text("join_date").default("2008-01-01"),
  notes: text("notes"),
  status: text("status").default("تم الاستلام"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),

  // ── new columns (all nullable — existing rows unaffected) ─────────────────
  requestId: text("request_id"),                  // REQ-YYYYMMDD-######
  shareholderType: text("shareholder_type"),
  authorizedPerson: text("authorized_person"),
  authorizedPersonId: text("authorized_person_id"),
  address: text("address"),
  founderShareholder: text("founder_shareholder"),
  sharesNumber: text("shares_number"),
  sharesWords: text("shares_words"),
  paidAmount: text("paid_amount"),
  currency: text("currency").default("ريال سعودي"),
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
  shareholderMessage: text("shareholder_message"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export const insertNewsArticleSchema = createInsertSchema(newsArticles).omit({
  id: true,
  createdAt: true,
});

export const insertShareholderSchema = createInsertSchema(shareholders).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

export type InsertShareholder = z.infer<typeof insertShareholderSchema>;
export type Shareholder = typeof shareholders.$inferSelect;

export type InsertNewsArticle = z.infer<typeof insertNewsArticleSchema>;
export type NewsArticle = typeof newsArticles.$inferSelect;
