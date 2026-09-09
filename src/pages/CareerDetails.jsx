import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // <--- Import Helmet

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
        <Helmet>
          <title>Career Not Found | courses4me</title>
          <meta
            name="description"
            content="The requested career guide could not be found. Explore available job roles and career paths in the UK with courses4me."
          />
        </Helmet>
        <h2 className="text-2xl font-bold">Career Not Found</h2>
      </div>
    );
  }

  // Dynamic Metadata Fields
  const careerTitle = career.title || career.name || "Career Role";
  const pageTitle = `${careerTitle} Career Guide & Training | courses4me`;
  const cleanDescription = (career.description || career.overview || "")
    .replace(/<[^>]*>?/gm, "")
    .trim();
  const pageDescription =
    cleanDescription.slice(0, 155) ||
    `Explore training pathways, salary expectations, and job roles for ${careerTitle} in the UK with courses4me.`;
  const canonicalUrl = `https://courses4me.co.uk/careers/${id}`;

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Dynamic SEO Tags */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Structured Data (Occupation Schema Markup) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Occupation",
            name: careerTitle,
            description: pageDescription,
            occupationLocation: {
              "@type": "City",
              name: "United Kingdom",
            },
            estimatedSalary: career.salary
              ? [
                  {
                    "@type": "MonetaryAmountDistribution",
                    currency: "GBP",
                    name: "base",
                    median: career.salary,
                  },
                ]
              : undefined,
          })}
        </script>
      </Helmet>

      {/* ===================HERO SECTION================= */}
      <HeroCareerDetails career={career} />
      {/* ==================== CONTENT ==================== */}
      <ContentCareerDetails career={career} />

      {/* ==================== COURSES SECTION ==================== */}
      <CoursesInCareerDetails career={career} />

      {/* ==================== JOBS SECTION ==================== */}
      <JobsInCareerDetails career={career} />
    </div>
  );
};

export default CareerDetails;
