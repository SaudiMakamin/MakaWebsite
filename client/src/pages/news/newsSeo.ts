import type { NewsItem } from "./newsData";

export const NEWS_BASE = "https://www.makamin.com.sa";
export const newsUrl = (slug?: string) =>
  `${NEWS_BASE}/news${slug ? `/${encodeURIComponent(slug)}` : ""}`;
export type NewsLanguage = "en" | "ar";
export const BOARD_RESOLUTION_NEWS_SLUG = "makamin-board-resolution-management-rights-2025-04-08";
export const JAYA_PEARL_NEWS_SLUG = "makamin-pearl-vessel-investment-review-2026-06-13";
export const BILINGUAL_NEWS_SLUGS = new Set([
  BOARD_RESOLUTION_NEWS_SLUG,
  JAYA_PEARL_NEWS_SLUG,
]);
export const isBilingualNewsArticle = (slug: string) => BILINGUAL_NEWS_SLUGS.has(slug);
export const localizedNewsUrl = (language: NewsLanguage, slug: string) =>
  `${NEWS_BASE}/${language}/news/${encodeURIComponent(slug)}`;
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
  "/images/news/makamin-board-meeting-al-khobar-2026-10-04-hero.png": { width: 960, height: 540, type: "image/png" },
  "/images/news/makamin-board-meeting-al-khobar-2026-10-04-inside.png": { width: 1080, height: 1920, type: "image/png" },
  "/images/news/makamin-tuwaiq-employment-program-133-interviews-2026-11-hero.png": { width: 960, height: 540, type: "image/png" },
  "/images/news/makamin-tuwaiq-employment-program-2026-11-internal-01.png": { width: 960, height: 540, type: "image/png" },
  "/images/news/makamin-tuwaiq-employment-program-2026-11-internal-02.png": { width: 960, height: 540, type: "image/png" },
  "/images/news/makamin-tuwaiq-employment-program-2026-11-internal-03.png": { width: 960, height: 540, type: "image/png" },
  "/images/news/makamin-tuwaiq-employment-program-2026-11-internal-04.png": { width: 960, height: 540, type: "image/png" },
  "/images/news/makamin-adel-alnoob-board-resolution-2025-04-08.png": { width: 960, height: 540, type: "image/png" },
  "/images/news/makamin-pearl-vessel-investment-review-2026-06-13.png": { width: 960, height: 540, type: "image/png" },
};

export function articleImagePaths(article: NewsItem) {
  const embedded = [article.contentHtml, article.contentHtmlAr].flatMap((html) =>
    Array.from((html || "").matchAll(/<img\b[^>]*\bsrc\s*=\s*["']([^"']+)["']/gi)).map((m) => m[1]),
  );
  return Array.from(new Set([article.image, ...(article.gallery || []).map((p) => p.src), ...embedded].filter((p): p is string => !!p)));
}

export function articleMetadata(
  article: NewsItem,
  language: NewsLanguage = "en",
  canonicalUrl = newsUrl(article.slug),
  alternates?: { language: NewsLanguage; url: string }[],
) {
  const headline = language === "ar" ? article.titleAr || article.title : article.title;
  const description = (language === "ar" ? article.excerptAr || article.excerpt : article.excerpt) || headline;
  const url = canonicalUrl;
  const hero = article.gallery?.find((p) => p.src === article.image);
  return {
    title: `${headline} | Makamin News`,
    headline,
    description,
    url,
    image: article.image ? publicImageUrl(article.image) : undefined,
    imageAlt: language === "ar"
      ? hero?.altAr || article.imageAltAr || headline
      : hero?.alt || article.imageAlt || headline,
    alternates,
    schema: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline,
      description,
      ...(article.dateIsEventEndSortOnly ? {} : { datePublished: article.date }),
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

export function localizedArticleMetadata(article: NewsItem, language: NewsLanguage) {
  return articleMetadata(
    article,
    language,
    localizedNewsUrl(language, article.slug),
    (["ar", "en"] as NewsLanguage[]).map((alternateLanguage) => ({
      language: alternateLanguage,
      url: localizedNewsUrl(alternateLanguage, article.slug),
    })),
  );
}

export function indexMetadata(language: "en" | "ar" = "en", featuredArticle?: NewsItem) {
  const headline = language === "ar" ? "أخبار مكامن" : "Makamin News";
  const description = language === "ar"
    ? "آخر الأخبار والتطورات في شركة مكامن السعودية القابضة"
    : "Latest news and developments from Makamin Saudi Holding";
  const featuredPhoto = featuredArticle?.gallery?.find((photo) => photo.src === featuredArticle.image);
  return {
    title: `${headline} | Makamin Saudi Holding`,
    headline, description, url: newsUrl(),
    image: featuredArticle?.image ? publicImageUrl(featuredArticle.image) : undefined,
    imageAlt: language === "ar"
      ? featuredPhoto?.altAr || featuredArticle?.titleAr || featuredArticle?.title
      : featuredPhoto?.alt || featuredArticle?.title,
    schema: { "@context": "https://schema.org", "@type": "CollectionPage", name: headline, url: newsUrl(), inLanguage: language },
  };
}
