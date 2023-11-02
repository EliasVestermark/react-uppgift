import React from 'react'

import Header from '../components/Header/Header'
import NewsAndArticlesSection from '../components/NewsAndArticlesSection/NewsAndArticlesSection'
import ArticleAndNewsSection from '../components/ArticleAndNewsSection/ArticleAndNewsSection'
import Footer from '../components/Footer/Footer'
import NewsSection from '../components/NewsSection/NewsSection'

const News = () => {

  window.scrollTo(0, 500)
  
  return (
    <>
      <Header/>
      <NewsAndArticlesSection/>
      <NewsSection/>
      <ArticleAndNewsSection type="beige"/>
      <Footer/>
    </>
  )
}

export default News