import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, User, Clock, Share2, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguageContext } from "@/components/language-provider";
import { useToast } from "@/hooks/use-toast";
import { getNewsBySlug, allNews } from "./newsData";
import { Link, useParams } from "wouter";
import { articleMetadata, newsImageDetails } from "./newsSeo";
import { useNewsMetadata } from "./useNewsMetadata";

export default function NewsArticlePage() {
  const { language } = useLanguageContext();
  const params = useParams<{ slug: string }>();
  const article = getNewsBySlug(params.slug || "");
  const { toast } = useToast();
  const [manualShareFallback, setManualShareFallback] = useState<{ slug: string; url: string } | null>(null);

  useNewsMetadata(
    article ? articleMetadata(article, language) : {
      title: `${language === "ar" ? "المقال غير موجود" : "Article Not Found"} | Makamin News`,
      description: language === "ar" ? "عذراً، لم يتم العثور على المقال المطلوب." : "Sorry, the requested article could not be found.",
    },
    language, !!article, !article,
  );

  useEffect(() => {
    const scrollToPhoto = () => {
      const rawId = window.location.hash.slice(1);
      if (!rawId) return;

      let id: string;
      try {
        id = decodeURIComponent(rawId);
      } catch {
        return;
      }

      document.getElementById(id)?.scrollIntoView({ block: "start" });
    };

    const frame = window.requestAnimationFrame(scrollToPhoto);
    window.addEventListener("hashchange", scrollToPhoto);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", scrollToPhoto);
    };
  }, [article?.slug]);

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

  const canonicalArticleUrl = `https://www.makamin.com.sa/news/${encodeURIComponent(article.slug)}`;
  const photos = article.gallery || [];
  const heroPhoto = photos.find((photo) => photo.id === "photo-group");
  const galleryPhotos = photos.filter((photo) => photo.id !== "photo-group");

  const html = DOMPurify.sanitize(
    language === "ar"
      ? article.contentHtmlAr || article.contentHtml || ""
      : article.contentHtml || ""
  );

  const related = allNews
    .filter((n) => n.slug !== article.slug && n.category === article.category)
    .slice(0, 3);

  const handleShareArticle = async () => {
    const title = language === "ar" ? article.titleAr || article.title : article.title;
    const url = new URL(
      `/news/${encodeURIComponent(article.slug)}`,
      "https://www.makamin.com.sa",
    ).href;

    setManualShareFallback(null);

    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, url });
        toast({
          title: language === "ar" ? "تمت مشاركة المقال" : "Article shared",
        });
        return;
      } catch (error) {
        if (
          typeof error === "object" &&
          error !== null &&
          "name" in error &&
          error.name === "AbortError"
        ) {
          return;
        }
      }
    }

    try {
      if (typeof navigator.clipboard?.writeText !== "function") {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(url);
      toast({
        title: language === "ar" ? "تم نسخ رابط المقال" : "Article link copied",
      });
    } catch {
      setManualShareFallback({ slug: article.slug, url });
      toast({
        title: language === "ar" ? "تعذر نسخ الرابط" : "Unable to copy the link",
        description:
          language === "ar"
            ? "حدد رابط المقال أدناه وانسخه يدويًا."
            : "Select and copy the article URL below.",
        variant: "destructive",
      });
    }
  };

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
              <figure id={heroPhoto?.id || "photo-group"} className="scroll-mt-24">
                <a
                  href={article.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    language === "ar"
                      ? `فتح الصورة بالحجم الكامل: ${heroPhoto?.captionAr || article.titleAr || article.title}`
                      : `Open full-size photo: ${heroPhoto?.caption || article.title}`
                  }
                >
                  <img
                    src={article.image}
                    alt={
                      language === "ar"
                        ? heroPhoto?.altAr || article.titleAr || article.title
                        : heroPhoto?.alt || article.title
                    }
                    width={newsImageDetails[article.image]?.width}
                    height={newsImageDetails[article.image]?.height}
                    className="mx-auto block w-full max-w-[560px] h-auto rounded-xl border border-slate-700"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                {heroPhoto && (
                  <figcaption
                    dir={language === "ar" ? "rtl" : "ltr"}
                    className="mt-3 text-sm text-slate-300"
                  >
                    <p>{language === "ar" ? heroPhoto.captionAr : heroPhoto.caption}</p>
                    <Button asChild variant="ghost" size="icon" className="mt-2 text-[#c5a66e]">
                      <a
                        href={`${canonicalArticleUrl}#${heroPhoto.id}`}
                        aria-label={language === "ar" ? `رابط مشاركة الصورة: ${heroPhoto.captionAr}` : `Share photo: ${heroPhoto.caption}`}
                        title={language === "ar" ? "نسخ أو مشاركة رابط الصورة من قائمة الرابط" : "Copy or share photo link from the link menu"}
                      >
                        <Share2 className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  </figcaption>
                )}
              </figure>
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

                {galleryPhotos.length > 0 && (
                  <section
                    aria-labelledby="meeting-photos-heading"
                    dir={language === "ar" ? "rtl" : "ltr"}
                    className="mt-12"
                  >
                    <h2
                      id="meeting-photos-heading"
                      className="mb-6 text-2xl font-bold text-white"
                    >
                      {language === "ar" ? "صور من الاجتماع" : "Photos from the meeting"}
                    </h2>
                    <div className={`grid grid-cols-1 gap-6 ${galleryPhotos.length > 1 ? "md:grid-cols-2" : ""}`}>
                      {galleryPhotos.map((photo) => {
                        const caption =
                          language === "ar" ? photo.captionAr : photo.caption;

                        return (
                          <figure
                            key={photo.id}
                            id={photo.id}
                            className="scroll-mt-24 min-w-0"
                          >
                            <a
                              href={photo.src}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={
                                language === "ar"
                                  ? `فتح الصورة بالحجم الكامل: ${caption}`
                                  : `Open full-size photo: ${caption}`
                              }
                            >
                              <img
                                src={photo.src}
                                alt={language === "ar" ? photo.altAr : photo.alt}
                                width={photo.id === "photo-meeting-composite" ? 1080 : 1200}
                                height={photo.id === "photo-meeting-composite" ? 1920 : 1600}
                                className="block h-auto w-full rounded-lg border border-slate-700"
                                loading="lazy"
                                decoding="async"
                              />
                            </a>
                            <figcaption className="mt-3 text-sm text-slate-300">
                              <p>{caption}</p>
                              <Button asChild variant="ghost" size="icon" className="mt-2 text-[#c5a66e]">
                                <a
                                  href={`${canonicalArticleUrl}#${photo.id}`}
                                  aria-label={language === "ar" ? `رابط مشاركة الصورة: ${caption}` : `Share photo: ${caption}`}
                                  title={language === "ar" ? "نسخ أو مشاركة رابط الصورة من قائمة الرابط" : "Copy or share photo link from the link menu"}
                                >
                                  <Share2 className="h-4 w-4" aria-hidden="true" />
                                </a>
                              </Button>
                            </figcaption>
                          </figure>
                        );
                      })}
                    </div>
                  </section>
                )}

                <div className="mt-16 pt-8 border-t border-slate-700">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="text-sm text-slate-400">
                      {language === "ar"
                        ? `نُشر في ${formatDate(article.date)}`
                        : `Published on ${formatDate(article.date)}`}
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="border-slate-600 text-slate-300"
                      onClick={handleShareArticle}
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      {language === "ar" ? "مشاركة المقال" : "Share Article"}
                    </Button>
                  </div>
                  {manualShareFallback?.slug === article.slug && (
                    <div
                      className="mt-4 space-y-2"
                      dir={language === "ar" ? "rtl" : "ltr"}
                    >
                      <p className="text-sm text-slate-400">
                        {language === "ar"
                          ? "انسخ رابط المقال يدويًا:"
                          : "Copy the article link manually:"}
                      </p>
                      <Input
                        type="url"
                        readOnly
                        value={manualShareFallback.url}
                        aria-label={language === "ar" ? "رابط المقال" : "Article URL"}
                        onFocus={(event) => event.currentTarget.select()}
                        dir="ltr"
                        className="text-left"
                      />
                    </div>
                  )}
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
