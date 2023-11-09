import React from 'react'
import './OurNews.css'

import GetArticle from '../../components/ArticleAndNewsSection/GetArticle'
import SectionTitle from '../Generics/SectionTitle'
import { useArticles } from '../../contexts/ArticleContext'

const OurNewsSection = () => {

    const { articleList, months } = useArticles()

    return (
        <section className="our-news container">
            <div className="title">
                <SectionTitle title="" description="Our News & Articles"/>
            </div>
            <div className="articles-container">
                
                {articleList ? 
                (
                    articleList.map((article) => (
                        <GetArticle key={article.id} month={months[article.published.slice(5,7)]} day={article.published.slice(8,10)} id={article.id} imageUrl={article.imageUrl} category={article.category} title={article.title} content={article.content}/>
                    ))
                )
                :
                (
                    <></>
                )
                }   
               
            </div>
            <div className="navigation">
                <p className='square'>&lt;</p>
                <p className='square active'>1</p>
                <p className='square'>2</p>
                <p className='square'>3</p>
                <p className='square'>...</p>
                <p className='square'>9</p>
                <p className='square'>&gt;</p>
            </div>
        </section>
    )
}

export default OurNewsSection