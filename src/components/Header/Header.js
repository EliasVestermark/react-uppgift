import React from 'react'
import './Header.css'

import Button from '../Generics/Button'
import img_logo from '../../assets/images/Logo.svg'

const Header = () => {
  return (
    <header>
      <section className="container">
        <button className="btn-menubars"><i className="fa-regular fa-bars"></i></button>
        <div className="logotype">
          <a href="index.html">
            <img src={img_logo} alt="crito-logotype"/>
          </a>
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
          <div className="socialmedia-bar">
            <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
            <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank"><i className="last fa-brands fa-linkedin"></i></a>
          </div>
        <div className="menu">
          <nav>
            <a className="active" href="index.html">Home</a>
            <a href="service.html">Service</a>
            <a href="news.html">News</a>
            <a href="contact.html">Contact</a>
          </nav>
          <Button type="yellow" text="Login" url="/login"/>
        </div>
      </section>
    </header>
  )
}

export default Header