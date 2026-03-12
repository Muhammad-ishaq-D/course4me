import React from 'react'
import HeroSection from '../components/homeComponents/HeroSection'
import HiringTrainingSection from '../components/homeComponents/HiringTrainingSection'
import CoursesLicencesSection from '../components/homeComponents/CoursesLicencesSection'
import CareerEarningSection from '../components/homeComponents/CareerEarningSection'
import TestimonialsSection from '../components/homeComponents/TestimonialsSection'
import WhyChooseSection from '../components/homeComponents/WhyChooseSection'
import AppDownloadSection from '../components/homeComponents/AppDownloadSection'
import TrainersSection from '../components/homeComponents/TrainersSection'
import BlogSection from '../components/homeComponents/BlogSection'
import TrainingPreviewSection from '../components/homeComponents/TrainingPreviewSection'
import VideoTestimonials from '../components/homeComponents/VideoTestimonials'
import AppPromotionSection from '../components/homeComponents/AppPromotionSection'


export default function Home() {
  return (

    <div className="">

      <HeroSection />
      <HiringTrainingSection />
      <CoursesLicencesSection />
      <TrainingPreviewSection />
      <CareerEarningSection />
      <VideoTestimonials />
      <TestimonialsSection />
      <TrainersSection />
      <BlogSection />
      <WhyChooseSection />
      <AppPromotionSection />
      <AppDownloadSection />

    </div>

  )
}
