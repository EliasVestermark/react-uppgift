import React from 'react'
import './LeaveAMessage.css'

const LeaveAMessageSection = () => {
    return (
        <section>
            <div className="leave-a-message container">
                <h3>Leave us a message <br/> for any information.</h3>
                
                <form method="post" className="input-container">
                    <input type="text" id="namn" name="skicka-meddelande" className="input-text" placeholder="Name*" maxLength="100"/>
                    <input type="email" id="email" name="skicka-meddelande" className="input-text" placeholder="Email*"/>
                    <textarea type="text" id="meddelande" name="skicka-meddelande" className="input-text" rows="5" placeholder="Your Message*"></textarea>
                    <button id="send-message" className="btn-yellow" type="submit">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
                </form>  

                <div className="pop-up">
                    Your message has been sent    
                </div>  
            </div>
        </section>
    )
}

export default LeaveAMessageSection