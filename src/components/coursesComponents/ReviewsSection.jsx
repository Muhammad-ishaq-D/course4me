import React from "react";

import starIcon from "../../assets/courses/star2.svg";
import quoteIcon from "../../assets/courses/quote.svg";
import trustIcon from "../../assets/courses/trust.svg";
import googleIcon from "../../assets/courses/google.svg";
import passIcon from "../../assets/courses/pass.svg";
import locationIcon from "../../assets/courses/location.svg";
import DoorSupervisor from "../../assets/courses/Birmingham Door Supervisor Training - January 2026.png"
import SecurityTraining from "../../assets/courses/Security Guard Training Class - August 2025.png"

import review1 from "../../assets/courses/Sarah Johnson.png";
import review2 from "../../assets/courses/James Mitchell.png";

import review3 from "../../assets/courses/Emma Wilson.png";

const ReviewsSection = () => {
  return (
    <section className="bg-[#f3f6f9] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2f3a47]">
            Real stories from real people
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Trusted by thousands of security professionals across the UK
          </p>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* Trustpilot */}
          <div className="bg-gradient-to-br from-[#0fa968] to-[#0b8a56] text-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <img src={trustIcon} className="w-6 h-6" />
              <span className="font-semibold">Trustpilot</span>
            </div>

            <div className="text-5xl font-bold">33,359</div>
            <div className="text-white/80 mt-2">Total Reviews</div>

            <div className="flex items-center gap-2 mt-6">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={starIcon} className="w-4 h-4" />
              ))}
              <span className="font-semibold">4.8</span>
            </div>
          </div>

          {/* Google */}
          <div className="bg-gradient-to-br from-[#4a7bd9] to-[#3d64b4] text-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <img src={googleIcon} className="w-6 h-6" />
              <span className="font-semibold">Google Reviews</span>
            </div>

            <div className="text-5xl font-bold">9,517</div>
            <div className="text-white/80 mt-2">Total Reviews</div>

            <div className="flex items-center gap-2 mt-6">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={starIcon} className="w-4 h-4" />
              ))}
              <span className="font-semibold">4.9</span>
            </div>
          </div>

          {/* Pass Rate */}
          <div className="bg-gradient-to-br from-[#b9ff5a] to-[#9fe33f] rounded-3xl p-8 shadow-xl text-[#1f2f3f]">
            <div className="flex items-center gap-3 mb-6">
              <img src={passIcon} className="w-6 h-6" />
              <span className="font-semibold">Pass Rate</span>
            </div>

            <div className="text-5xl font-bold">95%</div>
            <div className="text-gray-700 mt-2">Average Success</div>

            <div className="mt-6 font-semibold">
              First Time Pass
            </div>
          </div>

        </div>
{/* Testimonials Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

  {/* 1 - Sarah */}
  <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col">
    <div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={starIcon} className="w-4 h-4" />
        ))}
      </div>

      <img src={quoteIcon} className="w-5 h-5 opacity-30 mb-3" />

      <p className="text-gray-600 leading-relaxed">
        I had the opportunity to take the course under excellent instruction.
        The trainer was patient, knowledgeable, and made learning enjoyable.
        Passed first time!
      </p>
    </div>

    <div className="mt-6 pt-4 border-t flex items-center gap-4">
      <img src={review1} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <div className="font-semibold text-[#1f2f3f]">
          Sarah Johnson
        </div>
        <div className="text-sm text-gray-500">
          Door Supervisor Training
        </div>
        <div className="text-xs text-gray-400">
          Manchester · January 2026
        </div>
      </div>
    </div>
  </div>


  {/* 2 - James */}
  <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col">
    <div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={starIcon} className="w-4 h-4" />
        ))}
      </div>

      <img src={quoteIcon} className="w-5 h-5 opacity-30 mb-3" />

      <p className="text-gray-600 leading-relaxed">
        Great trainer, I am doing the door supervision course next month.
        Very professional and thorough teaching style.
      </p>
    </div>

    <div className="mt-6 pt-4 border-t flex items-center gap-4">
      <img src={review2} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <div className="font-semibold text-[#1f2f3f]">
          James Mitchell
        </div>
        <div className="text-sm text-gray-500">
          Security Guard Training
        </div>
        <div className="text-xs text-gray-400">
          London · February 2026
        </div>
      </div>
    </div>
  </div>


  {/* 3 - Image Birmingham */}
  <div className="relative rounded-3xl overflow-hidden shadow-lg">
    <img src={DoorSupervisor} className="w-full h-[320px] object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
      <div className="flex items-center gap-2 text-sm text-[#B9FF5A] mb-2">
        <img src={locationIcon} className="w-4 h-4" />
        Birmingham
      </div>
      <div className="font-semibold">
        Birmingham Door Supervisor Training – January 2026
      </div>
    </div>
  </div>


  {/* 4 - Marcus (Dark) */}
  <div className="bg-gradient-to-br from-[#2f3a47] to-[#1f2933] text-white rounded-3xl shadow-lg p-6 flex flex-col">
    <div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={starIcon} className="w-4 h-4" />
        ))}
      </div>

      <img src={quoteIcon} className="w-5 h-5 mb-3 opacity-70" />

      <p className="text-white/90 leading-relaxed">
        Completed the CCTV course with very professional trainers.
        Learnt so much about surveillance law and practical techniques.
        Highly recommended!
      </p>
    </div>

    <div className="mt-6 pt-4 border-t border-white/10">
      <div className="font-semibold text-[#B9FF5A]">
        Marcus Thompson
      </div>
      <div className="text-sm text-white/70">
        CCTV Operator Training
      </div>
      <div className="text-xs text-white/50">
        Leeds · December 2025
      </div>
    </div>
  </div>


  {/* 5 - Emma */}
  <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col">
    <div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={starIcon} className="w-4 h-4" />
        ))}
      </div>

      <img src={quoteIcon} className="w-5 h-5 opacity-30 mb-3" />

      <p className="text-gray-600 leading-relaxed">
        Brilliant course! The hands-on practice and realistic
        scenarios really prepared me for real emergencies.
        Instructor was amazing.
      </p>
    </div>

    <div className="mt-6 pt-4 border-t flex items-center gap-4">
      <img src={review3} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <div className="font-semibold text-[#1f2f3f]">
          Emma Wilson
        </div>
        <div className="text-sm text-gray-500">
          First Aid at Work
        </div>
        <div className="text-xs text-gray-400">
          Bristol · January 2026
        </div>
      </div>
    </div>
  </div>


  {/* 6 - Image Manchester */}
  <div className="relative rounded-3xl overflow-hidden shadow-lg">
    <img src={SecurityTraining} className="w-full h-[320px] object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
      <div className="flex items-center gap-2 text-sm text-[#B9FF5A] mb-2">
        <img src={locationIcon} className="w-4 h-4" />
        Manchester
      </div>
      <div className="font-semibold">
        Security Guard Training Class – August 2025
      </div>
    </div>
  </div>


  {/* 7 - David (Dark) */}
  <div className="bg-gradient-to-br from-[#2f3a47] to-[#1f2933] text-white rounded-3xl shadow-lg p-6 flex flex-col">
    <div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={starIcon} className="w-4 h-4" />
        ))}
      </div>

      <img src={quoteIcon} className="w-5 h-5 mb-3 opacity-70" />

      <p className="text-white/90 leading-relaxed">
        Intensive and worth every penny. The defensive driving and
        threat assessment modules were exceptional.
        Now working with high-profile clients.
      </p>
    </div>

    <div className="mt-6 pt-4 border-t border-white/10">
      <div className="font-semibold text-[#B9FF5A]">
        David Chen
      </div>
      <div className="text-sm text-white/70">
        Close Protection
      </div>
      <div className="text-xs text-white/50">
        London · November 2025
      </div>
    </div>
  </div>


  {/* 8 - Lisa (Dark) */}
  <div className="bg-gradient-to-br from-[#2f3a47] to-[#1f2933] text-white rounded-3xl shadow-lg p-6 flex flex-col">
    <div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={starIcon} className="w-4 h-4" />
        ))}
      </div>

      <img src={quoteIcon} className="w-5 h-5 mb-3 opacity-70" />

      <p className="text-white/90 leading-relaxed">
        The conflict de-escalation training has been invaluable
        in my daily work. I feel much more confident handling
        difficult situations professionally.
      </p>
    </div>

    <div className="mt-6 pt-4 border-t border-white/10">
      <div className="font-semibold text-[#B9FF5A]">
        Lisa Patel
      </div>
      <div className="text-sm text-white/70">
        Conflict Management
      </div>
      <div className="text-xs text-white/50">
        Birmingham · February 2026
      </div>
    </div>
  </div>

</div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#2f3a47] text-white px-8 py-4 rounded-full shadow-lg hover:bg-black transition">
            View All Reviews →
          </button>
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;