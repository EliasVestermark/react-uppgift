import React from 'react'
import './WhyChooseUs.css'
import Reason from './Reason'

import img_thumb from '../../assets/images/thumb.png'
import img_pentagon from '../../assets/images/pentagon.png'
import img_pencil from '../../assets/images/pencil.png'
import img_cog from '../../assets/images/cog.png'
import img_twoWomen from '../../assets/images/two-women.png'
import SectionTitle from '../Generics/SectionTitle'

const WhyChooseUsSection = () => {

    const reasons = [
        {img: img_thumb, alt: "thumbs up", title: "Process Excellence"},
        {img: img_pentagon, alt: "pentagon", title: "Strategic Planning"},
        {img: img_pencil, alt: "tip of a pencil", title: "Experience Design"},
        {img: img_cog, alt: "head witha cog for a brain", title: "Artificial Intelligence"}
    ]

    return (
        <section className="why-choose-us">
            <div className="container">
                <div className="text">
                    <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency"/>
                    
                    {reasons.map((reason, index) => (
                        <Reason key={index} img={reason.img} title={reason.title}/>
                    ))}

                </div>
                <div className="image">
                    <div className="square"></div>
                    <img src={img_twoWomen} alt="two people discussing in an office"/>
                </div>
            </div>
            
    </section>
  )
}

export default WhyChooseUsSection