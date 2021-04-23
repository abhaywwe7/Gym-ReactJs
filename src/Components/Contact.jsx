import React from 'react';

function Contact() {
    return (
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form action="/">
                <input type="text" placeholder='Full Name' required />
                <input type="email" placeholder='Enter your Email Address' required />
                <textarea placeholder='Write Your Message Here...' name='message'></textarea>
                <input type="submit" value='Send' />
            </form>

        </div>
    )
}

export default Contact;
