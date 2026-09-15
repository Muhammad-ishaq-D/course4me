import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Calendar, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({
  id,
  image,
  title,
  description,
  badge,
  price,
  date,
  category,
  duration,
  isPopular = false,
  isOnline = false,
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-[28px] overflow-hidden border border-gray-200/80 flex flex-col justify-between h-full shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(241,90,36,0.12)] hover:border-[#F15A24]/30 transition-all duration-300"
    >
      <div>
        {/* IMAGE & BADGES CONTAINER */}
        <div className="relative h-[190px] overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* TOP BADGES */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
            {isPopular ? (
              <div className="bg-black/80 backdrop-blur-md text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 border border-white/10 shadow-md">
                <TrendingUp size={12} className="text-[#F15A24]" />
                <span>Popular</span>
              </div>
            ) : category ? (
              <div className="bg-black/60 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
                <Tag size={10} className="text-[#F15A24]" />
                <span>{category}</span>
              </div>
            ) : (
              <div />
            )}

            {isOnline && (
              <div className="bg-white text-[#F15A24] text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                Online
              </div>
            )}
          </div>

          {/* DURATION BADGE AT BOTTOM IMAGE */}
          {duration && (
            <div className="absolute bottom-3 left-3 z-10 text-white text-xs font-semibold bg-black/50 backdrop-blur-xs px-2.5 py-0.5 rounded-md border border-white/10">
              {duration}
            </div>
          )}
        </div>

        {/* CONTENT AREA */}
        <div className="p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-[#111111] text-xl font-extrabold leading-snug mb-2 line-clamp-2 group-hover:text-[#F15A24] transition-colors duration-300">
              {title}
            </h3>

            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4 font-medium">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER & BUTTONS */}
      <div className="p-5 pt-0 mt-auto">
        <div className="pt-3 border-t border-gray-100 mb-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider">
              Starting From
            </p>
            <h4 className="text-[#111111] text-2xl font-black leading-none mt-0.5">
              £{price}
            </h4>
          </div>

          {date && (
            <div className="text-right">
              <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider flex items-center gap-1 justify-end">
                <Calendar size={11} className="text-[#F15A24]" />
                Next Batch
              </p>
              <p className="text-[#F15A24] text-xs font-extrabold mt-0.5">
                {date}
              </p>
            </div>
          )}
        </div>

        {/* BUTTON ACTION GROUP */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={() => navigate(`/booking/course?courseid=${id}`)}
            className="w-full h-11 rounded-xl cursor-pointer bg-[#F15A24] hover:bg-[#E04416] text-white text-xs font-extrabold transition-all duration-300 shadow-sm active:scale-95"
          >
            Book Training
          </button>

          <button
            onClick={() => navigate(`/course/${id}`)}
            className="w-full h-11 rounded-xl border border-gray-200 hover:border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer active:scale-95"
          >
            <span>Details</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
