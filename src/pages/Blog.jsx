import React from "react";
import FeaturedArticle from "../components/blogComponents/FeaturedArticle";
import ArticleGrid from "../components/blogComponents/ArticleGrid";
import NewsletterCTA from "../components/blogComponents/NewsletterCTA";

import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white ">
      <Helmet>
        <title>Latest News, Guides & Training Insights | courses4me Blog</title>
        <meta
          name="description"
          content="Read industry updates, career tips, and course guides from courses4me experts to help you stay ahead in your field."
        />
        <link rel="canonical" href="https://courses4me.co.uk/blog" />
      </Helmet>

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
