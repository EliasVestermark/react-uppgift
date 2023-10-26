import React from 'react'
import './NewsAndArticles.css'

import img_backgroundLines from '../../assets/images/background-lines.svg'

const NewsAndArticlesSection = () => {
    return (
        <section className="lets-connect">
            <img className="background-lines" src={img_backgroundLines} alt="white-lines"/>
            <nav>
                <a href="/">Home</a>
                <a className="active" href="/news">News</a>
                <h2>News & Articles</h2>
            </nav>
            
        </section>
    )
}

export default NewsAndArticlesSection