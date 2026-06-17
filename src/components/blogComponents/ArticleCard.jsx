import React from "react";
import { Calendar, Clock, User, Tag, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const getCategoryStyles = (category) => {
  switch (category) {
    case "Career Guide":
      return {
        bg: "bg-[#00A3FF0A]",
        text: "text-[#00A3FF]",
        border: "border-[#00A3FF20]",
      };
    case "Industry News":
      return {
        bg: "bg-[#3B82F60A]",
        text: "text-[#3B82F6]",
        border: "border-[#3B82F620]",
      };
    case "Study Tips":
      return {
        bg: "bg-[#A855F70A]",
        text: "text-[#A855F7]",
        border: "border-[#A855F720]",
      };
    case "Company News":
      return {
        bg: "bg-[#EA580C0A]",
        text: "text-[#EA580C]",
        border: "border-[#EA580C20]",
      };
    default:
      return {
        bg: "bg-gray-50",
        text: "text-gray-500",
        border: "border-gray-100",
      };
  }
};

const ArticleCard = ({
  id,
  image,
  category,
  title,
  excerpt,
  author,
  publishDate,
  readTime,
  isFeatured,
}) => {
  const styles = getCategoryStyles(category);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/article/${id}`)}
      className="group relative flex flex-col h-full overflow-hidden rounded-[30px] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_80px_rgba(0,0,0,0.10)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
    >
      {/* HOVER GLOW */}
      <div className="absolute top-[-100px] right-[-80px] w-[220px] h-[220px] bg-[#F15A24]/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />

      {/* ================= IMAGE SECTION ================= */}
      <div className="relative h-[240px] overflow-hidden">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* CATEGORY */}
        <div className="absolute top-5 left-5">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider">
            <Tag size={12} />

            {category}
          </div>
        </div>

        {/* FEATURED */}
        {isFeatured && (
          <div className="absolute top-5 right-5">
            <div className="bg-[#F15A24] text-white px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-[0_10px_30px_rgba(241,90,36,0.35)]">
              Featured
            </div>
          </div>
        )}

        {/* READ TIME */}
        <div className="absolute bottom-5 right-5">
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold">
            <Clock size={13} />

            {readTime}
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative flex flex-col flex-1 p-7">
        {/* DATE */}
        <div className="flex items-center gap-2 text-[#F15A24] text-sm font-bold uppercase tracking-[0.15em]">
          <Calendar size={14} />

          {publishDate}
        </div>

        {/* TITLE */}
        <h3 className="mt-5 text-[24px] font-black leading-[1.25] text-[#111827] group-hover:text-[#F15A24] transition duration-300 line-clamp-2">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-5 text-[#6B7280] text-base leading-relaxed flex-1 line-clamp-3">
          {excerpt}
        </p>

        {/* AUTHOR */}
        <div className="mt-7 pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
          {/* AUTHOR INFO */}
          <div className="flex items-center gap-3">
            {/* AVATAR */}
            <div className="w-11 h-11 rounded-full bg-[#FFF4EE] flex items-center justify-center text-[#F15A24] font-bold text-sm">
              {author?.charAt(0)}
            </div>

            {/* NAME */}
            <div>
              <p className="text-[14px] font-bold text-[#111827]">{author}</p>

              <span className="text-sm text-gray-400">Courses4me Team</span>
            </div>
          </div>

          {/* BUTTON */}
          <div className="w-11 h-11 rounded-2xl bg-[#F8FAFC] border border-gray-100 flex items-center justify-center group-hover:bg-[#F15A24] group-hover:border-[#F15A24] transition-all duration-300">
            <ArrowRight
              size={18}
              className="text-[#111827] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
