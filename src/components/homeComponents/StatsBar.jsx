import React from 'react';

const StatsBar = () => {
    const stats = [
        {
            number: "450K+",
            label: "Professionals Trained",
            numberColor: "text-[#00A3FF]"
        },
        {
            number: "95%",
            label: "First-Time Pass Rate",
            numberColor: "text-[#FF5421]"
        },
        {
            number: "85+",
            label: "Training Locations",
            numberColor: "text-[#00A3FF]"
        },
        {
            number: "3 weeks",
            label: "To Get Licensed",
            numberColor: "text-[#FF5421]"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 mb-12">
            <div className="bg-[#F9FAFB] rounded-2xl md:rounded-[32px] overflow-hidden border border-gray-100/50 shadow-sm">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`py-8 md:py-12 flex flex-col items-center text-center px-4 relative ${index !== stats.length - 1 ? 'md:after:content-[""] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-16 md:after:w-[1px] md:after:bg-gray-200' : ''
                                } ${index % 2 === 0 ? 'after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-12 after:w-[1px] after:bg-gray-200 md:after:hidden' : ''
                                }`}
                        >
                            <div className={`text-3xl md:text-4xl font-extrabold mb-2 tracking-tight ${stat.numberColor}`}>
                                {stat.number}
                            </div>
                            <div className="text-gray-500 text-sm md:text-base font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsBar;
