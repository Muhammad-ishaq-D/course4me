import React from "react";

/**
 * Stands in for the featured article at the top of the blog: the same
 * two-column card, so the page keeps its height while it loads.
 */
const FeaturedArticleSkeleton = () => {
  return (
    <section className=" px-4 sm:px-6  mb-20 ">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-4xl lg:rounded-[40px] bg-white border border-gray-100 shadow-[0_25px_80px_rgba(0,0,0,0.08)] animate-pulse">
          <div className="grid lg:grid-cols-2">
            {/* ================= CONTENT SIDE ================= */}
            <div className="relative p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              {/* SMALL LABEL */}
              <div className="h-9 w-40 rounded-full bg-gray-200" />

              {/* TITLE */}
              <div className="mt-7 space-y-3">
                <div className="h-9 sm:h-11 w-full rounded-lg bg-gray-200" />
                <div className="h-9 sm:h-11 w-5/6 rounded-lg bg-gray-200" />
                <div className="h-9 sm:h-11 w-2/3 rounded-lg bg-gray-200" />
              </div>

              {/* DESCRIPTION */}
              <div className="mt-6 space-y-3 max-w-2xl">
                <div className="h-4 w-full rounded-md bg-gray-100" />
                <div className="h-4 w-full rounded-md bg-gray-100" />
                <div className="h-4 w-3/4 rounded-md bg-gray-100" />
              </div>

              {/* META ROW */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="h-4 w-32 rounded-md bg-gray-200" />
                <div className="h-4 w-24 rounded-md bg-gray-200" />
                <div className="h-4 w-28 rounded-md bg-gray-200" />
              </div>

              {/* BUTTON */}
              <div className="mt-10">
                <div className="h-14 w-52 rounded-2xl bg-gray-200" />
              </div>
            </div>

            {/* ================= IMAGE SIDE ================= */}
            <div className="relative overflow-hidden h-70 sm:h-90 lg:h-full bg-gray-200 min-h-[280px]">
              {/* FEATURED BADGE */}
              <div className="absolute top-5 left-5 h-9 w-40 rounded-full bg-white/50" />

              {/* IMAGE BOTTOM INFO */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                <div className="h-14 w-52 rounded-full bg-white/50" />
                <div className="hidden sm:block h-10 w-28 rounded-full bg-white/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticleSkeleton;
