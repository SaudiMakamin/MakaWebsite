import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import http from "node:http";
import { createHash } from "node:crypto";
import {
  articleImagePaths,
  articleMetadata,
  isBilingualNewsArticle,
  localizedArticleMetadata,
  localizedNewsUrl,
  NEWS_BASE,
  newsUrl,
} from "../client/src/pages/news/newsSeo";
import type { NewsItem } from "../client/src/pages/news/newsData";
import { assertNewsRouteContract } from "./news-static-contract";

// Offline HTTP harness for the documented subset of Vercel routes used here.
// This is NOT a claim that a deployment or Vercel's production edge was tested.
const root = process.cwd();
const output = path.join(root, "dist/public");
const news = JSON.parse(await fs.readFile("client/src/content/news.json", "utf8")) as NewsItem[];
const config = JSON.parse(await fs.readFile("vercel.json", "utf8"));
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c]!);
const hash = (b: Buffer) => createHash("sha256").update(b).digest("hex");
assert.equal(await fs.readFile("client/src/content/news.json", "utf8"), await fs.readFile("content/news.json", "utf8"));
assert(news.length > 0, "Authoritative News source data must contain at least one article");
assert.equal(new Set(news.map((article) => article.slug)).size, news.length, "News slugs must be unique");
assertNewsRouteContract(news, config);
const documentHashes = new Set<string>();
for (const n of news) {
  const html = await fs.readFile(path.join(output, `news/${n.slug}/index.html`), "utf8");
  const isLocalizedArticle = isBilingualNewsArticle(n.slug);
  const meta = isLocalizedArticle ? localizedArticleMetadata(n, "en") : articleMetadata(n);
  assert(html.includes(`<title>${esc(meta.title)}</title>`), n.slug);
  assert(html.includes(`content="${esc(meta.description)}"`));
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
  assert(html.includes(`rel="canonical" href="${meta.url}"`));
  if (n.dateIsEventEndSortOnly) {
    assert(!("datePublished" in meta.schema!));
    assert(html.includes(n.dateLabel || ""));
    assert(!html.includes(`datetime="${n.date}"`));
  } else {
    assert(html.includes(`<time datetime="${n.date}">`));
    assert.equal((meta.schema as { datePublished?: string }).datePublished, n.date);
  }
  if (isLocalizedArticle) {
    for (const language of ["ar", "en"] as const) {
      assert(html.includes(`hreflang="${language}" href="${localizedNewsUrl(language, n.slug)}"`));
    }
  } else {
    assert(!html.includes("hreflang"));
  }
  const schemaTags = Array.from(html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g));
  assert.equal(schemaTags.length, 1);
  const schema = JSON.parse(schemaTags[0][1]);
  assert.equal(schema["@type"], "NewsArticle");
  assert.equal(schema.headline, n.title);
  if (n.dateIsEventEndSortOnly) assert(!("datePublished" in schema));
  else assert.equal(schema.datePublished, n.date);
  assert.equal(schema.url, meta.url);
  assert(!("dateModified" in schema));
  assert(!("author" in schema));
  const normalizedBody = (n.contentHtml || "").replace(/\bsrc=(["'])(\/[^"']+)\1/g,
    (_all, quote, src) => `src=${quote}${new URL(src, NEWS_BASE).pathname}${quote}`);
  assert(html.includes(normalizedBody), `Entire approved body missing: ${n.slug}`);
  const generatedImagePaths = Array.from(html.matchAll(/<img\b[^>]*\bsrc=(["'])(.*?)\1/gi), (match) => new URL(match[2], NEWS_BASE).pathname);
  const renderedSourceImagePaths = [
    ...(n.image ? [n.image] : []),
    ...(n.gallery || []).map((photo) => photo.src),
    ...Array.from((n.contentHtml || "").matchAll(/<img\b[^>]*\bsrc\s*=\s*(["'])(.*?)\1/gi), (match) => match[2]),
  ].map((src) => new URL(src, NEWS_BASE).pathname);
  assert.deepEqual(
    [...new Set(generatedImagePaths)].sort(),
    [...new Set(renderedSourceImagePaths)].sort(),
    `Generated article image URLs changed: ${n.slug}`,
  );
  assert(html.includes('href="/news"'));
  for (const name of ["og:title", "og:description", "og:url", "twitter:title", "twitter:description"]) {
    assert.equal((html.match(new RegExp(`(?:property|name)="${name}"`, "g")) || []).length, 1);
  }
  for (const src of articleImagePaths(n)) {
    const source = src.startsWith("/attached_assets/") ? src.slice(1) : `client/public${src}`;
    const original = await fs.readFile(source);
    assert.equal(hash(original), hash(await fs.readFile(path.join(output, src.slice(1)))), `Changed/missing image ${src}`);
  }
  for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)) await fs.access(path.join(output, match[1]));
  documentHashes.add(hash(Buffer.from(html)));
  console.log(`PASS initial HTML + canonical + social + schema + entire body + exact images: ${n.slug}`);
}
const localizedArticles = news.filter((article) => isBilingualNewsArticle(article.slug));
assert(localizedArticles.length > 0, "At least one approved bilingual News article must exist.");
for (const localizedArticle of localizedArticles) {
  for (const language of ["ar", "en"] as const) {
    const html = await fs.readFile(
      path.join(output, `${language}/news/${localizedArticle.slug}/index.html`),
      "utf8",
    );
    const metadata = localizedArticleMetadata(localizedArticle, language);
    const expectedBody = language === "ar" ? localizedArticle.contentHtmlAr : localizedArticle.contentHtml;
    const expectedTitle = language === "ar" ? localizedArticle.titleAr : localizedArticle.title;
    assert(html.includes(`<html lang="${language}" dir="${language === "ar" ? "rtl" : "ltr"}">`));
    assert(html.includes(`<title>${esc(metadata.title)}</title>`));
    assert(html.includes(`rel="canonical" href="${localizedNewsUrl(language, localizedArticle.slug)}"`));
    for (const alternateLanguage of ["ar", "en"] as const) {
      assert(html.includes(`hreflang="${alternateLanguage}" href="${localizedNewsUrl(alternateLanguage, localizedArticle.slug)}"`));
    }
    assert(html.includes(esc(expectedTitle || "")));
    assert(expectedBody && html.includes(expectedBody), `Complete ${language} approved article body missing.`);
    const schemaTag = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
    assert(schemaTag, `Missing ${language} NewsArticle JSON-LD.`);
    const schema = JSON.parse(schemaTag[1]);
    assert.equal(schema["@type"], "NewsArticle");
    assert.equal(schema.headline, expectedTitle);
    assert.equal(schema.inLanguage, language);
    assert.equal(schema.datePublished, localizedArticle.date);
    assert.equal(schema.url, localizedNewsUrl(language, localizedArticle.slug));
    assert.equal(schema.mainEntityOfPage, localizedNewsUrl(language, localizedArticle.slug));
    assert(html.includes(`alt="${esc(language === "ar" ? localizedArticle.imageAltAr! : localizedArticle.imageAlt!)}"`));
    console.log(`PASS ${localizedArticle.slug} ${language} localized static page, canonical, reciprocal hreflang, NewsArticle schema, date, body and image alt`);
  }
}
assert.equal(documentHashes.size, news.length, "Every source article must have a unique generated document");
const generatedArticleSlugs = (await fs.readdir(path.join(output, "news"), { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();
assert.deepEqual(generatedArticleSlugs, news.map((article) => article.slug).sort(), "Generated article pages must match source data exactly");
const index = await fs.readFile(path.join(output, "news/index.html"), "utf8");
for (const n of news) {
  const cardUrl = isBilingualNewsArticle(n.slug)
    ? localizedNewsUrl("en", n.slug).replace(NEWS_BASE, "")
    : `/news/${n.slug}`;
  assert(index.includes(`href="${cardUrl}"`));
  assert(index.includes(esc(n.title)));
  assert(index.includes(esc(n.excerpt || n.title)));
  if (n.dateIsEventEndSortOnly) assert(index.includes(esc(n.dateLabel || "")));
}
assert.equal((index.match(/href="\/news\/[a-z0-9-]+"/g) || []).length,
  news.filter((article) => !isBilingualNewsArticle(article.slug)).length);
for (const file of await fs.readdir("client/public", { recursive: true })) {
  const name = String(file);
  if ((await fs.stat(path.join("client/public", name))).isFile()) {
    assert.equal(hash(await fs.readFile(path.join("client/public", name))), hash(await fs.readFile(path.join(output, name))), `Lost public asset: ${name}`);
  }
}
const sitemap = await fs.readFile(path.join(output, "sitemap.xml"), "utf8");
const rss = await fs.readFile(path.join(output, "rss.xml"), "utf8");
assert(sitemap.startsWith('<?xml version="1.0"'));
assert(rss.startsWith('<?xml version="1.0"'));
assert.equal((rss.match(/<item>/g) || []).length, news.length);
assert.equal((sitemap.match(/<loc>https:\/\/www\.makamin\.com\.sa\/news\/[^<]+<\/loc>/g) || []).length,
  news.filter((article) => !isBilingualNewsArticle(article.slug)).length);
assert(!rss.includes("<pubDate>"), "Do not invent publication times");
for (const n of news) {
  if (!isBilingualNewsArticle(n.slug)) assert(sitemap.includes(`<loc>${newsUrl(n.slug)}</loc>`));
  if (n.dateIsEventEndSortOnly) assert(!rss.includes(`<dc:date>${n.date}</dc:date>`));
  else assert(rss.includes(`<dc:date>${n.date}</dc:date>`));
}
for (const localizedArticle of localizedArticles) {
  for (const language of ["ar", "en"] as const) {
    assert(sitemap.includes(`<loc>${localizedNewsUrl(language, localizedArticle.slug)}</loc>`));
  }
  assert(rss.includes(`<link>${localizedNewsUrl("en", localizedArticle.slug)}</link>`));
}
console.log(`PASS index has ${news.length} crawlable links; sitemap/RSS coverage; all public assets preserved`);

const types: Record<string, string> = { ".html": "text/html; charset=utf-8", ".xml": "application/xml", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".txt": "text/plain" };
async function staticDestination(url: string): Promise<string | undefined> {
  const decoded = decodeURIComponent(url);
  const candidate = path.resolve(output, `.${decoded}`);
  if (!candidate.startsWith(output + path.sep)) return undefined;
  try {
    if ((await fs.stat(candidate)).isFile()) return decoded;
  } catch {}
  try {
    if ((await fs.stat(path.join(candidate, "index.html"))).isFile()) {
      return `${decoded.replace(/\/$/, "")}/index.html`;
    }
  } catch {}
  return undefined;
}
async function fileExists(url: string) {
  return (await staticDestination(url)) !== undefined;
}
const server = http.createServer(async (req, res) => {
  try {
    const pathname = new URL(req.url || "/", "http://localhost").pathname;
    let destination: string | undefined;
    let status = 200;
    for (const rule of config.routes) {
      if (rule.handle === "filesystem") {
        destination = await staticDestination(pathname);
        if (destination) break;
        continue;
      }
      const re = new RegExp(rule.src);
      if (!re.test(pathname)) continue;
      const rewrittenDestination = pathname.replace(re, rule.dest || "");
      if (rule.check && !(await fileExists(rewrittenDestination))) continue;
      for (const [k, v] of Object.entries(rule.headers || {})) res.setHeader(k, String(v));
      if (rule.continue) continue;
      destination = rewrittenDestination;
      status = rule.status || 200;
      break;
    }
    if (!destination) { res.writeHead(404).end(); return; }
    const target = path.resolve(output, `.${decodeURIComponent(destination)}`);
    if (!target.startsWith(output + path.sep)) { res.writeHead(400).end(); return; }
    const body = await fs.readFile(target);
    if (!res.hasHeader("Content-Type")) res.setHeader("Content-Type", types[path.extname(target)] || "application/octet-stream");
    res.writeHead(status).end(body);
  } catch { res.writeHead(404).end(); }
});
const port = Number(process.env.NEWS_TEST_PORT || 5001);
await new Promise<void>((resolve) => server.listen(port, "127.0.0.1", resolve));
try {
  const base = `http://127.0.0.1:${port}`;
  const unlistedSlug = "unlisted-routing-probe";
  assert(!news.some((article) => article.slug === unlistedSlug), "Routing probe slug must not be present in source data");
  const unlistedDirectory = path.join(output, "news", unlistedSlug);
  await fs.mkdir(unlistedDirectory, { recursive: true });
  await fs.writeFile(path.join(unlistedDirectory, "index.html"), "<h1>Unlisted routing probe</h1>");
  try {
    for (const suffix of ["", "/"]) {
      const response = await fetch(`${base}/news/${unlistedSlug}${suffix}`);
      assert.equal(response.status, 200, "A generated article without a hand-maintained route must resolve");
      assert((await response.text()).includes("Unlisted routing probe"));
    }
  } finally {
    await fs.rm(unlistedDirectory, { recursive: true, force: true });
  }
  console.log("PASS dynamic News route serves an unlisted generated article with and without trailing slash");
  for (const n of news) {
    for (const suffix of ["", "/"]) {
      const r = await fetch(`${base}/news/${n.slug}${suffix}`);
      assert.equal(r.status, 200);
      assert((await r.text()).includes(esc(n.title)));
    }
    for (const src of articleImagePaths(n)) {
      const r = await fetch(base + encodeURI(src));
      assert.equal(r.status, 200, src);
      assert(r.headers.get("content-type")?.startsWith("image/"), src);
      const b = Buffer.from(await r.arrayBuffer());
      assert(b[0] === 137 || b[0] === 255, src);
    }
  }
  for (const localizedArticle of localizedArticles) {
    for (const language of ["ar", "en"] as const) {
      const url = localizedNewsUrl(language, localizedArticle.slug).replace(NEWS_BASE, "");
      const r = await fetch(base + url);
      assert.equal(r.status, 200);
      const html = await r.text();
      assert(html.includes(`lang="${language}"`));
      assert(html.includes(esc(language === "ar" ? localizedArticle.titleAr! : localizedArticle.title)));
    }
  }
  for (const url of ["/news/missing-routing-probe", "/news/first-board-meeting-2026-02-12/extra"]) {
    const r = await fetch(base + url);
    assert.equal(r.status, 404);
    const body = await r.text();
    assert(body.includes('content="noindex, follow"'));
    assert(body.includes("Article Not Found"));
  }
  for (const url of ["/", "/about", "/services", "/makamin-holding", "/petroleum-services", "/investor-relations", "/update-shareholder", "/shareholder-submit", "/royal-dashboard"]) {
    const r = await fetch(base + url);
    assert.equal(r.status, 200, url);
    assert((await r.text()).includes('<div id="root"></div>'), `Non-news fallback changed: ${url}`);
  }
  for (const [url, type] of [["/sitemap.xml", "application/xml"], ["/rss.xml", "application/rss+xml"]]) {
    const r = await fetch(base + url);
    assert.equal(r.status, 200);
    assert(r.headers.get("content-type")?.startsWith(type));
    assert((await r.text()).startsWith("<?xml"));
  }
  assert.equal((await fetch(base + "/news")).status, 200);
  console.log(`PASS offline documented Vercel-route HTTP tests: ${news.length} articles, 404s, XML MIME, exact images, 9 non-news routes`);
  console.log("NOT VERIFIED: actual Vercel edge/deployment routing (no deployment performed)");

  if (process.argv.includes("--preview")) {
    const rawPreviewUrl = process.env.NEWS_PREVIEW_URL;
    assert(rawPreviewUrl, "Set NEWS_PREVIEW_URL to the Vercel Preview origin before using --preview.");
    const preview = new URL(rawPreviewUrl);
    assert(["https:", "http:"].includes(preview.protocol), "NEWS_PREVIEW_URL must use HTTPS (HTTP is allowed only for local smoke tests).");
    assert(!preview.username && !preview.password && !preview.search && !preview.hash, "NEWS_PREVIEW_URL must not contain credentials, query parameters, or a fragment.");
    assert(preview.pathname === "/" && !preview.search, "NEWS_PREVIEW_URL must be an origin, without a path.");
    assert(
      preview.protocol === "https:" || ["localhost", "127.0.0.1", "[::1]"].includes(preview.hostname),
      "NEWS_PREVIEW_URL must use HTTPS unless it points to localhost.",
    );
    const headers: Record<string, string> = {};
    // Vercel Deployment Protection's automation bypass uses this header and secret.
    if (process.env.VERCEL_AUTOMATION_BYPASS_SECRET) {
      headers["x-vercel-protection-bypass"] = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
    }
    const imageUrls = [...new Set(news.flatMap(articleImagePaths))]
      .map((src) => new URL(src, preview.origin).href);
    await Promise.all(imageUrls.map(async (url) => {
      const response = await fetch(url, { headers, signal: AbortSignal.timeout(20_000) });
      try {
        assert.equal(response.status, 200, `Preview image returned HTTP ${response.status}: ${url}`);
        assert(response.headers.get("content-type")?.toLowerCase().startsWith("image/"), `Preview image has a non-image content type: ${url}`);
        console.log(`PASS Preview image HTTP 200 + image content type: ${new URL(url).pathname}`);
      } finally {
        await response.body?.cancel();
      }
    }));
    console.log(`PASS Preview image smoke test: ${imageUrls.length} unique article image URLs`);
  } else {
    console.log("NOT VERIFIED: Preview image URLs (run with --preview and NEWS_PREVIEW_URL)");
  }
} catch (error) {
  server.close();
  throw error;
}
if (process.argv.includes("--serve")) {
  console.log(`NEWS_C1_BROWSER_READY http://127.0.0.1:${port}`);
} else {
  server.close();
}
