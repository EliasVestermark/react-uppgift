import React from 'react'
import './CompanyLogotypes.css'
import Logotype from './Logotype'

import img_logo1 from '../../assets/images/Logo1.png'
import img_logo2 from '../../assets/images/Logo2.png'
import img_logo3 from '../../assets/images/Logo3.png'
import img_logo4 from '../../assets/images/Logo4.png'
import img_logo5 from '../../assets/images/Logo5.png'

const CompanyLogotypes = () => {

    const images = [
        {img: img_logo1, alt: "Paperz logotype"},
        {img: img_logo2, alt: "Dorfus logotype"},
        {img: img_logo3, alt: "Martino logotype"},
        {img: img_logo4, alt: "Square logotype"},
        {img: img_logo5, alt: "Gobona logotype"}
    ]

  return (
    <section className="company-logotypes">
      <div className="logotypes container">

        {images.map((image, index) => (
          <Logotype key={index} img={image.img} alt={image.alt}/>
        ))}

      </div>
    </section>
  )
}

export default CompanyLogotypes