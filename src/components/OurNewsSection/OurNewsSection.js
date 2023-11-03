import React, { useEffect, useState } from 'react'
import './OurNews.css'

import GetArticle from '../../components/ArticleAndNewsSection/GetArticle'
import SectionTitle from '../Generics/SectionTitle'

const OurNewsSection = () => {

    const [articleList, setArticles] = useState([])

    useEffect(() => {
        getNews()
    }, [])

    async function getNews() {
        try {
            const result = await fetch("https://win23-assignment.azurewebsites.net/api/articles")
            const data = await result.json()
            
            setArticles(data)
            formatDates(data)
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
        <section className="our-news container">
            <div className="title">
                <SectionTitle title="" description="Our News & Articles"/>
            </div>
            <div className="articles-container">

                {articleList.map((article) => (
                    <GetArticle key={article.id} id={article.id} imageUrl={article.imageUrl} category={article.category} title={article.title} content={article.content} day={article.day} month={article.month}/>
                ))}
               
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