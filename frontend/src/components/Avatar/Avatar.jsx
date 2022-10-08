import React from 'react'

const Avatar = ({children,backgroundColor,fontSize,borderRadius,px,py,color,cursor,textAlign}) => {
  const style = {
    backgroundColor,
    fontSize,
    borderRadius,
    textAlign : "center",
    padding :`${py} ${px}` ,
    color : color || 'black',
    cursor: cursor || null,
    textDecoration : "none"
  }
  return (
    <div style={style}>
       {children}
    </div>
  )
}

export default Avatar