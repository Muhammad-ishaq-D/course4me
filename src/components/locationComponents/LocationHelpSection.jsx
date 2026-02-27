import React from "react";
import { Phone, Mail } from "lucide-react";

const LocationHelpSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#243443] via-[#1f2f3f] to-[#16222c] py-24 px-6 text-center">

      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,255,90,0.15),transparent_60%)] pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto">

        {/* Icon Circle */}
        <div className="w-20 h-20 mx-auto bg-[#B9FF5A] rounded-full flex items-center justify-center mb-8 shadow-lg">
          <Phone size={34} className="text-[#1f2f3f]" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Can't Find Your Location?
        </h2>

        {/* Paragraph */}
        <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
          We're constantly expanding. Contact us to find out about upcoming
          locations or discuss options near you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

          {/* Primary Button */}
          <button className="bg-[#B9FF5A] hover:bg-[#a6e64c] text-[#1f2f3f] font-semibold px-8 py-4 rounded-full shadow-lg transition flex items-center justify-center gap-3">
            <Phone size={18} />
            Call 0800 XXX XXXX
          </button>

          {/* Secondary Button */}
          <button className="border border-white/40 text-white px-8 py-4 rounded-full hover:bg-white/10 transition flex items-center justify-center gap-3">
            <Mail size={18} />
            Request Info
          </button>

        </div>

      </div>
    </section>
  );
};

export default LocationHelpSection;