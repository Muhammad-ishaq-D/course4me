import React from "react";
import { Filter } from "lucide-react";

const regions = ["All Centers", "Featured Centers", "Available Centers"];

const RegionFilter = ({ active, setActive }) => {
  return (
    <div className=" relative overflow-hidden bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] rounded-[28px] p-5 sm:p-6">
      {/* Glow */}
      <div className="absolute top-[-40px] right-[-40px] w-40 h-40 bg-[#F15A24] opacity-10 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative flex flex-col lg:flex-row lg:items-center gap-5">
        {/* Label */}
        <div className="flex items-center gap-3 whitespace-nowrap">
          <div className="w-11 h-11 rounded-2xl bg-[#F15A2415] flex items-center justify-center border border-[#F15A24]/10">
            <Filter size={18} className="text-[#F15A24]" />
          </div>

          <div>
            <h3 className="text-[#243443] font-bold text-base">
              Filter Centers
            </h3>

            <p className="text-gray-500 text-sm">Select training locations</p>
          </div>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap gap-3 overflow-x-auto scrollbar-hide pb-1">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActive(region)}
              className={`relative px-5 py-3 rounded-2xl text-sm font-semibold whitespace-nowrap transition-all duration-300 border
            
              ${
                active === region
                  ? "bg-[#F15A24] text-white border-[#F15A24] shadow-[0_12px_30px_rgba(241,90,36,0.35)]"
                  : "bg-[#f8fafc] text-[#243443] border-[#edf1f5] hover:border-[#F15A24]/20 hover:bg-[#fff7f3]"
              }
            `}
            >
              {region}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegionFilter;
