import React from "react";
import HowItWorksSection from "../components/LicenseComponents/HowItWorksSection";
import FAQSection from "../components/LicenseComponents/FAQSection";
import ExploreAllLicences from "../components/LicenseComponents/ExploreAllLicences";

import Seo from "../components/shared/Seo";
import { breadcrumbSchema } from "../utils/seo";

export default function Licenses() {
  return (
    <div>
      <Seo
        title="SIA Licence Training & How to Apply"
        description="Get qualified for your SIA licence. Compare Door Supervisor, CCTV Operator and Security Guard licence training, eligibility, costs and how to apply with courses4me."
        path="/licences"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Licences", path: "/licences" },
        ])}
      />

      <ExploreAllLicences />
      <HowItWorksSection />
      <FAQSection />
    </div>
  );
}
