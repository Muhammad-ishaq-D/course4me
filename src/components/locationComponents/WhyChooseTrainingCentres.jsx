import React from "react";
import { Award, Users, Target, CheckCircle } from "lucide-react";

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
    <section className="bg-[#f4f6f8] py-24 px-6">

      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#2f3a47]">
          Why Choose Our Training Centres?
        </h2>

        <p className="text-gray-600 mt-4 text-lg">
          Consistent quality across all locations
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-8 text-left shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div
                className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#2f3a47]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-4 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseTrainingCentres;