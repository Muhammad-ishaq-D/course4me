import React from "react";
import { Star, Heart, MapPin } from "lucide-react";

const LocationCards = ({ center, activeCenter, setActiveCenter }) => {
  return (
    <div
      key={center.id}
      onMouseEnter={() => setActiveCenter(center.id)}
      onMouseLeave={() => setActiveCenter(null)}
      className={`group relative bg-white border rounded-[28px] p-3 transition-all duration-300 cursor-pointer overflow-hidden${
        activeCenter === center.id
          ? "border-orange-300 shadow-[0_20px_60px_rgba(249,115,22,0.15)]"
          : "border-gray-200 hover:border-orange-200 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
      }`}
    >
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/0 via-orange-50/40 to-orange-50/0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

      {/* ======================================================
                        MAIN CONTENT
                  ====================================================== */}
      <div className="relative flex flex-col sm:flex-row gap-4">
        {/* ======================================================
                          IMAGE
                    ====================================================== */}
        <div className="w-full sm:w-32 md:w-36 h-52 sm:h-32 md:h-28 rounded-3xl overflow-hidden flex-shrink-0">
          <img
            src={center.image}
            alt={center.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* ======================================================
                          RIGHT CONTENT
                    ====================================================== */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* ======================================================
                            TOP SECTION
                      ====================================================== */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            {/* ======================================================
                              LEFT CONTENT
                        ====================================================== */}
            <div className="flex-1 min-w-0">
              {/* Title */}
              <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900 leading-tight break-words">
                {center.name}
              </h3>

              {/* Address */}
              <div className="flex items-center gap-2 mt-3">
                <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-orange-500" />
                </div>

                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {center.address}
                </p>
              </div>

              {/* Rating */}
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(1)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-4 h-4 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>

                {/* Rating */}
                <span className="text-sm font-semibold text-gray-800">
                  {center.rating}
                </span>

                {/* Reviews */}
                <span className="text-sm text-gray-400">
                  ({center.reviews} reviews)
                </span>
              </div>
            </div>

            {/* ======================================================
                              ACTIONS
                        ====================================================== */}
            <div className="flex sm:flex-col items-center sm:items-end gap-2 flex-shrink-0">
              {/* Heart Button */}
              <button className="w-11 h-11 rounded-2xl border border-gray-200 bg-white flex items-center justify-center hover:bg-orange-50 hover:border-orange-200 transition-all duration-300">
                <Heart className="w-4 h-4 text-gray-500 hover:text-orange-500 transition-colors" />
              </button>

              {/* View Button */}
              <button className="h-11 px-5 sm:px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-orange-200 whitespace-nowrap w-full sm:w-auto">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCards;
