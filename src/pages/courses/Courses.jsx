import React, { useEffect, useState } from "react";
import ExploreAllCourses from "../../components/coursesComponents/ExploreAllCourses";
import RealStories from "../../components/coursesComponents/RealStories";

import { useSearchParams } from "react-router-dom";

export default function Courses() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [activeTab, setActiveTab] = useState(categoryParam ? "all" : "popular"); // 'popular', 'all', 'reviews'

  useEffect(() => {
    if (categoryParam) {
      setActiveTab("all");
    }
  }, [categoryParam]);

  return (
    <main className="bg-white min-h-screen">
      <ExploreAllCourses />
      <RealStories />
    </main>
  );
}
