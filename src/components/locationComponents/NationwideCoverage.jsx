import React from "react";
import { MapPin } from "lucide-react";

const NationwideCoverage = () => {
  return (
    <section className="bg-[#f4f6f8] py-24 px-6">

      <div className="max-w-6xl mx-auto text-center">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#2f3a47]">
          Nationwide Coverage
        </h2>

        <p className="text-gray-600 mt-4 text-lg">
          From major cities to local communities, we're here for you
        </p>

        {/* Card */}
        <div className="relative mt-16 rounded-3xl overflow-hidden shadow-2xl">

          {/* Dark Gradient Background */}
          <div className="bg-gradient-to-br from-[#4a5663] via-[#3f4c5a] to-[#35424f] py-24 px-6">

            {/* Soft Overlay for depth */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center text-white">

              {/* Icon */}
              <div className="w-20 h-20 bg-[#B9FF5A] rounded-full flex items-center justify-center mb-8 shadow-lg">
                <MapPin size={36} className="text-[#2f3a47]" />
              </div>

              {/* Title */}
              <h3 className="text-4xl md:text-5xl font-bold">
                85+ Locations
              </h3>

              {/* Subtitle */}
              <p className="text-gray-200 mt-4 text-lg max-w-2xl">
                Training centres across England, Scotland, Wales & Northern Ireland
              </p>

              {/* Button */}
              <button className="mt-10 bg-[#B9FF5A] hover:bg-[#a6e64c] text-[#1f2f3f] font-semibold px-8 py-4 rounded-full shadow-lg transition">
                View Interactive Map
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default NationwideCoverage;