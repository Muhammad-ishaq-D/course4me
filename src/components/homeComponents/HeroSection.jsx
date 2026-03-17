import React from "react";
import liveTrainingVideo from "../../assets/home/live-training.mp4";
import doorSupervisorVideo from "../../assets/home/security_guard.mp4";
import cctvVideo from "../../assets/home/cctv-operations.mp4";
import lightningIcon from "../../assets/home/lightning-icon.png";
import playIcon from "../../assets/home/play-icon.png";
import playCircleIcon from "../../assets/home/play-circle-icon.png";
import scrollIcon from "../../assets/home/scroll-icon.png";
import underlineStroke from "../../assets/home/underline-stroke.svg";
import { CheckCircle, CheckCircle2, MapPin, Play, PlayCircle, PlayCircleIcon, ShieldCheck, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const VideoPlayer = ({ src, label, className = "" }) => (
  <div
    className={`bg-linear-to-br from-gray-800 to-gray-900 
                rounded-3xl overflow-hidden 
                border border-gray-700 
                shadow-xl relative group
                ${className}`}
  >
    <video
      src={src}
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent p-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
      <p className="font-medium text-xs text-white">{label}</p>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="bg-white min-h-screen mt-20 md:mt-24 pb-8 md:pb-6 relative overflow-hidden">



      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 lg:px-8 py-12 md:py-20">

        {/* IMPORTANT: xl instead of lg */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN */}
          <div>

            <div className="inline-flex items-center bg-[#F3F4F6] text-gray-600 rounded-full px-4 py-2 text-sm font-semibold shadow-sm mb-6">
              <TrendingUp className="w-4 h-4 mr-2 text-[#FF5421]" />
              400,000+ Professionals Trained
            </div>

            <h2 className="text-4xl sm:text-5xl   lg:text-6xl font-extrabold leading-tight">
              Get trained, <br />
              licensed, and <br />
              <span className="relative inline-block text-[#FF5421] ">
                ready to earn
                <img
                  src={underlineStroke}
                  className="absolute -bottom-2 left-6 sm:left-10 md:left-14 w-[60%]"
                />
              </span>
              <br />
              in 3 weeks
            </h2>

            <p className="text-base sm:text-lg text-gray-500 mt-4 max-w-lg">
              Earn <strong className="text-[#FF5421] ">£14 to £25 an hour</strong> with flexible security jobs.
              No experience needed. 95% pass rate, first time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-[#FF5421]  hover:bg-[#E64A1A]  font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="border-2 border-[#28262633] hover:border-gray-400  font-semibold py-3 px-8 rounded-full flex items-center gap-2 bg-[#FFFFFF1A] backdrop-blur-sm">
                <Play className="w-4 h-5 text-[#00A3FF]" />
                Watch Success Stories
              </button>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 max-w-xl">

              {/* Fast */}
              <div className="flex items-center gap-3 bg-[#00A3FF0A] border border-[#00A3FF1A] rounded-full px-4 py-2 ">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#00A3FF1A]">
                  <Zap size={16} className="text-[#00A3FF]" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-gray-800">Fast</div>
                  <div className="text-xs text-gray-500">Same-day results</div>
                </div>
              </div>

              {/* Proven */}
              <div className="flex items-center gap-3 bg-[#00A3FF0A] border border-[#00A3FF1A] rounded-full px-4 py-2 ">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#00A3FF1A]">
                  <CheckCircle2 size={16} className="text-[#00A3FF]" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-gray-800">Proven</div>
                  <div className="text-xs text-gray-500">95% pass rate</div>
                </div>
              </div>

              {/* Trusted */}
              <div className="flex items-center gap-3 bg-[#00A3FF0A] border border-[#00A3FF1A] rounded-full px-4 py-2 ">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#00A3FF1A]">
                  <Users size={16} className="text-[#00A3FF]" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-gray-800">Trusted</div>
                  <div className="text-xs text-gray-500">400,000+ trained</div>
                </div>
              </div>

              {/* Clear */}
              <div className="flex items-center gap-3 bg-[#00A3FF0A] border border-[#00A3FF1A] rounded-full px-4 py-2 ">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#00A3FF1A]">
                  <MapPin size={16} className="text-[#00A3FF]" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-gray-800">Clear</div>
                  <div className="text-xs text-gray-500">Step-by-step support</div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full">

            {/* IMPORTANT: xl instead of lg */}
            <div className="flex flex-col xl:flex-row gap-8 md:gap-4 mb-4">

              <div className="relative w-full xl:w-auto">
                <VideoPlayer
                  src={liveTrainingVideo}
                  className="w-full h-[300px] sm:h-[400px] xl:w-[61vh] xl:h-[65vh]"
                />

                <div className="absolute bottom-18 left-6 ">
                  <div className="flex items-center gap-2 bg-[#FF5421]  text-white px-3 py-1 rounded-full text-sm font-semibold">
                    <img src={playIcon} className="w-3 h-3" />
                    Live Training
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    Professional Door <br /> Supervisor Course
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-6 w-full xl:w-auto">

                <div className="relative w-full mt-6 md:mt-0  xl:w-46">
                  <div className="w-full xl:w-46 h-[160px] sm:h-[180px] xl:h-42 bg-[#00A3FF] rounded-3xl flex flex-col items-center justify-center text-center font-semibold text-white">
                    <Users className="w-8 h-8 mb-3 text-white" />
                    <div className="text-3xl font-bold text-white">400K+</div>
                    <div className="text-sm text-white">Professionals Trained</div>
                  </div>

                  <motion.span
                    animate={{ y: [0, 146, 0] }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }} className="absolute -top-10 left-1/2 -translate-x-1/2 px-6  py-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center gap-3 text-sm font-semibold whitespace-nowrap">
                    {/* Icon Circle */}
                    <div className="w-8 h-8 bg-[#00A3FF1A] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-[#00A3FF]" />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col leading-tight">
                      <span>SIA Approved</span>
                      <span className="text-xs font-normal text-gray-500">
                        Official Training Centre
                      </span>
                    </div>
                  </motion.span>
                </div>

                <div className="relative w-full xl:w-46">
                  <VideoPlayer
                    src={cctvVideo}
                    className="w-full h-[160px] sm:h-[200px] xl:h-47 xl:w-46"
                  />
                  <div className="absolute bottom-3 left-3 text-sm font-semibold text-white">
                    CCTV
                  </div>
                </div>

              </div>
            </div>

            {/* IMPORTANT: xl instead of lg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-2">

              <div className="relative w-full xl:w-46">
                <div className="w-full xl:w-43 h-[180px] xl:h-45 bg-[#E6F4FF] border border-[#00A3FF33] backdrop-blur-xl  rounded-3xl flex flex-col items-center justify-center">
                  <CheckCircle className="w-8 h-8 mb-3 text-[#00A3FF]" />
                  <div className="text-3xl font-bold text-[#00A3FF]">95%</div>
                </div>

                <motion.div
                  animate={{ y: [0, -142, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="
  absolute 
  -bottom-6 
  left-1/2 
  -translate-x-1/2 
  xl:left-auto 
  xl:translate-x-0 
  xl:right-0
  w-[92%] 
  sm:w-[85%] 
  xl:w-49
  bg-[#00A3FF]  
  rounded-2xl 
  shadow-[0_25px_50px_-12px_rgba(0,163,255,0.3)]
  px-6 py-4
  flex items-center gap-4
  z-10
">

                  {/* Dark Circle */}
                  <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col leading-tight">
                    <span className="font-bold text-white text-[13px]">
                      85+ Locations
                    </span>
                    <span className="text-[11px] text-white opacity-90">
                      Across the UK
                    </span>
                  </div>

                </motion.div>
              </div>

              <div className="relative w-full xl:w-43">
                <VideoPlayer
                  src={doorSupervisorVideo}
                  className="w-full h-[200px] xl:h-45 xl:w-42"
                />
                <div className="absolute bottom-3 left-3 text-sm font-semibold text-white">
                  Security Guard
                </div>
              </div>

              <div className="w-full xl:w-45 h-[200px] xl:h-45 bg-[#FF5421] rounded-3xl flex flex-col items-center justify-center text-white">
                <img src={lightningIcon} className="w-8 h-8 mb-3" />
                <div className="text-2xl font-bold">£14–£25</div>
                <div className="text-sm">Hourly Rate</div>
              </div>

            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2">
        <img src={scrollIcon} className="w-6 h-10 opacity-80" />
      </div>

    </section>
  );
};

export default HeroSection;