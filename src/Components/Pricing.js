import React from 'react'

export default function Pricing() {
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
                        <div>Free</div>
                        <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}> $0</div>
                    </div>
                    <div>Give it a go without any <br />commitment.</div>
                    <div className="pricing-card-child3">
                        <a href='/'><div className='pricing-btn'>Start for free</div></a>
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
                        <div>Preium Monthly</div>
                        <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}> $5</div>
                    </div>
                    <div>Give the best ChatGPT in <br />WhatsApp.</div>
                    <div className="pricing-card-child3">
                        <a href='/'><div className='pricing-btn'>Choose Plan</div></a>
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
                        <div>Preium Yearly</div>
                        <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}> $49</div>
                    </div>
                    <div>Give the best ChatGPT in <br />WhatsApp.</div>
                    <div className="pricing-card-child3">
                        <a href='/'><div className='pricing-btn'>Choose Plan</div></a>
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
