import React from 'react'
import './Footer.css'

import img_crito from '../../assets/images/LogoWhite.svg'
import img_whiteLinesRight from '../../assets/images/background-lines-white-right.svg'
import Item from './Item'
import SocialMediaBar from '../Generics/SocialMediaBar'

const Footer = () => {

    const items = [
        {title: "Company", text1: "About", text2: "Features", text3: "Works", text4: "Career"},
        {title: "Help", text1: "Customer Support", text2: "Delivery Details", text3: "Terms & Conditions", text4: "Privacy Policy"},
        {title: "Resources", text1: "Free eBooks", text2: "Development Tutorial", text3: "How to - Blog", text4: "Youtube Playlist"},
        {title: "Link", text1: "Free eBooks", text2: "Development Tutorial", text3: "How to - Blog", text4: "Youtube Playlist"}
    ]

    return (
        <footer className="footer">
            <img className="white-line" src={img_whiteLinesRight} alt="white line"/>
            <div className="container">
                <div className="top-menu">
                    <div className="logo-and-text">
                        <div className="logotype">
                            <a href="index.html">
                                <img src={img_crito} alt="crito-logotype" />
                            </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>    
                        <button className="btn-menubars"><i className="fa-regular fa-bars"></i></button>
                    </div>
                    <div className="items">

                        {items.map((item, index) => (
                            <Item key={index} title={item.title} text1={item.text1} text2={item.text2} text3={item.text3} text4={item.text4}/>
                        ))}

                    </div>
                </div>
                <div className="border-line"></div>
                <div className="bottom-menu">
                    <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>     
                    <SocialMediaBar/>
                </div>
            </div>
        </footer>
    )
}

export default Footer