import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Seo from "../components/shared/Seo";
import { breadcrumbSchema, careerUrl, plainText } from "../utils/seo";

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
        <Seo
          title="Career Not Found"
          description="The requested career guide could not be found. Explore available job roles and career paths in the UK with courses4me."
          noindex
        />
        <h1 className="text-2xl font-bold">Career Not Found</h1>
      </div>
    );
  }

  // Dynamic Metadata Fields
  const careerTitle = career.title || career.name || "Career Role";
  const pageDescription =
    plainText(career.description || career.overview) ||
    `Explore training pathways, salary expectations, and job roles for ${careerTitle} in the UK with courses4me.`;
  const canonicalPath = careerUrl(id, careerTitle);
  // Salaries are display text such as "£24K — £32K / year"; schema.org wants numbers.
  const salaryNumbers = [
    ...String(career.salary || "").replace(/,/g, "").matchAll(/(\d+(?:\.\d+)?)\s*(k)?/gi),
  ].map(([, value, thousands]) => Number(value) * (thousands ? 1000 : 1));

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <Seo
        title={`${careerTitle} Career Guide & Training`}
        description={pageDescription}
        path={canonicalPath}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Occupation",
            name: careerTitle,
            description: pageDescription,
            occupationLocation: { "@type": "Country", name: "United Kingdom" },
            estimatedSalary: salaryNumbers?.length
              ? [
                  {
                    "@type": "MonetaryAmountDistribution",
                    name: "base",
                    currency: "GBP",
                    duration: "P1Y",
                    minValue: Math.min(...salaryNumbers),
                    maxValue: Math.max(...salaryNumbers),
                  },
                ]
              : undefined,
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
            { name: careerTitle, path: canonicalPath },
          ]),
        ]}
      />

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
