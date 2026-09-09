import React from "react";
import HowItWorksSection from "../components/LicenseComponents/HowItWorksSection";
import FAQSection from "../components/LicenseComponents/FAQSection";
import ExploreAllLicences from "../components/LicenseComponents/ExploreAllLicences";

import { Helmet } from "react-helmet-async";

export default function Licenses() {
  return (
    <div>
      <Helmet>
        <title>SIA Security Licences & Training | courses4me</title>
        <meta
          name="description"
          content="Get qualified for your official SIA license. Explore Door Supervisor, CCTV Operator, and Security Guard training options."
        />
        <link rel="canonical" href="https://courses4me.co.uk/licences" />
      </Helmet>

      <ExploreAllLicences />
      <HowItWorksSection />
      <FAQSection />
    </div>
  );
}
