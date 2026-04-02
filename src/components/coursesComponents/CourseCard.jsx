import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({
  id,
  image,
  title,
  description,
  badge,
  price,
  date,
  category,
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-[#1C1C1C] rounded-2xl overflow-hidden border border-white/[0.05] shadow-sm group"
    >
      {/* IMAGE */}
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* GRADIENT OVERLAY (IMPORTANT) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* BADGES */}
        <div className="absolute top-3 left-3 flex gap-2">
          {badge && (
            <span className="bg-[#F65B15] text-white text-[10px] font-semibold px-2.5 py-1 rounded-md uppercase">
              {badge}
            </span>
          )}

          {category && (
            <span className="bg-[#3B82F6] text-white text-[10px] font-semibold px-2.5 py-1 rounded-md uppercase">
              {category}
            </span>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col">
        {/* TITLE */}
        <h3 className="text-white text-[15px] font-semibold leading-snug mb-2">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-white/50 text-[13px] leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* PRICE */}
        <p className="text-white text-[13px] mb-1">
          Starting at just{" "}
          <span className="font-semibold">£{price}</span>
        </p>

        {/* DATE */}
        {date && (
          <p className="text-[#F65B15] text-[12px] mb-5">
            Skills Start Date: {date}
          </p>
        )}

        {/* BUTTONS */}
        <div className="flex gap-3 mt-auto">
          <button 
            onClick={() => navigate(`/course/${id}/book`)}
            className="flex-1 bg-[#F65B15] hover:bg-[#e25512] text-white text-sm font-semibold py-2.5 rounded-lg transition"
          >
            Book Now
          </button>

          <button 
            onClick={() => navigate(`/course/${id}`)}
            className="flex items-center justify-center gap-1 border border-white/10 text-white/80 text-sm px-4 rounded-lg hover:bg-white/5 transition"
          >
            Learn More
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;