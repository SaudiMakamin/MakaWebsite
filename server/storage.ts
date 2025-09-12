import { 
  users, 
  contactMessages, 
  newsArticles,
  shareholders,
  type User, 
  type InsertUser,
  type ContactMessage,
  type InsertContactMessage,
  type NewsArticle,
  type InsertNewsArticle,
  type Shareholder,
  type InsertShareholder
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getNewsArticles(): Promise<NewsArticle[]>;
  getFeaturedNewsArticle(): Promise<NewsArticle | undefined>;
  createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle>;
  createShareholder(shareholder: InsertShareholder): Promise<Shareholder>;
  getShareholders(): Promise<Shareholder[]>;
  getShareholderById(id: number): Promise<Shareholder | undefined>;
  updateShareholderStatus(id: number, status: string): Promise<Shareholder | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private newsArticles: Map<number, NewsArticle>;
  private shareholders: Map<number, Shareholder>;
  private currentUserId: number;
  private currentMessageId: number;
  private currentArticleId: number;
  private currentShareholderId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.newsArticles = new Map();
    this.shareholders = new Map();
    this.currentUserId = 1;
    this.currentMessageId = 1;
    this.currentArticleId = 1;
    this.currentShareholderId = 1;
    
    // Initialize with some sample news articles
    this.initializeNewsArticles();
  }

  private initializeNewsArticles() {
    const sampleArticles: InsertNewsArticle[] = [
      {
        title: "Makamin Expands Offshore Operations with New Vessel Fleet",
        titleAr: "مكامن توسع العمليات البحرية بأسطول جديد من السفن",
        content: "Saudi Makamin Holding Company announces significant expansion of offshore capabilities with the acquisition of advanced marine vessels to support growing demand in the oil & gas sector.",
        contentAr: "شركة مكامن السعودية القابضة تعلن عن توسع كبير في القدرات البحرية مع الحصول على سفن بحرية متقدمة لدعم الطلب المتزايد في قطاع النفط والغاز.",
        category: "Company News",
        categoryAr: "أخبار الشركة",
        imageUrl: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        featured: true
      },
      {
        title: "Technology Investment Initiative",
        titleAr: "مبادرة الاستثمار في التكنولوجيا",
        content: "New technology partnerships to enhance operational efficiency across all service divisions.",
        contentAr: "شراكات تكنولوجية جديدة لتعزيز الكفاءة التشغيلية عبر جميع أقسام الخدمات.",
        category: "Technology",
        categoryAr: "التكنولوجيا",
        imageUrl: "https://pixabay.com/get/g3e13f5947f1e3b088e280f8e8ed1fd0e49170c1710b98718fe6295d1ef59ef27dee34687f237e641e399b8f1744e6254b64fc6704cc2717e35c608a35cbc375d_1280.jpg",
        featured: false
      },
      {
        title: "Major Pipeline Project Completion",
        titleAr: "إنجاز مشروع أنابيب رئيسي",
        content: "Successfully completed 200km pipeline infrastructure project ahead of schedule.",
        contentAr: "إنجاز ناجح لمشروع البنية التحتية للأنابيب بطول 200 كم قبل الموعد المحدد.",
        category: "Projects",
        categoryAr: "المشاريع",
        imageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
        featured: false
      }
    ];

    sampleArticles.forEach(article => {
      this.createNewsArticle(article);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date(),
      company: insertMessage.company || null
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getNewsArticles(): Promise<NewsArticle[]> {
    return Array.from(this.newsArticles.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getFeaturedNewsArticle(): Promise<NewsArticle | undefined> {
    return Array.from(this.newsArticles.values()).find(
      article => article.featured
    );
  }

  async createNewsArticle(insertArticle: InsertNewsArticle): Promise<NewsArticle> {
    const id = this.currentArticleId++;
    const article: NewsArticle = { 
      ...insertArticle, 
      id, 
      createdAt: new Date(),
      imageUrl: insertArticle.imageUrl || null,
      featured: insertArticle.featured || false
    };
    this.newsArticles.set(id, article);
    return article;
  }

  async createShareholder(insertShareholder: InsertShareholder): Promise<Shareholder> {
    const id = this.currentShareholderId++;
    const shareholder: Shareholder = { 
      ...insertShareholder, 
      id, 
      createdAt: new Date(),
      updatedAt: new Date(),
      status: insertShareholder.status || "pending",
      ownershipPercentage: insertShareholder.ownershipPercentage || "0.00%",
      joinDate: insertShareholder.joinDate || "2008-01-01",
      birthDate: insertShareholder.birthDate || null,
      certificateNumber: insertShareholder.certificateNumber || null,
      notes: insertShareholder.notes || null
    };
    this.shareholders.set(id, shareholder);
    return shareholder;
  }

  async getShareholders(): Promise<Shareholder[]> {
    return Array.from(this.shareholders.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getShareholderById(id: number): Promise<Shareholder | undefined> {
    return this.shareholders.get(id);
  }

  async updateShareholderStatus(id: number, status: string): Promise<Shareholder | undefined> {
    const shareholder = this.shareholders.get(id);
    if (shareholder) {
      shareholder.status = status;
      shareholder.updatedAt = new Date();
      this.shareholders.set(id, shareholder);
      return shareholder;
    }
    return undefined;
  }
}

// Use DatabaseStorage if available, fallback to MemStorage
import { db } from "./db";
import { eq } from "drizzle-orm";

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const [message] = await db.insert(contactMessages).values(insertMessage).returning();
    return message;
  }

  async getNewsArticles(): Promise<NewsArticle[]> {
    return await db.select().from(newsArticles).orderBy(newsArticles.createdAt);
  }

  async getFeaturedNewsArticle(): Promise<NewsArticle | undefined> {
    const [article] = await db.select().from(newsArticles).where(eq(newsArticles.featured, true));
    return article || undefined;
  }

  async createNewsArticle(insertArticle: InsertNewsArticle): Promise<NewsArticle> {
    const [article] = await db.insert(newsArticles).values(insertArticle).returning();
    return article;
  }

  async createShareholder(insertShareholder: InsertShareholder): Promise<Shareholder> {
    console.log('💾 Creating shareholder in PostgreSQL:', insertShareholder.fullName);
    const [shareholder] = await db.insert(shareholders).values(insertShareholder).returning();
    console.log('✅ Shareholder created with ID:', shareholder.id);
    return shareholder;
  }

  async getShareholders(): Promise<Shareholder[]> {
    console.log('📊 Fetching shareholders from PostgreSQL...');
    const result = await db.select().from(shareholders).orderBy(shareholders.createdAt);
    console.log(`📋 Found ${result.length} shareholders`);
    return result;
  }

  async getShareholderById(id: number): Promise<Shareholder | undefined> {
    const [shareholder] = await db.select().from(shareholders).where(eq(shareholders.id, id));
    return shareholder || undefined;
  }

  async updateShareholderStatus(id: number, status: string): Promise<Shareholder | undefined> {
    const [shareholder] = await db
      .update(shareholders)
      .set({ status, updatedAt: new Date() })
      .where(eq(shareholders.id, id))
      .returning();
    return shareholder || undefined;
  }
}

// Try to use database, fallback to memory if not available
let storage: IStorage;
try {
  storage = new DatabaseStorage();
  console.log('🗄️  Using PostgreSQL database storage');
} catch (error) {
  console.log('⚠️  Database not available, using memory storage');
  storage = new MemStorage();
}

export { storage };
