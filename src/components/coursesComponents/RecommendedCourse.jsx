import React, { useState } from "react";
import { Clock, Users, Calendar, Info, CreditCard, ChevronDown, MapPin, Flame, Quote, Star } from "lucide-react";
import cctvImg from "../../assets/courses/cctv.png";
import LocationSelector from "./LocationSelector";
import TrustBanner from "./TrustBanner";

const RecommendedCourse = () => {
  const [selectedLocation, setSelectedLocation] = useState("");

  const schedules = {
    Bradford: [
      { date: "Mon 17th Mar 2026 – Tue 18th Mar 2026", price: "£299.99" },
      { date: "Sat 21st Mar 2026 – Sun 22nd Mar 2026", price: "£319.99" },
    ],
    Sheffield: [
      { date: "Wed 19th Mar 2026 – Thu 20th Mar 2026", price: "£299.99" },
      { date: "Fri 21st Mar 2026 – Sat 22nd Mar 2026", price: "£309.99" },
    ],
    Manchester: [
      { date: "Mon 17th Mar 2026 – Tue 18th Mar 2026", price: "£299.99" },
      { date: "Sat 21st Mar 2026 – Sun 22nd Mar 2026", price: "£319.99" },
    ],
    Leeds: [
      { date: "Tue 18th Mar 2026 – Wed 19th Mar 2026", price: "£299.99" },
      { date: "Thu 20th Mar 2026 – Fri 21st Mar 2026", price: "£314.99" },
    ],
  };

  return (
    <section className=" py-12 ">
      <TrustBanner />

      <LocationSelector
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 mt-10 px-4 sm:px-6 lg:px-8">
        {/* Left Side: Recommended Course Card */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6">
            <Flame className="w-4 h-4 text-[#F15A24] fill-[#F15A24]" />
            <span className="text-[#F15A24] text-[11px] font-extrabold tracking-[0.1em] uppercase">
              WE RECOMMEND
            </span>
          </div>

          <div className="bg-white rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden p-8">
            <div className="flex flex-col xl:flex-row gap-8">
              {/* Image Section */}
              <div className="relative w-full xl:w-[280px] h-[190px] rounded-[24px] overflow-hidden shrink-0">
                <img
                  src={cctvImg}
                  alt="CCTV Training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-8 h-8 bg-[#9B51E0] rounded-lg flex items-center justify-center text-white">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M23 7l-7 5 7 5V7z" />
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-extrabold text-[#1A202C] mb-2 tracking-tight">CCTV Training</h2>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold">
                      <span className="bg-[#E6F6FF] text-[#00A3FF] px-2 py-1 rounded flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full border border-current flex items-center justify-center text-[7px]">V</span>
                        Virtual
                      </span>
                      <span className="text-gray-400 font-medium font-inter">Laptop/PC required.</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">from:</div>
                    <div className="text-4xl font-extrabold text-[#1A202C]">£299.99</div>
                    <button className="text-[#00A3FF] text-[11px] font-bold flex items-center gap-1 justify-end mt-2 hover:underline">
                      {selectedLocation ? "Hide course dates" : "Show course dates"} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${selectedLocation ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 mb-6 text-[13px] font-medium text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400 font-inter" />
                    3-day course from 8am to 6pm
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#F15A24] fill-[#F15A24]" />
                    Booked <span className="text-[#1A202C] font-bold">2,126</span> times
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6 text-[13px]">
                  <span className="text-gray-400 font-medium">Next course on</span>
                  <span className="text-[#1A202C] font-bold">14th Mar</span>
                  <div className="flex items-center gap-2 text-[#00A3FF] font-bold">
                    <div className="w-4 h-4 rounded-full border border-[#00A3FF] flex items-center justify-center text-[8px]">£</div>
                    <span className="underline decoration-1 underline-offset-4">Instalment plans available</span>
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-[#F0F9FF] border border-[#E1F5FE] rounded-2xl p-4 flex items-center gap-3 mb-8">
                  <Info className="w-5 h-5 text-[#00A3FF] shrink-0" />
                  <p className="text-[13px] text-[#2B6CB0] font-semibold">
                    Attend two days of classes online and come only for the exam
                  </p>
                </div>

                {/* Scheduling Section */}
                {!selectedLocation ? (
                  <div className="bg-[#F8FAFC] border border-dashed border-gray-200 rounded-[24px] py-10 flex flex-col items-center justify-center text-center">
                    <MapPin className="w-8 h-8 text-gray-200 mb-3" />
                    <p className="text-[13px] text-gray-400 font-medium">
                      Select a location at the top of the page to view available dates
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm font-extrabold text-[#1A202C]">
                        Course dates <span className="text-gray-400 font-medium ml-1">in {selectedLocation}</span>
                      </h3>
                      <span className="text-[10px] text-gray-400 font-bold">All prices are inclusive of VAT</span>
                    </div>

                    {schedules[selectedLocation]?.map((schedule, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-[24px] shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all group"
                      >
                        <span className="text-[15px] font-bold text-[#1A202C]">{schedule.date}</span>
                        <div className="flex items-center gap-6">
                          <span className="text-xl font-extrabold text-[#1A202C]">{schedule.price}</span>
                          <button className="px-8 py-3 bg-[#F15A24] text-white rounded-xl font-extrabold text-sm hover:bg-[#A33503] transition-colors shadow-md shadow-[#8B2C02]/20">
                            Book Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Testimonial Card */}
        <div className="w-full lg:w-[360px] lg:mt-12">
          <div className="bg-white rounded-[32px] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col h-full">
            <div className="mb-8">
              <Quote className="w-10 h-10 text-[#00A3FF] opacity-30 fill-[#00A3FF]" />
            </div>

            <p className="text-[15px] leading-[1.6] text-gray-600 font-medium mb-10 italic">
              "2 months ago I was working in a warehouse. Today, I am working as a security guard in Harrow earning a lot more than I was sorting boxes! I am glad I chose Get Licensed for my SIA training. The process seemed difficult at first but their team really supported me along the way."
            </p>

            <div className="mt-auto">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FFC107] fill-[#FFC107]" />
                  ))}
                </div>
                <span className="text-sm font-extrabold text-[#1A202C]">Excellent</span>
              </div>

              <div className="">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-1 bg-gray-300 rounded-full" />
                  <span className="text-sm font-extrabold text-[#1A202C]">Paul Taylor</span>
                </div>
                <div className="text-[12px] text-gray-400 font-medium ml-8">
                  Harrow · January 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedCourse;
