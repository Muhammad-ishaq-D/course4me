import React from "react";
import { Award, Zap, Users, MapPin } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="
    bg-[#f8f9fb]
    rounded-[28px]
    p-10
    shadow-[0_20px_40px_rgba(0,0,0,0.08)]
    transition-all duration-300
    hover:-translate-y-2
    hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]
  ">

    {/* Icon */}
    <div className="w-16 h-16 bg-[#B9FF5A] rounded-2xl flex items-center justify-center mb-8">
      <Icon className="w-8 h-8 text-[#243447]" />
    </div>

    {/* Title */}
    <h3 className="text-[22px] font-semibold text-[#2f3a47] mb-4 leading-snug">
      {title}
    </h3>

    {/* Description */}
    <p className="text-gray-600 leading-relaxed text-[15px]">
      {description}
    </p>

  </div>
);

const WhyChooseSection = () => {
  return (
    <section className="bg-[#f3f4f6] py-28 font-sans">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[44px] md:text-[52px] font-bold text-[#2f3a47] mb-6 tracking-tight">
            Why 400,000+ Choose Get Licensed
          </h2>
          <p className="text-lg text-gray-600">
            Industry-leading training with proven results
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <FeatureCard
            icon={Award}
            title="Free & Unlimited Exam Attempts"
            description="We believe in you – take the exam as many times as needed at no extra cost."
          />

          <FeatureCard
            icon={Zap}
            title="Same Day Results"
            description="Get your results immediately after completing the exam – start working faster."
          />

          <FeatureCard
            icon={Users}
            title="Top-Rated Instructors"
            description="Learn from experienced professionals with real-world security backgrounds."
          />

          <FeatureCard
            icon={MapPin}
            title="85+ UK Locations"
            description="Convenient training centres across the country – find one near you."
          />

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;