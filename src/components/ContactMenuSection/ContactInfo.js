import React from 'react'

const ContactInfo = ({ img, alt, title, text1, text2 }) => {
    return (
        <div className="contact-info">
            <div className="contact-symbol">
                <img src={img} alt={alt}/>
            </div>
            <div className="info">
                <h4>{title}</h4>
                {text1}
                <br/>
                {text2}
            </div>
        </div>
    )
}

export default ContactInfo