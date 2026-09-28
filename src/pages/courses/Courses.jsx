import React from "react";
import ExploreAllCourses from "../../components/coursesComponents/ExploreAllCourses";
import RealStories from "../../components/coursesComponents/RealStories";

import Seo from "../../components/shared/Seo";
import { breadcrumbSchema } from "../../utils/seo";

export default function Courses() {
  return (
    <div className="bg-white min-h-screen">
      <Seo
        title="SIA Security & First Aid Training Courses"
        description="Browse accredited SIA security courses, first aid and professional qualifications at training centres across the UK. Compare dates and prices and book online with courses4me."
        path="/courses"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Courses", path: "/courses" },
        ])}
      />

      <ExploreAllCourses />
      <RealStories />
    </div>
  );
}
