import React from 'react'
import './Generic.css';

const TransparentButton = ({ text, url }) => {
  return (
    <a className="btn-transparent" href={url}>{text} <i className="fa-regular fa-arrow-up-right"></i></a>  )
}

export default TransparentButton