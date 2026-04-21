import React from "react";
import { Smartphone, Download, ArrowRight, Apple, Play } from "lucide-react";

// Note: The provided image mentions a specific asset "Get Licensed App.png".
// This import path should point to your actual image file.
import GetLicensedApp from "../../assets/home/Courses4Me App.png";

const AppPromotionSection = () => {
  return (
    <section className="w-full bg-[#1A1A1A] py-24 font-sans relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5421] opacity-5 blur-[100px] -mr-48 -mt-48"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* LEFT: Phone Mockup Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF5421] opacity-20 blur-[80px] rounded-full"></div>
              <img
                src={GetLicensedApp}
                alt="Get Licensed App mobile phone mockup"
                className="w-72 md:w-80 lg:w-[420px] h-auto object-contain relative z-10"
              />
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div className="flex-1 text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#00A3FF] text-white text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-lg mb-8 shadow-lg">
              <Smartphone size={14} />
              UK's #1 Security App
            </div>

            {/* Heading */}
            <h2 className="text-[36px] md:text-[48px] lg:text-[44px] font-bold leading-[1.1] mb-6 tracking-tight">
              Start Your Security Career <br />
              <span className="text-[#00A3FF]">Right From Your Pocket</span>
            </h2>

            {/* Sub-headline */}
            <p className="text-gray-400 text-lg mb-10 max-w-xl font-medium leading-relaxed">
              Download our app for exclusive job alerts and study materials. Everything you need to launch your career.
            </p>

            {/* Store buttons */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <a
                href="#"
                className="bg-white text-[#1A1A1A] px-8 py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-xl flex items-center gap-2"
              >
                <Download size={18} />
                App Store
              </a>
              <a
                href="#"
                className="bg-transparent text-white border-2 border-white/20 px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/5 transition-all shadow-xl flex items-center gap-2"
              >
                <Download size={18} />
                Google Play
              </a>
            </div>

            {/* PDF download section */}
            <div className="flex flex-col pt-10 items-start gap-6 border-t border-white/10">
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                Enter your details below to instantly download the career guide PDF
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-[#2A2A2A] rounded-xl px-6 py-4 text-sm text-white placeholder-gray-500 outline-none flex-1 border border-white/5 focus:border-[#FF5421]/50 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-[#2A2A2A] rounded-xl px-6 py-4 text-sm text-white placeholder-gray-500 outline-none flex-1 border border-white/5 focus:border-[#FF5421]/50 transition-all"
                />
                <button className="bg-[#FF5421] hover:bg-[#e3450c] px-8 py-4 rounded-xl flex items-center justify-center gap-2 text-white font-bold text-sm transition-all shadow-lg">
                  Download
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotionSection;