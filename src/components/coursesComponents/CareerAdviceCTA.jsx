import React from "react";

const CareerAdviceCTA = () => {
  return (
    <section className="bg-[#1A202C] py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Not sure which course is right for you?
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Speak to our expert advisors who can guide you to the perfect career path
        </p>
        <button className="bg-[#F15A24] text-white px-10 py-4 rounded-full font-extrabold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-200">
          Get Free Career Advice
        </button>
      </div>
    </section>
  );
};

export default CareerAdviceCTA;