import React from 'react'
import './Generic.css';

const BlackButton = ({ text, url }) => {
  return (
    <a className="btn-black" href={url}>{text} <i class="fa-regular fa-arrow-up-right"></i></a>
    )
}

export default BlackButton