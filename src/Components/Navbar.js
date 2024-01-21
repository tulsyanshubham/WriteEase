import React, { useEffect } from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        const hamIcon = document.querySelector('.ham-icon');
        const cover = document.querySelector('.cover');
        const listItem = document.querySelectorAll('.navbar-item');
        if (window.innerWidth < 767) {
            hamIcon.addEventListener('click', () => {
                navbar.style.transform = 'translateX(72vw)';
                // cover.style.display = "block";
                hamIcon.style.zIndex = "-5";
                cover.style.zIndex = "4";
                cover.style.backgroundColor = "rgba(0, 0, 0, 0.315)";
            })
            cover.addEventListener('click', () => {
                hamIcon.style.zIndex = "1";
                navbar.style.transform = 'translateX(-72vw)';
                // cover.style.display = "none";
                cover.style.zIndex = "-1";
                cover.style.background = "none";
            })
            listItem.forEach(element => {
                element.addEventListener('click', () => {
                    hamIcon.style.zIndex = "1";
                    navbar.style.transform = 'translateX(-72vw)';
                    // cover.style.display = "none";
                    cover.style.zIndex = "-1";
                    cover.style.background = "none";
                })
            });
        }
    }, [])
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo"><a href='/'><img src={logo} alt="no" /></a></div>
                <ul className="navbar-menu">
                    <a href='#link1'><li className="navbar-item">Use Cases</li></a>
                    <a href='#link2'><li className="navbar-item">How it Works</li></a>
                    <a href='#link3'><li className="navbar-item">Pricing</li></a>
                    <a href='#link4'><li className="navbar-item">Contact</li></a>
                </ul>
                <div style={{ position: "relative" }}><a href='/'><div className="navbar-item navbar-cta ham-btn" >Get Started - it's Free</div></a></div>
            </nav>

            <div className='non-hide header'>
                <div className="navbar-logo"><a href='/'><img src={logo} alt="no" /></a></div>
                <div className="ham-icon">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="cover"></div>
        </div>
    )
}
