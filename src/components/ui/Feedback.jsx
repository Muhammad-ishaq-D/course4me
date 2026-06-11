import React, { useEffect, useState } from "react";
import { Phone, Star, ShieldCheck } from "lucide-react";

const Feedback = () => {
  return (
    <aside className="w-full lg:w-[300px] space-y-5">
      {/* 1. Guarantee Box */}
      <div className="bg-white rounded-[28px] border border-slate-200 p-6 shadow-lg overflow-hidden relative">
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-[#FFF5F1] text-[#F15A24] text-[12px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          Trusted
        </div>

        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-[#F15A24]/10 flex items-center justify-center mb-5">
          <ShieldCheck size={28} className="text-[#F15A24]" />
        </div>

        {/* Title */}
        <h3 className="text-[24px] font-black text-slate-900 mb-2">
          Trusted By Thousands
        </h3>

        <p className="text-slate-500 text-md leading-relaxed mb-6">
          Join thousands of learners who have successfully completed their
          training through Courses4Me.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-slate-50 rounded-xl p-3 text-center">
            <h4 className="text-lg font-black text-[#F15A24]">4.9★</h4>
            <p className="text-sm text-slate-500">Rating</p>
          </div>

          <div className="bg-slate-50 rounded-xl p-3 text-center">
            <h4 className="text-lg font-black text-[#F15A24]">10K+</h4>
            <p className="text-sm text-slate-500">Students</p>
          </div>

          <div className="bg-slate-50 rounded-xl px-2 py-3 text-center">
            <h4 className="text-lg font-black text-[#F15A24]">95%</h4>
            <p className="text-sm text-slate-500">Pass Rate</p>
          </div>
        </div>
      </div>

      {/* 3. Social Proof Box */}
      <div className="bg-white rounded-[28px] border border-slate-100 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[12px] uppercase tracking-[2px] font-bold text-slate-400">
              Student Rating
            </p>

            <h3 className="text-xl font-black text-slate-900 mt-1">
              Excellent
            </h3>
          </div>

          <div className="bg-[#FFF5F2] px-3 py-2 rounded-xl">
            <span className="text-[#F15A24] text-sm font-black">
              Trustpilot
            </span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F15A24] to-[#FF7A45] flex items-center justify-center shadow-lg">
            <span className="text-3xl font-black text-white">4.9</span>
          </div>

          <div>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill="#F15A24"
                  className="text-[#F15A24]"
                />
              ))}
            </div>

            <p className="text-slate-900 font-bold text-sm">
              Rated by Students
            </p>

            <p className="text-slate-500 text-base">
              Based on 9,511 verified reviews
            </p>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 gap-3 pt-5 border-t border-slate-100">
          <div className="bg-slate-50 rounded-xl p-3 text-center">
            <p className="text-2xl font-black text-slate-900">95%</p>
            <p className="text-sm text-slate-500 font-medium">Pass Rate</p>
          </div>

          <div className="bg-slate-50 rounded-xl p-3 text-center">
            <p className="text-2xl font-black text-slate-900">9.5k+</p>
            <p className="text-sm text-slate-500 font-medium">Reviews</p>
          </div>
        </div>
      </div>

      {/* 4. Help Box */}
      <div className="bg-slate-900 rounded-[24px] p-6 text-white group cursor-pointer hover:bg-slate-800 transition-colors">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F15A24] flex items-center justify-center text-white shadow-lg shadow-[#F15A24]/20 group-hover:scale-110 transition-transform">
            <Phone size={20} fill="currentColor" />
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-white text-[18px] mb-2">
              Need Help?
            </h3>

            <div className="space-y-0">
              {/* Phone */}
              <a
                href="tel:+448006894621"
                className="flex items-center gap-2 group"
              >
                <span className="text-[20px] font-extrabold text-[#F15A24] group-hover:text-[#ff7241] transition-colors">
                  0800 689 4621
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@courses4me.co.uk?subject=Course Enquiry"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="text-[15px] font-medium border-b border-transparent group-hover:border-white/20 pb-0.5">
                  info@courses4me.co.uk
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Feedback;
