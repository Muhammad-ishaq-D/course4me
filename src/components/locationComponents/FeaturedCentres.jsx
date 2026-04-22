import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  MapPin,
  Clock,
  Calendar,
  Phone,
  Star
} from "lucide-react";

import londonImg from "../../assets/locations/London.png";
import manchesterImg from "../../assets/locations/Manchester.png";
import birminghamImg from "../../assets/locations/Birmingham.png";
import glasgowImg from "../../assets/locations/Glasgow.png";

const courseTitleToId = (title) => {
  const t = title.toLowerCase();
  if (t.includes("door supervisor")) return "door-supervisor";
  if (t.includes("security guard")) return "security-guard";
  if (t.includes("cctv")) return "cctv-training";
  if (t.includes("first aid")) return "first-aid-at-work";
  return "door-supervisor";
};

const centres = [
  {
    city: "London",
    name: "London Central Training Centre",
    image: londonImg,
    rating: "4.9",
    address: "123 Oxford Street, London, W1D 2HG",
    hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    next: "Tomorrow",
    phone: "020 7123 4567",
    email: "london@getlicensed.co.uk",
    courses: ["Door Supervisor", "Security Guard", "CCTV Operator"],
    more: "+2 more"
  },
  {
    city: "Manchester",
    name: "Manchester Training Hub",
    image: manchesterImg,
    rating: "4.8",
    address: "45 Deansgate, Manchester, M3 2AY",
    hours: "Mon-Sat: 8:00 AM - 7:00 PM",
    next: "Today",
    phone: "0161 234 5678",
    email: "manchester@getlicensed.co.uk",
    courses: ["Door Supervisor", "Security Guard", "CCTV Operator"],
    more: "+1 more"
  },
  {
    city: "Birmingham",
    name: "Birmingham Academy",
    image: birminghamImg,
    rating: "4.9",
    address: "78 Broad Street, Birmingham, B1 2HP",
    hours: "Mon-Sun: 7:30 AM - 8:00 PM",
    next: "Tomorrow",
    phone: "0121 234 5678",
    email: "birmingham@getlicensed.co.uk",
    courses: ["Door Supervisor", "Security Guard", "CCTV Operator"],
    more: "+3 more"
  },
  {
    city: "Glasgow",
    name: "Glasgow Training Centre",
    image: glasgowImg,
    rating: "4.9",
    address: "89 Sauchiehall Street, Glasgow, G2 3DE",
    hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    next: "Today",
    phone: "0141 234 5678",
    email: "glasgow@getlicensed.co.uk",
    courses: ["Door Supervisor", "Security Guard", "CCTV Operator"],
    more: "+2 more"
  }
];

const FeaturedCentres = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f3f6f9] py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-12">
          <Sparkles className="w-6 h-6 text-[#F15A24] " />
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Featured Training Centres
          </h2>
        </div>

        {/* Grid - Change to 3 columns for wider cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {centres.map((centre, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] shadow-[0_15px_35px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col transition-transform duration-300 hover:translate-y-[-5px]"
            >

              {/* Image Header */}
              <div className="relative h-[260px]">
                <img
                  src={centre.image}
                  alt={centre.city}
                  className="w-full h-full object-cover"
                />

                {/* Featured Badge */}
                <div className="absolute top-4 left-4 bg-[#F15A24] text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Sparkles size={11} className="fill-white" />
                  Featured
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-[#00000080] backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  {centre.rating}
                </div>

                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-bold leading-tight">
                    {centre.city}
                  </h3>
                  <p className="text-sm text-white/90 font-medium">
                    {centre.name}
                  </p>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-[14px] text-gray-600">
                    <MapPin className="w-4 h-4 text-[#F15A24] mt-0.5 shrink-0" />
                    <span className="leading-tight">{centre.address}</span>
                  </div>

                  <div className="flex items-start gap-3 text-[14px] text-gray-600">
                    <Clock className="w-4 h-4 text-[#F15A24] mt-0.5 shrink-0" />
                    <span className="leading-tight">{centre.hours}</span>
                  </div>

                  {/* Availability Status */}
                  <div className="flex items-center gap-3 text-[14px] font-bold text-[#12B76A]">
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>Next available: {centre.next}</span>
                  </div>
                </div>

                {/* Courses Selection */}
                <div className="mb-6">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                    COURSES AVAILABLE
                  </div>

                  <div className="flex flex-nowrap gap-2 mb-2 overflow-hidden">
                    {centre.courses.map((courseName, i) => (
                      <span
                        key={i}
                        onClick={() => navigate(`/booking/course?courseid=${courseTitleToId(courseName)}&postcode=${encodeURIComponent(centre.city)}`)}
                        className="bg-gray-100 text-gray-700 text-[11px] font-medium px-3 py-1 rounded-full whitespace-nowrap cursor-pointer hover:bg-[#F15A24]/10 hover:text-[#F15A24] transition-colors"
                      >
                        {courseName}
                      </span>
                    ))}
                  </div>
                  <div>
                    <span className="bg-[#FFE9DC] text-black text-[11px] font-bold px-3 py-1 rounded-full w-fit inline-block">
                      {centre.more}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex items-center gap-3">
                  <button
                    onClick={() => {
                      const courseId = centre.courses.length > 0 ? courseTitleToId(centre.courses[0]) : "door-supervisor";
                      navigate(`/booking/course?courseid=${courseId}&postcode=${encodeURIComponent(centre.city)}`);
                    }}
                    className="flex-1 bg-[#1C1C1C] text-white py-3.5 rounded-full font-bold text-sm hover:bg-black transition flex items-center justify-center gap-2"
                  >
                    Book Now <span className="text-lg">→</span>
                  </button>

                  <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition text-[#1C1C1C]">
                    <Phone className="w-5 h-5" />
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedCentres;