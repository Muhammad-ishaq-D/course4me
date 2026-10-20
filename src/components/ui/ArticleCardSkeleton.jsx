import React from "react";

/**
 * Stands in for an ArticleCard while the blog loads: the same rounded card,
 * the same 240px image band and the same footer, so the grid does not shift
 * when the real articles arrive.
 */
const ArticleCardSkeleton = () => {
  return (
    <div className="relative flex flex-col h-full overflow-hidden rounded-[30px] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] animate-pulse">
      {/* IMAGE SECTION */}
      <div className="relative h-[240px] bg-gray-200">
        {/* CATEGORY */}
        <div className="absolute top-5 left-5 h-8 w-32 rounded-full bg-white/50" />

        {/* READ TIME */}
        <div className="absolute bottom-5 right-5 h-8 w-24 rounded-full bg-white/50" />
      </div>

      {/* CONTENT */}
      <div className="relative flex flex-col flex-1 p-7">
        {/* DATE */}
        <div className="h-3.5 w-32 rounded-md bg-gray-200" />

        {/* TITLE */}
        <div className="mt-5 space-y-2.5">
          <div className="h-5 w-full rounded-md bg-gray-200" />
          <div className="h-5 w-3/4 rounded-md bg-gray-200" />
        </div>

        {/* DESCRIPTION */}
        <div className="mt-5 space-y-2.5 flex-1">
          <div className="h-3.5 w-full rounded-md bg-gray-100" />
          <div className="h-3.5 w-full rounded-md bg-gray-100" />
          <div className="h-3.5 w-2/3 rounded-md bg-gray-100" />
        </div>

        {/* AUTHOR */}
        <div className="mt-7 pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gray-200" />

            <div className="space-y-2">
              <div className="h-3.5 w-28 rounded-md bg-gray-200" />
              <div className="h-3 w-20 rounded-md bg-gray-100" />
            </div>
          </div>

          <div className="w-11 h-11 rounded-2xl bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default ArticleCardSkeleton;
