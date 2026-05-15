import React from "react";
// import SIASection from "../components/LicenseComponents/SIASection";
import HowItWorksSection from "../components/LicenseComponents/HowItWorksSection";
// import CompareLicences from "../components/LicenseComponents/CompareLicences";
import FAQSection from "../components/LicenseComponents/FAQSection";
// import HelpSection from "../components/LicenseComponents/HelpSection";
import ExploreAllLicences from "../components/LicenseComponents/ExploreAllLicences";

export default function Licenses() {
  return (
    <div>
      {/* <SIASection /> */}
      <ExploreAllLicences />
      {/* <CompareLicences /> */}
      <HowItWorksSection />
      <FAQSection />
      {/* <HelpSection /> */}
    </div>
  );
}
