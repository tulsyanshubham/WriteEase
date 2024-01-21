import React from 'react'
import rarrow from '../assets/rarrow.png'

export default function CaseBox(props) {
  return (
    <div className='usercase-cards'>
      <div style={{fontWeight:"700" , fontSize: "1.2rem"}}>{props.title}</div>
      <div>{props.description}</div>
      <div><a href="/WriteEase">Try this feature <img src={rarrow} alt="" /></a></div>
    </div>
  )
}
