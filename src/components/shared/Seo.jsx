import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SITE_NAME, TITLE_MAX, absoluteUrl, plainText, shareImage } from "../../utils/seo";

/*
 * `title` can be one string or a list of versions from longest to shortest.
 * The first version that fits in TITLE_MAX with " | courses4me" added wins;
 * failing that, the shortest version is used without the brand.
 */
const pickTitle = (title) => {
  const versions = (Array.isArray(title) ? title : [title]).filter(Boolean);
  if (!versions.length) return `${SITE_NAME} - Security Courses, Licences & Jobs`;
  for (const v of versions) {
    const branded = v.includes(SITE_NAME) ? v : `${v} | ${SITE_NAME}`;
    if (branded.length <= TITLE_MAX) return branded;
  }
  return versions[versions.length - 1];
};

/**
 * Title, description, canonical, social tags and structured data for a page.
 *
 * `path` is the canonical path; it defaults to the current path without the
 * query string. `noindex` keeps private and utility pages out of search.
 * `jsonLd` is one schema.org object or a list of them.
 * `redirectToCanonical` sends an old or mistyped address (e.g. /course/16, or a
 * renamed course's old slug) to `path`, keeping the query string.
 * `image` is the page's main picture for link previews; `imageAlt` describes it
 * (defaults to the page title).
 */
const Seo = ({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  noindex = false,
  redirectToCanonical = false,
  jsonLd,
}) => {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const canonical = absoluteUrl(path ?? pathname);
  const fullTitle = pickTitle(title);
  const desc = plainText(description, 160);
  const img = shareImage(image);
  const imgAlt = imageAlt || fullTitle;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  const shouldRedirect =
    redirectToCanonical && !noindex && path && decodeURI(pathname).replace(/\/+$/, "") !== path;
  useEffect(() => {
    if (!shouldRedirect) return;
    // Legacy ?id= addresses carry the id in the query string; the new path has it.
    const params = new URLSearchParams(search);
    params.delete("id");
    const rest = params.toString();
    navigate(`${path}${rest ? `?${rest}` : ""}${hash}`, { replace: true });
  }, [shouldRedirect, path, search, hash, navigate]);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {desc && <meta name="description" content={desc} />}
      <meta
        name="robots"
        content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}
      />
      {!noindex && <link rel="canonical" href={canonical} />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      {desc && <meta property="og:description" content={desc} />}
      <meta property="og:image" content={img.url} />
      {img.type && <meta property="og:image:type" content={img.type} />}
      {img.width && <meta property="og:image:width" content={String(img.width)} />}
      {img.height && <meta property="og:image:height" content={String(img.height)} />}
      <meta property="og:image:alt" content={imgAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      {desc && <meta name="twitter:description" content={desc} />}
      <meta name="twitter:image" content={img.url} />
      <meta name="twitter:image:alt" content={imgAlt} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
