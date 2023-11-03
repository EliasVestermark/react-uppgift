import React from 'react'
import './Header.css'

import img_crito from '../../assets/images/LogoWhite.svg'
import { Link, NavLink } from 'react-router-dom'


const MobileMenu = ({ menuOpen }) => {
  return (
    <div className={`mobile-menu ${menuOpen ? "" : "hide"}`}>
        <div className='container'>
            <div className="logotype-white">
                <Link to="/">
                    <img src={img_crito} alt="crito-logotype" />
                </Link>
            </div>
            <NavLink to="/" className='menu-item'>
                Home
            </NavLink>
            <NavLink to="/services" className='menu-item'>
                Services
            </NavLink>
            <NavLink to="/news" className='menu-item'>
                News
            </NavLink>
            <NavLink to="/contact" className='menu-item'>
                Contact
            </NavLink>
        </div>
    </div>
  )
}

export default MobileMenu