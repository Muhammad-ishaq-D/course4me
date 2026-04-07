import React from 'react';
import { motion } from 'framer-motion';
import { Search, Download, CheckCircle, Star, Shield } from 'lucide-react';

import securityImg from '../../assets/courses/hero/security.png';
import hospitalityImg from '../../assets/courses/hero/hospitality.png';
import firstAidImg from '../../assets/courses/hero/first_aid.png';
import healthSafetyImg from '../../assets/courses/hero/health_safety.png';

const CourseHero = () => {
  return (
    <>
      <section className="bg-[#141414] pt-40 pb-20 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            {/* Badge */}
            <div className="inline-flex items-center bg-[#F65B15]/10 border border-[#F65B15]/30 rounded-full px-5 py-2 mb-6">
              <span className="text-[#F65B15] text-sm font-medium">
                Join the 400,000+ people we've trained in security
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] font-extrabold text-white tracking-[-0.5px] mb-6">
              Training for <span className="text-[#F65B15]">Security</span>,{" "}
              <span className="text-[#F65B15]">Hospitality</span>,{" "}
              <span className="text-[#F65B15]">Health & Safety</span>,{" "}
              and <span className="text-[#F65B15]">First Aid</span>
            </h1>

            {/* Description */}
            <p className="text-white/50 text-[16px] leading-relaxed mb-8 max-w-[520px]">
              Get certified and job-ready with training built for in-demand careers.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-[520px] mb-6">
              <div className="absolute inset-y-0 left-5 flex items-center text-white/30">
                <Search size={18} />
              </div>

              <input
                type="text"
                placeholder="Search course goals"
                className="w-full h-[58px] bg-gradient-to-r from-white/[0.03] to-white/[0.02] border border-white/[0.06] rounded-xl pl-12 pr-36 text-white placeholder:text-white/30 focus:outline-none"
              />

              <button className="absolute right-2 top-1/2 -translate-y-1/2 h-[46px] px-7 bg-[#F65B15] text-white rounded-lg text-sm font-semibold hover:bg-[#e25512] transition">
                Search
              </button>
            </div>

            {/* Download Button */}
            <button className="flex items-center gap-2 border border-white/15 text-white/80 px-5 py-3 rounded-lg text-sm bg-white/[0.02] hover:bg-white/5 transition mb-10">
              <Download size={16} />
              Download career guide
            </button>

          </motion.div>

          {/* RIGHT CONTENT (IMAGE GRID UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-5">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/10">
                  <img src={securityImg} alt="Security" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 opacity-80">
                  <img src={hospitalityImg} alt="Hospitality" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="space-y-5 pt-10">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/10">
                  <img src={healthSafetyImg} alt="Health & Safety" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/10">
                  <img src={firstAidImg} alt="First Aid" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#F65B15]/5 rounded-full blur-[120px]" />
          </motion.div>
        </div>

        {/* BOTTOM STATS (FIXED INLINE STRIP) */}
        <div className="mt-16 pt-6 border-t border-white/[0.08]">
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm">

            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-[#F65B15]" />
              <span className="font-semibold text-white">Real</span>
              <span className="text-white/40">Same day results</span>
            </div>

            <div className="flex items-center gap-2">
              <Star size={16} className="text-green-400" />
              <span className="font-semibold text-white">Proven:</span>
              <span className="text-white/40">100% pass rate</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-[#F65B15]" />
              <span className="font-semibold text-white">Trusted:</span>
              <span className="text-white/40">400,000+ trained</span>
            </div>

            <div className="flex items-center gap-2">
              <Shield size={16} className="text-blue-400" />
              <span className="font-semibold text-white">Zero risk</span>
              <span className="text-white/40">Step-by-step support</span>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-[#EEEEEE] px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center gap-8">
          <button className="text-[#F65B15] font-semibold text-sm py-4 border-b-2 border-[#F65B15]">
            Popular Courses
          </button>
          <button className="text-[#141414]/60 font-medium text-sm py-4 border-b-2 border-transparent hover:text-[#141414] transition-colors">
            All Courses
          </button>
          <button className="text-[#141414]/60 font-medium text-sm py-4 border-b-2 border-transparent hover:text-[#141414] transition-colors">
            Reviews
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseHero;