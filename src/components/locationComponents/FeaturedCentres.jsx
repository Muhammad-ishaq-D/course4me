import React, { useState } from "react";
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
import BookCourseModal from "./BookCourseModal";

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
  const [selectedCentre, setSelectedCentre] = useState(null);
  return (
    <section className="bg-[#f3f6f9] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-12">
          <Sparkles className="w-6 h-6 text-[#B9FF5A]" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f3a47]">
            Featured Training Centres
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {centres.map((centre, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col"
            >

              {/* Image */}
              <div className="relative h-[220px]">
                <img
                  src={centre.image}
                  alt={centre.city}
                  className="w-full h-full object-cover"
                />

                {/* Featured Badge */}
                <div className="absolute top-4 left-4 bg-[#B9FF5A] text-[#1f2f3f] text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  {centre.rating}
                </div>

                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold">
                    {centre.city}
                  </h3>
                  <p className="text-sm text-white/80">
                    {centre.name}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">

                {/* Address */}
                <div className="flex items-start gap-2 text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 text-[#B9FF5A] mt-1" />
                  {centre.address}
                </div>

                {/* Hours */}
                <div className="flex items-start gap-2 text-sm text-gray-600 mb-3">
                  <Clock className="w-4 h-4 text-[#B9FF5A] mt-1" />
                  {centre.hours}
                </div>

                {/* Next Available */}
                <div className="flex items-center gap-2 text-sm font-semibold text-[#0fa968] mb-6">
                  <Calendar className="w-4 h-4" />
                  Next available: {centre.next}
                </div>

                {/* Courses */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-gray-400 mb-3">
                    COURSES AVAILABLE
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {centre.courses.map((course, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                    <span className="bg-[#eafad1] text-[#2f3a47] text-xs px-3 py-1 rounded-full">
                      {centre.more}
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-auto flex items-center gap-4">
                  <button   
                  onClick={() => setSelectedCentre(centre)}
 className="flex-1 bg-[#2f3a47] text-white py-3 rounded-full font-medium hover:bg-black transition flex items-center justify-center gap-2">
                    Book Now →
                  </button>

                  <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                    <Phone className="w-5 h-5 text-[#2f3a47]" />
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
        <BookCourseModal
  centre={selectedCentre}
  onClose={() => setSelectedCentre(null)}
/>
      </div>
    </section>
  );
};

export default FeaturedCentres;