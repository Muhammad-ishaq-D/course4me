import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
            Get trained, licensed, and ready to earn in{' '}
            <span className="text-blue-600">3 weeks</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Earn £14 to £25 an hour with flexible security jobs. No experience needed.{' '}
            <span className="font-semibold text-green-600">95% pass rate, first time.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto min-w-[200px]">
              Start Your Journey
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors w-full sm:w-auto min-w-[200px]">
              Watch Success Stories
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-sm md:text-base text-gray-600">Pass Rate</div>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">Same Day</div>
            <div className="text-sm md:text-base text-gray-600">Results</div>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">85+</div>
            <div className="text-sm md:text-base text-gray-600">UK Locations</div>
          </div>

          {/* Stat 4 */}
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">£14-£25</div>
            <div className="text-sm md:text-base text-gray-600">Hourly Rate</div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Live Training</h3>
            <p className="text-gray-600">Professional Doper Supervisor Course</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">400K+</h3>
            <p className="text-gray-600">Professionals Trained</p>
            <p className="text-sm text-blue-600 mt-2">SIA Approved Official Training Centre</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">CCTV</h3>
            <p className="text-gray-600">Training Available</p>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
          <span className="flex items-center">
            <span className="font-bold text-blue-600 mr-2">95%</span>
            Pass Rate
          </span>
          <span className="flex items-center">
            <span className="font-bold text-green-600 mr-2">85+</span>
            Locations Across the UK
          </span>
          <span className="flex items-center">
            <span className="font-bold text-orange-600 mr-2">£14-£25</span>
            Hourly Rate
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;