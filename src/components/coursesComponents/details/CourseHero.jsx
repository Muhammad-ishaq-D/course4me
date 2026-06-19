import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Star,
  Clock,
  Users,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Heart,
} from "lucide-react";

const CourseHero = ({ course }) => {
  const navigate = useNavigate();
  if (!course) return null;

  // Formatting backend data
  const displayPrice = course.pricing?.basePrice
    ? `£${course.pricing.basePrice}`
    : "N/A";
  const displayRating = "4.9"; // Fallback as backend doesn't have it yet
  const displayReviews = course.reviewsCount || "1,000+";
  const displayBooked = course.bookedCount || "500+";
  const displayPassRate = course.passRate || "98%";
  const displayImage = course.thumbnail || "/assets/courses/door.png";
  const displayHighlights = course.highlights || [];

  return (
    <>
      {/* <section className="bg-[#F8FAFC] border-b mt-5 border-gray-200"></section> */}

      {/* 🔥 HERO */}
      <section className="relative text-white py-10 lg:py-12 overflow-hidden bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <div className="flex items-center flex-wrap gap-2 text-xs md:text-sm">
            {/* Home */}
            <NavLink
              to="/"
              className="text-[#667085] font-medium cursor-pointer hover:text-[#F8510C] transition-colors duration-200"
            >
              Home
            </NavLink>

            {/* Divider */}
            <span className="text-[#D0D5DD] text-sm">›</span>

            {/* Courses */}
            <NavLink
              to="/courses"
              className="text-[#667085] font-medium cursor-pointer hover:text-[#F8510C] transition-colors duration-200"
            >
              All Courses
            </NavLink>

            {/* Divider */}
            <span className="text-[#D0D5DD] text-sm">›</span>

            {/* Current Page */}
            <span className="text-white font-semibold truncate max-w-55 sm:max-w-none">
              {course.title}
            </span>
          </div>
        </div>

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#1e3a8a40,transparent_40%),radial-gradient(circle_at_80%_20%,#F15A2430,transparent_40%)]" />
        <div className="relative max-w-7xl mx-auto px-6 mt-2 lg:px-8">
          {/* GRID */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* ✅ LEFT (FORCED LEFT ALIGN) */}
            <div className="text-left">
              {/* TAGS */}
              <div className="flex gap-2 mb-5 flex-wrap">
                <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs md:text-sm flex items-center gap-1">
                  <CheckCircle2 size={12} /> In-Person
                </span>

                {course.isPopular && (
                  <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs md:text-sm">
                    Popular
                  </span>
                )}

                <span className="bg-white/10 px-3 py-1 rounded-full text-xs md:text-sm flex items-center gap-1">
                  <ShieldCheck size={12} /> SIA Approved
                </span>
              </div>

              {/* TITLE */}
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">
                {course.title}
              </h1>

              {/* SUBTITLE */}
              <p className="text-white/60 text-base md:text-lg mb-6">
                {course.subtitle}
              </p>

              {/* RATING */}
              <div className="flex flex-wrap items-center gap-5 mb-8 text-[15px]">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    <Star size={14} />
                  </div>
                  <span className="font-semibold">{displayRating}</span>
                  <span className="text-white/40">
                    ({displayReviews} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-white/50">
                  <Clock size={14} />
                  Course duration: {course.duration}
                </div>

                <div className="flex items-center gap-2 text-white/50">
                  <Users size={14} />
                  {displayBooked} booked
                </div>
              </div>

              {/* FEATURES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mb-8 text-base text-white/70">
                {displayHighlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00A3F4]" />
                    {item}
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => navigate(`/course/${course._id}/book`)}
                  className="bg-[#F15A24] cursor-pointer px-7 py-3 rounded-full font-semibold text-base flex items-center gap-2 shadow-lg shadow-[#F15A24]/20 hover:brightness-110 transition"
                >
                  Book This Course <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* ✅ RIGHT CARD (FIXED POSITION) */}
            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="absolute -inset-8 bg-orange-500/10 blur-3xl rounded-3xl hidden lg:block" />

              <div className="relative w-full max-w-[380px] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                {/* IMAGE */}
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={displayImage}
                    alt={course.title}
                    className="w-full h-[200px] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <button className="absolute top-3 left-3 w-9 h-9 bg-red-500 rounded-full flex items-center justify-center">
                    <Heart size={16} />
                  </button>

                  <div className="absolute bottom-3 right-3 bg-black/50 px-3 py-1 rounded-full text-sm">
                    {displayPassRate} pass rate
                  </div>
                </div>

                {/* CONTENT */}
                <div className="mt-4">
                  <p className="text-white/50 text-base">Price from</p>

                  <h2 className="text-3xl font-bold mt-1">
                    {displayPrice}
                    <span className="text-sm text-white/40 ml-1">
                      per person
                    </span>
                  </h2>

                  {/* INFO */}
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex justify-between">
                      <div className="flex items-center text-base gap-2 text-white/50">
                        <Clock size={16} /> Duration
                      </div>
                      <span className="text-white text-base">
                        {course.duration}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center text-base gap-2 text-white/50">
                        <Calendar size={16} /> Next Date
                      </div>
                      <span className="text-white text-base">
                        {course.sessions?.find(
                          (s) => s.availabilityStatus !== "Sold Out",
                        )?.startDate
                          ? new Date(
                              course.sessions.find(
                                (s) => s.availabilityStatus !== "Sold Out",
                              ).startDate,
                            ).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                            })
                          : "TBC"}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center text-base gap-2 text-white/50">
                        <CheckCircle2 size={16} /> Format
                      </div>
                      <span className="text-white text-base">In-Person</span>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center text-base gap-2 text-white/50">
                        <Users size={16} /> Pass Rate
                      </div>
                      <span className="text-white text-base">
                        {displayPassRate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseHero;
