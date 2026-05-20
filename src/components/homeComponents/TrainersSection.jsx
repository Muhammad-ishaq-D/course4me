import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import courseService from "../../api/services/courseService";
import {
  Star,
  MapPin,
  Award,
  Users,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import John from "../../assets/home/john.png";
import Sarah from "../../assets/home/sarah.png";
import David from "../../assets/home/david.png";
import Richard from "../../assets/home/richard.png";
import Emma from "../../assets/home/emma.png";
import Marcus from "../../assets/home/marcus.png";
import { motion } from "framer-motion";


export default function TrainersSection() {
  const navigate = useNavigate();
  const [trainersList, setTrainersList] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await courseService.getAllCourses({ status: "Published" });
        const courses = response.data?.data || [];

        const uniqueTrainers = [];
        const seenNames = new Set();

        courses.forEach((course) => {
          if (course.instructor && course.instructor.name) {
            if (!seenNames.has(course.instructor.name)) {
              seenNames.add(course.instructor.name);

              uniqueTrainers.push({
                name: course.instructor.name,
                role: course.instructor.title || "Security Instructor",
                title: course.title || "Professional Training",
                experience: "10+ years",
                locations: course.location ? [course.location] : ["London", "Manchester"],
                rating: "4.9",
                reviews: "120+",
                badge: "Certified",
                image: course.instructor.photo || John,
              });
            }
          }
        });

        if (uniqueTrainers.length > 0) {
          setTrainersList(uniqueTrainers);
        }
      } catch (error) {
        console.error("Error fetching trainers from courses:", error);
      }
    };

    fetchTrainers();
  }, []);

  return (
    <section className="bg-white text-[#1A1A1A] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 bg-[#1A1A1A] text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
            <Users size={16} className="text-[#00A3FF]" /> OUR TEAM
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-[44px] md:text-[52px] font-bold mb-6 tracking-tight">
          Meet Our Trainers
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 text-lg font-medium">
          Industry veterans and certified professionals who are passionate about
          launching your career in security.
        </p>

        {/* Trainer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainersList.map((trainer, i) => (
            <TrainerCard
              key={i}
              trainer={trainer}
              onClick={() => navigate("/courses")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainerCard({ trainer, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        bg-white
        border border-gray-100
        shadow-[0_12px_40px_rgba(0,0,0,0.06)]
        hover:shadow-[0_25px_60px_rgba(248,81,12,0.12)]
        transition-all duration-500
      "
    >
      {/* TOP ORANGE LINE */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF5421] to-[#FF7A4D]" />

      {/* IMAGE */}
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/20 to-transparent" />
        {/* BADGE */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2 bg-[#FF5421] text-white px-3 py-1.5 rounded-full text-[10px] font-bold shadow-lg">
            <ShieldCheck size={12} />
            {trainer.badge}
          </div>
        </div>

        {/* RATING */}
        <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full flex items-center gap-1 text-xs font-bold shadow-lg">
          <Star size={13} className="text-[#FF5421] fill-[#FF5421]" />
          {trainer.rating}
        </div>

        {/* INFO */}
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-[22px] font-bold text-white leading-tight">
            {trainer.name}
          </h3>

          <p className="text-sm text-gray-300 mt-1">{trainer.role}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* TITLE */}
        <h4 className="text-[18px] font-bold text-[#111111] leading-snug">
          {trainer.title}
        </h4>

        {/* STATS */}
        <div className="flex items-center justify-between mt-6 gap-3">
          {/* EXPERIENCE */}
          <div className="flex items-center gap-3 bg-[#FFF7F4] border border-[#FFE1D5] rounded-2xl px-4 py-3 flex-1">
            <div className="w-10 h-10 rounded-xl bg-[#FF5421] flex items-center justify-center flex-shrink-0">
              <Award size={18} className="text-white" />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wide text-gray-400 font-bold">
                Experience
              </p>

              <p className="text-sm font-bold text-[#111111]">
                {trainer.experience}
              </p>
            </div>
          </div>

          {/* LOCATIONS */}
          <div className="flex items-center gap-3 bg-[#FFF7F4] border border-[#FFE1D5] rounded-2xl px-4 py-3 flex-1">
            <div className="w-10 h-10 rounded-xl bg-[#FF5421] flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-white" />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wide text-gray-400 font-bold">
                Locations
              </p>

              <p className="text-sm font-bold text-[#111111]">
                {trainer.locations.length} Cities
              </p>
            </div>
          </div>
        </div>

        {/* CITY TAGS */}
        <div className="flex flex-wrap gap-2 mt-5">
          {trainer.locations.slice(0, 3).map((city, i) => (
            <span
              key={i}
              className="
                bg-[#F9FAFB]
                border border-gray-100
                text-gray-600
                px-3 py-1.5
                rounded-full
                text-[11px]
                font-semibold
                hover:bg-[#FF5421]
                hover:text-white
                transition-all duration-300
              "
            >
              {city}
            </span>
          ))}
        </div>

        {/* BUTTON */}
        <button
          onClick={onClick}
          className="
            group/btn
            mt-6
            w-full
            bg-[#FF5421]
            hover:bg-[#FF6A3D]
            text-white
            rounded-2xl
            py-3.5
            font-bold
            transition-all duration-300
            flex
            items-center
            justify-center
            gap-2
            shadow-[0_10px_30px_rgba(248,81,12,0.25)]
          "
        >
          View Profile
          <ChevronRight
            size={17}
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </button>
      </div>

      {/* HOVER EFFECT */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF5421]/10 rounded-[30px] transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}
