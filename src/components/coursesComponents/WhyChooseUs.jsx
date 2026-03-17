import React from 'react';
import { Award, Users, Target, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award size={24} className="text-white" />,
      iconBg: "bg-[#2563EB]", // Blue
      title: "SIA Approved",
      description: "All centres are officially accredited by the Security Industry Authority"
    },
    {
      icon: <Users size={24} className="text-white" />,
      iconBg: "bg-[#A855F7]", // Purple
      title: "Expert Trainers",
      description: "Experienced instructors with real-world security industry knowledge"
    },
    {
      icon: <Target size={24} className="text-white" />,
      iconBg: "bg-[#10B981]", // Green
      title: "95% Pass Rate",
      description: "Industry-leading success rate with free exam retakes included"
    },
    {
      icon: <CheckCircle2 size={24} className="text-white" />,
      iconBg: "bg-[#F97316]", // Orange
      title: "Modern Facilities",
      description: "State-of-the-art training rooms with the latest equipment"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 w-full font-sans bg-white pb-32">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-black text-[#18181B] tracking-tight mb-4">
            Why Choose Our Training Centres?
          </h2>
          <p className="text-[#52525B] text-[18px] md:text-[20px] font-medium max-w-2xl mx-auto">
            Consistent quality across all locations
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col items-start min-h-[260px]"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${feature.iconBg}`}>
                {feature.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-[#18181B] text-[20px] font-bold mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[#71717A] text-[15px] leading-[1.6] font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
