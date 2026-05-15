import React from "react";
import { Search, MapPin } from "lucide-react";

const Searchbar = () => {
  return (
    <>
      {/* ================SEARCH BAR======================== */}

      <div className="mt-5 bg-white rounded-xl p-2 md:px-4 md:py-3 border-2 border-[#F15A24]/15 shadow-[0_15px_45px_rgba(0,0,0,0.06)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr_180px] gap-5 items-end">
          {/* COURSE SEARCH */}
          <div>
            <p className="text-[#141414] font-semibold text-md mb-1">
              Find your perfect course
            </p>

            <div className="flex items-center gap-3 bg-white rounded-2xl px-2 h-full py-2 border border-[#F15A24]/20 hover:border-[#F15A24]/50 focus-within:border-[#F15A24] focus-within:shadow-[0_0_0_4px_rgba(241,90,36,0.08)] transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#F15A24]/10 flex items-center justify-center">
                <Search size={18} className="text-[#F15A24]" />
              </div>

              <input
                type="text"
                placeholder="What course are you looking for?"
                className="flex-1 bg-transparent outline-none text-[#141414] placeholder:text-gray-400 text-[15px] font-medium"
              />
            </div>
          </div>

          {/* LOCATION */}
          <div>
            <p className="text-[#141414] font-semibold text-md mb-1">
              Your location
            </p>

            <div className="flex items-center gap-3 bg-white rounded-2xl px-2 h-full py-2 border border-[#F15A24]/20 hover:border-[#F15A24]/50 focus-within:border-[#F15A24] focus-within:shadow-[0_0_0_4px_rgba(241,90,36,0.08)] transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#F15A24]/10 flex items-center justify-center">
                <MapPin size={18} className="text-[#F15A24]" />
              </div>

              <input
                type="text"
                placeholder="Enter postcode or address"
                className="flex-1 bg-transparent outline-none text-[#141414] placeholder:text-gray-400 text-[15px] font-medium"
              />
            </div>
          </div>

          {/* SEARCH BUTTON */}
          <button className=" px-4 py-4 rounded-2xl bg-[#F15A24] hover:bg-[#d94f1f] text-white font-semibold text-lg transition-all duration-300 shadow-lg shadow-[#F15A24]/25 hover:scale-[1.01] active:scale-[0.99]">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
