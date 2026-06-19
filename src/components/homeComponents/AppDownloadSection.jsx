import React from "react";
import { Smartphone, Download, ArrowRight, Apple, Play } from "lucide-react";

// Note: The provided image mentions a specific asset "Courses4Me App.png".
// This import path should point to your actual image file.
import courses4meApp from "../../assets/home/Courses4Me App.png";

const AppPromotionSection = () => {
  return (
    <section className="w-full bg-[#1A1A1A] py-24 px-4 md:px-0 relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5421] opacity-5 blur-[100px] -mr-48 -mt-48"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* LEFT: Phone Mockup Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF5421] opacity-20 blur-[80px] rounded-full"></div>
              <img
                src={courses4meApp}
                alt="Courses4Me App mobile phone mockup"
                className="w-72 md:w-80 lg:w-[420px] h-auto object-contain relative z-10"
              />
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div className="flex-1 text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FF5421] text-white text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-lg mb-6 shadow-lg">
              <Smartphone size={14} />
              UK's #1 Security App
            </div>
            {/* Heading */}
            <h2 className="text-[36px] md:text-[48px] lg:text-[44px] font-bold leading-[1.1] mb-4 tracking-tight">
              Start Your Security Career <br />
              <span className="text-[#00A3FF]">Right From Your Pocket</span>
            </h2>
            {/* Sub-headline */}
            <p className="text-gray-400 text-lg mb-10 max-w-xl font-medium leading-relaxed">
              Download our app for exclusive job alerts and study materials.
              Everything you need to launch your career.
            </p>

            {/* Store buttons */}
            <div className="flex flex-wrap items-center gap-5 mb-12">
              {/* APP STORE */}
              <a
                href="#"
                className=" group bg-white hover:bg-[#F9FAFB] px-9 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 flex items-center gap-4"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple"
                  className="w-7 h-7 object-contain"
                />

                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] text-gray-500 font-medium">
                    Download on the
                  </span>

                  <span className="text-[#111111] font-bold text-base">
                    App Store
                  </span>
                </div>
              </a>

              {/* GOOGLE PLAY */}
              <a
                href="#"
                className=" group bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-white/10 px-9 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 flex items-center gap-4"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                  alt="Google Play"
                  className="w-7 h-7 object-contain"
                />

                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] text-gray-400 font-medium">
                    GET IT ON
                  </span>

                  <span className="text-white font-bold text-base">
                    Google Play
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotionSection;
