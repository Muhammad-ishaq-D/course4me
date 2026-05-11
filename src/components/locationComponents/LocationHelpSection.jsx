import React from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";

const LocationHelpSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f1720] py-10 sm:py-12 lg:py-14 px-4 sm:px-6">
      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="absolute top-[-180px] left-[-180px] w-[420px] h-[420px] bg-[#F15A24] opacity-10 blur-[150px] rounded-full pointer-events-none" />

      <div className="absolute bottom-[-180px] right-[-180px] w-[420px] h-[420px] bg-[#2563eb] opacity-10 blur-[160px] rounded-full pointer-events-none" />

      {/* ================= MAIN CARD ================= */}
      <div className="relative max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-[#2d3945]/95 via-[#243443]/95 to-[#1d2935]/95 backdrop-blur-2xl px-5 sm:px-8 lg:px-10 py-7 sm:py-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(241,90,36,0.08),transparent_45%)] pointer-events-none" />

          {/* ================= ICON ================= */}
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 mx-auto mb-5">
            {/* Glow */}
            <div className="absolute inset-0 bg-[#F15A24] opacity-40 blur-3xl rounded-full" />

            {/* Icon Circle */}
            <div className="relative w-full h-full rounded-full bg-[#F15A24] flex items-center justify-center shadow-[0_20px_45px_rgba(241,90,36,0.35)]">
              <Phone size={26} className="text-white" strokeWidth={2.5} />
            </div>
          </div>

          {/* ================= HEADING ================= */}
          <h2 className="text-[28px] sm:text-[40px] lg:text-[50px] font-extrabold leading-[1] tracking-tight text-white max-w-4xl mx-auto">
            Need Help Finding
            <span className="block text-[#F15A24]">
              Your Nearest Training Centre?
            </span>
          </h2>

          {/* ================= PARAGRAPH ================= */}
          <p className="text-[#c7d0db] mt-4 text-[15px] sm:text-[17px] leading-relaxed max-w-3xl mx-auto">
            Speak with our support team today. We'll help you find the closest
            available SIA training centre and guide you toward the right course
            for your career goals.
          </p>

          {/* ================= FEATURES ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 max-w-4xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white/8 border border-white/10 rounded-[22px] py-4 px-4 backdrop-blur-xl">
              <div className="text-[#F15A24] text-[26px] font-extrabold leading-none">
                85+
              </div>

              <div className="text-[#d8dee7] mt-2 text-[14px] font-medium">
                UK Training Centres
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/8 border border-white/10 rounded-[22px] py-4 px-4 backdrop-blur-xl">
              <div className="text-[#F15A24] text-[26px] font-extrabold leading-none">
                Fast
              </div>

              <div className="text-[#d8dee7] mt-2 text-[14px] font-medium">
                Expert Assistance
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/8 border border-white/10 rounded-[22px] py-4 px-4 backdrop-blur-xl">
              <div className="text-[#F15A24] text-[26px] font-extrabold leading-none">
                Free
              </div>

              <div className="text-[#d8dee7] mt-2 text-[14px] font-medium">
                Career Guidance
              </div>
            </div>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 mt-7">
            {/* Call Button */}
            <button
              onClick={() => (window.location.href = "tel:08006894621")}
              className="group w-full sm:w-auto bg-[#F15A24] hover:bg-[#de4d18] text-white px-7 sm:px-8 py-3.5 rounded-[20px] font-bold text-[16px] transition-all duration-300 shadow-[0_20px_50px_rgba(241,90,36,0.35)] hover:shadow-[0_25px_65px_rgba(241,90,36,0.45)] hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <Phone size={18} strokeWidth={2.5} />
              Call Free — 08006894621
            </button>

            {/* Email Button */}
            <button
              onClick={() =>
                (window.location.href = "mailto:info@courses4me.co.uk")
              }
              className="group w-full sm:w-auto bg-white/8 hover:bg-white/12 border border-white/10 text-white px-7 sm:px-8 py-3.5 rounded-[20px] font-semibold text-[15px] backdrop-blur-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Mail size={18} strokeWidth={2.3} />
              info@courses4me.co.uk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHelpSection;
