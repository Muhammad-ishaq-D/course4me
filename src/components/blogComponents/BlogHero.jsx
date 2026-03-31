import React from "react";
import { Search, TrendingUp } from "lucide-react";

const BlogHero = () => {
  return (
    <section className="bg-[#0A192F] mt-20 md:mt-24 pb-20 relative overflow-hidden text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-[#00A3FF1A] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-20 relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm font-medium mb-8">
          <span className="text-gray-400 hover:text-white cursor-pointer transition">Home</span>
          <span className="text-gray-600">/</span>
          <span className="text-[#FF5421]">Blog & News</span>
        </nav>

        {/* Section Identifier */}
        <div className="flex items-center gap-2 text-[#FF5421] text-xs font-bold tracking-widest uppercase mb-6">
          <TrendingUp size={16} />
          <span>Blog & News</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight max-w-3xl">
          Latest Insights & Updates
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-400 max-w-2xl mb-12">
          Stay informed with the latest security industry news, career guides,
          study tips, and updates from the Get Licensed team.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="block w-full bg-[#162942] border-none text-white text-sm rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-[#00A3FF] transition shadow-2xl placeholder-gray-500"
            placeholder="Search articles..."
          />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
