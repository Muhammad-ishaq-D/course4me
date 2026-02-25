import React from "react";
import checkIcon from "../../assets/icons/home/check-icon.png";
import arrowUpIcon from "../../assets/icons/home/arrow-up-curve.png";

const CoursesHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1f2f3f] via-[#172535] to-[#0f1e2c] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#B9FF5A] opacity-10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#B9FF5A1A] border border-[#B9FF5A66] text-[#B9FF5A] px-5 py-2 rounded-full text-sm font-medium mb-10">
          <img src={arrowUpIcon} alt="" className="w-4 h-4" />
          SIA Approved Training Centre
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl">
          Professional Security
          <br />
          Courses
        </h1>

        {/* Paragraph */}
        <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
          Choose from our range of accredited security training courses.
          All courses include free exam retakes, same-day results, and
          expert instruction.
        </p>

        {/* Features Row */}
        <div className="mt-12 flex flex-wrap gap-10 text-gray-200">

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#B9FF5A] flex items-center justify-center">
              <img src={checkIcon} alt="" className="w-3 h-3" />
            </div>
            <span className="text-base font-medium">
              95% Average Pass Rate
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#B9FF5A] flex items-center justify-center">
              <img src={checkIcon} alt="" className="w-3 h-3" />
            </div>
            <span className="text-base font-medium">
              Same Day Results
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#B9FF5A] flex items-center justify-center">
              <img src={checkIcon} alt="" className="w-3 h-3" />
            </div>
            <span className="text-base font-medium">
              85+ UK Locations
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CoursesHero;