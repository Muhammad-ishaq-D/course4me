import React from "react";
import LocationSearchPage from "../components/locationComponents/LocationSearch";
import { Helmet } from "react-helmet-async";

export default function Locations() {

  return (
    <div>
      <Helmet>
        <title>Find Training Locations Near You in the UK | courses4me</title>
        <meta
          name="description"
          content="Discover courses4me training venues across major UK cities, including London, Manchester, Birmingham, and more."
        />
        <link rel="canonical" href="https://courses4me.co.uk/locations" />
      </Helmet>

      <LocationSearchPage />
    </div>
  );
}
