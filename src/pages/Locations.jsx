import React from "react";
import LocationSearchPage from "../components/locationComponents/LocationSearch";
import Seo from "../components/shared/Seo";
import { breadcrumbSchema } from "../utils/seo";

export default function Locations() {

  return (
    <div>
      <Seo
        title="Training Centres Near You Across the UK"
        description="Find courses4me training centres near you across the UK, including London, Manchester, Birmingham and Cardiff. Search by postcode, compare course dates and book your place."
        path="/locations"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ])}
      />

      <LocationSearchPage />
    </div>
  );
}
