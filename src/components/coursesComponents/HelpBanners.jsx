import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

const HelpBanners = () => {
  return (
    <div className="w-full">

      {/* 🔶 ORANGE HELP BAR */}
      <section className="bg-[#F65B15] py-6 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT */}
          <div>
            <h3 className="text-[22px] font-bold text-white leading-tight">
              Do you need help?
            </h3>
            <p className="text-white/80 text-[14px] mt-1">
              Our team's got your back. Chat with us today.
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-wrap items-center gap-3">

            <button className="flex items-center gap-2 bg-white text-[#1C1C1C] px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-100 transition">
              <MessageCircle size={16} />
              Chat online
            </button>

            <button className="flex items-center gap-2 bg-white text-[#1C1C1C] px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-100 transition">
              <Phone size={16} />
              Help centre
            </button>

            <button className="flex items-center gap-2 bg-white text-[#1C1C1C] px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-100 transition">
              <Mail size={16} />
              Email us
            </button>

          </div>
        </div>
      </section>

      {/* ⚫ DARK CTA SECTION */}
      <section className="bg-[#141414] py-16 px-6 lg:px-16 text-center">

        <div className="max-w-3xl mx-auto">

          {/* HEADING */}
          <h2 className="text-[28px] md:text-[34px] font-bold text-white mb-4 leading-tight">
            Not sure which course is right for you?
          </h2>

          {/* SUBTEXT */}
          <p className="text-white/50 text-[15px] mb-8 leading-relaxed">
            Speak to our expert advisors who can guide you to the perfect career path
          </p>

          {/* CTA BUTTON */}
          <button className="bg-[#F65B15] hover:bg-[#e25512] text-white px-8 py-3 rounded-full text-sm font-semibold shadow-md shadow-[#F65B15]/20 transition">
            Get Free Career Advice
          </button>

        </div>
      </section>
    </div>
  );
};

export default HelpBanners;