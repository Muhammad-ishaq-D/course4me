/**
 * Pre-renders the public pages and writes the sitemap.
 *
 * Run after `vite build` (npm run build:seo). It serves dist/, opens each page
 * in headless Chrome, follows every internal link it finds (plus every course,
 * licence, article and course location listed by the API), and saves the
 * rendered HTML of each indexable page to dist/prerender/<path>/index.html.
 * .htaccess hands those snapshots to search engines and link-preview bots.
 * Every indexable page's canonical URL goes into dist/sitemap.xml.
 *
 * The API is rate limited per IP, so its GET responses are cached for the run
 * and a page that got "429 Too Many Requests" is retried after a pause rather
 * than saved half-empty.
 *
 * Chrome: set CHROME_PATH, or the usual install locations are tried.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv, preview } from "vite";
import puppeteer from "puppeteer-core";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const OUT = path.join(DIST, "prerender");
const SITE_URL = "https://courses4me.co.uk";
const PORT = 4179;
const MAX_PAGES = Number(process.env.PRERENDER_MAX_PAGES || 3000);
const CONCURRENCY = 2;
const COOLDOWN_MS = 60 * 1000;
const MAX_ATTEMPTS = 20; // 20 one-minute pauses outlast the API's 15-minute window

const API_URL = (loadEnv("production", ROOT, "VITE_").VITE_API_URL || "").replace(/\/+$/, "");
const API_ORIGIN = API_URL ? new URL(API_URL).origin : null;

const SEEDS = [
  "/",
  "/courses",
  "/licences",
  "/locations",
  "/careers",
  "/blog",
  "/faqs",
  "/privacy-policy",
  "/terms-of-services",
  "/cookie-policy",
];

// Never worth visiting: private, transactional, or legacy duplicate URLs.
const SKIP = [
  /^\/(dashboard|signin|reset-password|quicksearch|trainer-profile)/,
  /^\/(booking|booking-success|booking-cancelled|payment-success|payment-cancelled)/,
  /^\/apply-job\//,
  /^\/course\/[^/]+\/book$/,
  /^\/blog\/article\//,
  /^\/careers\/careerdetails\//,
  /^\/licences\/licencesdetails/,
  /^\/locations\/locationdetails\/?$/,
];

// Not needed for the markup, and the videos are what makes Chrome struggle.
// Maps are blocked too: the Maps key only allows the live domain, so here it
// would put Google's error box into the snapshot.
const BLOCKED = /\.(mp4|webm|mov)(\?|$)|google\.com\/maps|maps\.googleapis\.com|maps\.gstatic\.com|js\.stripe\.com|m\.stripe\.network|googletagmanager|google-analytics/i;

const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, "Google/Chrome/Application/chrome.exe"),
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const chromePath = chromeCandidates.find((p) => fs.existsSync(p));
if (!chromePath) {
  console.error("Chrome not found. Set CHROME_PATH to a Chrome or Chromium executable.");
  process.exit(1);
}
if (!fs.existsSync(path.join(DIST, "index.html"))) {
  console.error("dist/ is missing. Run `vite build` first.");
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const normalise = (pathname) => {
  const p = decodeURI(pathname).replace(/\/+$/, "");
  return p === "" ? "/" : p;
};

/* ─── Rate-limit handling shared by every page ─── */

let cooldownUntil = 0;
const waitForCooldown = async () => {
  while (Date.now() < cooldownUntil) await sleep(cooldownUntil - Date.now());
};
const startCooldown = (retryAfterSeconds) => {
  const until = Date.now() + Math.max(COOLDOWN_MS, (Number(retryAfterSeconds) || 0) * 1000);
  if (until > cooldownUntil) {
    cooldownUntil = until;
    process.stdout.write(`\n  API rate limit hit, pausing ${Math.round((until - Date.now()) / 1000)}s\n`);
  }
};

// GET responses from the API, reused across pages (the header and footer
// request the same lists on every page).
const apiCache = new Map();

async function apiGet(pathAndQuery) {
  if (!API_URL) return null;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    await waitForCooldown();
    const res = await fetch(`${API_URL}${pathAndQuery}`, { headers: { Origin: SITE_URL } }).catch(() => null);
    if (res?.status === 429) {
      startCooldown(res.headers.get("retry-after"));
      continue;
    }
    if (!res?.ok) return null;
    return res.json().catch(() => null);
  }
  return null;
}

const listOf = (body) => {
  if (!body) return [];
  const d = body.data ?? body;
  if (Array.isArray(d)) return d;
  for (const key of ["data", "items", "rows", "results", "courses", "licenses", "blogs", "links"]) {
    if (Array.isArray(d?.[key])) return d[key];
  }
  return [];
};

/* ─── Start the server and the browser ─── */

const server = await preview({
  root: ROOT,
  logLevel: "silent",
  preview: { port: PORT, strictPort: true, open: false },
});
const origin = `http://localhost:${PORT}`;

const launch = () =>
  puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage", "--mute-audio"],
    protocolTimeout: 60000,
  });
let browser = await launch();
let relaunching = null;
// Chrome can die on a heavy page; start a new one and carry on.
const getBrowser = async () => {
  if (browser.connected) return browser;
  relaunching ??= launch().then((b) => {
    browser = b;
    relaunching = null;
    return b;
  });
  return relaunching;
};

fs.rmSync(OUT, { recursive: true, force: true });

const queue = [...SEEDS];
const seen = new Set(SEEDS);
const enqueue = (route) => {
  const next = normalise(route);
  if (seen.has(next) || SKIP.some((re) => re.test(next))) return;
  if (/\.[a-z0-9]{2,5}$/i.test(next)) return; // files, not pages
  seen.add(next);
  queue.push(next);
};

// Detail pages that may only be reachable through search boxes or filters.
// The id-only URLs are fine: each page reports its canonical slug URL, and the
// snapshot is saved under that too.
console.log(`Listing pages from ${API_URL || "(no VITE_API_URL)"}`);
const [courses, licences, blogs, courseLocations] = await Promise.all([
  apiGet("/courses?status=Published"),
  apiGet("/licenses?limit=200"),
  apiGet("/blogs?limit=100"),
  apiGet("/course-locations"),
]);
listOf(courses).forEach((c) => (c._id ?? c.id) != null && enqueue(`/course/${c._id ?? c.id}`));
listOf(licences).forEach((l) => (l._id ?? l.id) != null && enqueue(`/licences/${l._id ?? l.id}`));
listOf(blogs).forEach((b) => (b.slug ?? b.id) != null && enqueue(`/blog/${b.slug ?? b.id}`));
listOf(courseLocations).forEach((l) => (l._id ?? l.id) != null && enqueue(`/locations/locationdetails/${l._id ?? l.id}`));
console.log(`  ${queue.length} pages queued before crawling links`);

const sitemap = new Map(); // canonical URL -> main image URL (or null)
const redirects = new Map(); // old path the app moved away from -> canonical path
const failures = [];
let rendered = 0;

// Returns "retry" when the page should be tried again later.
async function renderPage(route) {
  let page;
  try {
    page = await (await getBrowser()).newPage();
  } catch {
    return "retry";
  }

  let rateLimited = false;
  await page.setViewport({ width: 1280, height: 900 });
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    const url = req.url();
    if (req.resourceType() === "media" || BLOCKED.test(url)) return void req.abort().catch(() => {});
    const cached = req.method() === "GET" && apiCache.get(url);
    if (cached) return void req.respond(cached).catch(() => {});
    req.continue().catch(() => {});
  });
  page.on("response", async (res) => {
    const url = res.url();
    if (!API_ORIGIN || !url.startsWith(API_ORIGIN) || res.request().method() !== "GET") return;
    if (res.status() === 429) {
      rateLimited = true;
      startCooldown(res.headers()["retry-after"]);
      return;
    }
    if (res.status() !== 200 || apiCache.has(url)) return;
    try {
      const body = await res.buffer();
      // The body is already decoded, so the encoding headers no longer apply.
      const headers = Object.fromEntries(
        Object.entries(res.headers()).filter(([k]) => !/^(content-encoding|content-length|transfer-encoding)$/i.test(k))
      );
      apiCache.set(url, { status: 200, headers, body });
    } catch {
      /* body unavailable (redirect, aborted) */
    }
  });
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 courses4me-prerender"
  );

  try {
    const res = await page.goto(origin + route, { waitUntil: "networkidle0", timeout: 60000 });
    if (!res || res.status() >= 400) throw new Error(`HTTP ${res?.status()}`);

    // Scroll through the page so content that animates in on scroll is shown.
    await page.evaluate(async () => {
      const scroller = document.getElementById("main-scroll-container") || document.scrollingElement;
      for (let y = 0; y < scroller.scrollHeight; y += 700) {
        scroller.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      scroller.scrollTo(0, 0);
    });
    await page.waitForNetworkIdle({ idleTime: 500, timeout: 30000 }).catch(() => {});

    if (rateLimited) {
      await page.close().catch(() => {});
      page = null;
      return "retry";
    }

    const info = await page.evaluate(() => ({
      robots: document.querySelector('meta[name="robots"]')?.content || "",
      canonical: document.querySelector('link[rel="canonical"]')?.href || "",
      // The page's main image for the image sitemap: from its structured data,
      // else its own share image (the site-wide default does not count).
      image: (() => {
        for (const el of document.querySelectorAll('script[type="application/ld+json"]')) {
          try {
            const img = [].concat(JSON.parse(el.textContent).image || [])[0];
            const url = typeof img === "string" ? img : img?.url;
            if (url && /^https:\/\//.test(url) && !/\/og-image\.jpg$/.test(url)) return url;
          } catch {
            /* not JSON */
          }
        }
        const og = document.querySelector('meta[property="og:image"]')?.content || "";
        return /\/og-image\.jpg$/.test(og) ? null : og || null;
      })(),
      path: location.pathname,
      links: [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")),
    }));

    for (const href of info.links) {
      if (!href || href.startsWith("#") || /^(mailto|tel|javascript):/i.test(href)) continue;
      let url;
      try {
        url = new URL(href, origin + route);
      } catch {
        continue;
      }
      if (url.origin === origin || url.origin === SITE_URL) enqueue(url.pathname);
    }

    if (/noindex/i.test(info.robots)) return;
    const canonical = (info.canonical || SITE_URL + route).replace(origin, SITE_URL);
    const canonicalPath = normalise(new URL(canonical).pathname);
    const finalPath = normalise(info.path);
    // Detail pages move an old address (e.g. /course/16) to their canonical one.
    // Anything that ends up somewhere else is not this page.
    if (finalPath !== route && finalPath !== canonicalPath) return;
    if (finalPath !== route) {
      redirects.set(route, canonicalPath);
      if (sitemap.has(canonical)) return; // canonical page already saved
    }

    const html = await page.evaluate(() => {
      document.querySelectorAll("iframe[src*='google.com/maps']").forEach((f) => f.removeAttribute("src"));
      // The snapshot has the real content, so the no-JavaScript fallback goes.
      document.querySelectorAll("body > noscript").forEach((n) => n.remove());
      // If a crawler runs the app on top of the snapshot, main.jsx removes
      // these before the page renders its own copies.
      document
        .querySelectorAll(
          'head title, head meta[name="description"], head meta[name="robots"], head link[rel="canonical"], head meta[property^="og:"], head meta[name^="twitter:"], head script[type="application/ld+json"]'
        )
        .forEach((el) => el.setAttribute("data-seo-default", ""));
      return "<!doctype html>\n" + document.documentElement.outerHTML;
    });

    // Saved under the canonical path, which is the one crawlers are sent to.
    for (const p of new Set([canonicalPath])) {
      const file = p === "/" ? path.join(OUT, "index.html") : path.join(OUT, ...p.slice(1).split("/"), "index.html");
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, html.replaceAll(origin, SITE_URL));
    }
    seen.add(canonicalPath);
    sitemap.set(canonical, info.image || null);
    rendered++;
    process.stdout.write(`\r  rendered ${rendered}, ${queue.length} left in queue   `);
  } catch (err) {
    if (page) await page.close().catch(() => {});
    page = null;
    if (!browser.connected) return "retry";
    failures.push(`${route}: ${err.message}`);
  } finally {
    if (page) await page.close().catch(() => {});
  }
}

console.log(`Pre-rendering from ${origin} with ${chromePath}`);
let active = 0;
const attempts = new Map();
const workers = Array.from({ length: CONCURRENCY }, async () => {
  while (true) {
    const route = queue.shift();
    if (!route) {
      // Another worker may still add links from the page it is rendering.
      if (active === 0) return;
      await sleep(500);
      continue;
    }
    if (rendered >= MAX_PAGES) return;
    active++;
    console.log(`\n  -> ${route}`);
    // A page that hangs (stuck request, Chrome not answering) must not stall the run.
    let timer;
    try {
      // Waiting out an API rate limit is not counted against the page timeout.
      await waitForCooldown();
      const result = await Promise.race([
        renderPage(route),
        new Promise((_, reject) => {
          timer = setTimeout(() => reject(new Error("timed out after 3 minutes")), 3 * 60 * 1000);
        }),
      ]);
      if (result === "retry") {
        const n = (attempts.get(route) || 0) + 1;
        attempts.set(route, n);
        if (n < MAX_ATTEMPTS) queue.push(route);
        else failures.push(`${route}: gave up after ${n} attempts`);
      }
    } catch (err) {
      failures.push(`${route}: ${err.message}`);
    } finally {
      clearTimeout(timer);
      active--;
    }
  }
});
await Promise.all(workers);

await browser.close().catch(() => {});
await new Promise((resolve) => server.httpServer.close(resolve));

// Sitemap: every indexable page that was rendered, by its canonical URL.
const today = new Date().toISOString().slice(0, 10);
const priority = (url) => {
  const p = new URL(url).pathname;
  if (p === "/") return "1.0";
  if (SEEDS.includes(p)) return "0.8";
  if (/^\/(course|licences|locations)\//.test(p)) return "0.7";
  return "0.6";
};
const urls = [...sitemap.keys()].sort();
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
  ...urls.map((u) => {
    const img = sitemap.get(u);
    const imageXml = img ? `\n    <image:image>\n      <image:loc>${img.replace(/&/g, "&amp;")}</image:loc>\n    </image:image>` : "";
    return `  <url>\n    <loc>${u.replace(/&/g, "&amp;")}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority(u)}</priority>${imageXml}\n  </url>`;
  }),
  "</urlset>",
  "",
].join("\n");
fs.writeFileSync(path.join(DIST, "sitemap.xml"), xml);

// 301s from every old address shape to the current page, written into
// dist/.htaccess so servers and crawlers never see the old URLs as pages.
const moved = new Map(redirects); // old path -> new path
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const queryRedirects = []; // [old path, id, new path] for ?id= addresses
for (const u of urls) {
  const p = new URL(u).pathname;
  let m;
  if ((m = p.match(/^\/course\/([^/]+)\/[^/]+$/))) moved.set(`/course/${m[1]}`, p);
  if ((m = p.match(/^\/licences\/([^/]+)\/[^/]+$/))) {
    moved.set(`/licences/${m[1]}`, p);
    queryRedirects.push(["/licences/licencesdetails", m[1], p]);
  }
  if ((m = p.match(/^\/careers\/([^/]+)\/[^/]+$/))) {
    moved.set(`/careers/${m[1]}`, p);
    moved.set(`/careers/careerdetails/${m[1]}`, p);
  }
  if ((m = p.match(/^\/locations\/locationdetails\/([^/]+)\/[^/]+$/))) moved.set(`/locations/locationdetails/${m[1]}`, p);
}
for (const b of listOf(blogs)) {
  const target = b.slug ? `/blog/${b.slug}` : null;
  if (!target || !sitemap.has(SITE_URL + target)) continue;
  for (const id of [b.id, b._id].filter((x) => x != null)) {
    moved.set(`/blog/article/${id}`, target);
    moved.set(`/blog/${id}`, target);
  }
}
for (const [from, to] of moved) if (from === to) moved.delete(from);

// Any other slug after a known id (a renamed course, a venue whose city changed)
// goes to the current one. /course/<id>/book is a real page and is left alone.
const staleSlugs = [];
for (const u of urls) {
  const p = new URL(u).pathname;
  const m = p.match(/^\/(course|licences|careers|locations\/locationdetails)\/([^/]+)\/([^/]+)$/);
  if (!m) continue;
  const keep = m[1] === "course" ? `${esc(m[3])}|book` : esc(m[3]);
  staleSlugs.push(`  RewriteRule ^${esc(m[1])}/${esc(m[2])}/(?!(?:${keep})$)[^/]+$ ${encodeURI(p)} [R=301,L]`);
}

const rules = [
  ...[...moved].sort().map(([from, to]) => `  RewriteRule ^${esc(from.slice(1))}$ ${encodeURI(to)} [R=301,L]`),
  ...staleSlugs,
  ...queryRedirects.map(
    ([from, id, to]) =>
      `  RewriteCond %{QUERY_STRING} (^|&)id=${esc(String(id))}(&|$)\n  RewriteRule ^${esc(from.slice(1))}$ ${encodeURI(to)}? [R=301,L]`
  ),
];
const htaccessPath = path.join(DIST, ".htaccess");
const htaccess = fs.readFileSync(htaccessPath, "utf8");
const START = "# BEGIN GENERATED REDIRECTS";
const END = "# END GENERATED REDIRECTS";
if (htaccess.includes(START) && htaccess.includes(END)) {
  const before = htaccess.slice(0, htaccess.indexOf(START) + START.length);
  const after = htaccess.slice(htaccess.indexOf(END));
  fs.writeFileSync(htaccessPath, `${before}\n${rules.join("\n")}\n  ${after}`);
  console.log(`${rules.length} old-address redirects written to dist/.htaccess`);
} else {
  console.log("dist/.htaccess has no GENERATED REDIRECTS markers; redirects not written");
}

console.log(`\nPre-rendered ${rendered} pages into dist/prerender, ${urls.length} URLs in dist/sitemap.xml`);
if (failures.length) {
  console.log(`${failures.length} page(s) failed:`);
  failures.slice(0, 30).forEach((f) => console.log("  " + f));
  process.exitCode = 1;
}
