import React from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo"><img src={logo} alt="no" /></div>
                <ul className="navbar-menu">
                    <li className="navbar-item">Use Cases</li>
                    <li className="navbar-item">How it Works</li>
                    <li className="navbar-item">Pricing</li>
                    <li className="navbar-item">Contact</li>
                </ul>
                <div className="navbar-item navbar-cta">Get Started - it's Free</div>
            </nav>
        </div>
    )
}
