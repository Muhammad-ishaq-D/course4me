import React from 'react';
import { MapPin } from 'lucide-react';

export default function NationwideCoverage() {
  return (
    <section className="py-20 px-4 md:px-6 w-full font-sans bg-[#F8FAFC]">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[40px] font-black text-[#18181B] tracking-tight mb-4">
            Nationwide Coverage
          </h2>
          <p className="text-[#52525B] text-[18px] md:text-[20px] font-medium max-w-2xl mx-auto">
            From major cities to local communities, we're here for you
          </p>
        </div>

        {/* Main Box Area */}
        <div className="w-full relative bg-[#4D4E4E] rounded-[24px] overflow-hidden shadow-xl min-h-[400px] md:min-h-[500px] flex items-center justify-center p-8">

          {/* Faint Background Map Image layer - using a placeholder map pattern that's subtle and dark */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"

          ></div>

          {/* Inner Content overlaying the map background */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-[600px] mt-10">
            {/* Big Map Pin Icon */}
            <div className="mb-6">
              <MapPin size={72} className="text-[#F15A24] drop-shadow-md" />
            </div>

            {/* Title */}
            <h3 className="text-white text-[32px] md:text-[40px] font-extrabold tracking-tight mb-4">
              85+ Locations
            </h3>

            {/* Subtitle */}
            <p className="text-gray-300 text-[16px] md:text-[18px] mb-8 font-medium px-4">
              Training centres across England, Scotland, Wales &amp; Northern Ireland
            </p>

            {/* Action Button */}
            <button className="bg-[#F15A24] hover:bg-[#E55A0A] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 text-[15px] transform hover:-translate-y-0.5 active:translate-y-0">
              <MapPin size={18} className="text-white" />
              View Interactive Map
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
