import React from 'react'
import CareerHero from '../components/careerComponents/CareerHero'
import CareerPathSection from '../components/careerComponents/CareerPathSection'
import FeaturedJobs from '../components/careerComponents/FeaturedJobs'
import AllJobListings from '../components/careerComponents/AllJobListing'
import WhyWorkSection from '../components/careerComponents/WhyWorkSection'
import StepsSection from '../components/careerComponents/StepsSection'
import CareerCTA from '../components/careerComponents/CareerCTA'

export default function Careers() {
  return (
    <div>
        <CareerHero />
        <CareerPathSection />
        <FeaturedJobs />
        <AllJobListings />
        <WhyWorkSection />
        <StepsSection />
        <CareerCTA />
    </div>
  )
}
