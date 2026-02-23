import React from "react";
// Import videos from assets folder
import liveTrainingVideo from "../../assets/live-training.mp4";
import doorSupervisorVideo from "../../assets/security_guard.mp4";
import cctvVideo from "../../assets/cctv-operations.mp4";

// Video component that uses imported assets
const VideoPlayer = ({ src, label, className = "" }) => (
  <div
    className={`bg-gradient-to-br from-gray-800 to-gray-900 
                rounded-xl overflow-hidden 
                border border-gray-700 
                shadow-xl relative group
                w-full h-44 md:h-40
                ${className}`}
  >
    <video
      src={src}
      className="w-full h-full object-fill"
      controls
      preload="metadata"
    >
      Your browser does not support the video tag.
    </video>

    {/* Label Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
      <p className="text-white font-medium text-xs">{label}</p>
    </div>

    {/* Play Icon */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg
        className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 transition-opacity"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </div>
);

// Metric card for stats
const MetricCard = ({ value, label }) => (
  <div className="bg-green-600 bg-opacity-10 backdrop-blur-lg rounded-xl p-4 text-center border border-gray-700">
    <div className="text-xl font-bold text-white">{value}</div>
    <div className="text-xs text-gray-300">{label}</div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 font-sans relative">
      {/* Background abstract pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Main container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN — text content */}
          <div>
            {/* 400k+ badge */}
            <div className="inline-flex items-center bg-green-600 bg-opacity-90 backdrop-blur-sm text-white rounded-full px-4 py-2 text-sm font-semibold shadow-lg mb-6">
              <span className="mr-2">🏆</span> 400K+ Professionals Trained
            </div>

            {/* main heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Get trained, licensed, and ready to earn <span className="text-green-400">in 3 weeks</span>
            </h2>

            {/* subheading */}
            <p className="text-lg text-gray-300 mt-4 max-w-lg">
              Earn £14 to £25 an hour with flexible security jobs. No experience needed. 95% pass rate, first time.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="border-2 border-gray-600 hover:border-gray-400 text-white font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center gap-2 bg-black bg-opacity-30 backdrop-blur-sm">
                ▶ Watch Success Stories
              </button>
            </div>

            {/* three small stats (95%, same day, 85+ locations) */}
            <div className="grid grid-cols-3 gap-4 mt-10 max-w-md">
              <div className="bg-green-600 bg-opacity-10 backdrop-blur-lg rounded-xl p-3 text-center border border-gray-700">
                <div className="text-2xl font-black text-white">95%</div>
                <div className="text-xs uppercase tracking-wider text-gray-300">Pass Rate</div>
              </div>
              <div className="bg-blue-600 bg-opacity-10 backdrop-blur-lg rounded-xl p-3 text-center border border-gray-700">
                <div className="text-2xl font-black text-white">Same Day</div>
                <div className="text-xs uppercase tracking-wider text-gray-300">Results</div>
              </div>
              <div className="bg-purple-600 bg-opacity-10 backdrop-blur-lg rounded-xl p-3 text-center border border-gray-700">
                <div className="text-2xl font-black text-white">85+</div>
                <div className="text-xs uppercase tracking-wider text-gray-300">UK Locations</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — videos and cards */}
          <div>
            {/* Three videos with imported assets */}
            <div className="space-y-4 mb-6">
              <VideoPlayer src={liveTrainingVideo} label="Live Training Preview"  className="w-full h-48 object-cover rounded-lg shadow-lg"/>
              <VideoPlayer src={doorSupervisorVideo} label="Door Supervisor Course" className=" w-14 object-cover rounded-lg shadow-lg"/>
              <VideoPlayer src={cctvVideo} label="CCTV Operations" className="w-full h-48 object-cover rounded-lg shadow-lg"/>
            </div>

            {/* bottom row of three stats */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <MetricCard value="85+" label="Locations Across UK" />
              <MetricCard value="£14-£25" label="Hourly Rate" />
              <MetricCard value="95%" label="Pass Rate" />
            </div>

            {/* SIA badge row */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              <span className="px-4 py-2 bg-green-600 bg-opacity-90 backdrop-blur-sm text-white text-sm font-semibold rounded-full shadow-lg">
                ✅ SIA Approved
              </span>
              <span className="px-4 py-2 bg-blue-600 bg-opacity-90 backdrop-blur-sm text-white text-sm font-semibold rounded-full shadow-lg">
                🏆 Official Training Centre
              </span>
              <span className="px-4 py-2 bg-purple-600 bg-opacity-90 backdrop-blur-sm text-white text-sm font-semibold rounded-full shadow-lg">
                Live Training
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;