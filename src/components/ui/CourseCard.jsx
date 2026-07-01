import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
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
      className="group bg-white rounded-[24px] overflow-hidden border border-[#ECECEC] flex flex-col h-full shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(241,90,36,0.12)] transition-all duration-300"
    >
      {/* IMAGE */}
      <div className="relative h-[180px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* BADGES */}
        {isPopular && (
          <div className="absolute top-3 left-3 flex gap-2">
            <div className="bg-black text-white text-[12px] font-bold px-3 py-1 rounded-lg flex items-center gap-1">
              <TrendingUp size={11} />
              Popular
            </div>
          </div>
        )}

        {isOnline && (
          <div className="absolute top-3 right-3 bg-white text-[#F15A24] text-[12px] font-bold px-3 py-1 rounded-lg shadow-sm">
            Online
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          {/* TITLE */}
          <h3 className="text-[#141414] text-2xl font-bold leading-snug mb-2 line-clamp-2 group-hover:text-[#F15A24] transition-colors duration-300">
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-[#666666] text-base leading-[1.6] line-clamp-2 mb-4">
            {description}
          </p>
        </div>

        <div>
          {/* PRICE + DATE */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[14px] text-gray-400 font-medium">
                Starting From
              </p>

              <h4 className="text-[#141414] text-2xl font-black">£{price}</h4>
            </div>

            {date && (
              <div className="text-right">
                <p className="text-[14px] text-gray-400 font-medium">
                  Next Batch
                </p>

                <p className="text-[#F15A24] text-[16px] font-bold">{date}</p>
              </div>
            )}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-2 mt-auto">
            <button
              onClick={() => navigate(`/booking/course?courseid=${id}`)}
              className="flex-1 h-11.5 rounded-xl cursor-pointer bg-[#F15A24] hover:bg-[#d94f1f] text-white text-sm md:text-[16px] font-semibold transition-all duration-300"
            >
              Book Training
            </button>

            <button
              onClick={() => navigate(`/course/${id}`)}
              className="flex-1 h-11.5 rounded-xl border cursor-pointer border-[#E5E5E5] hover:border-[#F15A24]/30 hover:bg-black/90 hover:text-white text-[#141414] text-sm  md:text-[16px] font-semibold flex items-center justify-center gap-1.5 transition-all duration-300"
            >
              Details
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
