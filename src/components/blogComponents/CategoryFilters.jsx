import React, { useState } from "react";

const categories = [
  { name: "All", count: null },
  { name: "Career Guide", count: 6 },
  { name: "Industry News", count: 2 },
  { name: "Study Tips", count: 1 },
  { name: "Company News", count: 1 },
  { name: "Training", count: 1 },
  { name: "Technology", count: 1 },
];

const CategoryFilters = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="relative ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FILTER WRAPPER */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.name;

            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat.name)}
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
    </section>
  );
};

export default CategoryFilters;
