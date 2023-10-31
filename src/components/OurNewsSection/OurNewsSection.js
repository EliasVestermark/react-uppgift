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
            setArticles(await result.json())
        }
        catch (error) {
            console.warn(error)
        }
    }

    let dateList = []

    for (let date of articleList) {
        dateList.push(date.published)
    }
    console.log(dateList)

    let date1 = dateList[0]

    console.log(date1)
    
    let dateString = date1.toString()
    console.log(dateString.slice(5, 7))

    

    // console.logdate.slice(5, 7)

    // const sliceDates = () => {
    //     let dateSliced = date1.slice(1, 12)
    //     console.log(dateSliced)
    // }

    // sliceDates()



    
    // console.log(date1)
    // // console.log(date1.slice(2, 6)); 
    // let dateSliced = date1.slice(5, 7)
    // console.log(dateSliced)


    

    

    return (
        <section className="our-news container">
            <div className="title">
                <SectionTitle title="" description="Our News & Articles"/>
            </div>
            <div className="articles-container">

                {articleList.map((article) => (
                    <GetArticle key={article.id} imageUrl={article.imageUrl} category={article.category} title={article.title} content={article.content} published={article.published}/>
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