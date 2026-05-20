import React, { useState, useEffect } from "react";
import {
  X,
  Search,
  Star,
  Shield,
  Camera,
  Heart,
  Users,
  ChevronRight,
} from "lucide-react";
import { courses } from "../../data/courseData";
import liveTrainingVideo from "../../assets/home/live-training.mp4";
import doorSupervisorVideo from "../../assets/home/security_guard.mp4";
import cctvVideo from "../../assets/home/cctv-operations.mp4";
import lightningIcon from "../../assets/home/lightning-icon.png";
import playIcon from "../../assets/home/play-icon.png";
import scrollIcon from "../../assets/home/scroll-icon.png";
import underlineStroke from "../../assets/home/underline-stroke.svg";
import {
  CheckCircle,
  CheckCircle2,
  MapPin,
  Play,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

/* ─── Video Player ─── */
const VideoPlayer = ({ src, label, className = "" }) => (
  <div
    className={`bg-linear-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700 shadow-xl relative group ${className}`}
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

/* ─── Hero Section ─── */
const HeroSection = () => {
  return (
    <section className="bg-white min-h-screen  pb-8 md:pb-6 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN */}
          <div>
            <div className="inline-flex items-center bg-[#F8510C33] text-[#F8510C] rounded-full px-4 py-2 text-sm font-bold shadow-sm mb-6">
              <TrendingUp className="w-4 h-4 mr-2 text-[#F8510C]" />
              The UK's #1 Security Training provider
              <div className="flex gap-0.5 ml-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-[#F8510C] text-[#F8510C]"
                  />
                ))}
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Start Your <br />
              <span className="text-[#FF5421]">Security Career</span> <br />
              in Just{" "}
              <span className="relative inline-block text-[#00A3F4]">
                3 Weeks
                <img
                  src={underlineStroke}
                  className="absolute -bottom-2 left-6 sm:left-10 md:left-14 w-[60%]"
                />
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-500 mt-4 max-w-lg">
              No experience? No problem. Thousands of people just like you are
              now earning great money in security.{" "}
              <span className="font-bold text-black">
                Your SIA licence is waiting — and we guarantee you'll pass.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <NavLink
                to="/courses"
                className="bg-[#FF5421] cursor-pointer text-center hover:bg-[#E64A1A] text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105"
              >
                Get Started
              </NavLink>
              <button
                onClick={() => {
                  const element = document.getElementById("hiringTraining");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 cursor-pointer text-center flex justify-center border-[#28262633] hover:border-gray-400 font-semibold py-3 px-8 rounded-full  items-center gap-2 bg-[#FFFFFF1A] backdrop-blur-sm"
              >
                <Play className="w-4 h-5 text-[#00A3FF]" />
                What We Do
              </button>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 max-w-xl">
              <div className="flex items-center gap-3 bg-[#00A3FF0A] border border-[#00A3FF1A] rounded-full px-4 py-2">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#00A3FF1A]">
                  <CheckCircle2 size={16} className="text-[#00A3FF]" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-gray-800">
                    98% Pass Rate
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#00A3FF0A] border border-[#00A3FF1A] rounded-full px-4 py-2">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#00A3FF1A]">
                  <Users size={16} className="text-[#00A3FF]" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-gray-800">
                    400k+ People Trained
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#00A3FF0A] border border-[#00A3FF1A] rounded-full px-4 py-2">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#00A3FF1A]">
                  <MapPin size={16} className="text-[#00A3FF]" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-gray-800">
                    100+ UK Training Centers
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#00A3FF0A] border border-[#00A3FF1A] rounded-full px-4 py-2">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#00A3FF1A]">
                  <Zap size={16} className="text-[#00A3FF]" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-gray-800">
                    SIA Approved Center
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full">
            <div className="flex flex-col xl:flex-row gap-8 md:gap-4 mb-4">
              <div className="relative w-full xl:w-auto">
                <VideoPlayer
                  src={liveTrainingVideo}
                  className="w-full h-[300px] sm:h-[400px] xl:w-[61vh] xl:h-[65vh]"
                />
                <div className="absolute bottom-18 left-6">
                  <div className="flex items-center gap-2 bg-[#FF5421] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    <img src={playIcon} className="w-3 h-3" />
                    Live Training
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    Professional Door <br /> Supervisor Course
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-6 w-full xl:w-auto">
                <div className="relative hidden lg:block w-full mt-6 md:mt-0 xl:w-46">
                  <div className="w-full xl:w-46 h-[160px] sm:h-[180px] xl:h-42 bg-[#00A3FF] rounded-3xl flex flex-col items-center justify-center text-center font-semibold text-white">
                    <Users className="w-8 h-8 mb-3 text-white" />
                    <div className="text-3xl font-bold text-white">400K+</div>
                    <div className="text-sm text-white">
                      Professionals Trained
                    </div>
                  </div>
                  <motion.span
                    animate={{ y: [0, 146, 0] }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-6 py-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center gap-3 text-sm font-semibold whitespace-nowrap"
                  >
                    <div className="w-8 h-8 bg-[#00A3FF1A] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-[#00A3FF]" />
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span>SIA Approved</span>
                      <span className="text-xs font-normal text-gray-500">
                        Official Training Centre
                      </span>
                    </div>
                  </motion.span>
                </div>

                <div className="relative hidden lg:block w-full xl:w-46">
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

            <div className="lg:grid grid-cols-1 hidden lg:block sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-2">
              <div className="relative w-full xl:w-46">
                <div className="w-full xl:w-43 h-[180px] xl:h-45 bg-[#E6F4FF] border border-[#00A3FF33] backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center">
                  <CheckCircle className="w-8 h-8 mb-3 text-[#00A3FF]" />
                  <div className="text-3xl font-bold text-[#00A3FF]">95%</div>
                </div>
                <motion.div
                  animate={{ y: [0, -142, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 xl:left-auto xl:translate-x-0 xl:right-0 w-[92%] sm:w-[85%] xl:w-49 bg-[#00A3FF] rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,163,255,0.3)] px-6 py-4 flex items-center gap-4 z-10"
                >
                  <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
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
