import React from "react";
import { Award, Users, Target, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Award,
    iconBg: "bg-blue-600",
    title: "SIA Approved",
    description:
      "All centres are officially accredited by the Security Industry Authority",
  },
  {
    icon: Users,
    iconBg: "bg-purple-600",
    title: "Expert Trainers",
    description:
      "Experienced instructors with real-world security industry knowledge",
  },
  {
    icon: Target,
    iconBg: "bg-green-600",
    title: "95% Pass Rate",
    description:
      "Industry-leading success rate with free exam retakes included",
  },
  {
    icon: CheckCircle,
    iconBg: "bg-orange-500",
    title: "Modern Facilities",
    description:
      "State-of-the-art training rooms with the latest equipment",
  },
];

const WhyChooseTrainingCentres = () => {
  return (
    <section className="bg-[#f3f4f6] py-24">
      <div className="max-w-[1300px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[48px] font-bold text-[#2f3a47]">
            Why Choose Our Training Centres?
          </h2>
          <p className="text-gray-600 text-lg mt-4">
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
                  border border-gray-200
                  rounded-[24px]
                  p-8
                "
              >

                {/* Icon */}
                <div
                  className={`${item.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-semibold text-[#2f3a47] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-[15px] leading-relaxed">
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