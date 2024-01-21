import React from 'react'
import logo from '../assets/logo.png'

export default function ContactUs() {
  return (
    <div id='link4'>
      <div className='contact-container'>
        <div className='info'>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.8rem" }}>
            <img src={logo} alt="WriteEase" />
            <span>Chat Smarter, Not Harder</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem" }}>
            <span>Unleash the Power of AI in Every</span>
            <span>Conversation of WhatsApp</span>
          </div>
        </div>
        <div className='contact-box'>
          <div className='contact-box-child'>
            <div>
              <div className='strong'>Company</div>
              <ul>
                <a href='/'><li>About Us</li></a>
                <a href='/'><li>Privacy Policy</li></a>
                <a href='/'><li>Terms of Service</li></a>
                <a href='/'><li>Contact Us</li></a>
              </ul>
            </div>
          </div>
          <div className='contact-box-child'>
            <div>
              <div className='strong'>Product</div>
              <ul>
                <a href='#link1'><li>Use Cases</li></a>
                <a href='#link2'><li>How it Works</li></a>
                <a href='#link3'><li>Pricing</li></a>
                <a href='/'><li>Get Started</li></a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='copyright'>&copy;2024 <span>WriteEase. All rights reserved</span></div>
    </div>
  )
}
