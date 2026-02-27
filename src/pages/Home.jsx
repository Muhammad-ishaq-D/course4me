import React from 'react'
import HeroSection from '../components/homeComponents/HeroSection'
import HiringTrainingSection from '../components/homeComponents/HiringTrainingSection'
import CoursesLicencesSection from '../components/homeComponents/CoursesLicencesSection'
import CareerEarningSection from '../components/homeComponents/CareerEarningSection'
import TestimonialsSection from '../components/homeComponents/TestimonialsSection'
import WhyChooseSection from '../components/homeComponents/WhyChooseSection'
import AppDownloadSection from '../components/homeComponents/AppDownloadSection'


export default function Home() {
  return (
    
           <div className="">
   
      <HeroSection />
      <HiringTrainingSection />
      <CoursesLicencesSection />
      <CareerEarningSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <AppDownloadSection />
   
    </div>
    
  )
}
