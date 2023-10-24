import React from 'react'

const ServicesItem = ( { title, url }) => {
  return (
        <div className="services-item">
            <div className="short-border"></div>
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
            <a className="btn-round" href={url}><i className="fa-regular fa-arrow-right"></i></a> 
        </div>
    )
}

export default ServicesItem