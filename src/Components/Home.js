import React, { useEffect, useState } from 'react';
import whatsappimage1 from '../assets/whatsapp.png';
import whatsappimage2 from '../assets/whatsapp2.png';
import whatsapp_logo from '../assets/whatsapp-logo.png';
import ppl1 from '../assets/ppl1.png';
import ppl2 from '../assets/ppl2.png';
import ppl3 from '../assets/ppl3.png';
import ppl4 from '../assets/ppl4.png';

export default function Home() {
    const nonResponsiveTags = `<div class='home-btn-box'>
    <a href='/'><div class="homebutton navbar-item navbar-cta">
        <img src=${whatsapp_logo} alt="" />
        <span style="display: flex; align-items: center"> Start on Whatsapp</span>
    </div></a>
    <span class='whatsapp-description' style="text-align: center">Get your free account today</span>
</div>`;
    const responsiveTags = `<div class='pple-boxes'>
    <img src=${ppl3} alt="" />
    <span>Marketer</span>
</div>
<div class='home-btn-box'>
    <a href='/'><div class="homebutton navbar-item navbar-cta">
        <img src=${whatsapp_logo} alt="" />
        <span style="display: flex; align-items: center"> Start on Whatsapp</span>
    </div></a>
    <span class='whatsapp-description' style="text-align: center">Get your free account today</span>
</div>
<div class='pple-boxes'>
    <img src=${ppl1} alt="" />
    <span>Writer</span>
</div>`;

    const [image, setImage] = useState(whatsappimage1)

    useEffect(() => {
        if (window.innerWidth < 767) {
            setImage(whatsappimage2);
            document.querySelector('.home-js-insert').innerHTML = responsiveTags;
        } else {
            setImage(whatsappimage1);
            document.querySelector('.home-js-insert').innerHTML = nonResponsiveTags;
        }
    }, [])

    return (
        <div className='home-container'>
            <div className='homebox-left'>
                <div>
                    <div className='home-heading'>The Power of ChatGPT</div>
                    <div className='home-heading'>on <span className="span-green"> WhatsApp! </span></div>
                </div>
                <div>
                    <p className='home-description'>Whether you&acute;r are a <span className="span-green">writer</span>, <span className="span-green">marketer</span>, or <span className="span-green">enterpreneur</span>,</p>
                    <p className='home-description'>WriteEase can help you out on your daily tasks.</p>
                </div>
                <div className="home-js-insert">
                    {/* <div className='pple-boxes'>
                        <img src={ppl3} alt="" />
                        <span>Marketer</span>
                    </div>
                    <div className='home-btn-box'>
                        <a href='/'><div className="homebutton navbar-item navbar-cta">
                            <img src={whatsapp_logo} alt="" />
                            <span style={{ display: "flex", alignItems: "center" }}> Start on Whatsapp</span>
                        </div></a>
                        <span className='whatsapp-description' style={{ textAlign: "center" }}>Get your free account today</span>
                    </div>
                    <div className='pple-boxes'>
                        <img src={ppl1} alt="" />
                        <span>Writer</span>
                    </div> */}
                </div>
                <div className="home-ppls hide">
                    <div className='pple-boxes'>
                        <img src={ppl1} alt="" />
                        <span>Writer</span>
                    </div>
                    <div className='pple-boxes'>
                        <img src={ppl2} alt="" />
                        <span>Blogger</span>
                    </div>
                    <div className='pple-boxes'>
                        <img src={ppl3} alt="" />
                        <span>Marketer</span>
                    </div>
                    <div className='pple-boxes'>
                        <img src={ppl4} alt="" />
                        <span>Freelancer</span>
                    </div>
                </div>
            </div>
            <div className='homebox-right'>
                <img src={image} alt="whatsapp" />
            </div>
        </div>
    )
}
