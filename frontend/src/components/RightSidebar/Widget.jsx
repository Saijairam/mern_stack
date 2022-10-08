import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blackLogo from '../../assets/stack-overflow.svg'

const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow blog</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18' />
            <p>We hate Scrum and Agile…when it's done wrong.</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18' />
            <p>Ethereum finally merges, semiconductors stay scarce.</p>
        </div>
      </div>
      <h4>Featured Meta</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
            <img src={comment} alt="comment" width='18' />
            <p>Recent Color Contrast Changes and Accessibility Updates.</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={comment} alt="comment" width='18' />
            <p>Reviewer overboard! Or a request to improve the onboarding guidance for new...</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={blackLogo} alt="blacklogo" width='18' />
            <p>Reviewer overboard! Or a request to improve the onboarding guidance for new...</p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
            <p>13</p>
            <p>Should I explain other people's code-only answers?</p>
        </div>
        <div className='right-sidebar-div-2'>
            <p>48</p>
            <p>Are Solutions accurate and correct??</p>
        </div>
        
      </div>
    </div>
  )
}

export default Widget