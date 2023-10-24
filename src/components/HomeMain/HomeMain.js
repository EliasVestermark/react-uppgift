import React from 'react'
import ShowcaseSection from '../ShowcaseSection/ShowcaseSection'
import OurServices from '../OurServicesSection/OurServicesSection'
import CompanyLogotypes from '../CompanyLogotypesSection/CompanyLogotypesSection'
import Features from '../FeaturesSection/FeaturesSection'
import AboutCompany from '../AboutCompanySection/AboutCompanySection'
import ProjectAndCaseSection from '../ProjectAndCaseSection/ProjectAndCaseSection'

const HomeMain = () => {
  return (
    <div>
      <ShowcaseSection/>
      <CompanyLogotypes/>
      <Features/>
      <AboutCompany/>
      <OurServices/>
      <ProjectAndCaseSection/>
    </div>
  )
}

export default HomeMain