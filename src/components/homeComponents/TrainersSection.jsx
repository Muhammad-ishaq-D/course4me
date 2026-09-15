import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import courseService from "../../api/services/courseService";
import { Users, Sparkles } from "lucide-react";
import John from "../../assets/home/john.png";
import { motion } from "framer-motion";
import TrainerCard from "../ui/TrainerCard";
import TrainerCardSkeleton from "../TrainerComponents/TrainerCardSkeleton";

export default function TrainersSection() {
  const navigate = useNavigate();

  const [trainersList, setTrainersList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        setLoading(true);
        const response = await courseService.getAllCourses({
          status: "Published",
        });
        const courses = response.data?.data || [];
        const uniqueTrainers = [];
        const seenNames = new Set();
        courses.forEach((course) => {
          if (course.instructor && course.instructor.name) {
            if (!seenNames.has(course.instructor.name)) {
              seenNames.add(course.instructor.name);
              uniqueTrainers.push({
                name: course.instructor.name,
                role: course.instructor.title || "Security Instructor",
                title: course.title || "Professional Training",
                experience: "10+ years",
                locations: course.location
                  ? [course.location]
                  : ["London", "Manchester"],
                rating: "4.9",
                reviews: "120+",
                badge: "SIA Certified",
                image: course.instructor.photo || John,
              });
            }
          }
        });
        setTrainersList(uniqueTrainers);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrainers();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white text-[#111111] py-20 lg:py-24 px-4">
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00A3FF]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF5421]/10 blur-3xl rounded-full pointer-events-none" />

      <div
        id="team"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
      >
        {/* HEADER CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-[#FF5421]/10 border border-[#FF5421]/20 text-[#FF5421] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
            <Sparkles size={14} className="fill-[#FF5421]" />
            Our Team
          </div>

          {/* HEADING */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.08] tracking-tight text-[#111111] mb-4">
            Meet Our <span className="text-[#FF5421]">Trainers</span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-base sm:text-lg text-gray-500 font-medium leading-relaxed">
            Industry veterans and certified professionals who are passionate
            about launching your career in security.
          </p>
        </motion.div>

        {/* TRAINER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {loading
            ? [...Array(3)].map((_, i) => <TrainerCardSkeleton key={i} />)
            : trainersList.map((trainer, i) => (
                <TrainerCard
                  key={i}
                  trainer={trainer}
                  onClick={() =>
                    navigate("/trainer-profile", {
                      state: {
                        trainer,
                        fromSection: "team",
                      },
                    })
                  }
                />
              ))}
        </div>
      </div>
    </section>
  );
}
