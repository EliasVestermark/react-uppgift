import React, {useEffect, useState} from 'react'
import './News.css'

import SectionTitle from '../Generics/SectionTitle'
import img_article from '../../assets/images/KimberlyHansen.png'
import RecentPost from './RecentPost'
import Categories from './Categories'
import Tags from './Tags'
import { useParams } from 'react-router-dom'

const NewsSection = () => {

    const { id } = useParams()
    const [article, setArticle] = useState(null)

    useEffect(() => {
        getNewsById()
        window.scrollTo(0, 500)
    }, [id])

    async function getNewsById() {
        try {
            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
            const data = await result.json()

            if (result.status === 200) {
                formatDates(data)
                setArticle(data)
            }

            
        }
        catch(error) {
            console.warn(error)
        }
    }

    function formatDates(article) {
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

        let month = article.published.toString().slice(5, 7)
        let monthFormated = months[month]

        article.day = article.published.toString().slice(8, 10)
        article.year = article.published.toString().slice(0, 4)
        article.month = monthFormated
    }

    const posts = [
        {title: "How To Blow Through Capital At An Incredible Rate", date: "Jan 14, 2020"},
        {title: "Design Studios That Everyone Should Know About?", date: "Jan 14, 2020"},
        {title: "How did we get 1M+ visitors in 30 days without anything!", date: "Jan 14, 2020"},
        {title: "Figma On Figma: How We Built Our Website Design System", date: "Jan 14, 2020"}
    ]

    const categories = [
        {title: "Technology", text: "- 20 Posts"},
        {title: "Freelancing", text: "- 07 Posts"},
        {title: "Writing", text: "- 16 Posts"},
        {title: "Marketing", text: "- 11 Posts"},
        {title: "Business", text: "- 35 Posts"},
        {title: "Education", text: "- 14 Posts"}
    ]

    const tags = [
        {title: "Digitalization"},
        {title: "School"},
        {title: "IT"},
        {title: "Design"},
        {title: "Work"},
        {title: "Tech"}
    ]

    return article ? (
        <section>
            <div className="container">
                <div>
                    <SectionTitle title="" description={article.title}/>
                    <p className="article-info">{article.month} {article.day}, {article.year}<span className="dot"/>{article.category}<span className="dot"/>{article.author}</p>
                </div>
                <div className="body">
                    <div className="left">
                        <img src={article.imageUrl}/>
                        <p>
                        {article.content}<br/><br/> Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.<br/><br/>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.<br/><br/>Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                        </p>
                        <p className="quote">
                            <span><i className="fa-sharp fa-solid fa-quote-right fa-flip-horizontal"></i></span>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        </p>
                        <div className="tags">

                            {tags.map((tag, index) => (
                                <Tags key={index} title={tag.title}/>
                            ))}

                        </div>
                    </div>
                    <div className="right">
                        <div className="searchbar">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input placeholder="Type to search..."/>
                        </div>
                        <div className="recent-posts">
                            <h3>Recent Posts</h3>
                            <div className="short-border"></div>

                            {posts.map((post, index) => (
                                <RecentPost key={index} title={post.title} date={post.date}/>
                            ))}

                        </div>
                        <div className="categories">
                            <h3>Categories</h3>
                            <div className="short-border"></div>
                            
                            {categories.map((category, index) => (
                                <Categories key={index} title={category.title} text={category.text}/>
                            ))}

                        </div>
                    </div>
                            
                </div>

            </div>

        </section>
    )
    :
    (  
    <div>
        Artikeln hittades inte
    </div>
    )
}

export default NewsSection