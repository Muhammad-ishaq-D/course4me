import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SITE_NAME, DEFAULT_IMAGE, absoluteUrl, plainText } from "../../utils/seo";

/**
 * Title, description, canonical, social tags and structured data for a page.
 *
 * `path` is the canonical path; it defaults to the current path without the
 * query string. `noindex` keeps private and utility pages out of search.
 * `jsonLd` is one schema.org object or a list of them.
 */
const Seo = ({
  title,
  description,
  path,
  image,
  type = "website",
  noindex = false,
  jsonLd,
}) => {
  const { pathname } = useLocation();
  const canonical = absoluteUrl(path ?? pathname);
  const fullTitle = title
    ? title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`
    : `${SITE_NAME} - Security Courses, Licences & Jobs`;
  const desc = plainText(description, 160);
  const img = image ? absoluteUrl(image) : DEFAULT_IMAGE;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

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
      <meta property="og:image" content={img} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      {desc && <meta name="twitter:description" content={desc} />}
      <meta name="twitter:image" content={img} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
