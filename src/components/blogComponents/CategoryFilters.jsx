import React from "react";

const categories = [
  { name: "All", count: null, active: true },
  { name: "Career Guide", count: 6, active: false },
  { name: "Industry News", count: 2, active: false },
  { name: "Study Tips", count: 1, active: false },
  { name: "Company News", count: 1, active: false },
  { name: "Training", count: 1, active: false },
  { name: "Technology", count: 1, active: false },
];

const CategoryFilters = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-2  ">
      <div className="flex flex-wrap gap-4">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm border ${cat.active
              ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
              : "bg-white text-gray-500 border-gray-100 hover:border-gray-300 hover:text-[#1A1A1A]"
              }`}
          >
            {cat.name} {cat.count !== null && <span className="text-gray-400 ml-1">({cat.count})</span>}
          </button>
        ))}
      </div>


    </div>
  );
};

export default CategoryFilters;
