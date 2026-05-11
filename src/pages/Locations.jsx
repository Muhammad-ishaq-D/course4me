import React, { useState } from "react";
import TrainingCentresSection from "../components/locationComponents/TrainingCenterSection";
import RegionFilter from "../components/locationComponents/RegionFilter";
import NationwideCoverage from "../components/locationComponents/NationwideCoverage";
import WhyChooseTrainingCentres from "../components/locationComponents/WhyChooseTrainingCentres";
import LocationHelpSection from "../components/locationComponents/LocationHelpSection";
import FeaturedCentres from "../components/locationComponents/FeaturedCentres";
import AllTrainingCentres from "../components/locationComponents/AllTrainingCentres";

export default function Locations() {
  const [activeRegion, setActiveRegion] = useState("All Centers");

  return (
    <div>
      <TrainingCentresSection />
      <RegionFilter active={activeRegion} setActive={setActiveRegion} />
      <FeaturedCentres active={activeRegion} />
      {/* <AllTrainingCentres /> */}
      {/* <NationwideCoverage /> */}
      <WhyChooseTrainingCentres />
      <LocationHelpSection />
    </div>
  );
}
