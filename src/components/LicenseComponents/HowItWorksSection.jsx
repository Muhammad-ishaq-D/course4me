import React from "react";
import {
  Target,
  BookOpen,
  Medal,
  Zap
} from "lucide-react";

const steps = [
  {
    step: "STEP 1",
    title: "Choose Your Licence",
    desc: "Select the SIA licence that matches your career goals",
    icon: Target,
    bg: "bg-blue-600"
  },
  {
    step: "STEP 2",
    title: "Complete Training",
    desc: "Attend our accredited training course at your nearest location",
    icon: BookOpen,
    bg: "bg-purple-600"
  },
  {
    step: "STEP 3",
    title: "Pass Your Exam",
    desc: "Take and pass your SIA exam with same-day results",
    icon: Medal,
    bg: "bg-orange-500"
  },
  {
    step: "STEP 4",
    title: "Start Working",
    desc: "Apply for your SIA licence and begin your security career",
    icon: Zap,
    bg: "bg-green-600"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="bg-[#f3f6f9] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2f3a47]">
            How to Get Your SIA Licence
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Simple 4-step process to start your security career
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition duration-300"
              >
                {/* Desktop Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 right-[-32px] w-8 h-[2px] bg-gray-300"></div>
                )}

                {/* Icon Box */}
                <div
                  className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}
                >
                  <Icon size={28} strokeWidth={2} className="text-white" />
                </div>

                {/* Step Label */}
                <div className="text-sm font-semibold text-gray-400 tracking-wide">
                  {item.step}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#2f3a47] mt-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;