import React from "react";

// Feature card component with icon
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
    {/* Icon circle */}
    <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mb-6">
      {icon}
    </div>
    
    {/* Title */}
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    
    {/* Description */}
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const WhyChooseSection = () => {
  return (
    <section className="bg-white font-sans py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Why 400,000+ Choose Get Licensed
          </h2>
          <p className="text-gray-600 text-lg">
            Industry-leading training with proven results
          </p>
        </div>

        {/* Cards grid - 4 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Free & Unlimited Exam Attempts */}
          <FeatureCard 
            icon="∞"
            title="Free & Unlimited Exam Attempts"
            description="We believe in you - take the exam as many times as needed at no extra cost."
          />

          {/* Same Day Results */}
          <FeatureCard 
            icon="⚡"
            title="Same Day Results"
            description="Get your results immediately after completing the exam - start working faster"
          />

          {/* Top-Rated Instructors */}
          <FeatureCard 
            icon="★"
            title="Top-Rated Instructors"
            description="Learn from experienced professionals with real-world security backgrounds"
          />

          {/* 85+ UK Locations */}
          <FeatureCard 
            icon="📍"
            title="85+ UK Locations"
            description="Convenient training centres across the country - find one near you"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;