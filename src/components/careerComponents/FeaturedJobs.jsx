import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import JobsCard from "../ui/JobsCard";
import careerService from "../../api/services/careerService";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedJobs = async () => {
      try {
        setLoading(true);
        const response = await careerService.getActiveJobs();
        const allJobs = response.data?.listings || response.data?.data?.listings || [];
        
        // Filter featured active ones
        const featured = allJobs.filter(j => j.isFeatured && j.status === 'Active');
        
        // Fallback: If no featured, show first 3 active jobs
        setJobs(featured.length > 0 ? featured : allJobs.filter(j => j.status === 'Active').slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch featured jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedJobs();
  }, []);

  return (
    <section className="bg-[#F3F4F6] py-14 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center gap-3 mb-10">
          <Sparkles className="text-[#F8510C]" size={26} />
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E]">
            Featured Job Opportunities
          </h2>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center">
            <div className="w-10 h-10 border-4 border-[#F8510C] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-500 font-medium">Loading premium careers...</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="py-12 bg-white rounded-3xl border border-dashed border-gray-300 text-center text-gray-500 font-medium">
            No active job openings at the moment. Please check back later!
          </div>
        ) : (
          /* Cards */
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {jobs.map((job, index) => (
              <JobsCard
                key={job._id || job.id}
                job={job}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobs;
