import React from "react";
import badgeIcon from "../../assets/license/badge.svg";
import badgeIcon1 from "../../assets/license/badge1.svg";
import starIcon from "../../assets/license/star.svg";
import arrowIcon from "../../assets/license/arrow.svg";
import siaImage from "../../assets/license/sia.png";

const SIASection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#243443] via-[#1d2c3a] to-[#121b24] py-12 sm:py-26 lg:py-20 px-4 sm:px-6 lg:px-10">
      {/* Background Glow */}
      <div className="absolute -top-30 -right-30 w-[320px] h-80 sm:w-112.5 sm:h-112.5 bg-[#F15A24] opacity-15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F15A241A] border border-[#F15A24]/40 text-[#F15A24] px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md shadow-md">
              <img src={badgeIcon1} className="w-4 h-4" />
              SIA Approved & Regulated
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Get Your SIA <br className="hidden sm:block" />
              Licence
            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From zero experience to becoming a fully licensed security
              professional in as little as 3 weeks. Expert-led training,
              same-day results, and a 3-year licence that opens doors across the
              UK.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-lg hover:-translate-y-0.75 transition duration-300">
                <h3 className="text-[#F15A24] text-3xl font-bold">95%</h3>
                <p className="text-gray-400 text-sm mt-1">Pass Rate</p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-lg hover:-translate-y-0.75 transition duration-300">
                <h3 className="text-[#F15A24] text-3xl font-bold">24–48h</h3>
                <p className="text-gray-400 text-sm mt-1">Processing</p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-lg hover:-translate-y-0.75 transition duration-300">
                <h3 className="text-[#F15A24] text-3xl font-bold">3 Years</h3>
                <p className="text-gray-400 text-sm mt-1">Validity</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-10">
              <button className="w-full sm:w-auto bg-[#F15A24] hover:bg-[#d9480f] text-white font-semibold px-8 py-4 rounded-full shadow-[0_10px_30px_rgba(241,90,36,0.35)] transition-all duration-300 hover:scale-[1.02]">
                Book My Training
              </button>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative">
            {/* Main Glass Card */}
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl">
              {/* Background Image */}
              <img
                src={siaImage}
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-black/20 to-black/40" />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#F15A24] rounded-2xl flex items-center justify-center shadow-lg">
                  <img src={badgeIcon} className="w-7 h-7" />
                </div>

                <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Official SIA Certification
                </h3>

                <p className="mt-3 text-gray-300 text-base leading-relaxed max-w-md">
                  Nationally recognised security licences trusted across the UK
                  security industry.
                </p>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
              {/* Card 1 */}
              <div className="rounded-[28px] bg-linear-to-br from-[#2d5b8f] to-[#1d3956] p-6 sm:p-7 text-white shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <img src={starIcon} className="w-7 h-7" />
                </div>

                <h3 className="mt-5 text-3xl font-bold">85+</h3>
                <p className="mt-1 text-gray-300 text-sm">
                  UK Training Locations
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-[28px] bg-linear-to-br from-[#5c2f8e] to-[#341b57] p-6 sm:p-7 text-white shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <img src={arrowIcon} className="w-7 h-7" />
                </div>

                <h3 className="mt-5 text-3xl font-bold">400K+</h3>
                <p className="mt-1 text-gray-300 text-sm">People Licensed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIASection;
