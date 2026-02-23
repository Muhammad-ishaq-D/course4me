import React from "react";

// Role card component
const RoleCard = ({ title, minRate, maxRate, training, iconLetter }) => {
  return (
    <div className="bg-gray-700 rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Icon and title row */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {iconLetter}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>

      {/* Earn up to */}
      <div className="mb-3">
        <span className="text-sm text-gray-500">Earn up to:</span>
      </div>

      {/* Hourly rate */}
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">{minRate}-{maxRate}</span>
        <span className="text-gray-500 ml-1">per hour</span>
      </div>

      {/* Training required */}
      <div className="mb-6">
        <div className="text-sm text-gray-500 mb-1">Training required:</div>
        <div className="font-semibold text-gray-900">{training}</div>
      </div>

      {/* View Role link */}
      <a 
        href="#" 
        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
      >
        View Role <span className="ml-2 text-xl">→</span>
      </a>
    </div>
  );
};

const CareerEarningSection = () => {
  return (
    <section className="bg-white font-sans py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Your Security Career & Earning Potential
          </h2>
          <p className="text-gray-600 text-lg">
            Explore the different security roles and see how much you can earn
          </p>
        </div>

        {/* Cards grid - 4 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Door Supervisor */}
          <RoleCard 
            title="Door Supervisor"
            minRate="£13"
            maxRate="£25"
            training="Door Supervisor Training"
            iconLetter="D"
            className="bg-gray-800"
          />

          {/* CCTV Operator */}
          <RoleCard 
            title="CCTV Operator"
            minRate="£12"
            maxRate="£18"
            training="CCTV Operator Training"
            iconLetter="C"
          />

          {/* Security Guard */}
          <RoleCard 
            title="Security Guard"
            minRate="£11"
            maxRate="£16"
            training="Security Guard Training"
            iconLetter="S"
          />

          {/* Close Protection */}
          <RoleCard 
            title="Close Protection"
            minRate="£20"
            maxRate="£50"
            training="Close Protection Course"
            iconLetter="CP"
          />
        </div>
      </div>
    </section>
  );
};

export default CareerEarningSection;