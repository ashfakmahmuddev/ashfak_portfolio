import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({className, btnText}) => {
  return (
    <button className={`text-primary text-[15px] font-DMSans font-medium bg-[#ee5f3825] py-3 px-6 rounded-md hover:text-white hover:bg-primary transition-all duration-500 inline-block ${className}`}>{btnText}</button>
  ) 
}

export default Button