import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
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
  duration,
  isOnline = false
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#1A1A1A] rounded-[24px] overflow-hidden border border-white/5 flex flex-col h-full shadow-2xl"
    >
      {/* Image Section */}
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <div className="bg-[#FF5C1B] text-white text-[10px] font-black px-3 py-1.5 rounded-lg flex items-center gap-1.5 uppercase tracking-tighter">
            <TrendingUp size={12} strokeWidth={3} />
            POPULAR
          </div>
        </div>

        {isOnline && (
          <div className="absolute top-4 right-4 bg-[#00A3FF] text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-tighter">
            ONLINE
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white text-[20px] font-bold mb-3 tracking-tight leading-tight">
          {title}
        </h3>
        
        <p className="text-[#A1A1A1] text-[14px] leading-[1.6] mb-6 line-clamp-3">
          {description}
        </p>

        {/* Info & CTA Area */}
        <div className="mt-auto space-y-5">
          <div className="space-y-1">
            <p className="text-[#FFFFFF] text-[14px] font-medium">
              Starting at just <span className="font-bold">£{price}</span>
            </p>
            {date && (
              <p className="text-[#717171] text-[13px] font-medium">
                Next Available: <span className="text-[#FF5C1B] font-bold">{date}</span>
              </p>
            )}
          </div>

          <div className="flex gap-3 pt-1">
            <button
              onClick={() => navigate(`/booking/course?courseid=${id}`)}
              className="flex-1 bg-[#FF5C1B] hover:bg-[#E84A0F] text-white text-[14px] font-extrabold py-3.5 rounded-xl transition-all active:scale-[0.98]"
            >
              Book Now
            </button>
            <button
              onClick={() => navigate(`/course/${id}`)}
              className="flex-1 flex items-center justify-center gap-2 border border-[#333333] hover:bg-white/5 text-white text-[14px] font-extrabold py-3.5 rounded-xl transition-all"
            >
              Learn More
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;