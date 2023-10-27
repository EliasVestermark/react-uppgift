import React from 'react'
import './Generic.css'

import { Link } from 'react-router-dom'

const Button = ({ text, url, type }) => {

  const getButtonClassName = () => {
    switch (type) {
      case 'yellow':
        return 'btn-yellow'
        break;
      case 'black':
        return 'btn-black'
        break;
      case 'transparent':
        return 'btn-transparent'
        break;
    }
  }

  return (
    <Link className={getButtonClassName()} to={url}>{text} <i className="fa-regular fa-arrow-up-right"></i></Link>  )
}

export default Button