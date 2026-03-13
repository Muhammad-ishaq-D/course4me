import React from 'react'
import SIASection from '../components/LicenseComponents/SIASection'
import HowItWorksSection from '../components/LicenseComponents/HowItWorksSection'
import CompareLicences from '../components/LicenseComponents/CompareLicences'
import FAQSection from '../components/LicenseComponents/FAQSection'
import HelpSection from '../components/LicenseComponents/HelpSection'
import LicencesSection from '../components/LicenseComponents/LicencesSection'

export default function Licenses() {
  return (
    <div>
      <SIASection />
      <HowItWorksSection />
      <LicencesSection />
      <CompareLicences />
      <FAQSection />
      <HelpSection />
    </div>
  )
}
