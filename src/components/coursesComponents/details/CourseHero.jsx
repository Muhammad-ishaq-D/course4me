import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Star,
  Clock,
  Users,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Heart
} from "lucide-react";

const CourseHero = ({ course }) => {
  const navigate = useNavigate();
  if (!course) return null;

  return (
    <>
      {/* ✅ BREADCRUMB */}
      <section className="bg-[#F8FAFC] border-b mt-34 border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 text-[13px] text-gray-500">
          Home <span className="mx-2">›</span>
          All Courses <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">
            {course.title}
          </span>
        </div>
      </section>

      {/* 🔥 HERO */}
      <section className="relative text-white py-10 lg:py-12 overflow-hidden bg-[#141414]">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#1e3a8a40,transparent_40%),radial-gradient(circle_at_80%_20%,#F15A2430,transparent_40%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          {/* GRID */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

            {/* ✅ LEFT (FORCED LEFT ALIGN) */}
            <div className="text-left">

              {/* TAGS */}
              <div className="flex gap-2 mb-5 flex-wrap">
                <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <CheckCircle2 size={12} /> In-Person
                </span>

                <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs">
                  Popular
                </span>

                <span className="bg-white/10 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <ShieldCheck size={12} /> SIA Approved
                </span>
              </div>

              {/* TITLE */}
              <h1 className="text-[36px] md:text-[48px] font-extrabold leading-tight mb-2">
                {course.title}
              </h1>

              {/* SUBTITLE */}
              <p className="text-white/60 text-[15px] md:text-[16px] mb-6">
                {course.subtitle}
              </p>

              {/* RATING */}
              <div className="flex flex-wrap items-center gap-5 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-white/40">
                    ({course.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-white/50">
                  <Clock size={14} />
                  3-day course from 9am to 5pm
                </div>

                <div className="flex items-center gap-2 text-white/50">
                  <Users size={14} />
                  {course.booked} booked
                </div>
              </div>

              {/* FEATURES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mb-8 text-sm text-white/70">
                {course.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00A3F4]" />
                    {item}
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => navigate(`/course/${course.id}/book`)}
                  className="bg-[#F15A24] px-7 py-3 rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg shadow-[#F15A24]/20 hover:brightness-110 transition"
                >
                  Book This Course <ChevronRight size={16} />
                </button>

                <button className="border border-white/20 px-7 py-3 rounded-full text-sm text-white/80 hover:bg-white/5 transition flex items-center gap-2">
                  <Calendar size={16} /> View Dates
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
                    src={course.heroImage}
                    className="w-full h-[200px] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <button className="absolute top-3 left-3 w-9 h-9 bg-red-500 rounded-full flex items-center justify-center">
                    <Heart size={14} />
                  </button>

                  <div className="absolute bottom-3 right-3 bg-black/50 px-3 py-1 rounded-full text-xs">
                    {course.passRate} pass rate
                  </div>
                </div>

                {/* CONTENT */}
                <div className="mt-4">
                  <p className="text-white/50 text-xs">Price from</p>

                  <h2 className="text-[24px] font-bold mt-1">
                    {course.price}
                    <span className="text-sm text-white/40 ml-1">
                      per person
                    </span>
                  </h2>

                  {/* INFO */}
                  <div className="mt-4 space-y-3 text-sm">

                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 text-white/50">
                        <Clock size={14} /> Duration
                      </div>
                      <span className="text-white">{course.duration}</span>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 text-white/50">
                        <Calendar size={14} /> Next Date
                      </div>
                      <span className="text-white">{course.nextDate}</span>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 text-white/50">
                        <CheckCircle2 size={14} /> Format
                      </div>
                      <span className="text-white">{course.format}</span>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 text-white/50">
                        <Users size={14} /> Pass Rate
                      </div>
                      <span className="text-white">{course.passRate}</span>
                    </div>

                  </div>

                  {/* GUARANTEE */}
                  <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-start gap-2">
                      <ShieldCheck size={16} className="text-[#00A3F4]" />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Training Guarantee
                        </p>
                        <p className="text-xs text-white/50">
                          Free exam retakes if you don't pass first time
                        </p>
                      </div>
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