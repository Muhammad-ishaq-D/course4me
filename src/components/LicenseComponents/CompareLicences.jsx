import React from "react";
import {
  Shield,
  Camera,
  Users,
  Briefcase,
  RefreshCcw,
  ChevronRight
} from "lucide-react";

const licences = [
  {
    icon: Shield,
    iconBg: "bg-blue-600",
    title: "Door Supervisor Licence",
    subtitle: "Front Line Licensed",
    duration: "4 days training",
    price: "£185",
    earnings: "£10–15/hr",
    validity: "3 years"
  },
  {
    icon: Camera,
    iconBg: "bg-purple-600",
    title: "CCTV (Public Space Surveillance)",
    subtitle: "Public Space Surveillance",
    duration: "3 days training",
    price: "£165",
    earnings: "£11–16/hr",
    validity: "3 years"
  },
  {
    icon: Users,
    iconBg: "bg-green-600",
    title: "Security Guard Licence",
    subtitle: "Manned Guarding",
    duration: "4 days training",
    price: "£175",
    earnings: "£9–13/hr",
    validity: "3 years"
  },
  {
    icon: Briefcase,
    iconBg: "bg-orange-600",
    title: "Close Protection Licence",
    subtitle: "VIP & Executive Protection",
    duration: "5 days training",
    price: "£995",
    earnings: "£200–500/day",
    validity: "3 years"
  },
  {
    icon: RefreshCcw,
    iconBg: "bg-indigo-600",
    title: "SIA Top-Up Training",
    subtitle: "License Renewal",
    duration: "1 day training",
    price: "£95",
    earnings: "Maintain existing",
    validity: "3 years"
  }
];

const CompareLicences = () => {
  return (
    <section className="bg-[#f3f6f9] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-[#2f3a47]">
            Compare Licences
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Find the perfect licence for your goals
          </p>
        </div>

        {/* Table Wrapper */}
        <div className="rounded-[28px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.15)] bg-white">

          {/* Header Row */}
          <div className="hidden lg:grid grid-cols-6 bg-gradient-to-r from-[#2f3a47] to-[#243443] text-white px-10 py-6 font-semibold text-[15px] tracking-wide">
            <div>Licence Type</div>
            <div>Duration</div>
            <div>Price</div>
            <div>Earnings</div>
            <div>Validity</div>
            <div className="text-right">Action</div>
          </div>

          {/* Rows */}
          {licences.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="lg:grid lg:grid-cols-6 items-center px-10 py-7 border-t border-[#e6eaef] hover:bg-[#f9fafc] transition"
              >
                {/* Licence Type */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center`}>
                    <Icon size={20} className="text-white" strokeWidth={2.5} />
                  </div>

                  <div>
                    <div className="font-semibold text-[#2f3a47] text-[16px]">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {item.subtitle}
                    </div>
                  </div>
                </div>

                {/* Duration */}
                <div className="text-[#44515e] text-[15px]">
                  {item.duration}
                </div>

                {/* Price */}
                <div className="text-[22px] font-bold text-[#2f3a47]">
                  {item.price}
                </div>

                {/* Earnings */}
                <div className="text-green-600 font-semibold text-[15px]">
                  {item.earnings}
                </div>

                {/* Validity */}
                <div className="text-[#44515e] text-[15px]">
                  {item.validity}
                </div>

                {/* Action */}
                <div className="text-right">
                  <button className="bg-[#2f3a47] text-white px-7 py-3 rounded-full flex items-center gap-2 ml-auto hover:bg-black transition text-sm font-medium">
                    Book Now
                    <ChevronRight size={16} />
                  </button>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default CompareLicences;