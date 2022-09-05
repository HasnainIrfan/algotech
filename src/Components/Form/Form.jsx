import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Form.css';


const Form = (props) => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4mfkx1l', 'template_2l12yts', form.current, 'Z7RrwIQ051m9fM4rD')
            .then(() => {
                props.setProjectRequest(false)
                props.setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <div className={'projectRequestbox ' + (props.projectRequest ? 'projectboxopen' : 'projectboxclose')}>
                <div className='prbi'>
              
                    <h1>Project Request</h1>

                    <form ref={form} onSubmit={sendEmail}>


                        <div>
                            <div>
                                <span>First Name</span>
                                <input type="text" required name='to_fname' />
                            </div>
                            <div>
                                <span>Last Name</span>
                                <input type="text" required name='to_lname' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Email</span>
                                <input type="Email" placeholder='@abc.com' name='from_email' required />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Phone Number</span>
                                <input type="Number" placeholder='+92' name='contact_number' required />
                            </div>
                            <div>
                                <span>WhatsApp , Discord , Skype</span>
                                <input type="text" required name='to_whatsapp' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Country</span>
                                <input type="text" required name='to_country' />
                            </div>
                            <div>
                                <span>City</span>
                                <input type="text" required name='to_city' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Details</span>
                                <textarea cols="30" rows="10" name="message" placeholder='Project Details' required></textarea>
                            </div>
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>

                <div className="projectboxclosebtn" onClick={() => props.setProjectRequest(false)}>
                    <div className="X"></div>
                </div>
            </div>

        </>
    )
}

export default Form