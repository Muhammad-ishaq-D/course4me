import React from "react";
import { Calendar, Clock, User, Tag } from "lucide-react";

const getCategoryStyles = (category) => {
  switch (category) {
    case "Career Guide":
      return {
        bg: "bg-[#00A3FF0A]",
        text: "text-[#00A3FF]",
        border: "border-[#00A3FF20]"
      };
    case "Industry News":
      return {
        bg: "bg-[#3B82F60A]",
        text: "text-[#3B82F6]",
        border: "border-[#3B82F620]"
      };
    case "Study Tips":
      return {
        bg: "bg-[#A855F70A]",
        text: "text-[#A855F7]",
        border: "border-[#A855F720]"
      };
    case "Company News":
      return {
        bg: "bg-[#EA580C0A]",
        text: "text-[#EA580C]",
        border: "border-[#EA580C20]"
      };
    default:
      return {
        bg: "bg-gray-50",
        text: "text-gray-500",
        border: "border-gray-100"
      };
  }
};

const ArticleCard = ({ image, category, title, excerpt, author, date, readTime, isFeatured }) => {
  const styles = getCategoryStyles(category);

  return (
    <div className="bg-white  rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 group cursor-pointer flex flex-col h-full transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="h-[240px] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />
        {/* Featured Badge Overlay */}
        {isFeatured && (
          <div className="absolute top-4 right-4 animate-in fade-in zoom-in duration-500">
            <span className="bg-[#1A1A1A99] backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-white/20">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-8 flex-1 flex flex-col">
        {/* Tag Below Image */}
        <div className="mb-5 flex">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest border ${styles.bg} ${styles.text} ${styles.border}`}>
            <Tag size={12} className="opacity-80" />
            {category}
          </div>
        </div>

        <h3 className="text-[22px] font-bold text-[#1A1A1A] mb-4 leading-[1.3] group-hover:text-[#00A3FF] transition duration-300 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-500 text-sm mb-8 flex-1 leading-relaxed font-medium line-clamp-3">
          {excerpt}
        </p>

        {/* Metadata Stack */}
        <div className="flex flex-col gap-5 pt-6 border-t border-gray-50">
          {/* Author */}
          <div className="flex items-center gap-2.5 text-[11px] text-gray-400 font-bold uppercase tracking-widest">
            <User size={16} className="text-gray-400" />
            {author}
          </div>

          {/* Date & Read Time */}
          <div className="flex justify-between items-center text-[11px] text-gray-400 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-gray-400" />
              {date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-gray-400" />
              {readTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
