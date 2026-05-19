import React from "react";
import { Search } from "lucide-react";

const EmptyStateQuickSearch = () => {
  return (
    <div className="mt-16 bg-white rounded-[32px] border border-dashed border-gray-200 py-24 px-6 text-center">
      <div className="w-24 h-24 rounded-full bg-[#FFF3EE] mx-auto flex items-center justify-center text-[#F15A24]">
        <Search size={42} />
      </div>

      <h2 className="mt-8 text-3xl font-bold text-gray-900">
        Start Your Search
      </h2>

      <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
        Search for professional courses, licenses, careers and locations to
        discover the best opportunities.
      </p>
    </div>
  );
};

export default EmptyStateQuickSearch;
