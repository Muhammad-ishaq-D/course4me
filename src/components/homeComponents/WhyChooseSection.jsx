import React from "react";
import { Award, Users, Target, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Award,
    iconBg: "bg-[#00A3FF1A]",
    iconColor: "text-[#00A3FF]",
    title: "SIA Approved",
    description:
      "All centres are officially accredited by the Security Industry Authority",
  },
  {
    icon: Users,
    iconBg: "bg-[#00A3FF1A]",
    iconColor: "text-[#00A3FF]",
    title: "Expert Trainers",
    description:
      "Experienced instructors with real-world security industry knowledge",
  },
  {
    icon: Target,
    iconBg: "bg-[#00A3FF1A]",
    iconColor: "text-[#00A3FF]",
    title: "95% Pass Rate",
    description:
      "Industry-leading success rate with free exam retakes included",
  },
  {
    icon: CheckCircle,
    iconBg: "bg-[#00A3FF1A]",
    iconColor: "text-[#00A3FF]",
    title: "Modern Facilities",
    description:
      "State-of-the-art training rooms with the latest equipment",
  },
];

const WhyChooseTrainingCentres = () => {
  return (
    <section className="bg-[#F9FAFB] py-24 font-sans">
      <div className="max-w-[1300px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[48px] font-bold text-[#1A1A1A] tracking-tight">
            Why Choose Our Training Centres?
          </h2>
          <p className="text-gray-600 text-lg mt-4 font-medium">
            Consistent quality across all locations
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  border border-gray-100
                  rounded-[32px]
                  p-10
                  shadow-[0_20px_40px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]
                  transition-all duration-300
                "
              >

                {/* Icon */}
                <div
                  className={`${item.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-[#00A3FF1A]`}
                >
                  <Icon className={`w-8 h-8 ${item.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseTrainingCentres;