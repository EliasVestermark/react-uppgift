import React from 'react'

const Article = ({ date, month, img, alt, category, title, text }) => {
    return (
        <div className="article">
            <div className="date">
                <p className="month"><span>{date}</span><br/>{month}</p>
            </div>
            <img src={img} alt={alt}/>
            <h4>{category}</h4>
            <h3>{title}</h3>
            <p className="text">{text}</p>
        </div>
    )
}

export default Article