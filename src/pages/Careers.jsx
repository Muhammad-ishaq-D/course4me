import React from "react";
import CareerListing from "../components/careerComponents/CareerListing";
import StepsSection from "../components/careerComponents/StepsSection";

import { Helmet } from "react-helmet-async";

export default function Careers() {
  return (
    <div>
      <Helmet>
        {/* Title & Description */}
        <title>Career Opportunities & Job Support | courses4me</title>
        <meta
          name="description"
          content="Explore career opportunities, trainer roles, and job support provided by courses4me to help you launch your career after training."
        />
        <link rel="canonical" href="https://courses4me.co.uk/careers" />

        {/* Structured Data for Careers / Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "courses4me",
            url: "https://courses4me.co.uk",
            sameAs: "https://courses4me.co.uk",
            knowsAbout: [
              "Security Training",
              "SIA Qualifications",
              "Professional Courses",
            ],
            description:
              "courses4me provides accredited training courses and career guidance across the UK.",
          })}
        </script>
      </Helmet>

      <CareerListing />
      <StepsSection />
    </div>
  );
}

