import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ShowcaseSection from '../components/ShowcaseSection/ShowcaseSection'
import OurServices from '../components/OurServicesSection/OurServicesSection'
import CompanyLogotypes from '../components/CompanyLogotypesSection/CompanyLogotypesSection'
import Features from '../components/FeaturesSection/FeaturesSection'
import AboutCompany from '../components/AboutCompanySection/AboutCompanySection'
import ProjectAndCaseSection from '../components/ProjectAndCaseSection/ProjectAndCaseSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection/WhyChooseUsSection'
import TeamAndReviewsSection from '../components/TeamAndReviewsSection/TeamAndReviewsSection'
import SignUpSection from '../components/SignUpSection/SignUpSection'
import ArticleAndNewsSection from '../components/ArticleAndNewsSection/ArticleAndNewsSection'

const Home = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <ShowcaseSection/>
      <CompanyLogotypes/>
      <Features/>
      <AboutCompany/>
      <OurServices/>
      <WhyChooseUsSection/>
      <ProjectAndCaseSection/>
      <TeamAndReviewsSection/>
      <ArticleAndNewsSection/>
      <SignUpSection/>
      <Footer/>
    </div>
  )
}

export default Home