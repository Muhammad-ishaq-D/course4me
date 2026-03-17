import React from 'react';
import { MapPin, Search, Navigation, Calendar, Clock, Building2, Award } from 'lucide-react';

export default function CourseHeroSection() {
  return (
    <section className="relative bg-[#282727] text-white overflow-hidden font-sans mt-10 sm:mt ">
      {/* Background glow effect */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#E56321] opacity-20 blur-[140px] rounded-full pointer-events-none"
      ></div>

      <div className="max-w-[1240px] mx-auto px-6 py-20 md:py-28 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* Left Content Area */}
        <div className="w-full lg:w-[55%] flex flex-col">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#362116] border border-[#F15A24]/30 text-[#F15A24] px-5 py-2 rounded-full mb-6 w-fit hover:bg-[#3d271a] transition-colors cursor-default">
            <MapPin size={16} className="text-[#F15A24]" />
            <span className="font-semibold text-sm">Find Your Nearest Centre</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-[62px] font-extrabold leading-[1.05] tracking-tight mb-6">
            Training Centres<br />Across the UK
          </h1>

          {/* Subheading */}
          <p className="text-[#a1a1aa] text-lg lg:text-[20px] leading-[1.6] mb-10 max-w-[550px]">
            With 85+ locations nationwide, there's a Get Licensed training centre near you. All centres offer the same high-quality training and expert instruction.
          </p>

          {/* Search Bar */}
          <div className="relative flex items-center w-full max-w-[500px] bg-[#393938] border border-transparent focus-within:border-[#525150] rounded-[20px] mb-8 p-1.5 transition-all">
            <div className="pl-4 pr-3">
              <Search size={22} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Enter city or postcode..."
              className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 text-[16px] pr-4 h-[50px]"
            />
            <button className="bg-[#F15A24] hover:bg-[#E55A0A] text-white px-8 py-3 rounded-[16px] font-semibold text-[16px] transition-colors h-[50px] shadow-sm">
              Search
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border border-[#525150] text-gray-200 font-semibold hover:bg-white/5 transition-colors text-[15px]">
              <Navigation size={18} className="text-gray-300" />
              Use My Location
            </button>
            <button className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border border-[#525150] text-gray-200 font-semibold hover:bg-white/5 transition-colors text-[15px]">
              <Calendar size={18} className="text-gray-300" />
              View Availability
            </button>
          </div>
        </div>

        {/* Right Cards Area */}
        <div className="w-full lg:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-5">

          {/* Card 1 */}
          <div className="bg-[#3b3a39] border border-[#484746] rounded-[24px] p-6 flex flex-col justify-center min-h-[170px] hover:border-gray-500 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-[#3B82F6] flex items-center justify-center mb-5 shadow-sm">
              <MapPin size={22} className="text-white fill-white/20" />
            </div>
            <div>
              <h3 className="text-white font-bold text-[19px] mb-1.5 tracking-tight">85+ Locations</h3>
              <p className="text-[#a1a1aa] text-[14px]">Training centres across the UK</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#3b3a39] border border-[#484746] rounded-[24px] p-6 flex flex-col justify-center min-h-[170px] hover:border-gray-500 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-[#A855F7] flex items-center justify-center mb-5 shadow-sm">
              <Clock size={22} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-[19px] mb-1.5 tracking-tight">Flexible Schedules</h3>
              <p className="text-[#a1a1aa] text-[14px]">Evening and weekend courses</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#3b3a39] border border-[#484746] rounded-[24px] p-6 flex flex-col justify-center min-h-[170px] hover:border-gray-500 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-[#10B981] flex items-center justify-center mb-5 shadow-sm">
              <Building2 size={22} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-[19px] mb-1.5 tracking-tight">Modern Facilities</h3>
              <p className="text-[#a1a1aa] text-[14px]">State-of-the-art training rooms</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#3b3a39] border border-[#484746] rounded-[24px] p-6 flex flex-col justify-center min-h-[170px] hover:border-gray-500 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-[#F97316] flex items-center justify-center mb-5 shadow-sm">
              <Award size={22} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-[19px] mb-1.5 tracking-tight">Expert Instructors</h3>
              <p className="text-[#a1a1aa] text-[14px]">Industry professionals</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
