import React from 'react'

const Reason = ({ img, alt, title}) => {
  return (
    <div class="reason">
        <div class="circle"></div>
        <img src={img} alt={alt}/>
        <h3>{title}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur.</p>
    </div>
  )
}

export default Reason