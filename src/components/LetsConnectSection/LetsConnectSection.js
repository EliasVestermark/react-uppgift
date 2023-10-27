import React from 'react'
import './LetsConnect.css'

import img_backgroundLines from '../../assets/images/background-lines.svg'
import { NavLink } from 'react-router-dom'

const LetsConnectSection = () => {
    return (
        <section className="lets-connect">
            <img className="background-lines" src={img_backgroundLines} alt="white-lines"/>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <h2>Let's Connect</h2>
            </nav>
            
        </section>
    )
}

export default LetsConnectSection