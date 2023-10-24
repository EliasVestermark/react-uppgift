import React from 'react'
import './Showcase.css'

import img_backgroundLines from '../../assets/images/background-lines.svg'
import img_showcase from '../../assets/images/showcase.png'
import Button from '../Generics/Button'


const ShowcaseSection = () => {
    return (
        <section className="showcase">
            <img className="background-lines" src={img_backgroundLines} alt="white-lines"/>
            <div className="container">
                <div className="content">
                    <h1>We provide The Best business solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes</p>
                    <div className="buttons">
                        <Button type="yellow" text="Get Consulting" url="/services/get-consulting"/>
                        <Button type="transparent" text="Learn More" url="/services/consulting"/>
                    </div>
                </div>
                <img src={img_showcase} alt="man holding a tablet"/>
            </div>
        </section>
    )
}

export default ShowcaseSection