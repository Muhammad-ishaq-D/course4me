import React from "react";

const ItemCardSkeleton = () => {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[26px]
        bg-white
        border border-gray-100
        p-5
        shadow-[0_10px_35px_rgba(0,0,0,0.04)]
        animate-pulse
      "
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 blur-3xl rounded-full" />

      <div className="relative flex items-center justify-between gap-4">
        {/* LEFT */}
        <div className="flex items-center gap-4 min-w-0 flex-1">
          {/* ICON */}
          <div className="w-14 h-14 rounded-2xl bg-gray-200 flex-shrink-0" />

          {/* CONTENT */}
          <div className="min-w-0 flex-1">
            {/* TITLE */}
            <div className="h-4 w-40 bg-gray-200 rounded-md mb-3" />

            {/* DESCRIPTION */}
            <div className="h-3 w-28 bg-gray-100 rounded-md" />
          </div>
        </div>

        {/* RIGHT ARROW */}
        <div className="w-11 h-11 rounded-xl bg-gray-200 flex-shrink-0" />
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200" />
    </div>
  );
};

export default ItemCardSkeleton;
