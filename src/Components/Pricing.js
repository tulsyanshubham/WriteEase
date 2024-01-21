import React, { useEffect } from 'react';

export default function Pricing() {

    useEffect(()=> {
        const price = document.querySelectorAll('.pricing-js-change');
        if (window.innerWidth < 767) {
            price[0].innerHTML=`<span> $0 </span><a class='non-hide' href='/'><div class='pricing-btn'>Start for free</div></a>`;
            price[1].innerHTML=`<span> $5 </span><a class='non-hide' href='/'><div class='pricing-btn'>Choose Plan</div></a>`;
            price[2].innerHTML=`<span> $49 </span><a class='non-hide' href='/'><div class='pricing-btn'>Choose Plan</div></a>`;
        }else{
            price[0].innerHTML=`<span> $0 </span>`;
            price[1].innerHTML=`<span> $5 </span>`;
            price[2].innerHTML=`<span> $49 </span>`;
        }
    })

    return (
        <div className='pricing-container' id='link3'>
            <div className='title-box'>
                <div className='pricing-title'>Pricing Plan</div>
                <div className='pricing-description'>
                    <div>Don't Worry, We'll Keep You Under Budget.</div>
                    <div>Get started with a free trial.</div>
                </div>
            </div>
            <div className='pricing-cards-box'>
                <div className="pricing-card">
                    <div className="pricing-card-child1">
                        <div className='price-type'>Free</div>
                        <div className='pricing-js-change'>
                            {/* <span> $0 </span> */}
                            </div>
                    </div>
                    <div>Give it a go without any <br />commitment.</div>
                    <div className="pricing-card-child3">
                        <a className='hide' href='/'><div className='pricing-btn'>Start for free</div></a>
                        <div className='pricing-list'>
                            <ul>
                                <li>100 messages per month</li>
                                <li>Image Generation</li>
                                <li>24/7 Availability</li>
                                <li>Web Search Functionality</li>
                                <li>Local Chat History</li>
                                <li>Interact with Files</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pricing-card">
                    <div className="pricing-card-child1">
                        <div className='price-type'>Preium Monthly</div>
                        <div className='pricing-js-change'>
                            {/* <span> $5 </span> */}
                            </div>
                    </div>
                    <div>Give the best ChatGPT in <br />WhatsApp.</div>
                    <div className="pricing-card-child3">
                        <a className='hide' href='/'><div className='pricing-btn'>Choose Plan</div></a>
                        <div className='pricing-list'>
                            <ul>
                                <li>Unlimited Messages</li>
                                <li>Image Generation</li>
                                <li>24/7 Availability</li>
                                <li>Web Search Functionality</li>
                                <li>Local Chat History</li>
                                <li>Interact with Files</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pricing-card">
                    <div className="pricing-card-child1">
                        <div className='price-type'>Preium Yearly</div>
                        <div className='pricing-js-change'>
                            {/* <span> $49 </span> */}
                            </div>
                    </div>
                    <div>Give the best ChatGPT in <br />WhatsApp.</div>
                    <div className="pricing-card-child3">
                        <a className='hide' href='/'><div className='pricing-btn'>Choose Plan</div></a>
                        <div className='pricing-list'>
                            <ul>
                                <li>Unlimited Messages</li>
                                <li>Image Generation</li>
                                <li>24/7 Availability</li>
                                <li>Web Search Functionality</li>
                                <li>Local Chat History</li>
                                <li>Interact with Files</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
