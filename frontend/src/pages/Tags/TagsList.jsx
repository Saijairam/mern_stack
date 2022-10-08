import React from 'react'
import './Tags.css';

const TagsList = ({tag}) => {
  return (
    <div className='tag'>
      <h5>{tag.tagName}</h5>
      <p>{tag.tagdesc}</p>
    </div>
  )
}

export default TagsList