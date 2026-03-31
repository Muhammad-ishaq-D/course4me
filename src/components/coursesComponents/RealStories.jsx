import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Paul Taylor",
    role: "Door Supervisor Course",
    text: "The training was professional and very clear. The instructor was direct and helped me understand all the legal requirements for door supervisor license.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "First Aid Training",
    text: "Excellent course! Very hands-on and practical. I feel much more confident in my ability to handle emergencies at work.",
    rating: 5
  },
  {
    id: 3,
    name: "James Wilson",
    role: "CCTV Operator",
    text: "Great experience. The trainer was very knowledgeable and the facilities were top notch. Highly recommend for anyone looking to enter the industry.",
    rating: 5
  },
  {
    id: 4,
    name: "Ahmed Khan",
    role: "Top Up Training",
    text: "Quick and easy booking. The course was well structured and the trainer made it easy to follow the new SIA regulations.",
    rating: 5
  },
  {
    id: 5,
    name: "Dave Miller",
    role: "Health & Safety",
    text: "Professional service from start to finish. The content was relevant and helped me upgrade my site safety knowledge.",
    rating: 5
  },
  {
    id: 6,
    name: "Jess Chen",
    role: "Hospitality Course",
    text: "Perfect for getting my first job in the industry. The trainer gave us great tips on customer service and conflict resolution.",
    rating: 5
  }
];

const RealStories = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#F65B15] mb-12 text-center md:text-left">
          Real stories from real people
        </h2>

        {/* Stats and Hero Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-[#EEEEEE] shadow-sm">
            <span className="text-[#F65B15] font-bold text-xs uppercase tracking-widest mb-2 block">Trustpilot</span>
            <div className="text-3xl font-bold text-[#141414] mb-2">34,032</div>
            <div className="flex gap-1 mb-2">
               {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#00b67a" color="#00b67a" />)}
            </div>
            <span className="text-sm text-[#141414]/40">Reviews on Trustpilot</span>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#EEEEEE] shadow-sm">
             <span className="text-[#1E90FF] font-bold text-xs uppercase tracking-widest mb-2 block">Google</span>
            <div className="text-3xl font-bold text-[#141414] mb-2">9,511</div>
            <div className="flex gap-1 mb-2">
               {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />)}
            </div>
            <span className="text-sm text-[#141414]/40">Reviews on Google</span>
          </div>

          <div className="rounded-3xl overflow-hidden aspect-square border border-[#EEEEEE] relative group">
             <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" alt="Students" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
             <div className="absolute bottom-4 left-4 bg-[#141414]/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px]">Student Graduation</div>
          </div>

          <div className="rounded-3xl overflow-hidden aspect-square border border-[#EEEEEE] relative group md:hidden lg:block">
             <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" alt="Training" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
             <div className="absolute bottom-4 left-4 bg-[#141414]/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px]">Training Centre</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((test) => (
            <motion.div 
               key={test.id}
               className="bg-white p-8 rounded-3xl border border-[#EEEEEE] hover:border-[#F65B15]/30 hover:shadow-lg transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(test.rating)].map((_, i) => <Star key={i} size={14} fill="#F65B15" color="#F65B15" />)}
              </div>
              <p className="text-[#141414]/80 text-sm mb-6 leading-relaxed italic">
                "{test.text}"
              </p>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-[#EEEEEE] flex items-center justify-center font-bold text-[#F65B15]">
                    {test.name[0]}
                 </div>
                 <div>
                    <h4 className="font-bold text-[#141414] text-sm">{test.name}</h4>
                    <p className="text-xs text-[#141414]/40">{test.role}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 95% Badge Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white border border-[#EEEEEE] p-6 rounded-full mb-20 px-8">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 rounded-full bg-[#F65B15] flex flex-col items-center justify-center text-white border-4 border-[#F65B15]/20">
                  <span className="text-xs font-bold leading-none">95%</span>
               </div>
               <div>
                  <h4 className="font-bold text-[#141414]">Ultimate Training Match Pro</h4>
                  <p className="text-xs text-[#141414]/60 underline cursor-pointer">Our matched graduates find jobs within 3 months.</p>
               </div>
            </div>
            <button className="bg-[#141414] hover:bg-[#2A2D30] text-white px-8 py-3 rounded-full font-bold text-xs transition-colors whitespace-nowrap">
               Become a Member
            </button>
        </div>
      </div>
    </section>
  );
};

export default RealStories;
