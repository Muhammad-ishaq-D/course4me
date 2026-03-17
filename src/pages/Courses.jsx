import React from 'react';
import CourseHeroSection from '../components/coursesComponents/CourseHeroSection';
import CourseFilterStrip from '../components/coursesComponents/CourseFilterStrip';
import FeaturedTrainingCentres from '../components/coursesComponents/FeaturedTrainingCentres';
import AllTrainingCentres from '../components/coursesComponents/AllTrainingCentres';
import NationwideCoverage from '../components/coursesComponents/NationwideCoverage';
import WhyChooseUs from '../components/coursesComponents/WhyChooseUs';
import LocationCTA from '../components/coursesComponents/LocationCTA';

export default function Courses() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <CourseHeroSection />
      <CourseFilterStrip />
      <FeaturedTrainingCentres />
      <AllTrainingCentres />
      <NationwideCoverage />
      <WhyChooseUs />
      <LocationCTA />
    </div>
  );
}
