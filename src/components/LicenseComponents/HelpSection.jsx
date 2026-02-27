import React from "react";
import { Phone, Mail } from "lucide-react";

const HelpSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#243443] via-[#1f2f3f] to-[#16222c] py-28 px-6 lg:px-12">

      {/* Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B9FF5A] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Icon Circle */}
        <div className="w-20 h-20 bg-[#B9FF5A] rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg">
          <Phone size={30} className="text-[#1f2f3f]" strokeWidth={2.5} />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Need Help Choosing?
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Our expert advisors are here to guide you to the right licence for
          your career goals. Get free, no-obligation advice today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">

          {/* Call Button */}
          <button className="bg-[#B9FF5A] hover:bg-[#a4e649] text-[#1f2f3f] font-semibold px-10 py-4 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition duration-300">
            <Phone size={18} />
            Call 0800 XXX XXXX
          </button>

          {/* Email Button */}
          <button className="border border-white/30 text-white px-10 py-4 rounded-full flex items-center gap-3 hover:bg-white/10 transition duration-300">
            <Mail size={18} />
            Email Us
          </button>

        </div>

      </div>
    </section>
  );
};

export default HelpSection;