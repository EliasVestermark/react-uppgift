import React from 'react'
import './Header.css'

import Button from '../Generics/Button'
import img_logo from '../../assets/images/Logo.svg'
import SocialMediaBar from '../Generics/SocialMediaBar'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <section className="container">
        <button className="btn-menubars"><i className="fa-regular fa-bars"></i></button>
        <div className="logotype">
          <Link to="/">
            <img src={img_logo} alt="crito-logotype"/>
          </Link>
        </div>
        <div className="contactinformation-bar">
          <div className="contact-box">
            <i className="fa-regular fa-phone-volume"></i>
              +46 (8) 121 470 50
          </div>
          <div className="contact-box">
            <i className="fa-regular fa-envelope"></i>
              info@crito.com
          </div>
          <div className="contact-box last">
            <i className="fa-sharp fa-regular fa-location-dot"></i>
              Sveavägen 31, 111 34 STOCKHOLM
          </div>
        </div>
          <SocialMediaBar/>
        <div className="menu">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <Button type="yellow" text="Login" url="/login"/>
        </div>
      </section>
    </header>
  )
}

export default Header