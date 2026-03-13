import React from 'react'
import RecommendedCourse from '../components/coursesComponents/RecommendedCourse'
import CoursesSection from '../components/coursesComponents/Courses'
import ReviewsSection from '../components/coursesComponents/ReviewsSection'
import CareerAdviceCTA from '../components/coursesComponents/CareerAdviceCTA'

export default function Courses() {
  return (
    <div className="mt-40  bg-[#F8FAFC]">


      <RecommendedCourse />
      <CoursesSection />
      <ReviewsSection />
      <CareerAdviceCTA />
    </div>
  )
}
