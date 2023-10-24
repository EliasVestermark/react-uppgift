import React from 'react'

const Example = ({ img, title}) => {
  return (
    <div className="example">
        <img src={img}/>
        <h3>{title}</h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </div>
  )
}

export default Example