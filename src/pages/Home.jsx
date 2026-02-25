import React from 'react'
import HeroSection from '../components/homeComponents/HeroSection'
import HiringTrainingSection from '../components/homeComponents/HiringTrainingSection'
import CoursesLicencesSection from '../components/homeComponents/CoursesLicencesSection'
import CareerEarningSection from '../components/homeComponents/CareerEarningSection'
import TestimonialsSection from '../components/homeComponents/TestimonialsSection'
import WhyChooseSection from '../components/homeComponents/WhyChooseSection'
import AppDownloadSection from '../components/homeComponents/AppDownloadSection'
import Footer from '../components/homeComponents/Footer'

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
      <Footer />
    </div>
    
  )
}
