import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SignUpSection from '../components/SignUpSection/SignUpSection'
import NewsAndArticlesSection from '../components/NewsAndArticlesSection/NewsAndArticlesSection'

const NewsAndArticles = () => {
  return (
    <>
      <Header/>
      <NewsAndArticlesSection/>
      <SignUpSection/>
      <Footer/>
    </>
  )
}

export default NewsAndArticles