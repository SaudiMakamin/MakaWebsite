import fs from "node:fs/promises";
import path from "node:path";
import { articleMetadata, articleImagePaths, indexMetadata, NEWS_BASE, newsUrl, newsImageDetails, publicImageUrl } from "../client/src/pages/news/newsSeo";
import type { NewsItem, NewsPhoto } from "../client/src/pages/news/newsData";

const root = process.cwd();
const output = path.join(root, "dist/public");
const source = await fs.readFile(path.join(root, "client/src/content/news.json"), "utf8");
if (source !== await fs.readFile(path.join(root, "content/news.json"), "utf8")) {
  throw new Error("News JSON sources differ; refusing to publish inconsistent content.");
}
const parsed: unknown = JSON.parse(source);
if (!Array.isArray(parsed) || parsed.length === 0) {
  throw new Error("News data must be a nonempty array.");
}
const nonemptyString = (value: unknown) => typeof value === "string" && value.trim().length > 0;
const optionalStrings = ["titleAr", "category", "categoryAr", "excerpt", "excerptAr", "image", "contentHtml", "contentHtmlAr"] as const;
const news = parsed.map((value, index) => {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`News record ${index + 1} must be an object.`);
  }
  const article = value as Record<string, unknown>;
  for (const field of ["slug", "title", "date"] as const) {
    if (!nonemptyString(article[field])) throw new Error(`News record ${index + 1} requires a nonempty ${field}.`);
  }
  if (!/^[a-z0-9-]+$/.test(article.slug as string)) {
    throw new Error(`Invalid article slug: ${String(article.slug)}`);
  }
  const date = article.date as string;
  const parsedDate = new Date(`${date}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(parsedDate.getTime()) || parsedDate.toISOString().slice(0, 10) !== date) {
    throw new Error(`Invalid article date for ${article.slug}: ${date}`);
  }
  for (const field of optionalStrings) {
    if (article[field] !== undefined && typeof article[field] !== "string") {
      throw new Error(`Invalid ${field} for ${article.slug}; expected a string when provided.`);
    }
  }
  if (article.gallery !== undefined) {
    if (!Array.isArray(article.gallery)) throw new Error(`Invalid gallery for ${article.slug}; expected an array.`);
    for (const [photoIndex, photo] of article.gallery.entries()) {
      if (!photo || typeof photo !== "object" || Array.isArray(photo)) {
        throw new Error(`Invalid gallery photo ${photoIndex + 1} for ${article.slug}.`);
      }
      for (const field of ["id", "src", "alt", "altAr", "caption", "captionAr"] as const) {
        if (!nonemptyString((photo as Record<string, unknown>)[field])) {
          throw new Error(`Gallery photo ${photoIndex + 1} for ${article.slug} requires ${field}.`);
        }
      }
    }
  }
  return article as unknown as NewsItem;
}).sort((a, b) => b.date.localeCompare(a.date));
const slugs = news.map((article) => article.slug);
if (new Set(slugs).size !== slugs.length) throw new Error("News article slugs must be unique.");
const config = JSON.parse(await fs.readFile(path.join(root, "vercel.json"), "utf8"));
const articleRoute = config.routes?.find((route: { src?: string; dest?: string }) =>
  route.src === "^/news/([a-z0-9-]+)/?$" && route.dest === "/news/$1/index.html");
if (!articleRoute) throw new Error("Vercel must route valid News slugs to their generated static index.html.");
for (const article of news) {
  for (const html of [article.contentHtml, article.contentHtmlAr]) {
    if (/<\s*(script|iframe|object|embed)\b|\bon\w+\s*=|javascript:/i.test(html || "")) {
      throw new Error(`Unsafe article markup in ${article.slug}; editorial review required.`);
    }
  }
}
const verifiedImages = new Map<string, Buffer>();
for (const src of new Set(news.flatMap(articleImagePaths))) {
  if (!/^\/(?:images|attached_assets)\/[^?#]+$/.test(src) || src.includes("..") || src.includes("\\")) {
    throw new Error(`Unsupported news image: ${src}`);
  }
  const input = path.join(root, src.startsWith("/attached_assets/") ? src.slice(1) : `client/public${src}`);
  const bytes = await fs.readFile(input);
  if (bytes.length < 8 || !(bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10])) || (bytes[0] === 255 && bytes[1] === 216))) {
    throw new Error(`News asset is not a PNG/JPEG image: ${src}`);
  }
  verifiedImages.set(src, bytes);
}

const esc = (value: string) => value.replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c]!);
const jsonLd = (value: object) => JSON.stringify(value).replace(/</g, "\\u003c");
const shell = await fs.readFile(path.join(output, "index.html"), "utf8");
if (!/<div id="root"><\/div>/.test(shell)) throw new Error("Unexpected Vite root markup; refusing to generate disconnected pages.");
const baseShell = shell
  .replace(/<meta\b[^>]*>/gi, (tag) =>
    /\b(?:name|property)=["'](?:description|author|robots|googlebot|bingbot|twitter:[^"']*|og:[^"']*|article:[^"']*)["']/i.test(tag) ? "" : tag)
  .replace(/<link\b[^>]*>/gi, (tag) => /\bhreflang=|\brel=["']canonical["']/i.test(tag) ? "" : tag)
  .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "");

type Metadata = { title: string; description: string; url?: string; image?: string; imageAlt?: string; schema?: object };
function documentHtml(meta: Metadata, body: string, article = false, missing = false) {
  const tag = (key: string, value: string, property = false) => `<meta ${property ? "property" : "name"}="${key}" content="${esc(value)}" />`;
  const head = [
    tag("description", meta.description),
    ...["robots", "googlebot", "bingbot"].map((bot) => tag(bot, missing ? "noindex, follow" : "index, follow, max-image-preview:large")),
    meta.url ? `<link rel="canonical" href="${esc(meta.url)}" />` : "",
    tag("og:type", article ? "article" : "website", true),
    tag("og:title", meta.title, true), tag("og:description", meta.description, true),
    tag("og:site_name", "Makamin Saudi Holding", true), tag("og:locale", "en_US", true),
    meta.url ? tag("og:url", meta.url, true) : "",
    tag("twitter:card", meta.image ? "summary_large_image" : "summary"),
    tag("twitter:title", meta.title), tag("twitter:description", meta.description),
    meta.image ? tag("og:image", meta.image, true) + tag("twitter:image", meta.image) : "",
    meta.imageAlt ? tag("og:image:alt", meta.imageAlt, true) + tag("twitter:image:alt", meta.imageAlt) : "",
    meta.schema ? `<script type="application/ld+json" data-id="${article ? "news-article" : "news-index"}">${jsonLd(meta.schema)}</script>` : "",
  ].join("\n");
  return baseShell.replace(/<html\b[^>]*>/i, '<html lang="en" dir="ltr">')
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(meta.title)}</title>`)
    .replace("</head>", `${head}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}
async function write(relative: string, value: string) {
  const file = path.join(output, relative);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, value);
}
function photoHtml(src: string, alt: string, photo?: NewsPhoto) {
  const dims = newsImageDetails[src];
  const dimensions = dims ? ` width="${dims.width}" height="${dims.height}"` : "";
  return `<figure${photo ? ` id="${esc(photo.id)}"` : ""} class="scroll-mt-24">
    <a href="${esc(publicImageUrl(src))}" target="_blank" rel="noopener noreferrer"><img src="${esc(publicImageUrl(src))}" alt="${esc(alt)}"${dimensions} class="mx-auto block w-full max-w-[560px] h-auto rounded-xl border border-slate-700" /></a>
    ${photo ? `<figcaption class="mt-3 text-sm text-slate-300">${esc(photo.caption)}</figcaption>` : ""}
  </figure>`;
}
for (const article of news) {
  const hero = article.gallery?.find((p) => p.id === "photo-group");
  const gallery = (article.gallery || []).filter((p) => p.id !== "photo-group");
  const body = (article.contentHtml || "").replace(/\bsrc=(["'])(\/[^"']+)\1/g, (_all, quote, src) => `src=${quote}${publicImageUrl(src)}${quote}`);
  const dateLabel = new Date(`${article.date}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  const content = `<main class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
    <article class="container mx-auto px-4 lg:px-8 max-w-4xl py-16">
      <a href="/news" class="text-slate-400">Back to News</a>
      <p class="mt-6 text-slate-400">${esc(article.category || "")} · <time datetime="${article.date}">${esc(dateLabel)}</time></p>
      <h1 class="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">${esc(article.title)}</h1>
      ${article.image ? photoHtml(article.image, hero?.alt || article.title, hero) : ""}
      <div class="prose prose-lg prose-invert max-w-none mt-8">${body}</div>
      ${gallery.length ? `<section aria-label="Photos from the meeting" class="mt-12"><h2 class="mb-6 text-2xl font-bold">Photos from the meeting</h2>${gallery.map((p) => photoHtml(p.src, p.alt, p)).join("")}</section>` : ""}
    </article></main>`;
  await write(`news/${article.slug}/index.html`, documentHtml(articleMetadata(article), content, true));
}
const index = indexMetadata();
// Reuse the header's existing Vite-built logo; do not copy or alter image bytes.
const logo = (await fs.readdir(path.join(output, "assets"))).find((name) =>
  /^logo mkamin_1752524503536-[^.]+\.png$/.test(name));
if (!logo) throw new Error("The existing corporate header logo is missing from the build.");
const primaryLinks = [
  ["/", "Home"], ["/about", "About"], ["/services", "Services"],
  ["/makamin-holding", "Group"], ["/projects", "Projects"], ["/news", "News"],
  ["/update-shareholder", "Shareholders"], ["/contact", "Contact"],
].map(([href, label]) => `<a href="${href}"${href === "/news" ? ' aria-current="page"' : ""}>${label}</a>`).join("");
// These styles live inside the fallback root and disappear when React mounts.
// Native links/details work without JS; the existing React search is not imitated.
const indexHeader = `<style>
  .news-static-header .news-static-nav{display:flex;align-items:center;gap:1rem}
  .news-static-header nav a{color:#4b5563;font-weight:500;white-space:nowrap}
  .news-static-header nav a:hover{color:#2563eb}
  .news-static-header nav a:focus-visible,.news-static-header summary:focus-visible{outline:2px solid #2563eb;outline-offset:4px}
  .news-static-header .news-static-menu{display:none}
  @media(max-width:767px){
    .news-static-header .news-static-nav{display:none}
    .news-static-header .news-static-menu{display:block}
    .news-static-header summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:center;width:40px;height:40px;border:1px solid #cbd5e1;border-radius:6px;background:#f8fafc;color:#334155}
    .news-static-header summary::-webkit-details-marker{display:none}
    .news-static-header .news-static-menu nav{position:absolute;top:100%;left:0;right:0;display:flex;flex-direction:column;gap:1rem;padding:1rem;background:white;border-bottom:1px solid #e2e8f0}
  }
</style>
<header class="news-static-header bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40" dir="ltr">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 sm:h-20">
      <a href="/" class="flex items-center gap-3">
        <img src="${esc(publicImageUrl(`/assets/${logo}`))}" alt="شعار مكامن السعودية القابضة" class="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
        <div class="flex flex-col">
          <span class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-left">Makamin</span>
          <span class="text-base sm:text-lg font-semibold text-gray-700 -mt-1 hidden sm:block">Saudi Holding</span>
        </div>
      </a>
      <nav class="news-static-nav" aria-label="Primary navigation">${primaryLinks}</nav>
      <div><details class="news-static-menu">
        <summary aria-label="Navigation menu"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg></summary>
        <nav aria-label="Mobile navigation">${primaryLinks}</nav>
      </details></div>
    </div>
  </div>
</header>`;
await write("news/index.html", documentHtml(index, `${indexHeader}
<main class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
  <section class="py-12 sm:py-14 border-b border-slate-700">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="text-center mb-8 sm:mb-10">
        <span class="inline-flex items-center rounded-full border text-xs font-semibold mb-4 bg-[#c5a66e]/20 text-[#c5a66e] border-[#c5a66e]/30 px-4 py-2">News Center</span>
        <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">${esc(index.headline)}</h1>
        <p class="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto">${esc(index.description)}</p>
      </div>
    </div>
  </section>
  <section class="py-10 sm:py-12"><div class="container mx-auto px-4 max-w-6xl">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">${news.map((n) => {
    const dimensions = n.image ? newsImageDetails[n.image] : undefined;
    const date = new Date(`${n.date}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
    const photo = n.image
      ? `<img src="${esc(publicImageUrl(n.image))}" alt="${esc(n.title)}"${dimensions ? ` width="${dimensions.width}" height="${dimensions.height}"` : ""} class="h-full w-full object-contain" loading="lazy" />`
      : '<div aria-hidden="true" class="h-full w-full bg-gradient-to-br from-slate-800 via-slate-700/40 to-slate-900"></div>';
    return `<article class="flex h-full flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50">
      <a href="/news/${n.slug}" class="flex h-full flex-col">
        <div class="h-44 sm:h-48 bg-slate-900/50 overflow-hidden">${photo}</div>
        <div class="flex flex-1 flex-col p-5 sm:p-6">
          <span class="mb-3 self-start rounded-full border border-[#c5a66e]/30 bg-[#c5a66e]/15 px-2.5 py-0.5 text-xs text-[#c5a66e]">${esc(n.category || "")}</span>
          <time class="mb-3 text-sm text-slate-400" datetime="${n.date}">${esc(date)}</time>
          <h2 class="mb-3 min-w-0 break-words text-lg font-bold leading-snug text-white sm:text-xl">${esc(n.title)}</h2>
          <p class="mb-5 min-w-0 break-words text-sm leading-relaxed text-slate-400 line-clamp-3">${esc(n.excerpt || "")}</p>
          <span class="mt-auto text-sm font-semibold text-[#c5a66e]">Read More</span>
        </div>
      </a>
    </article>`;
  }).join("")}</div>
  </div></section></main>`));
await write("news/not-found.html", documentHtml({ title: "Article Not Found | Makamin News", description: "Sorry, the requested article could not be found." },
  '<main><h1>Article Not Found</h1><p>Sorry, the requested article could not be found.</p><a href="/news">Back to News</a></main>', false, true));

// The existing Express sitemap remains the inventory of non-news entries.
const server = await fs.readFile(path.join(root, "server/routes.ts"), "utf8");
const staticList = server.match(/const staticPages = \[([\s\S]*?)\];/)?.[1];
const staticPaths = [...(staticList || "").matchAll(/`\$\{base\}([^`]*)`/g)].map((m) => m[1]);
if (!staticPaths.length) throw new Error("Cannot preserve the existing non-news sitemap inventory.");
const staticXml = staticPaths.map((p) => `<url><loc>${esc(NEWS_BASE + p)}</loc></url>`);
const articleXml = news.map((n) => `<url><loc>${esc(newsUrl(n.slug))}</loc>${articleImagePaths(n).map((p) =>
  `<image:image><image:loc>${esc(publicImageUrl(p))}</image:loc></image:image>`).join("")}</url>`);
await write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${[...staticXml, ...articleXml].join("\n")}</urlset>`);
// RSS pubDate requires a time, which the records do not provide. Dublin Core
// preserves the exact historical date without inventing midnight or republishing.
await write("rss.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom"><channel>
<title>Makamin News</title><link>${newsUrl()}</link><description>${esc(index.description)}</description><language>en</language>
<atom:link href="${NEWS_BASE}/rss.xml" rel="self" type="application/rss+xml"/>
${news.map((n) => `<item><title>${esc(n.title)}</title><link>${esc(newsUrl(n.slug))}</link><guid isPermaLink="true">${esc(newsUrl(n.slug))}</guid><dc:date>${n.date}</dc:date><description>${esc(n.excerpt || n.title)}</description></item>`).join("\n")}
</channel></rss>`);

for (const [src, bytes] of verifiedImages) {
  const dest = path.join(output, src.slice(1));
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.writeFile(dest, bytes);
}
console.log(`Generated News index, ${news.length} articles, news 404, sitemap and RSS; required image bytes verified and copied unchanged.`);
