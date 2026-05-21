import React from "react";
import { LayoutGrid } from "lucide-react";

const CareerSidebar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  careersData,
  activeTab = "careers",
  jobs = [],
}) => {
  return (
    <div className="bg-white rounded-[28px] border z-30  border-gray-100 p-4 shadow-sm h-fit lg:sticky lg:top-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-2">
        <div>
          <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-[#98A2B3]">
            Categories
          </p>
        </div>

        {/* <button className="w-10 h-10 rounded-2xl bg-[#FFF1EB] flex items-center justify-center">
          <LayoutGrid className="w-4 h-4 text-[#F8510C]" />
        </button> */}
      </div>

      {/* Categories */}
      <div className="space-y-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = selectedCategory === category.name;

          const getCategoryCount = () => {
            if (activeTab === "careers") {
              if (category.name === "All Careers") return careersData.length;
              return careersData.filter((c) => c.category === category.name)
                .length;
            } else {
              // Active job counts
              const activeJobs = jobs.filter((j) => j.status === "Active");
              if (category.name === "All Careers") return activeJobs.length;
              return activeJobs.filter(
                (j) =>
                  j.category === category.name ||
                  j.category?.toLowerCase() === category.name.toLowerCase() ||
                  category.name
                    .toLowerCase()
                    .includes(j.category?.toLowerCase()),
              ).length;
            }
          };

          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`w-full rounded-xl overflow-hidden transition-all duration-300 border
              
              ${
                isActive
                  ? "bg-[#FF6A3D] border-[#111111] shadow-[0_10px_30px_rgba(248,81,12,0.20)]"
                  : "bg-[#FAFAFA] border-[#F1F1F1] hover:border-[#F8510C]/20 hover:bg-white"
              }
              `}
            >
              <div className="flex items-center justify-between px-2 py-2">
                {/* Left */}
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-[18px] flex items-center justify-center shadow-md bg-gradient-to-r ${category.color}`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Title */}
                  <div className="text-left">
                    <h3
                      className={`text-[16px] font-bold
                      
                      ${isActive ? "text-white" : "text-[#111827]"}`}
                    >
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* Dynamic Count */}
                <div
                  className={`min-w-[38px] h-[38px] rounded-full flex items-center justify-center text-[13px] font-bold
                  
                  ${
                    isActive
                      ? "bg-[#FF9B7A] text-white"
                      : "bg-[#FFF1EB] text-[#F8510C]"
                  }`}
                >
                  {getCategoryCount()}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CareerSidebar;
