import React from 'react'
import './OurServices.css'


import ServicesItem from './ServicesItem'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'
import img_backgroundLinesRight from '../../assets/images/background-lines-right.svg'

const OurServices = () => {

    const services = [
        {title: "Business Advice", url: "/services/businesadvice"},
        {title: "Startup Business", url: "/services/startupbusiness"},
        {title: "Financial Advice", url: "/services/financialadvice"},
        {title: "Risk Management", url: "/services/riskmanagement"}
    ]

    return (

        <section className="our-services">
            <img className="background-lines-right" src={img_backgroundLinesRight} alt="white lines"/>
            <div className="container">
                <SectionTitle title="Our Services" description="We Provide The Best Services For Consulting"/>
                <div className="services">
                    
                    {services.map((service, index) => (
                        <ServicesItem key={index} title={service.title} url={service.url}/>
                    ))}

                </div>
                <Button type="transparent" text="Browse Services" url="/services"/>
            </div>
        </section>
    )
}

export default OurServices