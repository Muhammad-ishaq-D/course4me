import React from "react";
import FeaturedArticle from "../components/blogComponents/FeaturedArticle";
import ArticleGrid from "../components/blogComponents/ArticleGrid";
import NewsletterCTA from "../components/blogComponents/NewsletterCTA";

import Seo from "../components/shared/Seo";
import { breadcrumbSchema } from "../utils/seo";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white ">
      <Seo
        title="Security Career Guides & SIA News | courses4me Blog"
        description="Read SIA licence updates, security career guides, course tips and industry news from the courses4me team to help you get qualified and find work."
        path="/blog"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="mt-4 text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight">
            Blog
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-gray-500 leading-relaxed">
            Expert career advice, training guides, industry news, and
            professional insights to help you grow your career.
          </p>
        </div>
      </div>
      <FeaturedArticle />
      <ArticleGrid />
      <NewsletterCTA />
    </div>
  );
};

export default Blog;
