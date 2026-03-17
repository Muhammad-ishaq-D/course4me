import React from 'react';
import { Filter } from 'lucide-react';

export default function CourseFilterStrip() {
  const filterOptions = [
    { label: 'All UK', count: 85, active: true },
    { label: 'London & South East', count: 25, active: false },
    { label: 'Midlands', count: 15, active: false },
    { label: 'North England', count: 20, active: false },
    { label: 'Scotland', count: 12, active: false },
    { label: 'Wales', count: 8, active: false },
    { label: 'South West', count: 5, active: false },
  ];

  return (
    <div className="bg-white border-b border-gray-200 py-6 px-4 md:px-6 w-full font-sans">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-center gap-4 overflow-x-auto no-scrollbar">
        
        {/* Filter Label */}
        <div className="flex items-center gap-2 text-[#71717A] font-semibold text-[15px] mr-1 shrink-0">
          <Filter size={18} className="text-[#A1A1AA]" />
          <span>Filter by region:</span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-nowrap md:flex-wrap items-center gap-3 w-full md:w-auto overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar scroll-smooth">
          {filterOptions.map((option, index) => (
            <button
              key={index}
              className={`flex items-center justify-center px-4 py-2.5 rounded-full font-bold text-[14px] transition-colors shrink-0 
                ${option.active 
                  ? 'bg-[#18181B] text-white shadow-sm' 
                  : 'bg-[#F4F4F5] text-[#52525B] hover:bg-[#E4E4E5]'
                }
              `}
              style={{ paddingLeft: '1.25rem', paddingRight: '1.25rem' }}
            >
              {option.label} ({option.count})
            </button>
          ))}
        </div>

      </div>
      
      {/* Utility to hide standard scrollbar in tailwind if not present in index.css */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
