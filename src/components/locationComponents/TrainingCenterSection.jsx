import React from "react";
import {
  MapPin,
  Clock,
  Building2,
  Award,
  Search,
  Navigation,
  Calendar,
  ArrowRight,
} from "lucide-react";

const TrainingCentresSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#243443] via-[#1c2a37] to-[#121c24] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10">
      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="absolute -top-20 -right-20 w-[320px] h-80 bg-[#F8510C] rounded-full blur-[120px] opacity-30 pointer-events-none" />

      <div className="absolute -bottom-30 -left-30 w-75 h-75 bg-[#F15A24] rounded-full blur-[120px] opacity-10 pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* ================= LEFT SIDE ================= */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F15A2415] border border-[#F15A24]/25 text-[#F15A24] px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md shadow-sm">
            <MapPin size={15} />
            Find Your Nearest Centre
          </div>

          {/* Heading */}
          <h2 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Training Centres
            <br />
            <span className="text-[#F15A24]">Across the UK</span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 mt-5 text-base sm:text-lg leading-relaxed max-w-xl">
            Train at 85+ professional UK locations with expert SIA-approved
            instructors, modern facilities, and same-day exam results.
          </p>

          {/* ================= SEARCH BOX ================= */}
          <div className="mt-8">
            <div className="relative flex items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[24px] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.20)] overflow-hidden">
              {/* Search Icon */}
              <div className="flex items-center justify-center pl-3 pr-2">
                <Search size={18} className="text-[#F15A24]" />
              </div>

              {/* Input */}
              <input
                type="text"
                placeholder="Enter city or postcode..."
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-sm sm:text-base py-3"
              />

              {/* Search Button */}
              <button className="group bg-[#F15A24] hover:bg-[#de4d18] text-white font-semibold px-5 sm:px-7 py-3.5 rounded-[18px] transition-all duration-300 shadow-[0_12px_30px_rgba(241,90,36,0.25)] hover:shadow-[0_18px_45px_rgba(241,90,36,0.45)] hover:-translate-y-1 flex items-center justify-center gap-2">
                <span className="hidden sm:block">Search</span>

                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </div>
          </div>
          {/* ================= LOCATION BUTTON ================= */}
          <div className="mt-4">
            <button className="group relative overflow-hidden bg-gradient-to-r from-[#F15A24] to-[#ff6a2a] text-white px-6 py-4 rounded-2xl flex items-center gap-3 font-semibold shadow-[0_15px_40px_rgba(241,90,36,0.35)] hover:shadow-[0_22px_55px_rgba(241,90,36,0.50)] transition-all duration-300 hover:-translate-y-1">
              {/* Glow */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              <Navigation size={18} className="relative z-10" />

              <span className="relative z-10">Use My Current Location</span>
            </button>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Card 1 */}
          <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[28px] p-6 text-white hover:border-[#F15A24]/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
              <MapPin size={24} />
            </div>

            <h3 className="text-xl font-bold mt-5">85+ Locations</h3>

            <p className="text-gray-300 mt-2 text-sm leading-relaxed">
              Training centres available across major UK cities.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[28px] p-6 text-white hover:border-[#F15A24]/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
              <Clock size={24} />
            </div>

            <h3 className="text-xl font-bold mt-5">Flexible Schedule</h3>

            <p className="text-gray-300 mt-2 text-sm leading-relaxed">
              Weekend and evening training options available.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[28px] p-6 text-white hover:border-[#F15A24]/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center shadow-lg">
              <Building2 size={24} />
            </div>

            <h3 className="text-xl font-bold mt-5">Modern Facilities</h3>

            <p className="text-gray-300 mt-2 text-sm leading-relaxed">
              Professionally equipped training environments.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[28px] p-6 text-white hover:border-[#F15A24]/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center shadow-lg">
              <Award size={24} />
            </div>

            <h3 className="text-xl font-bold mt-5">Expert Trainers</h3>

            <p className="text-gray-300 mt-2 text-sm leading-relaxed">
              Learn from experienced industry professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCentresSection;
