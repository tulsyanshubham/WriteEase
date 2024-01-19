import React from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo"><a href='/'><img src={logo} alt="no" /></a></div>
                <ul className="navbar-menu">
                    <li className="navbar-item"><a href='/'>Use Cases</a></li>
                    <li className="navbar-item"><a href='/'>How it Works</a></li>
                    <li className="navbar-item"><a href='/'>Pricing</a></li>
                    <li className="navbar-item"><a href='/'>Contact</a></li>
                </ul>
                <div className="navbar-item navbar-cta" >Get Started - it's Free</div>
            </nav>
        </div>
    )
}
