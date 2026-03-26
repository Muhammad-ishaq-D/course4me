import React from "react";
import BlogHero from "../components/blogComponents/BlogHero";
import FeaturedArticle from "../components/blogComponents/FeaturedArticle";
import CategoryFilters from "../components/blogComponents/CategoryFilters";
import ArticleGrid from "../components/blogComponents/ArticleGrid";
import Pagination from "../components/blogComponents/Pagination";
import NewsletterCTA from "../components/blogComponents/NewsletterCTA";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white ">
      <BlogHero />
      <FeaturedArticle />
      <CategoryFilters />
      <ArticleGrid />
      <Pagination />
      <NewsletterCTA />
    </div>
  );
};

export default Blog;
