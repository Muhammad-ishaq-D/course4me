import React from "react";

const CareerAdviceCTA = () => {
  return (
    <section className="relative overflow-hidden">

      {/* Background Gradient */}
      <div className="bg-gradient-to-br from-[#2f3a47] via-[#243443] to-[#1c2733] py-24 px-6 lg:px-12">

        <div className="max-w-5xl mx-auto text-center">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Not sure which course is right for you?
          </h2>

          {/* Subheading */}
          <p className="text-gray-300 mt-6 text-lg md:text-xl max-w-3xl mx-auto">
            Speak to our expert advisors who can guide you to the perfect career path
          </p>

          {/* Button */}
          <div className="mt-10">
            <button className="bg-[#B9FF5A] hover:bg-[#a4e649] text-[#1f2f3f] font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-300">
              Get Free Career Advice
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default CareerAdviceCTA;