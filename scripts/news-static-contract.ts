import type { NewsItem } from "../client/src/pages/news/newsData";

type VercelConfig = {
  routes?: Array<{ src?: string; dest?: string; check?: boolean; status?: number }>;
};

export function assertNewsRouteContract(news: NewsItem[], config: VercelConfig) {
  const routes = config.routes || [];
  const articleRoutes = routes
    .map((route, index) => ({ route, index }))
    .filter(({ route }) => route.dest === "/news/$1/index.html");
  if (articleRoutes.length !== 1) {
    throw new Error("Vercel must define one dynamic static route for News article slugs.");
  }

  const { route: articleRoute, index: articleRouteIndex } = articleRoutes[0];
  if (articleRoute.src !== "^/news/([a-z0-9-]+)/?$" || articleRoute.check !== true) {
    throw new Error("Vercel News article route must dynamically match one slug and check for its generated file.");
  }

  const notFoundRouteIndex = routes.findIndex((route) =>
    route.src === "^/news(?:/.*)?$" && route.dest === "/news/not-found.html" && route.status === 404);
  if (notFoundRouteIndex <= articleRouteIndex) {
    throw new Error("Vercel must send missing News article files to the News not-found page.");
  }

  const matcher = new RegExp(articleRoute.src);
  for (const { slug } of news) {
    if (!matcher.test(`/news/${slug}`) || !matcher.test(`/news/${slug}/`)) {
      throw new Error(`Vercel dynamic News route does not match article slug ${slug}.`);
    }
  }
}
