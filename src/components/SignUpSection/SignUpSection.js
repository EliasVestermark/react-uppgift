import React from 'react'
import './SignUp.css'

import img_wavyLines from '../../assets/images/background-wavy-lines.svg'

const SignUpSection = () => {
    return (
        <section class="sign-up">
            <img class="background-wavy-lines" src={img_wavyLines} alt="wavy lines"/>
            <div class="container">
                <h2>Get News Updates By Signup</h2>
                <form>
                    <input type="email" id="newsletter" name="subscribe" placeholder="username@domain.com"/>
                    <button type="submit" name="subscribe" class="btn-yellow">Subscribe <i class="fa-regular fa-arrow-up-right"></i></button>
                </form>
            </div>
        </section>
    )
}

export default SignUpSection