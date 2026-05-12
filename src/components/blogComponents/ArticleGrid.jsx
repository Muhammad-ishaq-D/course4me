import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ArticleCard from "./ArticleCard";

import Blog2 from "../../assets/home/blog2.png";
import Blog3 from "../../assets/home/blog3.png";
import Blog4 from "../../assets/home/blog4.png";
import Blog5 from "../../assets/home/blog5.png";
import Blog6 from "../../assets/home/blog6.png";

const articles = [
  {
    image: Blog2,
    category: "Industry News",
    title: "SIA Licence Changes 2026: What You Need to Know",
    excerpt:
      "The Security Industry Authority has announced important updates to licensing requirements, from training modules to renewals and background checks.",
    author: "Emma Whitfield",
    date: "Feb 22, 2026",
    readTime: "5 min read",
  },
  {
    image: Blog3,
    category: "Industry News",
    title: "CCTV Operator Demand Surges Across Major UK Cities",
    excerpt:
      "New data reveals a 35% increase in demand for qualified CCTV Operators as businesses invest more in surveillance and smart city technology.",
    author: "David Clarkson",
    date: "Feb 15, 2026",
    readTime: "4 min read",
  },
  {
    image: Blog4,
    category: "Study Tips",
    title: "5 Tips to Pass Your SIA Exam on the First Attempt",
    excerpt:
      "Our top instructors share proven study techniques, mental preparation, and insider tips that have helped thousands of students succeed.",
    author: "John Redfern",
    date: "Feb 10, 2026",
    readTime: "6 min read",
  },
  {
    image: Blog5,
    category: "Career Guide",
    title: "Security Career Salaries in 2026: What to Expect",
    excerpt:
      "A detailed breakdown of average pay across security roles, from door supervision to close protection, and how to negotiate for better rates.",
    author: "Marcus Thompson",
    date: "Feb 3, 2026",
    readTime: "7 min read",
  },
  {
    image: Blog6,
    category: "Company News",
    title: "Courses4Me Opens 10 New Training Centres Across the UK",
    excerpt:
      "Expanding our reach to serve more aspiring security professionals, with new locations in Manchester, Birmingham, Leeds, and beyond.",
    author: "Courses4Me Team",
    date: "Jan 26, 2026",
    readTime: "3 min read",
  },

  /* EXTRA CARD */
  {
    image: Blog2,
    category: "Training",
    title: "Why SIA Training is Essential for Your Security Career",
    excerpt:
      "Learn why professional training and certification can increase your job opportunities and salary expectations.",
    author: "Alex Morgan",
    date: "Jan 20, 2026",
    readTime: "5 min read",
  },
];

const ArticleGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const articlesPerPage = 3;

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const startIndex = (currentPage - 1) * articlesPerPage;

  const currentArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage,
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 mb-20">
      {/* TOP INFO */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
          Showing {currentArticles.length} of {articles.length} articles
        </p>

        <div className="text-sm text-gray-400">
          Page {currentPage} of {totalPages}
        </div>
      </div>

      {/* ARTICLES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {currentArticles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>

      {/* ================= PAGINATION ================= */}
      <div className="flex items-center justify-center gap-3 mt-12">
        {/* PREVIOUS */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
            currentPage === 1
              ? "bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed"
              : "bg-white border-gray-200 text-[#111827] hover:bg-[#F15A24] hover:border-[#F15A24] hover:text-white shadow-sm"
          }`}
        >
          <ChevronLeft size={18} />
        </button>

        {/* PAGE NUMBERS */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-12 h-12 rounded-full font-bold transition-all duration-300 ${
              currentPage === index + 1
                ? "bg-[#0F2B46] text-white shadow-[0_10px_30px_rgba(15,43,70,0.25)]"
                : "bg-white border border-gray-200 text-gray-500 hover:border-[#F15A24] hover:text-[#F15A24]"
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* NEXT */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
            currentPage === totalPages
              ? "bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed"
              : "bg-white border-gray-200 text-[#111827] hover:bg-[#F15A24] hover:border-[#F15A24] hover:text-white shadow-sm"
          }`}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default ArticleGrid;
