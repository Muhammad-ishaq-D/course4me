import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { User2 } from "lucide-react";
import useBlogs from "../hooks/useBlogs";
import ArticleCard from "../components/blogComponents/ArticleCard";
import ArticleCardSkeleton from "../components/ui/ArticleCardSkeleton";
import Seo from "../components/shared/Seo";
import {
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  authorUrl,
  breadcrumbSchema,
  slugify,
} from "../utils/seo";

// Every article by one author. Authors are stored as a name on each article,
// so the page collects the articles whose author name matches the URL.
const BlogAuthor = () => {
  const { slug } = useParams();
  const { blogs, loading } = useBlogs();
  const posts = blogs.filter((b) => b.author && slugify(b.author) === slug);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[...Array(3)].map((_, idx) => (
          <ArticleCardSkeleton key={idx} />
        ))}
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9fafb]">
        <Seo title="Author Not Found" noindex />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Author Not Found</h1>
          <NavLink
            to="/blog"
            className="mt-4 inline-block text-[#C2410C] font-semibold hover:underline"
          >
            ← Back to Blog
          </NavLink>
        </div>
      </div>
    );
  }

  const name = posts[0].author;
  const role = posts.find((p) => p.role)?.role;
  const path = authorUrl(name);
  const count = posts.length;
  const articles = `${count} article${count === 1 ? "" : "s"}`;

  return (
    <div className="min-h-screen bg-white pb-20">
      <Seo
        title={[`${name} - Security Career & SIA Articles`, `${name} - Articles`, name]}
        description={`${articles} by ${name}${role ? `, ${role}` : ""}, on the courses4me blog: SIA training guides, security career advice and industry news.`}
        path={path}
        type="profile"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            url: absoluteUrl(path),
            mainEntity: {
              "@type": "Person",
              name,
              jobTitle: role || undefined,
              url: absoluteUrl(path),
              worksFor: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
            },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name, path },
          ]),
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="hidden md:flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
          <NavLink to="/">Home</NavLink>
          <span>/</span>
          <NavLink to="/blog">Blog</NavLink>
          <span>/</span>
          <span className="text-[#C2410C]">{name}</span>
        </nav>

        <div className="flex items-center gap-5">
          <User2 size={56} className="text-white bg-[#F15A24] p-3 rounded-full shrink-0" aria-hidden="true" />
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight">{name}</h1>
            <p className="mt-2 text-lg text-gray-500">
              {role ? `${role} · ` : ""}
              {articles} on the courses4me blog
            </p>
          </div>
        </div>

        <h2 className="mt-12 mb-6 text-2xl font-bold text-[#111827]">Articles by {name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogAuthor;
