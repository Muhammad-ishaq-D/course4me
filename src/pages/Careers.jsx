import React from "react";
import CareerListing from "../components/careerComponents/CareerListing";
import StepsSection from "../components/careerComponents/StepsSection";

import Seo from "../components/shared/Seo";
import { breadcrumbSchema } from "../utils/seo";

export default function Careers() {
  return (
    <div>
      <Seo
        title="Security Careers & Job Guides"
        description="Explore security careers in the UK: Door Supervisor, CCTV Operator, Security Guard and more. See salaries, the training you need and how courses4me helps you find work."
        path="/careers"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ])}
      />

      <CareerListing />
      <StepsSection />
    </div>
  );
}

