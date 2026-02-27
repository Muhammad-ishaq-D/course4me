import React from "react";
import {
  MapPin,
  Clock,
  Building2,
  Award,
  Search,
  Navigation,
  Calendar
} from "lucide-react";

const TrainingCentresSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#243443] via-[#1f2f3f] to-[#16222c] py-24 px-6 lg:px-12">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B9FF5A] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#B9FF5A1A] border border-[#B9FF5A] text-[#B9FF5A] px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <MapPin size={16} />
            Find Your Nearest Centre
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Training Centres <br /> Across the UK
          </h2>

          {/* Paragraph */}
          <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-xl">
            With 85+ locations nationwide, there's a Get Licensed training
            centre near you. All centres offer the same high-quality training
            and expert instruction.
          </p>

          {/* Search Bar */}
          <div className="mt-10 flex items-center bg-[#2f3f50] border border-white/10 rounded-2xl p-2 shadow-lg">

            <div className="flex items-center gap-3 px-4 text-gray-400 w-full">
              <Search size={18} />
              <input
                type="text"
                placeholder="Enter city or postcode..."
                className="bg-transparent outline-none text-white placeholder-gray-400 w-full"
              />
            </div>

            <button className="bg-[#B9FF5A] hover:bg-[#a4e649] text-[#1f2f3f] font-semibold px-6 py-3 rounded-xl transition">
              Search
            </button>
          </div>

          {/* Secondary Buttons */}
          <div className="flex flex-wrap gap-5 mt-8">

            <button className="border border-white/30 text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-white/10 transition">
              <Navigation size={16} />
              Use My Location
            </button>

            <button className="border border-white/30 text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-white/10 transition">
              <Calendar size={16} />
              View Availability
            </button>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <MapPin size={22} />
            </div>
            <div className="text-xl font-semibold">85+ Locations</div>
            <div className="text-gray-300 mt-2 text-sm">
              Training centres across the UK
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Clock size={22} />
            </div>
            <div className="text-xl font-semibold">Flexible Schedules</div>
            <div className="text-gray-300 mt-2 text-sm">
              Evening and weekend courses
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
              <Building2 size={22} />
            </div>
            <div className="text-xl font-semibold">Modern Facilities</div>
            <div className="text-gray-300 mt-2 text-sm">
              State-of-the-art training rooms
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
              <Award size={22} />
            </div>
            <div className="text-xl font-semibold">Expert Instructors</div>
            <div className="text-gray-300 mt-2 text-sm">
              Industry professionals
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrainingCentresSection;