import React from 'react'

export default function Message() {
    return (
        <div className='message-container-out'>
            <div className='message-container'>
                <div className='msg'>
                    <div>
                        <div><span>WrieEase</span></div>
                        <div>Recieved <span>4.8/5</span></div>
                        <div>Starts in over</div>
                        <div><span>10,000+</span> Reviews</div>
                    </div>
                </div>
                <div className='message-cards-box-parent'>
                    <div className='message-cards-box'>
                        <div className="message-card">
                            <div className='card-title'>Never been easy</div>
                            <div>Writing great marketing copy has <span>never been this easy.</span> Since I started using Copy.ai, I spend only a few minutes to whip myself a good piece, whether it's for our blog, social media posts or while creating online ads. Now, marketers like me have no excuse.</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div className='msg-color-circle' style={{ backgroundColor: "#de716d" }}></div>
                                <div className='color-name'>Tina</div>
                            </div>
                        </div>
                        <div className="message-card">
                            <div className='card-title'>Amazing</div>
                            <div>I spend only a few minutes to whip myself a good piece</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div className='msg-color-circle' style={{ backgroundColor: "#7362f2" }}></div>
                                <div className='color-name'>Anuraag</div>
                            </div>
                        </div>
                        <div className="message-card hide">
                            <div className='card-title'>Fantastic</div>
                            <div>Writing great marketing copy has <span>never been this easy.</span> Since I started using Copy.ai, I spend only a few minutes to whip myself a good piece</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div className='msg-color-circle' style={{ backgroundColor: "#f2eb5e" }}></div>
                                <div className='color-name'>Rakesh</div>
                            </div>
                        </div>
                        <div className='emptycard hide'></div>
                    </div>
                    <div className='message-cards-box hide'>
                        <div className='emptycard'></div>
                        <div className="message-card">
                            <div className='card-title'>Very Easy</div>
                            <div>Writing great marketing copy has <span>never been this easy.</span> Since I started using Copy.ai, I spend only a few minutes to whip myself a good piece</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div className='msg-color-circle' style={{ backgroundColor: "#7a1a5f" }}></div>
                                <div className='color-name'>Rahul</div>
                            </div>
                        </div>
                        <div className="message-card">
                            <div className='card-title'>Time Saving</div>
                            <div>Amazing product. Helps me to write clearly all of my assignments</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div className='msg-color-circle' style={{ backgroundColor: "#bad79d" }}></div>
                                <div className='color-name'>Saini</div>
                            </div>
                        </div>
                        <div className="message-card">
                            <div className='card-title'>Never been easy</div>
                            <div>Writing great marketing copy has <span>never been this easy.</span> Since I started using Copy.ai, I spend only a few minutes to whip myself a good piece, whether it's for our blog, social media posts or while creating online ads. Now, marketers like me have no excuse.</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div className='msg-color-circle' style={{ backgroundColor: "#d8925c" }}></div>
                                <div className='color-name'>Shila</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
