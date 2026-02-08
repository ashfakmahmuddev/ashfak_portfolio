import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({className, btnText}) => {
  return (
    <button className={`text-[#06b6d4] text-[15px] font-DMSans font-medium bg-[#06b5d41f] py-3 px-6 rounded-md hover:text-white hover:bg-[#06b6d4] transition-all duration-500 inline-block ${className}`}>{btnText}</button>
  ) 
}

export default Button