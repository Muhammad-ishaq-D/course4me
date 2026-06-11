import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import JobsCard from "../ui/JobsCard";
import careerService from "../../api/services/careerService";
import { Link } from "react-router-dom";

const JobsInCareerDetails = ({ career }) => {
  const [jobsList, setJobsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryJobs = async () => {
      try {
        setLoading(true);
        const response = await careerService.getActiveJobs();
        const allJobs = response.data?.listings || response.data?.data?.listings || [];
        
        // Strictly filter jobs matching the specific career title or career category
        const filtered = allJobs.filter(job => 
          (job.category === career.title || 
           job.category?.toLowerCase() === career.title?.toLowerCase() ||
           career.title?.toLowerCase().includes(job.category?.toLowerCase()) ||
           job.category?.toLowerCase().includes(career.title?.toLowerCase()))
        );
        
        setJobsList(filtered);
      } catch (error) {
        console.error("Failed to load category jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryJobs();
  }, [career]);

  return (
    <section id="jobs-section" className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FFF8F5]" />

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F8510C]/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF1EB] border border-[#FFE2D6] text-[#F8510C] text-xs font-black uppercase tracking-[0.14em]">
              Active Openings
            </div>

            {/* Title */}
            <h2 className="mt-5 text-[34px] md:text-[46px] leading-[1.05] font-black tracking-tight text-[#111827]">
              Explore {career.title} Jobs
            </h2>

            {/* Description */}
            <p className="mt-4 text-[#667085] text-[15px] md:text-[16px] leading-[1.9]">
              Discover verified opportunities related strictly to the {career.title} profession and start your career journey.
            </p>
          </div>

          {/* Button */}
          <Link 
            to="/careers"
            className="group inline-flex items-center justify-center gap-3 h-13 px-7 rounded-2xl bg-[#F8510C] hover:bg-[#E04809] text-white font-bold shadow-[0_20px_40px_rgba(248,81,12,0.25)] transition-all duration-300 hover:gap-4"
          >
            Browse All Jobs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ================= JOBS GRID ================= */}
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center">
            <div className="w-10 h-10 border-4 border-[#F8510C] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-500 font-medium">Fetching job listings...</p>
          </div>
        ) : jobsList.length === 0 ? (
          <div className="py-12 bg-white rounded-3xl border border-dashed border-gray-200 text-center text-gray-500 font-bold px-6">
            Currently, there are no active {career.title} job openings. Check back soon or browse all jobs!
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobsList.map((job) => (
              <JobsCard key={job._id || job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsInCareerDetails;
