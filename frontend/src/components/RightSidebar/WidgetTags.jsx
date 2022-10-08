import React from 'react'

const WidgetTags = () => {
    const tags = ['c','cpp','css','html','js','tailwind','bootstrap','reactjs','nodejs','expressjs','php','sql','mongodb','firebase'];
  return (
    <div className='widget-tags'>
        <h3>Watched Tags</h3>
        <div className='widget-tags-div'>
          {
            tags.map((item)=>(
                <p key={item}>{item}</p>
            ))
          }
        </div>
    </div>
  )
}

export default WidgetTags