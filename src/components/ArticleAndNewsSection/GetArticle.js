import React from 'react'
import { Link } from 'react-router-dom'

const GetArticle = ({ id, imageUrl, category, title, content, day , month }) => {


    return (
        <Link to={`/news/${id}`} className="article">
            <div className="date">
                <p className="month"><span>{day}</span><br/>{month}</p>
            </div>
            <div className="image-container">
                <img className="image-cropped" src={imageUrl} alt="En bild"/>
            </div>
            <h4>{category}</h4>
            <h3>{title}</h3>
            <p className="text">{content}</p>
        </Link>
    ) 
}

export default GetArticle