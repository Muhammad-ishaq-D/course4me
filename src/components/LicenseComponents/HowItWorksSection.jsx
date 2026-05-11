import React from "react";
import { Target, BookOpen, Medal, Zap } from "lucide-react";

const steps = [
  {
    step: "STEP 1",
    title: "Choose Your Licence",
    desc: "Select the SIA licence that best matches your future career path and security goals.",
    icon: Target,
    bg: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    step: "STEP 2",
    title: "Complete Training",
    desc: "Attend accredited professional training at one of our trusted UK locations.",
    icon: BookOpen,
    bg: "bg-gradient-to-br from-purple-500 to-purple-700",
  },
  {
    step: "STEP 3",
    title: "Pass Your Exam",
    desc: "Successfully complete your SIA assessment with fast and reliable same-day results.",
    icon: Medal,
    bg: "bg-gradient-to-br from-[#F15A24] to-[#c63d0c]",
  },
  {
    step: "STEP 4",
    title: "Start Working",
    desc: "Apply for your licence and begin your professional career in the UK security industry.",
    icon: Zap,
    bg: "bg-gradient-to-br from-green-500 to-green-700",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#f4f7fb] to-[#eef3f8] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10">
      {/* Background Glow */}
      <div className="absolute top-0 -left-30 w-75 h-75 bg-[#F15A24] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-10">
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F15A2412] border border-[#F15A24]/20 text-[#F15A24] text-sm font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-[#F15A24]" />
            Fast & Simple Process
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1c2733] leading-tight tracking-tight">
            How to Get Your <br className="hidden sm:block" />
            SIA Licence
          </h2>

          {/* Description */}
          <p className="text-gray-500 mt-2 text-base sm:text-lg leading-relaxed">
            A simple 4-step journey designed to help you become a fully licensed
            security professional quickly and confidently.
          </p>
        </div>

        {/* ================= STEPS ================= */}
        <div className="relative grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] rounded-[30px] p-7 lg:p-8 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-[#F15A24]/0 via-transparent to-[#F15A24]/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute top-20 -right-8.75 z-20 w-17.5">
                    <div className="h-0.5 bg-linear-to-r from-[#F15A24]/40 to-transparent relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F15A24]" />
                    </div>
                  </div>
                )}

                {/* Step Number */}
                <div className="absolute top-6 right-6 text-5xl font-extrabold text-[#edf2f7] select-none">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300`}
                >
                  <Icon size={30} strokeWidth={2.2} className="text-white" />
                </div>

                {/* Step Label */}
                <div className="relative z-10 mt-7 inline-block text-xs font-bold tracking-[2px] text-[#F15A24] uppercase bg-[#F15A2410] px-3 py-1 rounded-full">
                  {item.step}
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-2xl font-bold text-[#243443] mt-5 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-500 mt-4 leading-relaxed text-[15px]">
                  {item.desc}
                </p>

                {/* Bottom Accent */}
                <div className="relative z-10 mt-8 w-14 h-1 rounded-full bg-[#F15A24]/30 group-hover:w-24 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
