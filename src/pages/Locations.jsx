import React from 'react'
import TrainingCentresSection from '../components/locationComponents/TrainingCenterSection'
import RegionFilter from '../components/locationComponents/RegionFilter'
import NationwideCoverage from '../components/locationComponents/NationwideCoverage'
import WhyChooseTrainingCentres from '../components/locationComponents/WhyChooseTrainingCentres'
import LocationHelpSection from '../components/locationComponents/LocationHelpSection'

export default function Locations() {
  return (
    <div>
        <TrainingCentresSection />
        <RegionFilter />
        <NationwideCoverage />
        <WhyChooseTrainingCentres />
        <LocationHelpSection />
    </div>
  )
}
