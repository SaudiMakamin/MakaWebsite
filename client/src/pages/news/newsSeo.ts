import type { NewsItem } from "./newsData";

export const NEWS_BASE = "https://www.makamin.com.sa";
export const newsUrl = (slug?: string) =>
  `${NEWS_BASE}/news${slug ? `/${encodeURIComponent(slug)}` : ""}`;
export const publicImageUrl = (path: string) => new URL(path, NEWS_BASE).href;

// Verified intrinsic dimensions and file formats; no image transformations.
export const newsImageDetails: Record<string, { width: number; height: number; type: string }> = {
  "/images/news/first-board-meeting-2026-02-12-warwick-group-photo.jpg": { width: 1200, height: 1600, type: "image/jpeg" },
  "/images/news/first-board-meeting-2026-02-12-warwick-meeting-composite.png": { width: 1080, height: 1920, type: "image/png" },
  "/images/news/makamin-second-shareholder-update-notice-2025-12-03.png": { width: 1280, height: 720, type: "image/png" },
  "/images/news/makamin-extraordinary-general-assembly-2025-09-30.png": { width: 960, height: 540, type: "image/png" },
  "/attached_assets/لقطة الشاشة 2025-07-21 172931_1754473884923.jpg": { width: 561, height: 363, type: "image/jpeg" },
  "/attached_assets/1_1773266909528.png": { width: 540, height: 960, type: "image/png" },
  "/images/news/judicial-supervisor.jpg": { width: 1536, height: 1024, type: "image/png" },
  "/images/news/shareholder-update-portal.jpg": { width: 1280, height: 720, type: "image/png" },
};

export function articleImagePaths(article: NewsItem) {
  const embedded = [article.contentHtml, article.contentHtmlAr].flatMap((html) =>
    Array.from((html || "").matchAll(/<img\b[^>]*\bsrc\s*=\s*["']([^"']+)["']/gi)).map((m) => m[1]),
  );
  return Array.from(new Set([article.image, ...(article.gallery || []).map((p) => p.src), ...embedded].filter((p): p is string => !!p)));
}

export function articleMetadata(article: NewsItem, language: "en" | "ar" = "en") {
  const headline = language === "ar" ? article.titleAr || article.title : article.title;
  const description = (language === "ar" ? article.excerptAr || article.excerpt : article.excerpt) || headline;
  const url = newsUrl(article.slug);
  const hero = article.gallery?.find((p) => p.src === article.image);
  return {
    title: `${headline} | Makamin News`,
    headline,
    description,
    url,
    image: article.image ? publicImageUrl(article.image) : undefined,
    imageAlt: language === "ar" ? hero?.altAr || headline : hero?.alt || headline,
    schema: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline,
      description,
      datePublished: article.date,
      mainEntityOfPage: url,
      url,
      inLanguage: language,
      publisher: {
        "@type": "Organization",
        name: "Makamin Saudi Holding Company for Oil & Gas Services",
        url: NEWS_BASE,
      },
      image: articleImagePaths(article).map(publicImageUrl),
    },
  };
}

export function indexMetadata(language: "en" | "ar" = "en") {
  const headline = language === "ar" ? "أخبار مكامن" : "Makamin News";
  const description = language === "ar"
    ? "آخر الأخبار والتطورات في شركة مكامن السعودية القابضة"
    : "Latest news and developments from Makamin Saudi Holding";
  return {
    title: `${headline} | Makamin Saudi Holding`,
    headline, description, url: newsUrl(),
    schema: { "@context": "https://schema.org", "@type": "CollectionPage", name: headline, url: newsUrl(), inLanguage: language },
  };
}
