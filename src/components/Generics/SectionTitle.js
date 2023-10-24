import React from 'react'
import './Generic.css'

const SectionTitle = ( { title, description }) => {
  return (
    <>
        <div className="section-title">
            <p>{title}</p>
            <h2>{description}</h2>
        </div>
    </>
  )
}

export default SectionTitle