import news from "../../content/news.json";

export type NewsItem = {
  slug: string;
  title: string;
  titleAr?: string;
  date: string;
  category?: string;
  categoryAr?: string;
  excerpt?: string;
  excerptAr?: string;
  image?: string;
  gallery?: NewsPhoto[];
  contentHtml?: string;
  contentHtmlAr?: string;
};

export type NewsPhoto = {
  id: string;
  src: string;
  alt: string;
  altAr: string;
  caption: string;
  captionAr: string;
};

export const allNews = (news as NewsItem[])
  .slice()
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getNewsBySlug(slug: string) {
  return allNews.find(n => n.slug === slug);
}
