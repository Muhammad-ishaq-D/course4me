import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  MapPin,
  Clock,
  Calendar,
  Phone,
  Star,
  ArrowRight,
} from "lucide-react";

import londonImg from "../../assets/locations/London.png";
import manchesterImg from "../../assets/locations/Manchester.png";
import birminghamImg from "../../assets/locations/Birmingham.png";
import glasgowImg from "../../assets/locations/Glasgow.png";
import CentresCard from "../ui/CentresCard";

const centres = [
  {
    city: "London",
    name: "London Central Training Centre",
    featured: true,
    image: londonImg,
    rating: "4.9",
    address: "123 Oxford Street, London, W1D 2HG",
    hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    next: "Tomorrow",
    phone: "020 7123 4567",
    email: "london@courses4me.co.uk",
    courses: [
      "Door Supervisor",
      "Security Guard",
      "CCTV Operator",
      "First Aid at Work",
      "Event Steward",
    ],
    more: "+2 more",
  },
  {
    city: "Manchester",
    name: "Manchester Training Hub",
    featured: true,
    image: manchesterImg,
    rating: "4.8",
    address: "45 Deansgate, Manchester, M3 2AY",
    hours: "Mon-Sat: 8:00 AM - 7:00 PM",
    next: "Today",
    phone: "0161 234 5678",
    email: "manchester@courses4me.co.uk",
    courses: ["Door Supervisor", "Security Guard", "CCTV Operator"],
    more: "+1 more",
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
    email: "birmingham@courses4me.co.uk",
    courses: ["Door Supervisor", "Security Guard", "CCTV Operator"],
    more: "+3 more",
  },
  {
    city: "Glasgow",
    name: "Glasgow Training Centre",
    image: glasgowImg,
    rating: "4.9",
    address: "89 Sauchiehall Street, Glasgow, G2 3DE",
    hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    next: "Today",
    phone: "08006894621",
    email: "glasgow@courses4me.co.uk",
    courses: ["Door Supervisor", "Security Guard", "CCTV Operator"],
    more: "+2 more",
  },
];

const FeaturedCentres = ({ active }) => {
  return (
    <section className="relative  overflow-hidden bg-linear-to-b from-[#f4f7fb] to-[#eef3f8] py-8 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-10">
      {/* Background Glow */}
      <div className="absolute -top-30 -right-30 w-[320px] h-80 bg-[#F15A24] opacity-10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-350 mx-auto">
        {/* ================= HEADER ================= */}

        {/* Left */}
        <div className="mb-2">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#243443] leading-tight tracking-tight">
            {active === "All Centers" && "All Training Centres"}

            {active === "Featured Centers" && "Featured Training Centres"}

            {active === "Available Centers" && "Available Training Centres"}
          </h2>
        </div>

        {/* ================= CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {centres.map((centre, index) => (
            <CentresCard key={index} centre={centre} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCentres;
