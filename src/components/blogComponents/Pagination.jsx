import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-4 mb-20">
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-100 bg-white text-gray-400 hover:text-[#00A3FF] hover:border-[#00A3FF] transition shadow-sm group">
        <ChevronLeft size={20} className="group-hover:scale-110 transition" />
      </button>
      
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A1A] text-white font-bold text-sm shadow-xl">
        1
      </button>
      
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 font-bold text-sm hover:text-[#00A3FF] transition">
        2
      </button>
      
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-100 bg-white text-gray-400 hover:text-[#00A3FF] hover:border-[#00A3FF] transition shadow-sm group">
        <ChevronRight size={20} className="group-hover:scale-110 transition" />
      </button>
    </div>
  );
};

export default Pagination;
