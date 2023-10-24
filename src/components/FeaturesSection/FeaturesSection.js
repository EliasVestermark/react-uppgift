import React from 'react'
import './Features.css'

import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'
import Example from './FeaturesSection'

const Features = () => {
  return (
        <section className="features">
            <div className="container">
                <div className="title-and-btn">
                    <SectionTitle title="Features" description="Our Accounting is trusted by thousand of companies"/>
                    <Button type="yellow" text="Learn More" url ="/projects"/>
                </div>
                <div className="feature-examples">
                    <div className="example">
                        <i className="fa-regular fa-handshake"></i>
                        <h3>Business Advice</h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="example">
                        <i className="fa-regular fa-lightbulb-on"></i>
                        <h3>Startup Business</h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="example">
                        <i className="fa-regular fa-chart-mixed-up-circle-dollar"></i>
                        <h3>Financial Advice</h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="example">
                        <i className="fa-regular fa-box-circle-check"></i>
                        <h3>Risk Management</h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features