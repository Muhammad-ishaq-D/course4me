import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Paul Taylor",
    role: "Door Supervisor Training · January 2026",
    text: "2 months ago I was working in a warehouse. Today, I am working as a security guard in Harrow earning a lot more than I was sorting boxes.",
  },
  {
    name: "Sarah Johnson",
    role: "Door Supervisor Training · January 2026",
    text: "I had the opportunity to take the course under excellent instruction. The trainer was patient and knowledgeable",
  },
  {
    name: "James Mitchell",
    role: "Security Guard Training · February 2026",
    text: "Great trainer, I am doing the door supervision course next month. Very professional and thorough teaching style.",
  },
  {
    name: "Marcus Thompson",
    role: "CCTV Training · December 2025",
    text: "Completed the CCTV course with very professional trainers. Learn so much about surveillance and techniques.",
  },
  {
    name: "Emma Wilson",
    role: "First Aid at Work · January 2026",
    text: "Brilliant course! The hands-on practice and realistic scenarios really prepared me for real emergencies.",
  },
  {
    name: "David Chen",
    role: "Close Protection · November 2025",
    text: "Intensive and worth every penny. The defensive driving and threat assessment modules were exceptional.",
  },
];

const RealStories = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <h2 className="text-3xl sm:text-[34px] font-extrabold text-[#1A1A1A] mb-8 tracking-tight">
          Real stories from real people
        </h2>

        {/* TOP METRICS & HIGHLIGHTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 items-stretch">
          {/* TRUSTPILOT METRIC CARD */}
          <div className="relative bg-white rounded-[28px] border border-[#F3E3DC] p-7 overflow-hidden transition-all duration-300 hover:shadow-[0_18px_40px_rgba(241,90,36,0.12)] flex flex-col justify-between h-full">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F15A24]/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-start justify-between relative z-10">
                <div>
                  <span className="inline-flex items-center gap-2 bg-[#FFF3EE] text-[#F15A24] text-[11px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">
                    Total Reviews
                  </span>
                  <h3 className="text-4xl lg:text-[44px] leading-none font-black text-[#111111] mt-5">
                    34,032
                  </h3>
                  <p className="text-xs text-[#8A8A8A] font-medium mt-1">
                    Verified Student Reviews
                  </p>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#FFF4EF] border border-[#F15A24]/10 flex items-center justify-center shadow-xs shrink-0">
                  <span className="text-xl font-bold text-[#F15A24]">★</span>
                </div>
              </div>

              <div className="mt-8 relative z-10">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-lg bg-[#F15A24] flex items-center justify-center shadow-xs"
                    >
                      <Star
                        size={13}
                        fill="white"
                        color="white"
                        strokeWidth={2}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <h4 className="text-xl font-extrabold text-[#111111] leading-none">
                    4.6/5 Rating
                  </h4>
                  <p className="text-xs text-[#8A8A8A] font-medium mt-1">
                    Based on verified students
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-[#F4E7E2] flex items-center justify-between relative z-10">
              <div>
                <p className="text-xs font-bold text-[#1A1A1A]">
                  Excellent Student Satisfaction
                </p>
                <p className="text-[11px] text-[#8A8A8A] font-medium mt-0.5">
                  Trusted by thousands of learners
                </p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#F15A24] text-white flex items-center justify-center text-xs font-bold shrink-0">
                ✓
              </div>
            </div>
          </div>

          {/* GOOGLE REVIEWS METRIC CARD */}
          <div className="relative bg-white rounded-[28px] border border-[#F3E3DC] p-7 overflow-hidden transition-all duration-300 hover:shadow-[0_18px_40px_rgba(241,90,36,0.12)] flex flex-col justify-between h-full">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F15A24]/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-start justify-between relative z-10">
                <div>
                  <span className="inline-flex items-center gap-2 bg-[#FFF3EE] text-[#F15A24] text-[11px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">
                    Google Reviews
                  </span>
                  <h3 className="text-4xl lg:text-[44px] leading-none font-black text-[#111111] mt-5">
                    9,511
                  </h3>
                  <p className="text-xs text-[#8A8A8A] font-medium mt-1">
                    Verified Student Reviews
                  </p>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#FFF4EF] border border-[#F15A24]/10 flex items-center justify-center shadow-xs shrink-0">
                  <span className="text-xl font-bold text-[#F15A24]">G</span>
                </div>
              </div>

              <div className="mt-8 relative z-10">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-lg bg-[#F15A24] flex items-center justify-center shadow-xs"
                    >
                      <Star
                        size={13}
                        fill="white"
                        color="white"
                        strokeWidth={2}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <h4 className="text-xl font-extrabold text-[#111111] leading-none">
                    4.9/5 Rating
                  </h4>
                  <p className="text-xs text-[#8A8A8A] font-medium mt-1">
                    Average Student Feedback
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-[#F4E7E2] flex items-center justify-between relative z-10">
              <div>
                <p className="text-xs font-bold text-[#1A1A1A]">
                  Outstanding Learning Experience
                </p>
                <p className="text-[11px] text-[#8A8A8A] font-medium mt-0.5">
                  Highly rated by our students
                </p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#F15A24] text-white flex items-center justify-center text-xs font-bold shrink-0">
                ✓
              </div>
            </div>
          </div>

          {/* SESSION IMAGE 1 */}
          <div className="rounded-[28px] overflow-hidden relative min-h-[280px] lg:min-h-full border border-gray-200/80 shadow-xs group">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="Conflict & Security Guard Training"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold leading-snug">
              Conflict & Security Guard Training – January 2026
            </span>
          </div>

          {/* SESSION IMAGE 2 */}
          <div className="rounded-[28px] overflow-hidden relative min-h-[280px] lg:min-h-full border border-gray-200/80 shadow-xs group">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
              alt="Callie Champion"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold leading-snug">
              Callie Champion — Licensed Professional
            </span>
          </div>
        </div>

        {/* TESTIMONIAL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 items-stretch">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white rounded-[28px] p-6 sm:p-7 border border-[#F15A24]/10 shadow-[0_10px_30px_rgba(241,90,36,0.06)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(241,90,36,0.12)] flex flex-col justify-between h-full group"
            >
              <div>
                {/* CARD HEADER */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-extrabold text-[#F15A24] leading-tight truncate">
                      {t.name}
                    </h3>
                    <p className="text-xs text-[#8A8A8A] font-medium mt-1 leading-snug">
                      {t.role}
                    </p>
                  </div>

                  {/* INITIAL AVATAR */}
                  <div className="w-11 h-11 rounded-2xl border-2 border-[#F15A24] bg-[#FFE7DE] flex items-center justify-center shrink-0 shadow-xs">
                    <span className="text-base font-black text-[#F15A24]">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* REVIEW TEXT */}
                <p className="text-sm text-[#666666] leading-relaxed font-normal italic pb-12">
                  "{t.text}"
                </p>
              </div>

              {/* CARD FOOTER */}
              <div className="absolute left-0 bottom-0 flex items-end justify-between w-full pointer-events-none">
                {/* RATING BADGE */}
                <div className="bg-[#F15A24] px-4 py-2 rounded-tr-2xl flex items-center gap-1 shadow-md pointer-events-auto">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={12}
                      fill="#FFF"
                      color="#FFF"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                {/* QUOTE DECORATION */}
                <div className="pr-5 pb-2 pointer-events-auto">
                  <span className="text-[#F15A24]/20 group-hover:text-[#F15A24]/40 text-3xl font-black block leading-none transition-colors">
                    ❞
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM STATS BANNER */}
        <div className="rounded-[28px] bg-white border border-gray-200/80 p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F65B15] text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-md shadow-[#F65B15]/20 shrink-0">
              98%
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-extrabold text-[#1A1A1A]">
                Industry-Leading Pass Rate
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">
                Our students consistently achieve outstanding career results
                with our exam prep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealStories;
