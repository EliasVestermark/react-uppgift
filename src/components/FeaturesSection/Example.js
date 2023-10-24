import React from 'react'

const Example = ({ logotype, title}) => {
  return (
    <div className="example">
        <i className={logotype}></i>
        <h3>{title}</h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </div>
  )
}

export default Example