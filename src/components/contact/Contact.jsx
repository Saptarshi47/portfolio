import React from 'react'
import './Contact.css';
import email_icon from '../../assets/email_icon.png'
import call_icon from '../../assets/call_icon.png'
import location_icon from '../../assets/location_icon.png'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "72021dc0-1369-4c5a-b0eb-d1591801b0a9");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert("you email send successfully!!!!")
        }
    }
  return (
    <div className='contact' id='contact'>
        <div className='contact-title'>
            <h1 className='contact-heading'>Get In Touch</h1>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1 className='conatct-left-heading'>Let's Talk</h1>
                <p className='conatct-left-para'>I am currently available to take a new project, so feel free to send me a message about any project that you want me to work on. You can contact any time.</p>
                <div className='contact-details'>
                    <div className="contact-detail">
                        <img src={email_icon} alt="image" className='contact-icon'/>
                        <p>rajansaptarshi@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="image" className='contact-icon'/>
                        <p>+91 6291 454 094</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="image" className='contact-icon'/>
                        <p>Dumdum, North 24 parganas, kolkata-700079</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="name" className='contact-label'>Your Name</label>
                <input type="text" className='input-field' name="name" id="name" placeholder='Enter your name'/>
                <label htmlFor="email" className='contact-label'>Your Email</label>
                <input type="email" className='input-field' name="email" id="email" placeholder='Enter your email'/>
                <label htmlFor="message" className='contact-label'>Write Your Message</label>
                <textarea className='text-area' name="message" id="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit" >Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact