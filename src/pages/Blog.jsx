import React from "react";
import BlogHero from "../components/blogComponents/BlogHero";
import FeaturedArticle from "../components/blogComponents/FeaturedArticle";
import CategoryFilters from "../components/blogComponents/CategoryFilters";
import ArticleGrid from "../components/blogComponents/ArticleGrid";
import NewsletterCTA from "../components/blogComponents/NewsletterCTA";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="mt-4 text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight">
            Blog
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-gray-500 leading-relaxed">
            Expert career advice, training guides, industry news, and
            professional insights to help you grow your career.
          </p>
        </div>
      </div>
      {/* <BlogHero /> */}
      <FeaturedArticle />
      {/* <CategoryFilters /> */}
      <ArticleGrid />
      {/* <Pagination /> */}
      <NewsletterCTA />
    </div>
  );
};

export default Blog;
