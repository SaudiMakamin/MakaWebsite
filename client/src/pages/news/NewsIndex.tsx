import { motion } from "framer-motion";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguageContext } from "@/components/language-provider";
import { allNews } from "./newsData";
import { Link } from "wouter";
import { useState } from "react";
import { indexMetadata, newsImageDetails } from "./newsSeo";
import { useNewsMetadata } from "./useNewsMetadata";

export default function NewsIndex() {
  const { language } = useLanguageContext();
  const [search, setSearch] = useState("");

  useNewsMetadata(indexMetadata(language), language, false);

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
    <div
      lang={language}
      dir={language === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <section className="py-12 sm:py-14 border-b border-slate-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-10"
          >
            <Badge className="mb-4 bg-[#c5a66e]/20 text-[#c5a66e] border-[#c5a66e]/30 px-4 py-2">
              {language === "ar" ? "مركز الأخبار" : "News Center"}
            </Badge>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              {language === "ar" ? "أخبار مكامن" : "Makamin News"}
            </h1>
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto">
              {language === "ar"
                ? "آخر الأخبار والتطورات في شركة مكامن السعودية القابضة"
                : "Latest news and developments from Makamin Saudi Holding"}
            </p>
          </motion.div>

          <div className="max-w-xl mx-auto relative" dir={language === "ar" ? "rtl" : "ltr"}>
            <Search
              aria-hidden="true"
              className={`absolute ${language === "ar" ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400`}
            />
            <Input
              aria-label={language === "ar" ? "بحث في الأخبار" : "Search news"}
              dir={language === "ar" ? "rtl" : "ltr"}
              placeholder={language === "ar" ? "بحث في الأخبار..." : "Search news..."}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full h-12 ${language === "ar" ? "!pr-10 !pl-4 text-right" : "pl-10 pr-4 text-left"} bg-slate-800/60 border-slate-600 text-white placeholder:text-slate-400`}
            />
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">
                {language === "ar" ? "لا توجد نتائج" : "No results found"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/news/${item.slug}`}
                    className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a66e] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  >
                    <Card className="bg-slate-800/50 border-slate-700 hover:border-[#c5a66e]/50 transition-colors duration-300 cursor-pointer group flex h-full !flex-col overflow-hidden rounded-xl">
                      <div className="h-44 sm:h-48 bg-slate-900/50 overflow-hidden">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={language === "ar" ? item.titleAr || item.title : item.title}
                            width={newsImageDetails[item.image]?.width}
                            height={newsImageDetails[item.image]?.height}
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <div
                            aria-hidden="true"
                            className="h-full w-full bg-gradient-to-br from-slate-800 via-slate-700/40 to-slate-900"
                          />
                        )}
                      </div>
                      <CardContent className="flex flex-1 !flex-col p-5 sm:p-6">
                        <Badge className="mb-3 self-start border border-[#c5a66e]/30 bg-[#c5a66e]/15 text-[#c5a66e] text-xs">
                          {language === "ar" ? item.categoryAr || item.category : item.category}
                        </Badge>
                        <div
                          className="mb-3 flex !flex-row items-center gap-2 text-sm text-slate-400"
                          dir={language === "ar" ? "rtl" : "ltr"}
                        >
                          <Calendar aria-hidden="true" className="h-4 w-4 shrink-0" />
                          <time dateTime={item.date}>{formatDate(item.date)}</time>
                        </div>
                        <h2 className="mb-3 min-w-0 break-words text-lg font-bold leading-snug text-white transition-colors group-hover:text-[#c5a66e] sm:text-xl">
                          {language === "ar" ? item.titleAr || item.title : item.title}
                        </h2>
                        <p className="mb-5 min-w-0 break-words text-sm leading-relaxed text-slate-400 line-clamp-3">
                          {language === "ar" ? item.excerptAr || item.excerpt : item.excerpt}
                        </p>
                        <span
                          className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[#c5a66e] transition-all group-hover:gap-2"
                          dir={language === "ar" ? "rtl" : "ltr"}
                        >
                          {language === "ar" ? "اقرأ المزيد" : "Read More"}
                          <ArrowRight
                            aria-hidden="true"
                            className={`h-4 w-4 ${language === "ar" ? "rotate-180" : ""}`}
                          />
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
