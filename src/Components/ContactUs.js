import React from 'react'
import logo from '../assets/logo.png'

export default function ContactUs() {
  return (
    <div>
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
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className='contact-box-child'>
            <div>
              <div className='strong'>Product</div>
              <ul>
                <li>Use Cases</li>
                <li>How it Works</li>
                <li>Pricing</li>
                <li>Get Started</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='copyright'>&copy;2024 <span>WriteEase. All rights reserved</span></div>
    </div>
  )
}
