import React, { useState } from "react";
import { Filter } from "lucide-react";

const regions = [
  "All UK (85)",
  "London & South East (25)",
  "Midlands (15)",
  "North England (20)",
  "Scotland (12)",
  "Wales (8)",
  "South West (5)"
];

const RegionFilter = () => {
  const [active, setActive] = useState("All UK (85)");

  return (
    <div className="bg-[#f3f5f7] border border-gray-200 rounded-2xl px-6 py-5">

      <div className="flex flex-col md:flex-row md:items-center gap-4">

        {/* Label */}
        <div className="flex items-center gap-3 text-gray-600 font-medium whitespace-nowrap">
          <Filter size={18} />
          <span>Filter by region:</span>
        </div>

        {/* Pills */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">

          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActive(region)}
              className={`
                px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition
                ${
                  active === region
                    ? "bg-[#2f3a47] text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
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