import React from 'react'

const Stars = ({ img }) => {
    return (
        <span className="stars">
            <img src={img}/>
            <img src={img}/>
            <img src={img}/>
            <img src={img}/>
            <img src={img}/>
        </span>
    )
}

export default Stars