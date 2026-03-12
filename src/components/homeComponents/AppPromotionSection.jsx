import React from 'react';
import { Search, Briefcase, BarChart3, MessageCircle, FileText } from 'lucide-react';

const AppPromotionSection = () => {
    return (
        <div className="w-full bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">

                {/* Navigation Items */}
                <nav className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-[900px] mx-auto">

                    {/* Find Course */}
                    <button className="flex items-center justify-center gap-2 border border-gray-200 py-3 text-sm font-bold text-gray-700 hover:text-[#1A1A1A] hover:bg-gray-50 rounded-full transition-all duration-150 w-full px-4 shadow-sm">
                        <Search className="w-4 h-4 text-[#00A3FF]" />
                        <span>Find Course</span>
                    </button>

                    {/* Find Work */}
                    <button className="flex items-center justify-center gap-2 border border-gray-200 py-3 text-sm font-bold text-gray-700 hover:text-[#1A1A1A] hover:bg-gray-50 rounded-full transition-all duration-150 w-full px-4 shadow-sm">
                        <Briefcase className="w-4 h-4 text-[#00A3FF]" />
                        <span>Find Work</span>
                    </button>

                    {/* Results */}
                    <button className="flex items-center justify-center gap-2 border border-gray-200 py-3 text-sm font-bold text-gray-700 hover:text-[#1A1A1A] hover:bg-gray-50 rounded-full transition-all duration-150 w-full px-4 shadow-sm">
                        <FileText className="w-4 h-4 text-[#00A3FF]" />
                        <span>Results</span>
                    </button>

                    {/* Chat */}
                    <button className="flex items-center justify-center gap-2 border border-gray-200 py-3 text-sm font-bold text-gray-700 hover:text-[#1A1A1A] hover:bg-gray-50 rounded-full transition-all duration-150 w-full px-4 shadow-sm">
                        <MessageCircle className="w-4 h-4 text-[#00A3FF]" />
                        <span>Chat</span>
                    </button>

                </nav>




                {/* Mobile Navigation - Visible on smaller screens */}

            </div>
        </div>
    );
};

export default AppPromotionSection;