import React from "react";
import { useNavigate } from "react-router-dom";
import { Award, Briefcase, Building2, Users } from "lucide-react";

const HiringTrainingSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-white py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-stretch">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center gap-10">

            {/* Small Label */}
            <div className="text-[#FF5421] text-xs font-bold tracking-[0.2em] uppercase">
              Hiring & Training
            </div>

            {/* Heading */}
            <h2 className="text-[48px] md:text-[56px] leading-[1.05] font-bold text-[#1A1A1A] tracking-tight">
              The complete <br />
              solution for training <br />
              and hiring, purpose- <br />
              built for security <br />
              employers.
            </h2>

            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-lg">
              From training new recruits to upskilling existing teams, <br />
              we help employers build world-class security operations.
            </p>

            {/* Button */}
            <button
              onClick={() => navigate("/careers")}
              className="mt-4 bg-[#1A1A1A] text-white px-10 py-4.5 rounded-full font-bold flex items-center gap-3 w-fit shadow-xl hover:bg-black transition-all"
            >
              Learn More
              <span className="text-xl">→</span>
            </button>

          </div>

          {/* RIGHT SIDE CARD */}
          <div className="relative lg:-ml-12 mt-12 lg:mt-0">

            <div className="bg-white border border-gray-100 rounded-[32px] p-12 text-[#1A1A1A] shadow-[0_40px_80px_rgba(0,0,0,0.06)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A3FF] opacity-5 blur-[100px] -mr-32 -mt-32"></div>

              {/* Icon */}
              <div className="mb-10 w-20 h-20 bg-[#00A3FF0A] rounded-2xl flex items-center justify-center border border-[#00A3FF1A]">
                <Building2 className="w-10 h-10 text-[#00A3FF]" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                Partner with Industry Leaders
              </h3>

              {/* Description */}
              <p className="text-gray-500 font-medium mb-10 leading-relaxed">
                Join 400,000+ professionals trained through our <br />
                comprehensive programs
              </p>

              {/* Chips */}
              <div className="flex flex-wrap gap-3">
                {[
                  "O2 Arena", "Wembley Stadium", "Premier League",
                  "Westfield", "NHS", "Amazon", "G4S", "Securitas"
                ].map((chip) => (
                  <span key={chip} className="bg-[#F8F9FA] px-5 py-2.5 rounded-full text-xs font-bold text-gray-500 border border-gray-100">
                    {chip}
                  </span>
                ))}
              </div>

            </div>

            {/* Stats Cards Section */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* 500+ Partner Companies Card */}
              <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <Users className="w-8 h-8 text-[#00A3FF] mb-3" />
                <div className="text-[32px] font-bold text-[#1A1A1A] tracking-tight leading-none">500+</div>
                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-2">Partner Companies</div>
              </div>

              {/* Approved Centre SIA Card */}
              <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <Award className="w-8 h-8 text-[#00A3FF] mb-3" />
                <div className="text-[32px] font-bold text-[#1A1A1A] tracking-tight leading-none">SIA</div>
                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-2">Approved Centre</div>
              </div>

              {/* 95% Placement Rate Card */}
              <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <Briefcase className="w-8 h-8 text-[#FF5421] mb-3" />
                <div className="text-[32px] font-bold text-[#1A1A1A] tracking-tight leading-none">95%</div>
                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-2">Placement Rate</div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HiringTrainingSection;
