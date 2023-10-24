import React from 'react'
import './Generic.css'

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
    <a className={getButtonClassName()} href={url}>{text} <i className="fa-regular fa-arrow-up-right"></i></a>  )
}

export default Button