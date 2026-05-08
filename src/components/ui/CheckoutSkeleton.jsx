import React from "react";

const CheckoutSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F4] pt-[100px] font-sans">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-8">
        <div className="h-5 bg-gray-200 rounded w-36 mb-6 animate-pulse" />
        <div className="h-8 bg-gray-200 rounded w-56 mb-2 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-72 mb-10 animate-pulse" />
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="h-5 bg-gray-200 rounded w-32 mb-6 animate-pulse" />
              <div className="flex gap-4 mb-3">
                <div className="h-12 bg-gray-100 rounded flex-1 animate-pulse" />
                <div className="h-12 bg-gray-100 rounded flex-1 animate-pulse" />
              </div>
              <div className="h-12 bg-gray-100 rounded w-full mb-3 animate-pulse" />
              <div className="h-12 bg-gray-100 rounded w-full mb-3 animate-pulse" />
              <div className="h-12 bg-gray-100 rounded w-full mb-6 animate-pulse" />
              <div className="h-12 bg-gray-200 rounded w-40 animate-pulse" />
            </div>
            {[2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
              >
                <div className="h-4 bg-gray-100 rounded w-40 animate-pulse" />
              </div>
            ))}
          </div>
          <div className="w-full lg:w-[340px] space-y-4">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="h-10 bg-gray-200 w-full animate-pulse" />
              <div className="p-5 space-y-3">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded bg-gray-100 shrink-0 animate-pulse" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse" />
                    <div className="h-3 bg-gray-100 rounded w-1/2 animate-pulse" />
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
                </div>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="h-3 bg-gray-100 rounded w-2/3 animate-pulse" />
                    <div className="h-3 bg-gray-100 rounded w-14 animate-pulse" />
                  </div>
                ))}
                <div className="h-px bg-gray-100 my-2" />
                <div className="flex justify-between">
                  <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm space-y-3">
              <div className="h-4 bg-gray-200 rounded w-32 animate-pulse" />
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-3 bg-gray-100 rounded animate-pulse"
                />
              ))}
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm space-y-3">
              <div className="h-3 bg-gray-200 rounded w-40 animate-pulse" />
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="h-3 bg-gray-100 rounded animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSkeleton;
