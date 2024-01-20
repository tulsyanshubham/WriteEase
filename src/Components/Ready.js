import React from 'react'

export default function Ready() {
  return (
    <div className='ready-conatiner'>
      <div className='ready-box'>
        <div className='ready-title'>Ready to level-up?</div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} className='ready-description'>
            <div>Write 10x faster, engage your audiance,</div>
            <div>never struggle with content creation again.</div>
        </div>
        <a href='/'><div>Get Started for Free</div></a>
      </div>
    </div>
  )
}
