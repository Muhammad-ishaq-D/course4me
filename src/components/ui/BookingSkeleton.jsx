import React, { useEffect } from "react";
import { Search } from "lucide-react";

const BookingSkeleton = ({ currentStep }) => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }, []);

  return (
    <div className="bg-[#F1F3F5]  min-h-screen md:pt-30 pt-8  p-4">
      <div className="w-full max-w-200 mx-auto flex gap-6 items-start">
        <div className="flex-1 space-y-6">
          {/* Progress Card */}
          <div className="bg-white rounded-lg p-8 shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100">
            {/* Progress Bar Container */}
            <div className="w-full h-1.5 bg-gray-100 rounded-full mb-8 overflow-hidden">
              <div
                className="h-full bg-[#F15A24] transition-all duration-700 ease-out"
                style={{ width: `${currentStep.progress}%` }}
              />
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="relative ">
                <div className="w-16 h-10 bg-gray-100 rounded border border-gray-200 flex items-end justify-end p-1">
                  <div className="w-8 h-1 bg-gray-200 rounded-full mb-1 mr-1" />
                </div>
                <Search
                  className="absolute -bottom-2 -left-2 text-black bg-white rounded-full p-0.5"
                  size={24}
                  strokeWidth={3}
                />
              </div>
              <div>
                <h2 className="text-lg md:text-[22px] font-bold text-[#1a1a1a] mb-1">
                  {currentStep.title}
                </h2>
                <p className="text-gray-500 text-[15px]">
                  {currentStep.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Skeleton Results */}
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-8 opacity-40 shadow-sm border border-gray-50 ring-1 ring-black/5"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="space-y-3 flex-1">
                  <div className="h-4 bg-gray-200 rounded w-1/4" />
                  <div className="h-8 bg-gray-100 rounded w-1/2" />
                  <div className="h-4 bg-gray-100 rounded w-2/3" />
                </div>
                <div className="space-y-3 w-32">
                  <div className="h-4 bg-gray-200 rounded w-full ml-auto" />
                  <div className="h-8 bg-gray-100 rounded w-full ml-auto" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 bg-gray-100 rounded-md flex-1" />
                <div className="h-10 bg-gray-200 rounded-md w-32" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingSkeleton;
