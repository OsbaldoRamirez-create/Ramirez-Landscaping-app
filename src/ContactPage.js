import React from 'react'
import './Styles/ContactStyles.css';
import Quote from './Components/Quote'
import RamirezLogo from './Images/RamirezLogo.png';

export default function ContactPage() {
  return (
    <div className="contact-container">
        <img src={RamirezLogo} className="ramirezLogo"alt="Logo"/>
        <div className='contact-intro'>
            <h2> Let us serve you!</h2>
            <p>  
               Are you located in the Bay Area and are looking for a free estimate for a landscaping project or maintenance services? You are at the right place 
               here at Ramirez Landscaping we give you a reasonable quote and deliver fantastic work. Our family has perfected many yards and have been in business
               for over 20 years! We know that every project is different so we listen to your ideas and give you expert feedback to bring
               your vision to life. 
            </p> 
        </div>
    <Quote/>
    </div>
  )
}
