import React from 'react'

const GetArticle = ({ imageUrl, category, title, content}) => {
    return (
        <div className="article">
            <div className="date">
                <p className="month"><span>25</span><br/>Mar</p>
            </div>
            <img src={imageUrl} alt="En bild"/>
            <h4>{category}</h4>
            <h3>{title}</h3>
            <p className="text">{content}</p>
        </div>
    ) 
}

export default GetArticle