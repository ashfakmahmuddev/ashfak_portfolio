import React from 'react'

const Image = ({className, imgSrc, alt}) => {
  return (
    <img className={`${className}`} src={imgSrc} alt={alt} />
  )
}

export default Image