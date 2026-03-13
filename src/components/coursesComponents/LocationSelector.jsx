import React, { useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";

const LocationSelector = ({ selectedLocation, setSelectedLocation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const locations = ["Bradford", "Sheffield", "Manchester", "Leeds"];

  return (
    <div className="w-full bg-white border-b border-gray-100 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center bg-[#1A202C] rounded-lg shadow-sm">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-sm font-extrabold text-[#1A202C] leading-none mb-1">
              Select your training location
            </h2>
            <p className="text-[11px] text-gray-400 font-medium">
              Choose once to see dates for all courses
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-sm">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-400 hover:border-gray-300 transition shadow-sm"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-gray-300" />
              <span className={`font-medium ${selectedLocation ? 'text-[#1A202C]' : 'text-gray-400'}`}>
                {selectedLocation || "Select location..."}
              </span>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-lg z-50 overflow-hidden">
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    setSelectedLocation(loc);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-[#1A202C] transition-colors border-b border-gray-50 last:border-0"
                >
                  {loc}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;
