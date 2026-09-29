export const SITE_URL = "https://courses4me.co.uk";
export const SITE_NAME = "courses4me";
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
// Facebook, LinkedIn and WhatsApp previews use a 1.91:1 image.
export const SHARE_WIDTH = 1200;
export const SHARE_HEIGHT = 630;
export const CONTACT_EMAIL = "info@courses4me.co.uk";
export const CONTACT_PHONE = "+448006894621";

export const absoluteUrl = (path = "/") =>
  /^https?:\/\//.test(path) ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

// Lowercase, hyphen-separated, ASCII only. Used for the readable part of URLs.
export const slugify = (value = "") =>
  String(value)
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

// Plain text from HTML or rich text, cut at a word boundary.
export const plainText = (value = "", max = 160) => {
  const text = String(value || "")
    .replace(/<[^>]*>?/gm, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ") > 60 ? cut.lastIndexOf(" ") : cut.length)}…`;
};

// Search results show about 60 characters of a title.
export const TITLE_MAX = 60;

// Short database text (a subtitle like "Level 3 Award in EFAW") makes a weak
// description, so it is followed by a page-type sentence and cut at 160.
// `candidates` is one text or a list (e.g. subtitle, full description); the
// first long enough to stand alone is used, otherwise the first non-empty one.
export const describe = (candidates, fallback) => {
  const texts = (Array.isArray(candidates) ? candidates : [candidates])
    .map((c) => plainText(c, 1000))
    .filter(Boolean);
  const text = texts.find((t) => t.length >= 110) || texts[0] || "";
  if (text.length >= 110) return plainText(text, 160);
  const joined = text ? `${text}${/[.!?]$/.test(text) ? "" : "."} ${fallback}` : fallback;
  return plainText(joined, 160);
};

const withSlug = (base, id, title) => {
  const slug = slugify(title);
  return slug ? `${base}/${id}/${slug}` : `${base}/${id}`;
};

/* ─── Canonical URLs for each kind of detail page ─── */

export const courseUrl = (id, title) => withSlug("/course", id, title);

// Blogs have a slug stored by the API; the id still works as a fallback.
export const blogUrl = (blog = {}) => `/blog/${blog.slug || blog.id || blog._id}`;

// Blog authors have no id of their own; the page is keyed by the name's slug.
export const authorUrl = (name) => `/blog/author/${slugify(name)}`;

export const careerUrl = (id, title) => withSlug("/careers", id, title);

export const licenceUrl = (id, title) => withSlug("/licences", id, title);

export const courseLocationUrl = (id, courseTitle, city) =>
  withSlug("/locations/locationdetails", id, [courseTitle, city].filter(Boolean).join(" "));

/* ─── Images ─── */

// Ask the image CDN for a resized, modern-format copy instead of the original.
export const optimizedImage = (src, width = 800) => {
  if (!src || typeof src !== "string") return src;
  try {
    if (src.includes("res.cloudinary.com") && src.includes("/upload/") && !/\/upload\/[^/]*(f_auto|w_\d)/.test(src)) {
      return src.replace("/upload/", `/upload/f_auto,q_auto,c_limit,w_${width}/`);
    }
    if (src.includes("images.unsplash.com")) {
      const url = new URL(src);
      url.searchParams.set("w", String(width));
      url.searchParams.set("q", "75");
      url.searchParams.set("auto", "format");
      url.searchParams.set("fit", "crop");
      return url.toString();
    }
  } catch {
    return src;
  }
  return src;
};

/*
 * The image for link previews (og:image / twitter:image).
 * Cloudinary and Unsplash images are cropped by their CDN to 1200x630 JPEG, so
 * the size is known. Base64 data (how the API stores course and licence images)
 * cannot be fetched by crawlers, so those pages use the default image.
 */
export const shareImage = (src) => {
  const fallback = { url: DEFAULT_IMAGE, width: SHARE_WIDTH, height: SHARE_HEIGHT, type: "image/jpeg" };
  if (!src || typeof src !== "string" || src.startsWith("data:")) return fallback;
  if (!/^https?:\/\//.test(src) && !src.startsWith("/")) return fallback;
  const url = absoluteUrl(src).replace(/^http:\/\//, "https://");
  try {
    if (url.includes("res.cloudinary.com") && url.includes("/upload/")) {
      return {
        url: url.replace("/upload/", `/upload/c_fill,g_auto,w_${SHARE_WIDTH},h_${SHARE_HEIGHT},f_jpg,q_auto/`),
        width: SHARE_WIDTH,
        height: SHARE_HEIGHT,
        type: "image/jpeg",
      };
    }
    if (url.includes("images.unsplash.com")) {
      const u = new URL(url);
      u.search = "";
      u.searchParams.set("w", String(SHARE_WIDTH));
      u.searchParams.set("h", String(SHARE_HEIGHT));
      u.searchParams.set("fit", "crop");
      u.searchParams.set("fm", "jpg");
      u.searchParams.set("q", "80");
      return { url: u.toString(), width: SHARE_WIDTH, height: SHARE_HEIGHT, type: "image/jpeg" };
    }
  } catch {
    return fallback;
  }
  return { url }; // size unknown
};

/* ─── Structured data ─── */

// Course length as an ISO 8601 duration (Google's courseWorkload), from text
// such as "6 days" or "12 hours", or else from a course date's start and end.
export const isoDuration = (durationText, startDate, endDate) => {
  const m = String(durationText || "").match(/(\d+(?:\.\d+)?)\s*(hour|hr|day|week)/i);
  if (m) {
    const unit = m[2].toLowerCase();
    if (unit.startsWith("h")) return `PT${m[1]}H`;
    return `P${m[1]}${unit.startsWith("w") ? "W" : "D"}`;
  }
  const start = startDate ? new Date(startDate) : null;
  const end = endDate ? new Date(endDate) : null;
  if (start && end && !Number.isNaN(start.getTime()) && !Number.isNaN(end.getTime()) && end >= start) {
    const days = Math.round((end.setHours(0, 0, 0, 0) - start.setHours(0, 0, 0, 0)) / 86400000) + 1;
    return `P${days}D`;
  }
  return undefined;
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: DEFAULT_IMAGE,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  description:
    "Accredited SIA security training, first aid and professional courses delivered at training centres across the UK.",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    contactType: "customer service",
    areaServed: "GB",
    availableLanguage: "English",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-GB",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

// items: [{ name, path }] from the home page down to the current page.
export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});
