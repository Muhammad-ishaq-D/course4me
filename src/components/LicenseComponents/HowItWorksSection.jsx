import React from "react";
import {
  Target,
  BookOpen,
  Medal,
  Award,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

const steps = [
  {
    step: "STEP 1",
    title: "Book Training",
    desc: "Browse available training courses and book your preferred date and location to start your licence journey.",
    icon: Target,
    bg: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    step: "STEP 2",
    title: "Attend Course",
    desc: "Attend professional training sessions delivered by experienced instructors at trusted learning locations.",
    icon: BookOpen,
    bg: "bg-gradient-to-br from-purple-500 to-purple-700",
  },
  {
    step: "STEP 3",
    title: "Pass Assessment",
    desc: "Successfully complete your course assessment to demonstrate your knowledge and practical skills.",
    icon: Medal,
    bg: "bg-gradient-to-br from-[#F15A24] to-[#c63d0c]",
  },
  {
    step: "STEP 4",
    title: "Receive Certificate",
    desc: "Receive your accredited training certificate confirming you have completed the required qualification.",
    icon: Award,
    bg: "bg-gradient-to-br from-amber-500 to-amber-700",
  },
  {
    step: "STEP 5",
    title: "Apply for SIA Licence",
    desc: "Use your training certificate to apply for your SIA licence through the official SIA website.",
    icon: ShieldCheck,
    bg: "bg-gradient-to-br from-teal-500 to-teal-700",
  },
  {
    step: "STEP 6",
    title: "Start Working",
    desc: "Once your SIA licence is approved, you're ready to begin your career in the security industry.",
    icon: Briefcase,
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
            A simple 6-step journey from booking your training to starting your
            career as a fully licensed security professional.
          </p>
        </div>

        {/* ================= STEPS ================= */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] rounded-[30px] p-7 lg:p-8 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-[#F15A24]/0 via-transparent to-[#F15A24]/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Connector Line — skip at end of each 3-column row */}
                {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                  <div className="hidden xl:block absolute top-20 -right-8.75 z-20 w-17.5">
                    <div className="h-0.5 bg-linear-to-r from-[#F15A24]/40 to-transparent relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F15A24]" />
                    </div>
                  </div>
                )}

                {/* Step Number */}
                <div className="absolute top-6 right-6 text-5xl font-extrabold text-gray-300 select-none">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300`}
                >
                  <Icon size={30} strokeWidth={2.2} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-2xl font-bold text-[#243443] mt-5 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-500 mt-4 leading-relaxed text-base md:text-lg">
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
