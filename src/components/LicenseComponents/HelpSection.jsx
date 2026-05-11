import React from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";

const HelpSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#243443] via-[#1d2b38] to-[#121c24] py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-10">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-20 w-72 h-72 bg-[#F15A24] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute -bottom-32 -right-20 w-72 h-72 bg-[#F15A24] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* ================= MAIN CARD ================= */}
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_15px_60px_rgba(0,0,0,0.25)]">
          {/* Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F15A24]/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative px-5 sm:px-7 lg:px-10 py-8 sm:py-10">
            {/* ================= BADGE ================= */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F15A2415] border border-[#F15A24]/20 text-[#F15A24] text-xs sm:text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#F15A24]" />
                Free Career Guidance
              </div>
            </div>

            {/* ================= ICON ================= */}
            <div className="relative flex justify-center mt-5">
              {/* Glow */}
              <div className="absolute w-20 h-20 bg-[#F15A24] opacity-20 blur-[40px] rounded-full" />

              {/* Icon */}
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-[22px] bg-gradient-to-br from-[#F15A24] to-[#d94812] flex items-center justify-center shadow-[0_12px_30px_rgba(241,90,36,0.30)]">
                <Phone size={26} className="text-white" strokeWidth={2.5} />
              </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="text-center max-w-2xl mx-auto mt-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
                Need Help Choosing
                <span className="text-[#F15A24]"> The Right Licence?</span>
              </h2>

              <p className="text-gray-300 mt-3 text-sm sm:text-base leading-relaxed">
                Get free expert advice and find the perfect SIA course for your
                future career goals.
              </p>
            </div>

            {/* ================= FEATURES ================= */}
            <div className="grid grid-cols-3 gap-3 mt-6 max-w-2xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-2xl py-3 text-center backdrop-blur-md">
                <div className="text-[#F15A24] text-lg font-bold">24/7</div>

                <div className="text-gray-300 text-[11px] sm:text-xs mt-1">
                  Expert Support
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl py-3 text-center backdrop-blur-md">
                <div className="text-[#F15A24] text-lg font-bold">Free</div>

                <div className="text-gray-300 text-[11px] sm:text-xs mt-1">
                  Career Advice
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl py-3 text-center backdrop-blur-md">
                <div className="text-[#F15A24] text-lg font-bold">Fast</div>

                <div className="text-gray-300 text-[11px] sm:text-xs mt-1">
                  Response
                </div>
              </div>
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-5">
              {/* Call Button */}
              <button
                onClick={() => (window.location.href = "tel:08006894621")}
                className="group bg-[#F15A24] hover:bg-[#de4d18] text-white font-semibold px-6 sm:px-8 py-3 rounded-2xl flex items-center justify-center gap-2 shadow-[0_12px_30px_rgba(241,90,36,0.30)] hover:shadow-[0_18px_40px_rgba(241,90,36,0.40)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
              >
                <Phone size={17} />

                <span>08006894621</span>

                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

              {/* Email Button */}
              <button
                onClick={() =>
                  (window.location.href = "mailto:info@courses4me.co.uk")
                }
                className="border border-white/15 bg-white/5 backdrop-blur-md text-white px-6 sm:px-8 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
              >
                <Mail size={17} />

                <span>info@courses4me.co.uk</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
