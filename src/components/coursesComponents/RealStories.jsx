import React from "react";
import { Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Paul Taylor",
    role: "Door Supervisor Training · January 2026",
    text: "2 months ago I was working in a warehouse. Today, I am working as a security guard in Harrow earning a lot more than I was sorting boxes! I am glad I chose Courses4Me for my SIA training.",
  },
  {
    name: "Sarah Johnson",
    role: "Door Supervisor Training · January 2026",
    text: "I had the opportunity to take the course under excellent instruction. The trainer was patient, knowledgeable, and made learning enjoyable. Passed first time!",
  },
  {
    name: "James Mitchell",
    role: "Security Guard Training · February 2026",
    text: "Great trainer, I am doing the door supervision course next month. Very professional and thorough teaching style.",
  },
  {
    name: "Marcus Thompson",
    role: "CCTV Training · December 2025",
    text: "Completed the CCTV course with very professional trainers. Learnt so much about surveillance law and practical techniques. Highly recommended!",
  },
  {
    name: "Emma Wilson",
    role: "First Aid at Work · January 2026",
    text: "Brilliant course! The hands-on practice and realistic scenarios really prepared me for real emergencies. Instructor was amazing.",
  },
  {
    name: "David Chen",
    role: "Close Protection · November 2025",
    text: "Intensive and worth every penny. The defensive driving and threat assessment modules were exceptional. Now working with high-profile clients.",
  },
];

const RealStories = () => {
  return (
    <section className="py-20 px-6 lg:px-16 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <h2 className="text-[34px] font-bold text-[#1A1A1A] mb-5">
          Real stories from real people
        </h2>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {/* TRUSTPILOT */}
          <div className="relative h-full min-h-80 bg-white rounded-[28px] border border-[#F3E3DC] p-7 overflow-hidden transition-all duration-300 hover:shadow-[0_18px_40px_rgba(241,90,36,0.12)]">
            {/* GLOW */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F15A24]/5 rounded-full blur-3xl" />

            {/* HEADER */}
            <div className="flex items-start justify-between relative z-10">
              <div>
                <span className="inline-flex items-center gap-2 bg-[#FFF3EE] text-[#F15A24] text-[11px] px-3 py-1.5 rounded-full font-semibold uppercase tracking-[0.15em]">
                  Total Reviews
                </span>

                <h3 className="text-[44px] leading-none font-bold text-[#111111] mt-5">
                  34,032
                </h3>

                <p className="text-sm text-[#8A8A8A] mt-1">
                  Verified Student Reviews
                </p>
              </div>

              {/* ICON */}
              <div className="w-14 h-14 rounded-2xl bg-[#FFF4EF] border border-[#F15A24]/10 flex items-center justify-center shadow-sm">
                <span className="text-[24px] font-bold text-[#F15A24]">★</span>
              </div>
            </div>

            {/* RATING */}
            <div className="mt-8 relative z-10">
              {/* STARS */}
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-xl bg-[#F15A24] flex items-center justify-center shadow-sm"
                  >
                    <Star
                      size={15}
                      fill="white"
                      color="white"
                      strokeWidth={2}
                    />
                  </div>
                ))}
              </div>

              {/* SCORE BELOW STARS */}
              <div className="mt-4">
                <h4 className="text-[24px] font-bold text-[#111111] leading-none">
                  4.6/5 Rating
                </h4>

                <p className="text-sm text-[#8A8A8A] mt-1">
                  Based on verified students
                </p>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-7 pt-5 border-t border-[#F4E7E2] flex items-center justify-between relative z-10">
              <div>
                <p className="text-md font-semibold text-[#1A1A1A]">
                  Excellent Student Satisfaction
                </p>

                <p className="text-sm text-[#8A8A8A] mt-1">
                  Trusted by thousands of learners
                </p>
              </div>

              <div className="w-10 h-10 rounded-full bg-[#F15A24] text-white flex items-center justify-center text-sm font-bold shadow-lg">
                ✓
              </div>
            </div>
          </div>

          {/* GOOGLE REVIEWS */}
          <div className="relative h-full min-h-80 bg-white rounded-[28px] border border-[#F3E3DC] p-7 overflow-hidden transition-all duration-300 hover:shadow-[0_18px_40px_rgba(241,90,36,0.12)]">
            {/* GLOW */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F15A24]/5 rounded-full blur-3xl" />

            {/* HEADER */}
            <div className="flex items-start justify-between relative z-10">
              <div>
                <span className="inline-flex items-center gap-2 bg-[#FFF3EE] text-[#F15A24] text-[11px] px-3 py-1.5 rounded-full font-semibold uppercase tracking-[0.15em]">
                  Google Reviews
                </span>

                <h3 className="text-[44px] leading-none font-bold text-[#111111] mt-5">
                  9,511
                </h3>

                <p className="text-sm text-[#8A8A8A] mt-1">
                  Verified Student Reviews
                </p>
              </div>

              {/* ICON */}
              <div className="w-14 h-14 rounded-2xl bg-[#FFF4EF] border border-[#F15A24]/10 flex items-center justify-center shadow-sm">
                <span className="text-[24px] font-bold text-[#F15A24]">G</span>
              </div>
            </div>

            {/* RATING */}
            <div className="mt-8 relative z-10">
              {/* STARS */}
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-xl bg-[#F15A24] flex items-center justify-center shadow-sm"
                  >
                    <Star
                      size={15}
                      fill="white"
                      color="white"
                      strokeWidth={2}
                    />
                  </div>
                ))}
              </div>

              {/* SCORE BELOW STARS */}
              <div className="mt-4">
                <h4 className="text-[24px] font-bold text-[#111111] leading-none">
                  4.9/5 Rating
                </h4>

                <p className="text-sm text-[#8A8A8A] mt-1">
                  Average Student Feedback
                </p>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-7 pt-5 border-t border-[#F4E7E2] flex items-center justify-between relative z-10">
              <div>
                <p className="text-md font-semibold text-[#1A1A1A]">
                  Outstanding Learning Experience
                </p>

                <p className="text-sm text-[#8A8A8A] mt-1">
                  Highly rated by our students
                </p>
              </div>

              <div className="w-10 h-10 rounded-full bg-[#F15A24] text-white flex items-center justify-center text-sm font-bold shadow-lg">
                ✓
              </div>
            </div>
          </div>

          {/* IMAGE 1 */}
          <div className="rounded-2xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 left-3 text-white text-sm">
              Conflict & Security Guard Training – January 2026
            </span>
          </div>

          {/* IMAGE 2 */}
          <div className="rounded-2xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 left-3 text-white text-sm">
              Callie Champion
            </span>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white rounded-[30px] p-6 pt-10 border border-[#F15A24]/10 shadow-[0_10px_30px_rgba(241,90,36,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(241,90,36,0.15)]"
            >
              {/* TOP RIGHT LETTER */}
              <div className="absolute top-5 right-5">
                <div className="w-[72px] h-[72px] rounded-full border-[6px] border-[#F15A24] bg-[#FFE7DE] flex items-center justify-center shadow-md">
                  <span className="text-[28px] font-bold text-[#F15A24]">
                    {t.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* CLIENT INFO */}
              <div className="mb-5">
                <h3 className="text-[22px] font-bold text-[#F15A24] leading-none">
                  {t.name}
                </h3>

                <p className="text-sm text-[#8A8A8A] mt-2 font-medium">
                  {t.role}
                </p>
              </div>

              {/* TEXT */}
              <p className="text-md leading-6 text-[#666666] pr-3 min-h-30">
                {t.text}
              </p>

              {/* BOTTOM DESIGN */}
              <div className="absolute left-0 bottom-0 flex items-end justify-between w-full">
                {/* STARS SECTION */}
                <div className="bg-[#F15A24] px-6 py-3 rounded-tr-[42px] flex items-center gap-1 shadow-lg">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="#FFF"
                      color="#FFF"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                {/* QUOTE */}
                <div className="pr-5 pb-3">
                  <span className="text-[#F15A24] text-[42px] font-black  block leading-none opacity-90">
                    ❞
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#F65B15] text-white flex items-center justify-center font-bold text-lg">
              95%
            </div>
            <div>
              <h4 className="font-semibold">Industry-Leading Pass Rate</h4>
              <p className="text-md text-gray-500">
                Our students consistently achieve outstanding results
              </p>
            </div>
          </div>

          {/* <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2">
            View all reviews <ExternalLink size={16} />
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default RealStories;
