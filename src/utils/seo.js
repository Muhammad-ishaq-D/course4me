export const SITE_URL = "https://courses4me.co.uk";
export const SITE_NAME = "courses4me";
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
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

const withSlug = (base, id, title) => {
  const slug = slugify(title);
  return slug ? `${base}/${id}/${slug}` : `${base}/${id}`;
};

/* ─── Canonical URLs for each kind of detail page ─── */

export const courseUrl = (id, title) => withSlug("/course", id, title);

// Blogs have a slug stored by the API; the id still works as a fallback.
export const blogUrl = (blog = {}) => `/blog/${blog.slug || blog.id || blog._id}`;

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

/* ─── Structured data ─── */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
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
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/quicksearch?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
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
