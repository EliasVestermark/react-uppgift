import React, { useEffect, useState } from 'react'
import './ArticleAndNews.css'

import Button from '../Generics/Button'
import GetArticle from './GetArticle'
import Dots from '../Generics/Dots'
import SectionTitle from '../Generics/SectionTitle'

const ArticleAndNewsSection = ({ type }) => {

    const setBackgroundColour = () => {
        switch (type) {
          case 'beige':
            return 'beige '
            break;
        default: 
            return ''
        }
    }

    const [shortArticleList, setShortArticles] = useState([])

    useEffect(() => {
        getNews()
    }, [])

    async function getNews() {
        try {
            const result = await fetch("https://win23-assignment.azurewebsites.net/api/articles")
            const data = await result.json()
            
            formatDates(data)
            setShortArticles(data.slice(0, 3))
        }
        catch (error) {
            console.warn(error)
        }
    }

    function formatDates(articles) {
        const months = [
            "",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Okt",
            "Nov",
            "Dec"
        ]

        for (let item of articles) {
            let month = item.published.toString().slice(5, 7)
            let monthFormated = months[month]

            item.day = item.published.toString().slice(8, 10)
            item.month = monthFormated
        }
    }

    return (
        <section className={setBackgroundColour()}>
            <div className="article-and-news container">
                <div className="title-and-btn">
                    <SectionTitle title="Article & News" description="Get Every Single Articles & News"/>
                    <Button type="transparent" text="Browse Articles" url="/news"/>
                </div>
                <div className="articles-container">                    
                
                {shortArticleList.map((article) => (
                    <GetArticle key={article.id} imageUrl={article.imageUrl} category={article.category} title={article.title} content={article.content} day={article.day} month={article.month}/>
                ))}

                </div>
                <Dots/>
            </div>
            
        </section>
    )
}

export default ArticleAndNewsSection