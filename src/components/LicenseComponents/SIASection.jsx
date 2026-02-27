import React from "react";
import badgeIcon from "../../assets/license/badge.svg";
import starIcon from "../../assets/license/star.svg";
import arrowIcon from "../../assets/license/arrow.svg";
import siaImage from "../../assets/license/sia.png";

const SIASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#243443] via-[#1f2f3f] to-[#16222c] py-20 px-6 lg:px-12">

      {/* Soft Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B9FF5A] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#B9FF5A1A] border border-[#B9FF5A] text-[#B9FF5A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <img src={badgeIcon} className="w-4 h-4" />
              SIA Approved & Regulated
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Get Your SIA <br /> Licence
            </h2>

            {/* Paragraph */}
            <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-xl">
              Choose from our range of Security Industry Authority (SIA)
              licences. All training includes expert instruction, same-day
              exam results, and 3-year licence validity.
            </p>

            {/* Stats Pills */}
            <div className="flex flex-wrap gap-4 mt-8">

              <div className="bg-[#2f3f50] border border-white/10 rounded-2xl px-6 py-4 text-center min-w-[140px]">
                <div className="text-[#B9FF5A] text-2xl font-bold">95%</div>
                <div className="text-gray-400 text-sm mt-1">Pass Rate</div>
              </div>

              <div className="bg-[#2f3f50] border border-white/10 rounded-2xl px-6 py-4 text-center min-w-[140px]">
                <div className="text-[#B9FF5A] text-2xl font-bold">24–48h</div>
                <div className="text-gray-400 text-sm mt-1">Processing</div>
              </div>

              <div className="bg-[#2f3f50] border border-white/10 rounded-2xl px-6 py-4 text-center min-w-[140px]">
                <div className="text-[#B9FF5A] text-2xl font-bold">3 Years</div>
                <div className="text-gray-400 text-sm mt-1">Validity</div>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-[#B9FF5A] hover:bg-[#a4e649] text-[#1f2f3f] font-semibold px-8 py-4 rounded-full shadow-lg transition">
                Book Your Training
              </button>

              <button className="border border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition">
                Free Advice
              </button>
            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-6">

            {/* Top Large Glass Card */}
            <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8">

              <img
                src={siaImage}
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#B9FF5A] rounded-xl flex items-center justify-center mb-6">
                  <img src={badgeIcon} className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Official SIA Certification
                </h3>

                <p className="text-gray-300 mt-2">
                  Nationally recognized security licences
                </p>
              </div>
            </div>

            {/* Bottom 2 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="rounded-3xl bg-gradient-to-br from-[#2a4f7c] to-[#1f3c5c] p-8 text-white">
                <div className="w-10 h-10 bg-[#B9FF5A] rounded-xl flex items-center justify-center mb-4">
                  <img src={starIcon} className="w-5 h-5" />
                </div>

                <div className="text-3xl font-bold">85+</div>
                <div className="text-gray-300 mt-1">
                  UK Training Locations
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-[#4c2b72] to-[#352055] p-8 text-white">
                <div className="w-10 h-10 bg-[#B9FF5A] rounded-xl flex items-center justify-center mb-4">
                  <img src={arrowIcon} className="w-5 h-5" />
                </div>

                <div className="text-3xl font-bold">400K+</div>
                <div className="text-gray-300 mt-1">
                  People Licensed
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SIASection;