import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "../components/shared/Seo";
import { breadcrumbSchema, careerUrl, describe } from "../utils/seo";

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
  const pageDescription = describe(
    [career.description, career.overview],
    `${careerTitle} career guide${career.salary ? ` (${career.salary})` : ""}: the SIA training you need, what the job involves and how to find work in the UK.`,
  );
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
        redirectToCanonical
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

      {/* ==================== OTHER CAREERS ==================== */}
      <section className="py-14 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-6">Other security careers</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {careersData
              .filter((c) => c.id !== career.id)
              .map((c) => (
                <li key={c.id}>
                  <Link
                    to={careerUrl(c.id, c.title)}
                    className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white p-5 hover:border-[#F15A24]/40 hover:shadow-md transition-all"
                  >
                    <span>
                      <span className="block font-bold text-[#111827] group-hover:text-[#C2410C] transition-colors">
                        {c.title} career guide
                      </span>
                      {c.salary && <span className="block mt-1 text-sm text-gray-500">{c.salary}</span>}
                    </span>
                    <ArrowRight size={16} className="text-gray-400 group-hover:text-[#C2410C] shrink-0" aria-hidden="true" />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CareerDetails;
