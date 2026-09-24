import React from "react";

/**
 * Stands in for a blog article while it loads: the dark hero, the cover that
 * overlaps it, and the body column, so the page does not jump when the real
 * article arrives.
 */
const BlogArticleSkeleton = () => {
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-20">
      {/* ─── HERO ─── */}
      <div className="relative bg-[#0B1D33] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D33] via-[#102743] to-[#183B63]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-4 md:pt-6 lg:pt-8 pb-48">
          {/* Breadcrumb */}
          <div className="hidden md:flex items-center gap-2 mb-8">
            <div className="h-4 w-14 rounded-md bg-white/10 animate-pulse" />
            <div className="h-4 w-3 rounded-md bg-white/10 animate-pulse" />
            <div className="h-4 w-12 rounded-md bg-white/10 animate-pulse" />
            <div className="h-4 w-3 rounded-md bg-white/10 animate-pulse" />
            <div className="h-4 w-28 rounded-md bg-white/10 animate-pulse" />
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="h-9 w-36 rounded-full bg-white/10 animate-pulse" />
            <div className="h-9 w-28 rounded-full bg-white/10 animate-pulse" />
          </div>

          {/* TITLE */}
          <div className="space-y-4 max-w-4xl">
            <div className="h-10 md:h-14 w-full rounded-lg bg-white/10 animate-pulse" />
            <div className="h-10 md:h-14 w-5/6 rounded-lg bg-white/10 animate-pulse" />
          </div>

          {/* EXCERPT */}
          <div className="mt-8 space-y-3 max-w-3xl">
            <div className="h-5 w-full rounded-md bg-white/5 animate-pulse" />
            <div className="h-5 w-4/5 rounded-md bg-white/5 animate-pulse" />
          </div>

          {/* AUTHOR ROW */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-32 rounded-md bg-white/10 animate-pulse" />
                <div className="h-3 w-24 rounded-md bg-white/5 animate-pulse" />
              </div>
            </div>

            <div className="h-4 w-28 rounded-md bg-white/10 animate-pulse" />
            <div className="h-4 w-24 rounded-md bg-white/10 animate-pulse" />
          </div>
        </div>
      </div>

      {/* ─── COVER ─── */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 -mt-40 relative z-20">
        <div className="h-64 md:h-96 w-full rounded-3xl bg-gray-200 border border-gray-100 shadow-[0_25px_80px_rgba(0,0,0,0.12)] animate-pulse" />
      </div>

      {/* ─── BODY ─── */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 mt-16 space-y-10">
        {[...Array(4)].map((_, section) => (
          <div key={section} className="space-y-4">
            {/* Heading */}
            <div className="h-7 w-2/3 rounded-lg bg-gray-200 animate-pulse" />

            {/* Paragraph */}
            <div className="space-y-3">
              <div className="h-4 w-full rounded-md bg-gray-100 animate-pulse" />
              <div className="h-4 w-full rounded-md bg-gray-100 animate-pulse" />
              <div className="h-4 w-full rounded-md bg-gray-100 animate-pulse" />
              <div className="h-4 w-3/4 rounded-md bg-gray-100 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogArticleSkeleton;
