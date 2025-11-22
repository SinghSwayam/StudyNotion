import React from 'react'
import ContactUsForm from '../../contact/ContactUsForm'

const ContactFormSection = () => {
    return (
        <div className='mx-auto flex flex-col gap-3 mb-16'>
            <h2 className=' text-3xl text-center font-semibold text-richblack-25'>Get in Touch</h2>
            <p className='text-sm text-center text-richblack-100'>We'd love to here for you, Please fill out this form.</p>
            <ContactUsForm />
        </div>
    )
}

export default ContactFormSection