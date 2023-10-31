import React from 'react'

import Date from './Date'

const GetArticle = ({ imageUrl, category, title, content, published}) => {

    

    return (
        <div className="article">
            <Date/>
            <img src={imageUrl} alt="En bild"/>
            <h4>{category}</h4>
            <h3>{title}</h3>
            <p className="text">{content}</p>
            <p>{published}</p>
        </div>
    ) 
}

export default GetArticle