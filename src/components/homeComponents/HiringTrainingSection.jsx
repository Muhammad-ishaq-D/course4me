import React from "react";
import buildingIcon from "../../assets/icons/home/training-icon.png"; // replace with correct green icon

const HiringTrainingSection = () => {
  return (
    <section className="relative bg-[#f3f4f6] py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-stretch">

          {/* LEFT SIDE */}
          <div className="  flex flex-col justify-center">

            {/* Small Label */}
            <p className="text-[#8BE34A] text-sm font-semibold tracking-widest uppercase mb-6">
              Hiring & Training
            </p>

            {/* Heading */}
            <h2 className="text-[44px] leading-[1.1] font-bold text-[#2f3a47]">
              The complete solution
              <br />
              for training and hiring,
              <br />
              purpose-built for
              <br />
              security employers.
            </h2>

            {/* Button */}
            <button className="mt-10 bg-[#2f3a47] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 w-fit shadow-md hover:opacity-90 transition">
              Learn More
              <span className="text-xl">→</span>
            </button>

          </div>

          {/* RIGHT SIDE CARD */}
          <div className="relative lg:-ml-16 mt-12 lg:mt-0">

            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-[28px] p-12 text-white shadow-[0_40px_80px_rgba(0,0,0,0.35)]">

              {/* Icon */}
              <div className="w-14 h-14 bg-[#8BE34A] rounded-xl flex items-center justify-center mb-8">
                <img src={buildingIcon} alt="" className="w-8 h-8" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">
                Partner with Industry Leaders
              </h3>

              {/* Description */}
              <p className="text-gray-300 max-w-md mb-8">
                Join 400,000+ professionals trained through our
                comprehensive programs
              </p>

              {/* Chips */}
              <div className="flex flex-wrap gap-4">
                <span className="bg-white/10 px-5 py-2 rounded-full text-sm">
                  O2 Arena
                </span>
                <span className="bg-white/10 px-5 py-2 rounded-full text-sm">
                  Wembley Stadium
                </span>
                <span className="bg-white/10 px-5 py-2 rounded-full text-sm">
                  Premier League
                </span>
                <span className="bg-white/10 px-5 py-2 rounded-full text-sm">
                  UK Security
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HiringTrainingSection;