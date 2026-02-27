import React from "react";
import liveTrainingVideo from "../../assets/home/live-training.mp4";
import doorSupervisorVideo from "../../assets/home/security_guard.mp4";
import cctvVideo from "../../assets/home/cctv-operations.mp4";
import siaIcon from "../../assets/home/sia-icon.png";
import trainingIcon from "../../assets/home/training-icon.png";
import checkIcon from "../../assets/home/check-icon.png";
import lightningIcon from "../../assets/home/lightning-icon.png";
import playIcon from "../../assets/home/play-icon.png";
import playCircleIcon from "../../assets/home/play-circle-icon.png";
import scrollIcon from "../../assets/home/scroll-icon.png";
import underlineStroke from "../../assets/home/underline-stroke.svg";
import arrowUpIcon from "../../assets/home/arrow-up-curve.png";
import locationIcon from "../../assets/home/location-icon.png";

const VideoPlayer = ({ src, label, className = "" }) => (
  <div
    className={`bg-gradient-to-br from-gray-800 to-gray-900 
                rounded-xl overflow-hidden 
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
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
      <p className="text-white font-medium text-xs">{label}</p>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="min-h-screen pb-8 md:pb-6 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 relative overflow-hidden">

      {/* Glows */}
      <div className="absolute top-12 right-0 sm:right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#B9FF5A] opacity-40 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-20 sm:bottom-32 right-1/2 -translate-x-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-purple-600 opacity-40 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-12 left-0 sm:left-38 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-blue-600 opacity-30 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

        {/* IMPORTANT: xl instead of lg */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN */}
          <div>

            <div className="inline-flex items-center bg-[#B9FF5A33] border border-[#B9FF5A] text-[#B9FF5A] rounded-full px-4 py-2 text-sm font-semibold shadow-lg mb-6">
              <img src={arrowUpIcon} className="w-4 h-4 mr-2" />
              400K+ Professionals Trained
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Get trained, <br />
              licensed, and <br />
              <span className="relative inline-block text-[#B9FF5A]">
                ready to earn
                <img
                  src={underlineStroke}
                  className="absolute -bottom-2 left-6 sm:left-10 md:left-14 w-[70%] md:w-[60%]"
                />
              </span>
              <br />
              in 3 weeks
            </h2>

            <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-lg">
              Earn £14 to £25 an hour with flexible security jobs.
              No experience needed. 95% pass rate, first time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-[#B9FF5A] hover:bg-[#A8E64C] text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="border-2 border-[#FFFFFF33] hover:border-gray-400 text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 bg-[#FFFFFF1A] backdrop-blur-sm">
                <img src={playCircleIcon} className="w-5 h-5" />
                Watch Success Stories
              </button>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap mt-6 md:mt-12 gap-6 sm:gap-0 max-w-md">
              <div className="text-center">
                <div className="text-xl font-black text-[#B9FF5A]">95%</div>
                <div className="text-xs text-gray-300">Pass Rate</div>
              </div>
              <div className="hidden sm:block w-px bg-gray-700 my-2 ml-12"></div>
              <div className="flex-1 text-center">
                <div className="text-xl font-black text-[#B9FF5A]">Same Day</div>
                <div className="text-xs text-gray-300">Results</div>
              </div>
              <div className="hidden sm:block w-px bg-gray-700 my-2"></div>
              <div className="flex-1 text-center">
                <div className="text-xl font-black text-[#B9FF5A]">85+</div>
                <div className="text-xs text-gray-300">UK Locations</div>
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

                <div className="absolute bottom-18 left-6 text-white">
                  <div className="flex items-center gap-2 bg-[#B9FF5A] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    <img src={playIcon} className="w-3 h-3" />
                    Live Training
                  </div>
                  <h3 className="mt-3 text-xl font-bold">
                    Professional Door <br /> Supervisor Course
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-6 w-full xl:w-auto">

                <div className="relative w-full mt-6 md:mt-0  xl:w-46">
                  <div className="w-full xl:w-46 h-[160px] sm:h-[180px] xl:h-42 bg-[#B9FF5A] rounded-2xl flex flex-col items-center justify-center text-center font-semibold text-gray-900">
                    <img src={trainingIcon} className="w-8 h-8 mb-3" />
                    <div className="text-3xl font-bold">400K+</div>
                    <div className="text-sm">Professionals Trained</div>
                  </div>

                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-6  py-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl flex items-center gap-3 text-sm font-semibold whitespace-nowrap">
                    {/* Icon Circle */}
  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
    <img src={siaIcon} className="w-4 h-4" />
  </div>

  {/* Text */}
  <div className="flex flex-col leading-tight">
    <span>SIA Approved</span>
    <span className="text-xs font-normal text-gray-500">
      Official Training Centre
    </span>
  </div>
                  </span>
                </div>

                <div className="relative w-full xl:w-46">
                  <VideoPlayer
                    src={cctvVideo}
                    className="w-full h-[160px] sm:h-[200px] xl:h-47 xl:w-46"
                  />
                  <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                    CCTV
                  </div>
                </div>

              </div>
            </div>

            {/* IMPORTANT: xl instead of lg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-2">

              <div className="relative w-full xl:w-46">
                <div className="w-full xl:w-43 h-[180px] xl:h-45 bg-[#FFFFFF1A] border border-[#FFFFFF33] backdrop-blur-xl text-white rounded-2xl flex flex-col items-center justify-center">
                  <img src={checkIcon} className="w-8 h-8 mb-3" />
                  <div className="text-3xl font-bold">95%</div>
                </div>

<div className="
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
  bg-[#B9FF5A] 
  rounded-2xl 
  shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]
  px-6 py-4
  flex items-center gap-4
">

  {/* Dark Circle */}
  <div className="w-8 h-8 bg-[#1E2A23] rounded-full flex items-center justify-center flex-shrink-0">
    <img src={locationIcon} className="w-5 h-5" />
  </div>

  {/* Text Content */}
  <div className="flex flex-col leading-tight">
    <span className="font-bold text-gray-900 text-[13px]">
      85+ Locations
    </span>
    <span className="text-[11px] text-gray-800 opacity-80">
      Across the UK
    </span>
  </div>

</div>         
              </div>

              <div className="relative w-full xl:w-43">
                <VideoPlayer
                  src={doorSupervisorVideo}
                  className="w-full h-[200px] xl:h-45 xl:w-40"
                />
                <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                  Security Guard
                </div>
              </div>

              <div className="w-full xl:w-42 h-[200px] xl:h-45 bg-gradient-to-br from-[#9810FA] to-[#E60076] text-white rounded-2xl flex flex-col items-center justify-center">
                <img src={lightningIcon} className="w-8 h-8 mb-3" />
                <div className="text-2xl font-bold">£14–£25</div>
                <div>Hourly Rate</div>
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