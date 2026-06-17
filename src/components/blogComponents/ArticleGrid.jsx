import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ArticleCard from "./ArticleCard";
import { blogsData } from "../../data/blogs";

const categories = [
  { name: "All", count: blogsData.length },
  {
    name: "Career Guide",
    count: blogsData.filter((b) => b.category === "Career Guide").length,
  },
  {
    name: "Industry News",
    count: blogsData.filter((b) => b.category === "Industry News").length,
  },
  {
    name: "Study Tips",
    count: blogsData.filter((b) => b.category === "Study Tips").length,
  },
  {
    name: "Company News",
    count: blogsData.filter((b) => b.category === "Company News").length,
  },
  {
    name: "Training",
    count: blogsData.filter((b) => b.category === "Training").length,
  },
  {
    name: "Technology",
    count: blogsData.filter((b) => b.category === "Technology").length,
  },
];

const ArticleGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogsData
      : blogsData.filter((blog) => blog.category === activeCategory);

  const articlesPerPage = 3;
  const totalPages = Math.ceil(filteredBlogs.length / articlesPerPage);

  const startIndex = (currentPage - 1) * articlesPerPage;

  const currentArticles = filteredBlogs.slice(
    startIndex,
    startIndex + articlesPerPage,
  );

  return (
    <>
      <header className="relative ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* FILTER WRAPPER */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat, idx) => {
              const isActive = activeCategory === cat.name;

              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveCategory(cat.name);
                    setCurrentPage(1);
                  }}
                  className={`group relative overflow-hidden px-5 sm:px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border whitespace-nowrap
                  
                  ${
                    isActive
                      ? "bg-[#F15A24] text-white border-[#F15A24] shadow-[0_10px_30px_rgba(241,90,36,0.35)]"
                      : "bg-white text-[#374151] border-gray-200 hover:border-[#F15A24]/30 hover:text-[#F15A24] hover:shadow-md"
                  }
                `}
                >
                  {/* ACTIVE GLOW */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F15A24] to-[#ff6b35] opacity-90" />
                  )}

                  {/* CONTENT */}
                  <span className="relative z-10 flex items-center gap-2">
                    {cat.name}

                    {cat.count !== null && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-[#F3F4F6] text-gray-500 group-hover:bg-[#FFF4EE] group-hover:text-[#F15A24]"
                        }`}
                      >
                        {cat.count}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </header>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 mb-20">
        {/* TOP INFO */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
            Showing {currentArticles.length} of {filteredBlogs.length}{" "}
            articles{" "}
          </p>

          <div className="text-sm text-gray-400">
            Page {currentPage} of {totalPages}
          </div>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
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
    </>
  );
};

export default ArticleGrid;
