import React from 'react'
import './Features.css'

import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'
import Example from './Example'
import img_hands from '../../assets/images/Hands.png'
import img_bulb from '../../assets/images/Bulb.png'
import img_graph from '../../assets/images/Graph.png'
import img_box from '../../assets/images/Box.png'

const Features = () => {

    const examples = [
        {img: img_hands, title: "Business Advice"},
        {img: img_bulb, title: "Startup Business"},
        {img: img_graph, title: "Financial Advice"},
        {img: img_box, title: "Risk Management"}
    ]

    return (
        <section className="features">
            <div className="container">
                <div className="title-and-btn">
                    <SectionTitle title="Features" description="Our Accounting is trusted by thousand of companies"/>
                    <Button type="yellow" text="Learn More" url ="/projects"/>
                </div>
                <div className="feature-examples">

                    {examples.map((example, index) => (
                        <Example key={index} img={example.img} title={example.title}/>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Features