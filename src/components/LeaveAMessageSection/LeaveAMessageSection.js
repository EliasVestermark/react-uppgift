import React, { useState } from 'react'
import './LeaveAMessage.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const LeaveAMessageSection = () => {
    const nameRegex = new RegExp(/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i)
    const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    const [ resultOk, setResultOk ] = useState("hidden")

    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .required('Namn måste anges')
                .min(2, 'Namnet måste ha minst två tecken')
                .matches(nameRegex, 'Ange ett giltigt namn'),
            
            email: Yup.string()
                .required('E-post måste anges')
                .matches(emailRegex, 'Ange en giltig e-post'),
            message: Yup.string()
                .required('Meddelande måste anges')
                .min(2, 'Meddelandet måste ha minst två tecken')
        }),

        onSubmit: async (values, {resetForm}) => {
            setResultOk('hidden')

            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            setResultOk(setClass(result.status))
            
            resetForm()
        }
    })

    const setClass = (result) => {
        if (result === 200) {
            return 'pop-up'
        }
        else {
            return 'hidden'
        }
    }

    return (
        <section>
            <div className="leave-a-message container">
                <h3>Leave us a message <br/> for any information.</h3>
                
                <form onSubmit={form.handleSubmit} className="input-container" noValidate>
                    <div className="error-and-input">
                        <p>{form.errors.name && form.touched.name ? form.errors.name : ''}</p>
                        <input value={form.values.name} onChange={form.handleChange} onKeyUp={form.handleBlur} type="text" name="name" className="input-text" placeholder="Name*" maxLength="100"/>
                    </div>
                    <div className="error-and-input">
                        <p>{form.errors.email && form.touched.email ? form.errors.email : ''}</p>
                        <input value={form.values.email} onChange={form.handleChange} onKeyUp={form.handleBlur} type="email" name="email" className="input-text" placeholder="Email*"/>
                    </div>
                    <div className="error-and-input">
                        <p>{form.errors.message && form.touched.message ? form.errors.message : ''}</p>
                        <textarea value={form.values.message} onChange={form.handleChange} onKeyUp={form.handleBlur} type="text" name="message" className="input-text" rows="5" placeholder="Your Message*"></textarea>
                    </div>
                    <button id="send-message" className="btn-yellow" type="submit">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
                </form> 

                <div className={resultOk}>
                    Your message has been sent    
                </div>  
            </div>
        </section>
    )
}

export default LeaveAMessageSection