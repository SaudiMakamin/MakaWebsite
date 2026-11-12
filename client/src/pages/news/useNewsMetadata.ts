import { useEffect } from "react";
import { upsertJsonLd, upsertLinkTag, upsertMetaTag } from "../../lib/seo";

type NewsMetadata = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  schema?: object;
};

// News owns this subset only. Restore the previous head when leaving news.
const owned = [
  'meta[name="description"]', 'meta[name="author"]',
  'meta[name="robots"]', 'meta[name="googlebot"]', 'meta[name="bingbot"]',
  'meta[property^="og:"]', 'meta[property^="article:"]', 'meta[name^="twitter:"]',
  'link[rel="canonical"]', 'link[hreflang]',
  'script[data-id="news-article"]', 'script[data-id="news-index"]',
].join(",");

export function useNewsMetadata(metadata: NewsMetadata, language: "en" | "ar", article: boolean, missing = false) {
  // Stable primitive dependency includes language and the full active schema.
  const serialized = JSON.stringify(metadata);
  useEffect(() => {
    const data = JSON.parse(serialized) as NewsMetadata;
    const previousTitle = document.title;
    const previousLang = document.documentElement.lang;
    const previousDir = document.documentElement.dir;
    const previous = Array.from(document.head.querySelectorAll(owned))
      .filter((el) => !el.matches('script[data-id="news-article"],script[data-id="news-index"]'))
      .map((el) => el.cloneNode(true));
    const clear = () => document.head.querySelectorAll(owned).forEach((el) => el.remove());
    clear();
    document.title = data.title;
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    const meta = (key: string, content: string, property = false) =>
      upsertMetaTag(`meta[${property ? "property" : "name"}="${key}"]`, { [property ? "property" : "name"]: key, content });
    meta("description", data.description);
    for (const bot of ["robots", "googlebot", "bingbot"]) {
      meta(bot, missing ? "noindex, follow" : "index, follow, max-image-preview:large");
    }
    if (data.url) {
      upsertLinkTag('link[rel="canonical"]', { rel: "canonical", href: data.url });
      meta("og:url", data.url, true);
    }
    meta("og:type", article ? "article" : "website", true);
    meta("og:title", data.title, true);
    meta("og:description", data.description, true);
    meta("og:site_name", "Makamin Saudi Holding", true);
    meta("og:locale", language === "ar" ? "ar_SA" : "en_US", true);
    meta("twitter:card", data.image ? "summary_large_image" : "summary");
    meta("twitter:title", data.title);
    meta("twitter:description", data.description);
    if (data.image) {
      meta("og:image", data.image, true);
      meta("twitter:image", data.image);
      if (data.imageAlt) {
        meta("og:image:alt", data.imageAlt, true);
        meta("twitter:image:alt", data.imageAlt);
      }
    }
    if (data.schema) upsertJsonLd(article ? "news-article" : "news-index", data.schema);
    return () => {
      clear();
      previous.forEach((el) => document.head.appendChild(el));
      document.title = previousTitle;
      document.documentElement.lang = previousLang;
      document.documentElement.dir = previousDir;
    };
  }, [serialized, language, article, missing]);
}
