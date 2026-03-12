import { useEffect } from "react";
import DOMPurify from "dompurify";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, User, Clock, Share2, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageContext } from "@/components/language-provider";
import { getNewsBySlug, allNews } from "./newsData";
import { Link, useParams } from "wouter";
import { upsertLinkTag, upsertMetaTag, upsertJsonLd, removeTag } from "../../lib/seo";

export default function NewsArticlePage() {
  const { language } = useLanguageContext();
  const params = useParams<{ slug: string }>();
  const article = getNewsBySlug(params.slug || "");

  useEffect(() => {
    if (!article) return;

    const base = "https://www.makamin.com.sa";
    const url = `${base}/news/${article.slug}`;

    const title = `${article.title} | Makamin News`;
    const description = (article.excerpt || "Makamin News update.").slice(0, 180);

    document.title = title;

    upsertMetaTag('meta[name="description"]', {
      name: "description",
      content: description
    });

    upsertLinkTag('link[rel="canonical"]', { rel: "canonical", href: url });

    upsertMetaTag('meta[property="og:type"]', { property: "og:type", content: "article" });
    upsertMetaTag('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMetaTag('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMetaTag('meta[property="og:url"]', { property: "og:url", content: url });

    upsertMetaTag('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMetaTag('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMetaTag('meta[name="twitter:description"]', { name: "twitter:description", content: description });

    if (article.image) {
      upsertMetaTag('meta[property="og:image"]', { property: "og:image", content: `${base}${article.image}` });
      upsertMetaTag('meta[name="twitter:image"]', { name: "twitter:image", content: `${base}${article.image}` });
    } else {
      removeTag('meta[property="og:image"]');
      removeTag('meta[name="twitter:image"]');
    }

    upsertJsonLd("news-article", {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: article.title,
      datePublished: article.date,
      dateModified: article.date,
      mainEntityOfPage: url,
      url,
      publisher: {
        "@type": "Organization",
        name: "Makamin Saudi Holding Company for Oil & Gas Services"
      },
      ...(article.image ? { image: [`${base}${article.image}`] } : {})
    });
  }, [article]);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return language === "ar"
      ? d.toLocaleDateString("ar-SA", { year: "numeric", month: "long", day: "numeric" })
      : d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            {language === "ar" ? "المقال غير موجود" : "Article Not Found"}
          </h1>
          <p className="text-slate-400 mb-8">
            {language === "ar"
              ? "عذراً، لم يتم العثور على المقال المطلوب."
              : "Sorry, the requested article could not be found."}
          </p>
          <Link href="/news">
            <Button className="bg-[#c5a66e] hover:bg-[#b8956b] text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === "ar" ? "العودة إلى الأخبار" : "Back to News"}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const html = DOMPurify.sanitize(
    language === "ar"
      ? article.contentHtmlAr || article.contentHtml || ""
      : article.contentHtml || ""
  );

  const related = allNews
    .filter((n) => n.slug !== article.slug && n.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <section className="py-16 border-b border-slate-700">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/news">
              <Button variant="ghost" className="text-slate-400 hover:text-white mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === "ar" ? "العودة إلى الأخبار" : "Back to News"}
              </Button>
            </Link>

            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <Badge className="bg-[#c5a66e] text-white px-3 py-1">
                {language === "ar" ? article.categoryAr || article.category : article.category}
              </Badge>
              <span className="text-slate-400 text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(article.date)}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              {language === "ar" ? article.titleAr || article.title : article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {article.image && (
        <section className="py-8">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={article.image}
                alt={language === "ar" ? article.titleAr || article.title : article.title}
                className="w-full h-auto max-h-[500px] object-cover rounded-xl border border-slate-700"
              />
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-8 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-slate-800/30 border-slate-700">
              <CardContent className="p-8 lg:p-12">
                <div
                  className="prose prose-lg prose-invert max-w-none
                    prose-headings:text-white prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                    prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-[#c5a66e] prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-white"
                  dir={language === "ar" ? "rtl" : "ltr"}
                  dangerouslySetInnerHTML={{ __html: html }}
                />

                <div className="mt-16 pt-8 border-t border-slate-700">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="text-sm text-slate-400">
                      {language === "ar"
                        ? `نُشر في ${formatDate(article.date)}`
                        : `Published on ${formatDate(article.date)}`}
                    </div>
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                      <Share2 className="w-4 h-4 mr-2" />
                      {language === "ar" ? "مشاركة المقال" : "Share Article"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-bold text-white mb-8">
              {language === "ar" ? "مقالات ذات صلة" : "Related Articles"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/news/${r.slug}`}>
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-[#c5a66e]/50 transition-all cursor-pointer group h-full">
                    <CardContent className="p-5">
                      <div className="text-xs text-slate-400 mb-2 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(r.date)}
                      </div>
                      <h3 className="text-white font-semibold group-hover:text-[#c5a66e] transition-colors line-clamp-2">
                        {language === "ar" ? r.titleAr || r.title : r.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
