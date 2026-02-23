import React from "react";

// Partner item component
const PartnerItem = ({ name, subtitle, borderColor = "border-gray-200" }) => (
  <div className={`flex items-center gap-4 py-4 border-b ${borderColor} last:border-0`}>
    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
      {name.charAt(0)}
    </div>
    <div>
      <div className="text-lg font-bold text-gray-900">{name}</div>
      {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
    </div>
  </div>
);

const HiringTrainingSection = () => {
  return (
    <section className="bg-white font-sans py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT COLUMN - Text content */}
          <div>
            {/* "HIRING & TRAINING" badge - navy blue */}
            <div className="inline-block bg-blue-900 text-white text-sm font-semibold px-5 py-2 rounded-full mb-8 tracking-wider">
              HIRING & TRAINING
            </div>

            {/* Main heading - black text */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              The complete solution <br />
              for training and hiring, <br />
              purpose-built for <br />
              <span className="text-blue-600">security employers.</span>
            </h2>

            {/* Learn More link - blue */}
            <div className="mt-8">
              <a 
                href="#" 
                className="inline-flex items-center text-blue-600 text-lg font-semibold group hover:text-blue-800 transition-colors"
              >
                Learn More 
                <span className="ml-2 text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>

            {/* Partner with Industry Leaders text */}
      
          </div>

          {/* RIGHT COLUMN - Partner list */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-200">
            {/* O2 Arena */}
            <div className="flex items-center gap-4 py-4 border-b border-gray-50">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                O
              </div>
              <div className="text-lg font-bold text-gray-50">O2 Arena</div>
            </div>

            {/* Wembley Stadium */}
            <div className="flex items-center gap-4 py-4 border-b border-gray-200">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                W
              </div>
              <div className="text-lg font-bold text-gray-50">Wembley Stadium</div>
            </div>

            {/* Premier League */}
            <div className="flex items-center gap-4 py-4 border-b border-gray-200">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                PL
              </div>
              <div className="text-lg font-bold text-gray-50">Premier League</div>
            </div>

            {/* UK Security - bottom right */}
            <div className="mt-8 flex justify-end">
              <div className="bg-blue-50 text-blue-800 font-semibold px-6 py-2 rounded-full text-sm border border-blue-100">
                UK SECURITY
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringTrainingSection;