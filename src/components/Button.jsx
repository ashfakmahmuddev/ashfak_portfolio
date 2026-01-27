import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({className, btnText}) => {
  return (
    <Link to={''} className={`text-[#EE5F38] text-[15px] font-DMSans font-medium bg-[#EE5F381A] py-3 px-6 rounded-md hover:text-white hover:bg-[#EE5F38] transition-all duration-500 inline-block ${className}`}>{btnText}</Link>
  ) 
}

export default Button