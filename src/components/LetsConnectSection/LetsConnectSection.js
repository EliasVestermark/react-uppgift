import React from 'react'
import './LetsConnect.css'

import img_backgroundLines from '../../assets/images/background-lines.svg'

const LetsConnectSection = () => {
    return (
        <section className="lets-connect">
            <img className="background-lines" src={img_backgroundLines} alt="white-lines"/>
            <nav>
                <a href="index.html">Home</a>
                <a className="active" href="contact.html">Contact</a>
                <h2>Let's Connect</h2>
            </nav>
            
        </section>
    )
}

export default LetsConnectSection