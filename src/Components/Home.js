import React from 'react';
import whatsappimage from '../assets/whatsapp.png';
import whatsapp_logo from '../assets/whatsapp-logo.png';
import ppl1 from '../assets/ppl1.png';
import ppl2 from '../assets/ppl2.png';
import ppl3 from '../assets/ppl3.png';
import ppl4 from '../assets/ppl4.png';

export default function home() {
    return (
        <div className='homebox'>
            <div className='homebox-left'>
                <div>
                    <div className='home-heading'>The Power of ChatGPT</div>
                    <div className='home-heading'>on <span className="span-green"> WhatsApp! </span></div>
                </div>
                <div>
                    <p className='home-description'>Whether you&acute;r are a <span className="span-green">writer</span>, <span className="span-green">marketer</span>, or <span className="span-green">enterpreneur</span>,</p>
                    <p className='home-description'>WriteEase can help you out on your daily tasks.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "fit-content", gap: "1rem" }}>
                    <a href='/'><div className="homebutton navbar-item navbar-cta">
                        <img src={whatsapp_logo} alt="" />
                        <span style={{ display: "flex", alignItems: "center" }}> Start on Whatsapp</span>
                    </div></a>
                    <span className='whatsapp-description' style={{ textAlign: "center" }}>Get your free account today</span>
                </div>
                <div className="home-ppls">
                    <div style={{ display: "flex", width: "fit-content", alignItems: "center", flexDirection: "column" }}>
                        <img src={ppl1} alt="" />
                        <span style={{ background: "#dfdfdf", padding: "0.3rem 0.5rem", borderRadius: "1rem", marginTop: "0.2rem" }}>Writer</span>
                    </div>
                    <div style={{ display: "flex", width: "fit-content", alignItems: "center", flexDirection: "column" }}>
                        <img src={ppl2} alt="" />
                        <span style={{ background: "#dfdfdf", padding: "0.3rem 0.5rem", borderRadius: "1rem", marginTop: "0.2rem" }}>Blogger</span>
                    </div>
                    <div style={{ display: "flex", width: "fit-content", alignItems: "center", flexDirection: "column" }}>
                        <img src={ppl3} alt="" />
                        <span style={{ background: "#dfdfdf", padding: "0.3rem 0.5rem", borderRadius: "1rem", marginTop: "0.2rem" }}>Marketer</span>
                    </div>
                    <div style={{ display: "flex", width: "fit-content", alignItems: "center", flexDirection: "column" }}>
                        <img src={ppl4} alt="" />
                        <span style={{ background: "#dfdfdf", padding: "0.3rem 0.5rem", borderRadius: "1rem", marginTop: "0.2rem" }}>Freelancer</span>
                    </div>
                </div>
            </div>
            <div className='homebox-right'>
                <img src={whatsappimage} alt="whatsapp" />
            </div>
        </div>
    )
}
