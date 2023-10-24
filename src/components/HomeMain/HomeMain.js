import React from 'react'
import ShowcaseSection from '../ShowcaseSection/ShowcaseSection'
import OurServices from '../OurServicesSection/OurServicesSection'
import CompanyLogotypes from '../CompanyLogotypesSection/CompanyLogotypesSection'
import Features from '../FeaturesSection/FeaturesSection'
import AboutCompany from '../AboutCompanySection/AboutCompanySection'
import ProjectAndCaseSection from '../ProjectAndCaseSection/ProjectAndCaseSection'
import WhyChooseUsSection from '../WhyChooseUsSection/WhyChooseUsSection'
import TeamAndReviewsSection from '../TeamAndReviewsSection/TeamAndReviewsSection'

const HomeMain = () => {
  return (
    <div>
      <ShowcaseSection/>
      <CompanyLogotypes/>
      <Features/>
      <AboutCompany/>
      <OurServices/>
      <WhyChooseUsSection/>
      <ProjectAndCaseSection/>
      <TeamAndReviewsSection/>
    </div>
  )
}

export default HomeMain