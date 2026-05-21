import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import courseService from "../../api/services/courseService";
import { Users } from "lucide-react";
import John from "../../assets/home/john.png";
import Sarah from "../../assets/home/sarah.png";
import David from "../../assets/home/david.png";
import Richard from "../../assets/home/richard.png";
import Emma from "../../assets/home/emma.png";
import Marcus from "../../assets/home/marcus.png";
import { motion } from "framer-motion";
import TrainerCard from "../ui/TrainerCard";

export default function TrainersSection() {
  const navigate = useNavigate();
  const [trainersList, setTrainersList] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
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
                badge: "Certified",
                image: course.instructor.photo || John,
              });
            }
          }
        });

        if (uniqueTrainers.length > 0) {
          setTrainersList(uniqueTrainers);
        }
      } catch (error) {
        console.error("Error fetching trainers from courses:", error);
      }
    };

    fetchTrainers();
  }, []);

  return (
    <section className="bg-white text-[#1A1A1A] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 bg-[#1A1A1A] text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
            <Users size={16} className="text-[#00A3FF]" /> OUR TEAM
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-[44px] md:text-[52px] font-bold mb-6 tracking-tight">
          Meet Our Trainers
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 text-lg font-medium">
          Industry veterans and certified professionals who are passionate about
          launching your career in security.
        </p>

        {/* Trainer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 px-2 gap-6">
          {trainersList.map((trainer, i) => (
            <TrainerCard
              key={i}
              trainer={trainer}
              onClick={() =>
                navigate("/trainer-profile", {
                  state: { trainer },
                })
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
