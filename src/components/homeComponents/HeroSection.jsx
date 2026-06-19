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
    <section className="bg-white  px-2 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto  py-12 md:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 px-4 md:px-8 gap-8  items-center">
          {/* LEFT COLUMN */}
          <div className="">
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-tight">
              Get Trained,
              <span className="text-[#FF5421]"> Licenced,</span>
              <span className="block -mt-2 md:-mt-3">
                Build Your{" "}
                <span className="relative inline-block text-[#00A3F4]">
                  Future.
                  <img
                    src={underlineStroke}
                    className="absolute bottom-1 md:bottom-2 left-2 w-[90%]"
                  />
                </span>
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-500 mt-3 max-w-lg">
              Explore accredited courses from trusted UK training providers.
              Gain recognised qualifications, professional licences, and the
              skills needed to advance your career with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <NavLink
                to="/courses"
                className="bg-[#FF5421] cursor-pointer text-center hover:bg-[#E64A1A] text-white font-semibold py-4 px-12 rounded-full shadow-md transition duration-300 transform hover:scale-105"
              >
                Get Started
              </NavLink>
              <button
                onClick={() => {
                  const element = document.getElementById("hiringTraining");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 cursor-pointer text-center flex justify-center border-[#28262633] hover:border-gray-400 font-semibold py-4 px-12 rounded-full  items-center gap-2 bg-[#FFFFFF1A] backdrop-blur-sm"
              >
                <Play className="w-4 h-5 text-[#00A3FF]" />
                What We Do
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full ">
            <div className="flex flex-col xl:flex-row gap-8 md:gap-4 mb-4">
              <div className="relative w-full xl:w-auto">
                <VideoPlayer
                  src={liveTrainingVideo}
                  className="w-full h-[300px] sm:h-[350px] xl:w-[55vh] xl:h-[65vh]"
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

              <div className="flex flex-col gap-6 w-full xl:w-46 xl:h-[65vh]">
                {/* Top Blue Card */}
                <div className="relative hidden lg:block flex-[0.9]">
                  <div className="h-full bg-[#00A3FF] rounded-3xl flex flex-col items-center justify-center text-center font-semibold text-white">
                    <Users className="w-8 h-8 mb-3" />
                    <div className="text-3xl font-bold">400K+</div>
                    <div className="text-sm">Professionals Trained</div>
                  </div>

                  <motion.span
                    animate={{ y: [0, 146, 0] }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-0 left-24 -translate-x-1/2 translate-y-[-50%] px-6 py-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center gap-3 text-sm font-semibold whitespace-nowrap z-10"
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

                {/* CCTV Card */}
                <div className="relative hidden lg:block flex-[1.1] overflow-hidden rounded-3xl">
                  <VideoPlayer src={cctvVideo} className="w-full h-full" />

                  <div className="absolute bottom-4 left-4 text-white font-semibold">
                    CCTV
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
