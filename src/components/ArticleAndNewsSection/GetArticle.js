import React from 'react'

const GetArticle = ({ imageUrl, category, title, content, published, day , month }) => {


    return (
        <div className="article">
            <div className="date">
                <p className="month"><span>{day}</span><br/>{month}</p>
            </div>
            <div className="image-container">
                <img className="image-cropped" src={imageUrl} alt="En bild"/>
            </div>
            <h4>{category}</h4>
            <h3>{title}</h3>
            <p className="text">{content}</p>
        </div>
    ) 
}

export default GetArticle