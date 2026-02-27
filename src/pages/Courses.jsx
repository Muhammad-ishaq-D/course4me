import React from 'react'
import CoursesHero from '../components/coursesComponents/CoursesHero'
import CoursesSection from '../components/coursesComponents/Courses'
import ReviewsSection from '../components/coursesComponents/ReviewsSection'
import CareerAdviceCTA from '../components/coursesComponents/CareerAdviceCTA'

export default function Courses() {
  return (
    <div>
        <CoursesHero />
        <CoursesSection />
        <ReviewsSection />
        <CareerAdviceCTA />
    </div>
  )
}
