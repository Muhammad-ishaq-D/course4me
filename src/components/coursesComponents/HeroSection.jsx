import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0B1527] text-white overflow-hidden py-16 md:py-24">
      {/* Abstract dotted swoosh background graphic */}
      <div className="absolute top-0 right-0 w-full h-full md:w-2/3 pointer-events-none overflow-hidden opacity-30 md:opacity-100 flex justify-end items-start mt-[-20%] md:mt-[-10%] me-[-10%]">
        <svg
          width="800"
          height="800"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[1200px] max-w-none text-[#F59E0B]"
        >
          <path
            d="M800 0 C 600 200, 400 400, 0 800"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="12 12"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M850 -50 C 650 150, 450 350, 50 750"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="12 12"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M900 -100 C 700 100, 500 300, 100 700"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="12 12"
            fill="none"
            opacity="0.2"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        {/* Breadcrumb */}
        <nav className="text-sm md:text-base font-medium mb-6 text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2 text-[#F59E0B]"> • </span>
          <span className="text-[#F59E0B]">Course</span>
        </nav>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4">
          Our Best <br className="hidden md:block" /> First Aid Courses
        </h1>
      </div>
    </section>
  );
}
