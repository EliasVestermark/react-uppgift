import React, { useEffect, useState } from 'react'
import './OurNews.css'

import img_article1 from '../../assets/images/article1.png'
import img_article2 from '../../assets/images/article2.png'
import img_article3 from '../../assets/images/article3.png'
import Article from '../../components/ArticleAndNewsSection/Article'
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
            setArticles(await result.json())
            
        }
        catch (error) {
            console.warn(error)
        }
    }

    // const articles = [
    //     {date: "25", month: "Mar", img: img_article1, alt: "woman in a classroom", category: "Business", title: "How To Use Digitalization In The Classroom", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
    //     {date: "17", month: "Mar", img: img_article2, alt: "chat bot", category: "Business", title: "How To Implement Chat GPT In Your Projects", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
    //     {date: "13", month: "Mar", img: img_article3, alt: "a book about css", category: "Business", title: "The Guide To Support Modern CSS Design", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."}
    // ]


    return (
        <section className="our-news container">
            <div className="title">
                <SectionTitle title="" description="Our News & Articles"/>
            </div>
            <div className="articles-container">

                {articleList.map((article) => (
                    <GetArticle key={article.id} imageUrl={article.imageUrl} category={article.category} title={article.title} content={article.content} />
                ))}
                
                {/* {articles.map((article, index) => (
                    <Article key={index} date={article.date} month={article.month} img={article.img} alt={article.alt} category={article.category} title={article.title} text={article.text} />
                ))} */}

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