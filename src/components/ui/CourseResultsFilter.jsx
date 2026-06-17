import React from "react";
import { MapPin, Info } from "lucide-react";

const CourseResultsFilter = ({ filter, setFilter, filterPrices = {} }) => {
  return (
    <aside className="w-full lg:relative lg:top-22 lg:w-70 shrink-0">
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden p-2">
        {/* Header */}
        <div className="px-4 pt-4 pb-2">
          <h2 className="text-[14px] font-black text-gray-400 uppercase tracking-widest mb-1">
            Sort Results
          </h2>
          <div className="h-1 w-8 bg-[#F15A24] rounded-full mb-4"></div>
        </div>

        <div className="space-y-1">
          {[
            { id: "Closest", label: "Closest to you" },
            { id: "Cheapest", label: "Lowest Price" },
            { id: "Earliest", label: "Soonest Date" },
          ].map((option) => {
            const isActive = filter === option.id;
            return (
              <div
                key={option.id}
                onClick={() => setFilter(option.id)}
                className={`flex items-center justify-between px-4 py-4 cursor-pointer transition-all duration-300 rounded-[18px] group ${
                  isActive
                    ? "bg-[#F15A24] shadow-lg shadow-[#F15A24]/20"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Premium Radio Style */}
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isActive ? "border-white bg-white" : "border-gray-200"
                    }`}
                  >
                    {isActive && (
                      <div className="w-2 h-2 rounded-full bg-[#F15A24]" />
                    )}
                  </div>

                  <div className="flex flex-col">
                    <span
                      className={`text-[16px] font-bold leading-tight transition-colors ${
                        isActive ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {option.label}
                    </span>
                    {!isActive && (
                      <span className="text-[14px] text-gray-400 font-medium">
                        View results
                      </span>
                    )}
                  </div>
                </div>

                {filterPrices[option.id] && (
                  <div className="text-right">
                    <span
                      className={`text-[16px] font-black transition-colors ${
                        isActive ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {filterPrices[option.id]}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default CourseResultsFilter;
