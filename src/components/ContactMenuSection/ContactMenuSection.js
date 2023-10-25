import React from 'react'
import './ContactMenu.css'

import img_phone from '../../assets/images/phoneContact.png'
import img_location from '../../assets/images/locationContact.png'
import img_email from '../../assets/images/emailContact.png'
import ContactInfo from './ContactInfo'

const ContactMenuSection = () => {

    const contacts = [
        {img: img_phone, alt: "phone icon", title: "Visit us", text1: "Sveavägen 31", text2: "111 34 STOCKHOLM"},
        {img: img_location, alt: "location tag icon", title: "Call us", text1: "+46 (8) 121 470 50", text2: "+46 (8) 121 470 50"},
        {img: img_email, alt: "envelope icon", title: "Email us", text1: "info@crito.com", text2: "support@crito.com"}
    ]

  return (
    <section>
            <div className="container contact-menu">

                {contacts.map((contact, index) => (
                    <ContactInfo key={index} img={contact.img} alt={contact.alt} title={contact.title} text1={contact.text1} text2={contact.text2}/>
                ))}

            </div>
        </section>
  )
}

export default ContactMenuSection