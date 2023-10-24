import React from 'react'

const Project = ({ img, alt, title}) => {
  return (
    <a className="project" href="#">
        <img src={img} alt={alt}/>
        <h3>{title}</h3>
        <div className="read-more">
            Read More <i className="fa-regular fa-arrow-up-right"></i>
        </div>
    </a>
  )
}

export default Project