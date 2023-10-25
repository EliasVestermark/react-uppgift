import React from 'react'
import './SignUp.css'

import img_wavyLines from '../../assets/images/background-wavy-lines.svg'

const SignUpSection = () => {
    return (
        <section className="sign-up">
            <img className="background-wavy-lines" src={img_wavyLines} alt="wavy lines"/>
            <div className="container">
                <h2>Get News Updates By Signup</h2>
                <form>
                    <input type="email" id="newsletter" name="subscribe" placeholder="username@domain.com"/>
                    <button type="submit" name="subscribe" className="btn-yellow">Subscribe <i className="fa-regular fa-arrow-up-right"></i></button>
                </form>
            </div>
        </section>
    )
}

export default SignUpSection