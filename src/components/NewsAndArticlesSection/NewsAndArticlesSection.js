import React from 'react'
import './NewsAndArticles.css'

import img_backgroundLines from '../../assets/images/background-lines.svg'
import { NavLink } from 'react-router-dom'

const NewsAndArticlesSection = () => {
    return (
        <section className="lets-connect">
            <img className="background-lines" src={img_backgroundLines} alt="white-lines"/>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/news">News</NavLink>
                <h2>News & Articles</h2>
            </nav>
            
        </section>
    )
}

export default NewsAndArticlesSection