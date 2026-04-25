import React from 'react';
import CourseHero from '../../components/coursesComponents/CourseHero';
import ExploreSiaCourses from '../../components/coursesComponents/ExploreSiaCourses';
import ExploreAllCourses from '../../components/coursesComponents/ExploreAllCourses';
import RealStories from '../../components/coursesComponents/RealStories';
import HelpBanners from '../../components/coursesComponents/HelpBanners';

export default function Courses() {
  const [activeTab, setActiveTab] = useState('popular'); // 'popular', 'all', 'reviews'

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Dark Hero Section with Tabs */}
      <CourseHero activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 2. Content based on Active Tab */}
      {activeTab === 'popular' && (
        <ExploreSiaCourses />
      )}

      {activeTab === 'all' && (
        <ExploreAllCourses />
      )}

      {activeTab === 'reviews' && (
        <RealStories />
      )}

      {/* 5. Help & Final CTA Banners - Always visible or should it be hidden? User didn't specify. Usually banners stay. */}
      <HelpBanners />
    </main>
  );
}
