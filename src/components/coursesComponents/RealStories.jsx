import React from "react";
import { Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Paul Taylor",
    role: "Door Supervisor Training · January 2026",
    text: "2 months ago I was working in a warehouse. Today, I am working as a security guard in Harrow earning a lot more than I was sorting boxes! I am glad I chose Get Licensed for my SIA training.",
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
        <h2 className="text-[34px] font-bold text-[#1A1A1A] mb-12">
          Real stories from real people
        </h2>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">

          {/* TRUSTPILOT */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <span className="bg-[#FFEAEA] text-[#F65B15] text-[10px] px-2 py-1 rounded font-bold uppercase">
              TOTAL
            </span>
            <h3 className="text-[32px] font-bold mt-4">34,032</h3>
            <p className="text-sm text-gray-500 mb-3">reviews</p>

            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#00b67a" color="#00b67a" />
              ))}
              <span className="text-sm font-medium ml-2">4.6 out of 5</span>
            </div>

            <p className="text-xs text-gray-400">Excellent Trustpilot reviews</p>
          </div>

          {/* GOOGLE */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <span className="bg-[#EAF2FF] text-[#2563EB] text-[10px] px-2 py-1 rounded font-bold uppercase">
              GOOGLE
            </span>
            <h3 className="text-[32px] font-bold mt-4">9,511</h3>
            <p className="text-sm text-gray-500 mb-3">reviews</p>

            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
              ))}
              <span className="text-sm font-medium ml-2">4.9 out of 5</span>
            </div>

            <p className="text-xs text-gray-400">Go-getting</p>
          </div>

          {/* IMAGE 1 */}
          <div className="rounded-2xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 left-3 text-white text-xs">
              Conflict & Security Guard Training – January 2026
            </span>
          </div>

          {/* IMAGE 2 */}
          <div className="rounded-2xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 left-3 text-white text-xs">
              Callie Champion
            </span>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6">

              {/* STARS */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#00b67a" color="#00b67a" />
                ))}
              </div>

              {/* TEXT */}
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div className="border-t pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
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
              <p className="text-sm text-gray-500">
                Our students consistently achieve outstanding results
              </p>
            </div>
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2">
            View all reviews <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RealStories;