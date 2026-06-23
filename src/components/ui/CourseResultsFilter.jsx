import React, { useState, useEffect } from "react";
import { MapPin, Info, ChevronDown } from "lucide-react";

const CourseResultsFilter = ({ filter, setFilter, filterPrices = {} }) => {
  const [showSortModal, setShowSortModal] = useState(false);

  useEffect(() => {
    const handleClick = () => setShowSortModal(false);

    if (showSortModal) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [showSortModal]);

  return (
    <>
      <div className="relative lg:hidden">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowSortModal(!showSortModal);
          }}
          className=" w-full bg-white rounded-2xl border border-gray-200 px-5 py-4 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(241,90,36,0.12)] hover:border-[#F15A24]/20 transition-all duration-300
  "
        >
          <div className="text-left">
            <p className="text-[12px] uppercase tracking-[0.15em] text-gray-400 font-extrabold">
              Sorted By
            </p>

            <p className="mt-1 text-base font-semibold text-[#F15A24] leading-none">
              {filter === "Closest"
                ? "Closest to you"
                : filter === "Cheapest"
                  ? "Lowest Price"
                  : "Soonest Date"}
            </p>
          </div>

          <div
            className={`w-10 h-10rounded-xlbg-[#FFF5F1]flex items-center justify-centertransition-all duration-300${showSortModal ? "rotate-180" : ""}
    `}
          >
            <ChevronDown size={18} className="text-[#F15A24]" />
          </div>
        </button>
        {showSortModal && (
          <div className="absolute left-0 top-full mt-1 w-full bg-white rounded-2xl border border-gray-200 shadow-2xl z-999 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-900">Sort Results</h3>
            </div>

            {[
              { id: "Closest", label: "Closest to you" },
              { id: "Cheapest", label: "Lowest Price" },
              { id: "Earliest", label: "Soonest Date" },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  setFilter(option.id);
                  setShowSortModal(false);
                }}
                className={`w-full text-sm px-4 py-4 flex items-center justify-between text-left transition ${
                  filter === option.id ? "bg-[#FFF5F1]" : "hover:bg-gray-50"
                }`}
              >
                <div>
                  <p
                    className={`font-semibold ${
                      filter === option.id ? "text-[#F15A24]" : "text-gray-800"
                    }`}
                  >
                    {option.label}
                  </p>
                </div>

                {filterPrices[option.id] && (
                  <span
                    className={`font-black ${
                      filter === option.id ? "text-[#F15A24]" : "text-gray-900"
                    }`}
                  >
                    {filterPrices[option.id]}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <aside className="hidden lg:block lg:relative lg:top-22 lg:w-70 shrink-0">
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
    </>
  );
};

export default CourseResultsFilter;
