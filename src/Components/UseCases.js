import React from 'react'
import CaseBox from './CaseBox'

export default function UseCases() {
    const data = [
        { title: "Writing Content", description: "Create Compelling Campaign content swiftly with AI-driven suggestions." },
        { title: "Digital Ad copy", description: "Craft engaging ad copy with Al to boost your digital campaigns." },
        { title: "Doc Analyser", description: "Get to know more about documents with Al insights for any project." },
        { title: "Social media content", description: "Generate vibrant posts and captions for social media platforms using Al." },
        { title: "General Queries", description: "Get quick, Al-powered answers for a variety of topics." },
        { title: "Grammar Check", description: "Improve content writing with Al-based grammar corrections." },
        { title: "eCommerce Copy", description: "Attract your customers with Al-crafted product narratives." },
        { title: "Product Descrption", description: "Al helps to succinctly showcase product highlights." },
    ]
    return (
        <div className='usecase-container' id='link1'>
            <div>
                <h1 style={{textAlign:"center", fontSize:"2.5rem"}}>Use Cases</h1>
                <div style={{ fontWeight: "lighter",textAlign:"center" }}>Write Better Content faster, the future AI writing Tools is here</div>
            </div>
            <div className="usercase-box" style={{ color: "black" }}>
                {
                    data.map((item, index) => {
                        return (
                            <CaseBox title={item.title} description={item.description} />
                        )
                    })
                }
                {/* <CaseBox title={data[0].title} description={data[0].description}/> */}
            </div>
        </div>
    )
}
