import React from "react";
import { Award, Users, Target, CheckCircle, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <Award size={28} />,
    bg: "bg-blue-600",
    title: "SIA Approved",
    desc: "All centres are officially accredited by the Security Industry Authority",
  },
  {
    icon: <Users size={28} />,
    bg: "bg-purple-600",
    title: "Expert Trainers",
    desc: "Experienced instructors with real-world security industry knowledge",
  },
  {
    icon: <Target size={28} />,
    bg: "bg-green-600",
    title: "95% Pass Rate",
    desc: "Industry-leading success rate with free exam retakes included",
  },
  {
    icon: <CheckCircle size={28} />,
    bg: "bg-orange-500",
    title: "Modern Facilities",
    desc: "State-of-the-art training rooms with the latest equipment",
  },
];

const WhyChooseTrainingCentres = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#f4f7fb] to-[#eef3f8] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10">
      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="absolute -top-30 -left-30 w-[320px] h-80 bg-[#F15A24] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute -bottom-37.5 -right-30 w-85 h-85 bg-[#243443] opacity-[0.08] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-345 mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#fff7f3] border border-[#F15A24]/10 text-[#F15A24] px-4 py-2 rounded-full text-sm font-semibold shadow-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-[#F15A24]" />
            Premium Training Experience
          </div>

          {/* Heading */}
          <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold text-[#243443] leading-[1.05] tracking-tight">
            Why Choose Our
            <span className="block text-[#F15A24]">Training Centres?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#5b6876] mt-6 text-[16px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
            Industry-leading facilities, experienced instructors, and
            professional learning environments built for your success.
          </p>
        </div>

        {/* ================= FEATURES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 mt-6 sm:mt-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-[#edf1f5] rounded-[30px] p-6 sm:p-7 overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-[#fff7f3] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#F15A24] to-[#ff8d63] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`${item.bg} relative w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-[0_12px_30px_rgba(0,0,0,0.10)] mb-6 group-hover:scale-105 transition duration-500`}
                >
                  {/* Soft Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative z-10">{item.icon}</div>
                </div>

                {/* Number */}
                <div className="text-[11px] font-bold tracking-[0.18em] text-gray-300 mb-3">
                  0{index + 1}
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-bold text-[#243443] leading-tight transition-colors duration-300 group-hover:text-[#F15A24]">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="w-12 h-0.75 bg-[#F15A24] rounded-full mt-4 mb-4 group-hover:w-16 transition-all duration-300" />

                {/* Description */}
                <p className="text-[#5b6876] leading-relaxed text-[14px] sm:text-[15px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTrainingCentres;
