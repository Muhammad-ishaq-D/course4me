import React from "react";
import ExploreAllCourses from "../../components/coursesComponents/ExploreAllCourses";
import RealStories from "../../components/coursesComponents/RealStories";

import { Helmet } from "react-helmet-async";

export default function Courses() {
  return (
    <main className="bg-white min-h-screen">
      <Helmet>
        <title>All Courses & Qualifications | courses4me</title>
        <meta
          name="description"
          content="Browse our wide range of accredited training courses and SIA qualifications in the UK. Start learning with courses4me today."
        />
        <link rel="canonical" href="https://courses4me.co.uk/courses" />
      </Helmet>

      <ExploreAllCourses />
      <RealStories />
    </main>
  );
}
