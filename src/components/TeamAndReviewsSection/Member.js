import React from 'react'

const Member = ({ img, title, text}) => {
  return (
        <div className="members">
            <img src={img} alt={title}/>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Member