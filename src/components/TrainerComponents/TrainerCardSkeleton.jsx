import React from "react";
import { motion } from "framer-motion";

function TrainerCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative overflow-hidden rounded-[30px] bg-white border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
    >
      {/* TOP LINE */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-200" />

      {/* IMAGE SKELETON */}
      <div className="relative h-[220px] overflow-hidden bg-gray-200 animate-pulse">
        {/* BADGE */}
        <div className="absolute top-4 left-4 w-24 h-8 rounded-full bg-gray-300" />

        {/* RATING */}
        <div className="absolute top-4 right-4 w-16 h-8 rounded-full bg-gray-300" />

        {/* NAME + ROLE */}
        <div className="absolute bottom-5 left-5 right-5">
          <div className="h-6 w-40 bg-gray-300 rounded-md mb-3" />

          <div className="h-4 w-28 bg-gray-300 rounded-md" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* TITLE */}
        <div className="h-5 w-3/4 bg-gray-200 rounded-md animate-pulse" />

        {/* STATS */}
        <div className="flex items-center justify-between mt-6 gap-3">
          {/* EXPERIENCE */}
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 flex-1 animate-pulse">
            <div className="w-10 h-10 rounded-xl bg-gray-300 flex-shrink-0" />

            <div className="flex-1">
              <div className="h-3 w-16 bg-gray-300 rounded mb-2" />

              <div className="h-4 w-20 bg-gray-300 rounded" />
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 flex-1 animate-pulse">
            <div className="w-10 h-10 rounded-xl bg-gray-300 flex-shrink-0" />

            <div className="flex-1">
              <div className="h-3 w-16 bg-gray-300 rounded mb-2" />

              <div className="h-4 w-20 bg-gray-300 rounded" />
            </div>
          </div>
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mt-5">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-8 w-20 rounded-full bg-gray-200 animate-pulse"
            />
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-6 h-14 w-full rounded-2xl bg-gray-300 animate-pulse" />
      </div>
    </motion.div>
  );
}

export default TrainerCardSkeleton;
