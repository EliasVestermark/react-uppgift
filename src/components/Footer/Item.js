import React from 'react'

const Item = ({ title, text1, text2, text3, text4 }) => {
    return (
        <div className="item">
            <h3>{title}</h3>
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
            <p>{text4}</p>
        </div>
    )
}

export default Item