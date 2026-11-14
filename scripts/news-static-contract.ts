import type { NewsItem } from "../client/src/pages/news/newsData";

type VercelConfig = {
  routes?: Array<{ src?: string; dest?: string }>;
};

export function assertNewsRouteSlugs(news: NewsItem[], config: VercelConfig) {
  const routes = config.routes?.filter((item) => item.dest === "/news/$1/index.html") || [];
  if (routes.length !== 1 || typeof routes[0].src !== "string" ||
      !/^\^\/news\/\([a-z0-9|-]+\)\/\?\$$/.test(routes[0].src)) {
    throw new Error("Vercel must define one explicit static route for News article slugs.");
  }

  const routeSlugs = routes[0].src.match(/^\^\/news\/\(([^)]+)\)\/\?\$$/)?.[1].split("|");
  if (!routeSlugs || new Set(routeSlugs).size !== routeSlugs.length) {
    throw new Error("Vercel News article route must contain unique, explicit slugs.");
  }

  const articleSlugs = news.map((article) => article.slug);
  const sortedRouteSlugs = [...routeSlugs].sort();
  const sortedArticleSlugs = [...articleSlugs].sort();
  if (JSON.stringify(sortedRouteSlugs) !== JSON.stringify(sortedArticleSlugs)) {
    throw new Error(
      `Vercel News article routes do not match the ${articleSlugs.length} records in the News source data.`,
    );
  }
}
