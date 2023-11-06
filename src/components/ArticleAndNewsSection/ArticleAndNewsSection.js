import React from 'react'
import './ArticleAndNews.css'

import Button from '../Generics/Button'
import GetArticle from './GetArticle'
import Dots from '../Generics/Dots'
import SectionTitle from '../Generics/SectionTitle'
import { useArticles } from '../../contexts/ArticleContext'

const ArticleAndNewsSection = ({ type }) => {

    const setBackgroundColour = () => {
        switch (type) {
          case 'beige':
            return 'beige '
        default: 
            return ''
        }
    }

    const { articleShortList } = useArticles()

    return (
        <section className={setBackgroundColour()}>
            <div className="article-and-news container">
                <div className="title-and-btn">
                    <SectionTitle title="Article & News" description="Get Every Single Articles & News"/>
                    <Button type="transparent" text="Browse Articles" url="/news"/>
                </div>
                <div className="articles-container">                    
                
                {articleShortList ? 
                (
                    articleShortList.map((article) => (
                        <GetArticle key={article.id} id={article.id} imageUrl={article.imageUrl} category={article.category} title={article.title} content={article.content} day={article.day} month={article.month}/>
                    ))
                )
                :
                (
                    <></>
                )
                }

                </div>
                <Dots/>
            </div>
            
        </section>
    )
}

export default ArticleAndNewsSection