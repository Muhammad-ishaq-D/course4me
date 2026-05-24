import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Clock3,
  CheckCircle2,
  BookOpen,
  Heart,
  CalendarDays,
} from "lucide-react";
import CourseCard from "../ui/CourseCard";
import CenterDetails from "./CenterDetails";
import Loader from "../ui/Loader";
import locationService from "../../api/services/locationService";

const LocationDetails = () => {
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);

  const center = state?.center;

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    const fetchCourses = async () => {
      try {
        if (center?.locationId) {
          const data = await locationService.getLocationCourses(center.locationId);
          if (data.success) {
            setCourses(data.data);
          }
        }
      } catch (error) {
        console.error("Failed to fetch location courses:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCourses();
  }, [center?.locationId]);

  // ================= LOADER =================
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F4F7FB] flex items-center justify-center">
        {" "}
        <Loader text="Preparing center details..." />{" "}
      </div>
    );
  }

  if (!center) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4F7FB]">
        <h1 className="text-3xl font-bold text-gray-800">No Center Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#F4F7FB] min-h-screen">
      {/* =========================================================
      PREMIUM HERO SECTION
========================================================= */}
      <section className="relative min-h-screen overflow-hidden bg-[#0B1120] flex items-center">
        {/* =====================================================
        BACKGROUND GLOWS
  ===================================================== */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Left Glow */}
          <div className="absolute left-0 top-0 w-[450px] h-[450px] bg-blue-600/20 blur-[130px]" />

          {/* Right Glow */}
          <div className="absolute right-0 top-0 w-[450px] h-[450px] bg-orange-500/20 blur-[130px]" />

          {/* Center Glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-orange-500/10 blur-[170px]" />
        </div>

        {/* ===========================MAIN CONTAINER===================== */}
        <div className="relative max-w-7xl mx-auto px-4 w-full pt-6 pb-8">
          {/* =========================BREADCRUMB==================== */}
          <div className="flex items-center gap-3 text-sm text-white/50 mb-7">
            <NavLink
              to="/"
              className="hover:text-white transition cursor-pointer"
            >
              Home
            </NavLink>

            <span>/</span>

            <NavLink
              to="/locations"
              className="hover:text-white transition cursor-pointer"
            >
              Locations
            </NavLink>

            <span>›</span>

            <span className="text-white font-medium">{center.name}</span>
          </div>

          {/* ===========================MAIN GRID====================== */}
          <div className="grid lg:grid-cols-[1fr_370px] gap-10 items-center">
            {/* =======================LEFT CONTENT======================= */}
            <div>
              {/* Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                {/* In Person */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-400" />

                  <span className="text-green-300 text-sm font-medium">
                    In-Person Training
                  </span>
                </div>

                {/* Certified */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />

                  <span className="text-white/80 text-sm font-medium">
                    Certified Center
                  </span>
                </div>
              </div>

              {/* =========================TITLE====================== */}
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-[1.05] max-w-3xl">
                {center.name}
              </h1>

              {/* =====================DESCRIPTION================== */}
              <p className="text-base md:text-lg text-white/60 leading-relaxed mt-5 max-w-2xl">
                Professional training center delivering certified courses,
                practical workshops, and industry-recognized qualifications for
                modern learners.
              </p>

              {/* ===================FEATURES======================= */}
              <div className="grid sm:grid-cols-2 gap-4 mt-7 max-w-2xl">
                {[
                  "Industry Certified Training",
                  "Professional Learning Environment",
                  "Flexible Course Schedule",
                  "Expert Trainers & Support",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-cyan-400 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    </div>

                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* =================CTA BUTTON=============================== */}
              <div className="mt-8">
                <button className="h-13 px-8 cursor-pointer rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base transition-all duration-300 shadow-[0_15px_35px_rgba(249,115,22,0.35)]">
                  Explore Courses at This Center{" "}
                </button>
              </div>
            </div>

            {/* =====================================================
            RIGHT CARD
      ===================================================== */}
            <div className="relative">
              <div className="bg-[#2A1A16]/90 backdrop-blur-2xl border border-white/10 rounded-[28px] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.40)]">
                {/* ============================IMAGE=========================== */}
                <div className="relative rounded-[22px] overflow-hidden">
                  <img
                    src={center.image}
                    alt={center.name}
                    className="w-full h-[190px] object-cover"
                  />

                  {/* Heart */}
                  <button className="absolute top-4 left-4 w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                    <Heart className="w-4 h-4 text-white" />
                  </button>

                  {/* Rating */}
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full">
                    <span className="text-white text-xs font-medium">
                      {center.rating}% pass rate
                    </span>
                  </div>
                </div>

                {/* =============================DETAILS===================== */}
                <div className="mt-5 space-y-1">
                  {/* Available Courses */}
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/5 px-4 py-3">
                    <div className="flex items-center gap-3 text-white/60">
                      <BookOpen className="w-4 h-4 text-orange-400" />

                      <span className="text-sm">Available Courses</span>
                    </div>

                    <span className="text-white text-sm font-semibold">
                      {courses.length}+
                    </span>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/5 px-4 py-3">
                    <div className="flex items-center gap-3 text-white/60">
                      <Clock3 className="w-4 h-4 text-orange-400" />

                      <span className="text-sm">Opening Hours</span>
                    </div>

                    <span className="text-white text-sm font-semibold">
                      Mon - Sat
                    </span>
                  </div>

                  {/* Next Session */}
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/5 px-4 py-3">
                    <div className="flex items-center gap-3 text-white/60">
                      <CalendarDays className="w-4 h-4 text-orange-400" />

                      <span className="text-sm">Next Session</span>
                    </div>

                    <span className="text-white text-sm font-semibold">
                      {center.next}
                    </span>
                  </div>
                </div>

                {/* ===========================GUARANTEE CARD==================== */}
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-2">
                  <div className="flex items-center gap-3">
                    <div className=" rounded-xl bg-orange-500/20 flex items-center justify-center">
                      <CheckCircle2
                        size={24}
                        className="w-5 h-5 text-orange-400"
                      />
                    </div>

                    <div>
                      <h3 className="text-white text-sm font-semibold">
                        Training Guarantee
                      </h3>

                      <p className="text-white/50 text-xs mt-1 leading-relaxed">
                        Premium learning experience with expert trainers and
                        professional support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
            CENTER DETAILS
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        {/* ================CENTER DETAILS======================== */}
        <CenterDetails center={center} />

        {/* ======================COURSES======================= */}
        <div className="mt-20">
          {/* ============================SECTION HEADER================== */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[3px] text-orange-500 font-semibold">
                Courses
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
                Available Courses
              </h2>
            </div>

            {/* Total */}
            <div className="flex items-center gap-3 bg-orange-50 border border-orange-100 rounded-2xl px-5 py-4">
              <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[2px] text-orange-500 font-medium">
                  Total Courses
                </p>

                <h3 className="text-2xl font-semibold text-gray-900">
                  {courses.length}
                </h3>
              </div>
            </div>
          </div>
          {/* ======================COURSES GRID===================== */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course._id || course.id}
                id={course._id || course.id}
                image={course.thumbnail || course.image}
                title={course.title}
                description={course.shortDescription || course.description}
                badge={course.badge || "Popular"}
                price={course.pricing?.basePrice || course.price}
                date={course.date || "Multiple Dates"}
                category={course.category}
                duration={course.duration}
                isPopular={course.isPopular}
                isOnline={course.isOnline || false}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationDetails;
