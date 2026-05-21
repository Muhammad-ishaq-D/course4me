import React from "react";
import { Flame, LayoutGrid } from "lucide-react";

const ExploreSidebar = ({
  activeTab,
  setActiveTab,
  categoryParam,
  handleCategoryChange,
  categories,
  getCategoryCount,
  title,
}) => {
  return (
    <div>
      <div className="bg-white rounded-xl border border-[#ECECEC] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
        {/* =====================================================
            FILTERS
        ===================================================== */}
        <div className="pb-6 border-b border-gray-100">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
            Filters
          </h3>

          <button
            onClick={() =>
              setActiveTab((prev) => (prev === "popular" ? "All" : "popular"))
            }
            className={`group w-full rounded-2xl px-4 py-4 flex items-center justify-between transition-all duration-300 border ${
              activeTab === "popular"
                ? "bg-[#F15A24] text-white border-[#F15A24] shadow-lg shadow-[#F15A24]/20"
                : "bg-[#F8F8F8] text-[#141414] border-transparent hover:border-[#F15A24]/20"
            }`}
          >
            <div className="flex items-center gap-3">
              {/* ICON */}
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  activeTab === "popular" ? "bg-white/20" : "bg-[#F15A24]/10"
                }`}
              >
                <Flame
                  size={18}
                  className={
                    activeTab === "popular" ? "text-white" : "text-[#F15A24]"
                  }
                />
              </div>

              {/* TEXT */}
              <div className="text-left">
                <h4 className="font-semibold text-sm">Featured Only</h4>

                <p
                  className={`text-xs ${
                    activeTab === "popular" ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  Show popular {title}
                </p>
              </div>
            </div>

            {/* TOGGLE */}
            <div
              className={`w-12 h-7 rounded-full relative transition-all duration-300 ${
                activeTab === "popular" ? "bg-white/30" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all duration-300 shadow-md ${
                  activeTab === "popular" ? "left-6" : "left-1"
                }`}
              />
            </div>
          </button>
        </div>

        {/* =====================================================
            CATEGORIES
        ===================================================== */}
        <div className="pt-3">
          {/* HEADER */}
          <div className="flex items-center  justify-between mb-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
              Categories
            </h3>

            {/* <div className="w-9 h-9 rounded-xl bg-[#F15A24]/10 flex items-center justify-center">
              <Grid3X3 size={18} className="text-[#F15A24]" />
            </div> */}
          </div>

          {/* CATEGORY LIST */}
          <div className="space-y-2">
            {/* ALL BUTTON */}
            <button
              onClick={() => handleCategoryChange("All")}
              className={`group w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-300 border ${
                categoryParam === "All"
                  ? "bg-gradient-to-r from-[#F15A24] to-[#ff7b4d] text-white border-[#F15A24] shadow-lg shadow-[#F15A24]/20"
                  : "bg-[#FAFAFA] hover:bg-[#FFF4EF] border-transparent hover:border-[#F15A24]/10"
              }`}
            >
              <div className="flex items-center gap-3">
                {/* ICON */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    categoryParam === "All"
                      ? "bg-linear-to-r from-[#F8510C] to-[#FF7A45] text-white"
                      : "bg-linear-to-r from-[#F8510C] to-[#FF7A45] text-white"
                  }`}
                >
                  <LayoutGrid size={18} />
                </div>

                {/* LABEL */}
                <span className="font-semibold text-sm">All {title}</span>
              </div>

              {/* COUNT */}
              <div
                className={`min-w-[30px] h-[30px] px-2 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  categoryParam === "All"
                    ? "bg-white/20 text-white"
                    : "bg-[#F15A24]/10 text-[#F15A24]"
                }`}
              >
                {getCategoryCount("All")}
              </div>
            </button>

            {/* DYNAMIC CATEGORIES */}
            {categories.map((category) => {
              const isActive = categoryParam === category.name;

              return (
                <button
                  key={category.name}
                  onClick={() => handleCategoryChange(category.name)}
                  className={`group w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? "bg-gradient-to-r from-[#F15A24] to-[#ff7b4d] text-white border-[#F15A24] shadow-lg shadow-[#F15A24]/20"
                      : "bg-[#FAFAFA] hover:bg-[#FFF4EF] border-transparent hover:border-[#F15A24]/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* ICON */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 ${
                        isActive ? "ring-2 ring-white/40" : ""
                      } ${category.bgColor}`}
                    >
                      {category.icon}
                    </div>

                    {/* NAME */}
                    <span className="font-semibold text-sm">
                      {category.name}
                    </span>
                  </div>

                  {/* COUNT */}
                  <div
                    className={`min-w-[30px] h-[30px] px-2 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#F15A24]/10 text-[#F15A24]"
                    }`}
                  >
                    {getCategoryCount(category.name)}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSidebar;
