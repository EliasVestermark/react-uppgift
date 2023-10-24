import React from 'react'
import './AboutCompany.css'

import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'
import img_whiteLinesLeft from '../../assets/images/background-white-lines-left.svg'
import img_founder from '../../assets/images/founder.png'

const AboutCompany = () => {
  return (
        <section className="about-company container">
            <div className="image-and-square">
                <img src={img_founder} alt="Samantha Brown, founder"/>
                <img className="white-lines" src={img_whiteLinesLeft} alt=""/>
                <div className="blue-box">
                    <h3>Samantha Brown, <span>Founder</span></h3>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>
            </div>
            <div className="title-and-text">
                <SectionTitle title="About Company" description="We Are Business Consulting & Credit Repair Experts"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                <div className="buttons-and-text">
                    <Button type="black" text="Learn More" url="/aboutcompany"/>
                    <div className="video">
                        <button className="btn-video"><i className="fa-sharp fa-solid fa-play"></i></button>
                        <p>Intro Video</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCompany