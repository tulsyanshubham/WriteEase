import React from 'react'

export default function HowItWorks() {
    return (
        <div className='howitworks-container' id='link2'>
            <div>
                <h1 style={{ textAlign: "center", fontSize: "2.2rem" }}>How it works</h1>
                <span style={{ fontWeight: "lighter" }}>Don&acute;t Worry We&acute;ll keep it very simple. Get started</span>
            </div>
            <div className='howitworks-box'>
                <div className="works-left">
                    <div className='works-grid'>
                        {/* ONE */}
                        <div style={{ display: "flex", alignItems: "center",position:"relative" }}>
                            <div className='number'><span>1.</span></div>
                            <div className='number-float'></div>
                        </div>
                        <div className='step-content'>
                            <div>Send a Message on WhatsApp</div>
                            <div className='step-content-description'>This could a request, command, or a request for information.</div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}><div className="vertical_line"></div></div>
                        <div></div>
                        {/* TWO */}
                        <div style={{ display: "flex", alignItems: "center",position:"relative"  }}>
                            <div className='number'><span>2.</span></div>
                            <div className='number-float'></div>
                        </div>
                        <div className='step-content'>
                            <div>Message Processing using AI</div>
                            <div className='step-content-description'>ChatGPT understand the context and intent behind the user's text.</div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}><div className="vertical_line"></div></div>
                        <div></div>
                        {/* THREE */}
                        <div style={{ display: "flex", alignItems: "center",position:"relative"  }}>
                            <div className='number'><span>3.</span></div>
                            <div className='number-float'></div>
                        </div>
                        <div className='step-content'>
                            <div>ChatGPT Generates a Response</div>
                            <div className='step-content-description'>The response can be tailored based on the user's previous interactions.</div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}><div className="vertical_line"></div></div>
                        <div></div>
                        {/* FOUR */}
                        <div style={{ display: "flex", alignItems: "center",position:"relative"  }}>
                            <div className='number'><span>4.</span></div>
                            <div className='number-float'></div>
                        </div>
                        <div className='step-content'>
                            <div>Delivery of Response via WhatsApp</div>
                            <div className='step-content-description'>The user can continue the conversation or make new queries as desired.</div>
                        </div>
                    </div>
                </div>

                <div className="works-right">
                    <div className='benefits'>Benefits</div>
                    <div>
                        <div>Accessibility and</div>
                        <div>Convenience</div>
                    </div>
                    <div>By leveraging a widely-used messaging platform like WhatsApp, users can easily access the capabilities of ChatGPT without the need to download a new application.</div>
                    <a href='/'><div> Get Started</div></a>
                </div>
            </div>
        </div>
    )
}
