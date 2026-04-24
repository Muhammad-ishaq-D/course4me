import React from 'react';
import CourseHero from '../../components/coursesComponents/CourseHero';
import ExploreSiaCourses from '../../components/coursesComponents/ExploreSiaCourses';
import ExploreAllCourses from '../../components/coursesComponents/ExploreAllCourses';
import RealStories from '../../components/coursesComponents/RealStories';
import HelpBanners from '../../components/coursesComponents/HelpBanners';

export default function Courses() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Dark Hero Section */}
      <CourseHero />

      {/* 2. Explore SIA Training Courses */}
      <ExploreSiaCourses />

      {/* 3. Explore All Courses with Filtering */}
      <ExploreAllCourses />

      {/* 4. Real Stories & Reviews Section */}
      <RealStories />

      {/* 5. Help & Final CTA Banners */}
      <HelpBanners />
    </main>
  );
}
