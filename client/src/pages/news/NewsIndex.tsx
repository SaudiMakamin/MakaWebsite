import { motion } from "framer-motion";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguageContext } from "@/components/language-provider";
import { allNews } from "./newsData";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { upsertLinkTag, upsertMetaTag, upsertJsonLd } from "../../lib/seo";

export default function NewsIndex() {
  const { language } = useLanguageContext();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const base = "https://www.makamin.com.sa";
    const url = `${base}/news`;

    document.title = "Makamin News | Makamin Saudi Holding";

    upsertMetaTag('meta[name="description"]', {
      name: "description",
      content: "Latest news and corporate governance announcements from Makamin Saudi Holding Company for Oil & Gas Services."
    });

    upsertLinkTag('link[rel="canonical"]', { rel: "canonical", href: url });

    upsertMetaTag('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMetaTag('meta[property="og:title"]', { property: "og:title", content: "Makamin News" });
    upsertMetaTag('meta[property="og:description"]', {
      property: "og:description",
      content: "Latest news and corporate governance announcements from Makamin Saudi Holding."
    });
    upsertMetaTag('meta[property="og:url"]', { property: "og:url", content: url });

    upsertMetaTag('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMetaTag('meta[name="twitter:title"]', { name: "twitter:title", content: "Makamin News" });
    upsertMetaTag('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: "Latest news and corporate governance announcements from Makamin Saudi Holding."
    });

    upsertMetaTag('meta[property="og:image"]', {
      property: "og:image",
      content: "https://makamin.com.sa/og-image.jpg"
    });
    upsertMetaTag('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: "https://makamin.com.sa/og-image.jpg"
    });

    upsertJsonLd("news-index", {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Makamin News",
      url
    });
  }, []);

  const filtered = allNews.filter((n) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      n.title.toLowerCase().includes(q) ||
      (n.titleAr && n.titleAr.includes(q)) ||
      (n.category && n.category.toLowerCase().includes(q)) ||
      (n.categoryAr && n.categoryAr.includes(q))
    );
  });

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return language === "ar"
      ? d.toLocaleDateString("ar-SA", { year: "numeric", month: "long", day: "numeric" })
      : d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <section className="py-20 border-b border-slate-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Badge className="mb-6 bg-[#c5a66e]/20 text-[#c5a66e] border-[#c5a66e]/30 px-4 py-2">
              {language === "ar" ? "مركز الأخبار" : "News Center"}
            </Badge>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {language === "ar" ? "أخبار مكامن" : "Makamin News"}
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {language === "ar"
                ? "آخر الأخبار والتطورات في شركة مكامن السعودية القابضة"
                : "Latest news and developments from Makamin Saudi Holding"}
            </p>
          </motion.div>

          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              placeholder={language === "ar" ? "بحث في الأخبار..." : "Search news..."}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-slate-800/60 border-slate-600 text-white placeholder:text-slate-400"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">
                {language === "ar" ? "لا توجد نتائج" : "No results found"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/news/${item.slug}`}>
                    <Card className="bg-slate-800/50 border-slate-700 hover:border-[#c5a66e]/50 transition-all duration-300 cursor-pointer group h-full overflow-hidden">
                      {item.image && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={item.image}
                            alt={language === "ar" ? item.titleAr || item.title : item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-[#c5a66e] text-white text-xs">
                              {language === "ar" ? item.categoryAr || item.category : item.category}
                            </Badge>
                          </div>
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-slate-400 mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(item.date)}
                        </div>
                        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#c5a66e] transition-colors line-clamp-2">
                          {language === "ar" ? item.titleAr || item.title : item.title}
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
                          {language === "ar" ? item.excerptAr || item.excerpt : item.excerpt}
                        </p>
                        <span className="text-[#c5a66e] text-sm font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                          {language === "ar" ? "اقرأ المزيد" : "Read More"}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
