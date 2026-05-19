import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { careersData } from "../data/careerData";
import HeroCareerDetails from "../components/careerDetailsComponents/HeroCareerDetails";
import ContentCareerDetails from "../components/careerDetailsComponents/ContentCareerDetails";
import CoursesInCareerDetails from "../components/careerDetailsComponents/CoursesInCareerDetails";
import JobsInCareerDetails from "../components/careerDetailsComponents/JobsInCareerDetails";

import Loader from "../components/ui/Loader";

const CareerDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const career = careersData.find((item) => item.id === Number(id));

  // ================= PAGE LOADING =================
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // ================= LOADER =================
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <Loader text="Loading career details..." />
      </div>
    );
  }

  if (!career) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Career Not Found</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* ===================HERO SECTION================= */}
      <HeroCareerDetails career={career} />
      {/* ==================== CONTENT ==================== */}
      <ContentCareerDetails career={career} />

      {/* /* ==================== COURSES SECTION ==================== */}
      <CoursesInCareerDetails career={career} />

      {/* ==================== JOBS SECTION ==================== */}
      <JobsInCareerDetails career={career} />
    </div>
  );
};

export default CareerDetails;
