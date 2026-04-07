import React, { useState } from "react";
import { Star, MapPin, Calendar } from "lucide-react";

import London from "../../assets/locations/London.png";
import Manchester from "../../assets/locations/Manchester.png";
import Birmingham from "../../assets/locations/Birmingham.png";
import Leeds from "../../assets/locations/Leeds.png";
import Bristol from "../../assets/locations/Bristol.png";
import Glasgow from "../../assets/locations/Glasgow.png";
import Edinburgh from "../../assets/locations/Edinburgh.png";
import Liverpool from "../../assets/locations/Liverpool.png";
import Cardiff from "../../assets/locations/Cardiff.png";
import CentreDetailsModal from "./CentreDetailsModal";

const centres = [
  {
    city: "London",
    name: "London Central Training Centre",
    image: London,
    rating: "4.9",
    postcode: "W1D 2HG",
    address: "123 Oxford Street, London, W1D 2HG",
    hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    next: "Tomorrow",
    courses: ["Door Supervisor", "Security Guard"],
    facilities: ["WiFi Access", "Public Transport", "Disabled Access"],
    phone: "020 7123 4567",
    email: "london@getlicensed.co.uk",
    more: "+3"
  },
  {
    city: "Manchester",
    name: "Manchester Training Hub",
    image: Manchester,
    rating: "4.8",
    postcode: "M3 2AY",
    address: "45 Deansgate, Manchester, M3 2AY",
    hours: "Mon-Sat: 8:00 AM - 7:00 PM",
    next: "Today",
    courses: ["Door Supervisor", "Security Guard"],
    facilities: ["WiFi Access", "Parking Available", "Disabled Access"],
    phone: "0161 234 5678",
    email: "manchester@getlicensed.co.uk",
    more: "+2"
  },
  {
    city: "Birmingham",
    name: "Birmingham Academy",
    image: Birmingham,
    rating: "4.9",
    postcode: "B1 2HP",
    address: "78 Broad Street, Birmingham, B1 2HP",
    hours: "Mon-Sun: 7:30 AM - 8:00 PM",
    next: "Tomorrow",
    courses: ["Door Supervisor", "Security Guard"],
    facilities: ["WiFi Access", "Public Transport", "Refreshments"],
    phone: "0121 234 5678",
    email: "birmingham@getlicensed.co.uk",
    more: "+4"
  },
  {
    city: "Leeds",
    name: "Leeds Training Centre",
    image: Leeds,
    rating: "4.7",
    postcode: "LS1 2AG",
    address: "22 Park Row, Leeds, LS1 2AG",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    next: "3 days",
    courses: ["Door Supervisor", "Security Guard"],
    facilities: ["WiFi Access", "Public Transport"],
    phone: "0113 234 5678",
    email: "leeds@getlicensed.co.uk",
    more: "+2"
  },
  {
    city: "Bristol",
    name: "Bristol Training Academy",
    image: Bristol,
    rating: "4.8",
    postcode: "BS8 3JA",
    address: "10 Clifton Down Road, Bristol, BS8 3JA",
    hours: "Mon-Sat: 8:30 AM - 6:30 PM",
    next: "Tomorrow",
    courses: ["Door Supervisor", "Security Guard"],
    facilities: ["WiFi Access", "Parking Available"],
    phone: "0117 234 5678",
    email: "bristol@getlicensed.co.uk",
    more: "+1"
  },
  {
    city: "Glasgow",
    name: "Glasgow Training Centre",
    image: Glasgow,
    rating: "4.9",
    postcode: "G2 3DE",
    address: "89 Sauchiehall Street, Glasgow, G2 3DE",
    hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    next: "Today",
    courses: ["Door Supervisor", "Security Guard", ""],
    facilities: ["WiFi Access", "Public Transport", "Disabled Access"],
    phone: "0141 234 5678",
    email: "glasgow@getlicensed.co.uk",
    more: "+3"
  },
  {
    city: "Edinburgh",
    name: "Edinburgh Academy",
    image: Edinburgh,
    rating: "4.8",
    postcode: "EH2 2AN",
    address: "12 Princes Street, Edinburgh, EH2 2AN",
    hours: "Mon-Sat: 8:00 AM - 7:00 PM",
    next: "Tomorrow",
    courses: ["Door Supervisor", "Security Guard", ""],
    facilities: ["WiFi Access", "Public Transport", "Disabled Access"],
    phone: "0131 234 5678",
    email: "edinburgh@getlicensed.co.uk",
    more: "+2"
  },
  {
    city: "Liverpool",
    name: "Liverpool Training Hub",
    image: Liverpool,
    rating: "4.7",
    postcode: "L1 4HY",
    address: "5 Albert Dock, Liverpool, L1 4HY",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    next: "2 days",
    courses: ["Door Supervisor", "Security Guard"],
    facilities: ["WiFi Access", "Public Transport"],
    phone: "0151 234 5678",
    email: "liverpool@getlicensed.co.uk",
    more: "+1"
  },
  {
    city: "Cardiff",
    name: "Cardiff Training Centre",
    image: Cardiff,
    rating: "4.8",
    postcode: "CF10 2GE",
    address: "14 Queen Street, Cardiff, CF10 2GE",
    hours: "Mon-Sat: 8:00 AM - 6:00 PM",
    next: "Tomorrow",
    courses: ["Door Supervisor", "Security Guard"],
    facilities: ["WiFi Access", "Disabled Access"],
    phone: "029 2345 6789",
    email: "cardiff@getlicensed.co.uk",
    more: "+2"
  }
];

const AllTrainingCentres = () => {

  const [selectedCentre, setSelectedCentre] = useState(null);

  return (
    <section className="bg-[#f3f6f9] py-5 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-black">
            All Training Centres
          </h2>
          <p className="text-gray-500 mt-2">
            Showing 9 locations
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {centres.map((centre, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col"
            >

              {/* Image */}
              <div className="relative h-[200px]">
                <img
                  src={centre.image}
                  alt={centre.city}
                  className="w-full h-full object-cover"
                />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  {centre.rating}
                </div>

                {/* City Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
                  <h3 className="text-xl font-semibold">
                    {centre.city}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">

                <h4 className="font-semibold text-[#364153] mb-3">
                  {centre.name}
                </h4>

                {/* Postcode */}
                <div className="flex items-center gap-2 text-sm text-[#4A5565] mb-2">
                  <MapPin className="w-4 h-4 text-[#F15A24] " />
                  {centre.postcode}
                </div>

                {/* Next Available */}
                <div className="flex items-center gap-2 text-sm font-medium mb-4 text-[#00A63E]">                  <Calendar className="w-4 h-4" />
                  Next: {centre.next}
                </div>

                {/* Tags */}
                <div className="flex flex-nowrap items-center gap-2 mb-6 overflow-hidden">
                  {centre.courses.map((course, i) => (
                    <span
                      key={i}
                      className="bg-[#F3F4F6] text-[#4A5565] text-xs px-3 py-1 rounded-full whitespace-nowrap"
                    >
                      {course}
                    </span>
                  ))}

                  <span className="bg-[#FFE9DC] text-black text-xs px-3 py-1 rounded-full font-bold whitespace-nowrap">
                    {centre.more}
                  </span>
                </div>

                {/* Button */}
                <button
                  onClick={() => setSelectedCentre(centre)}
                  className="mt-auto bg-black text-white py-2 rounded-full font-medium hover:bg-black transition"
                >
                  View Details →
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
      {selectedCentre && (
        <CentreDetailsModal
          centre={selectedCentre}
          onClose={() => setSelectedCentre(null)}
        />
      )}
    </section>
  );
};

export default AllTrainingCentres;