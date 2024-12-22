import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";




const Footer = () => {
  return (
     <footer className='border-t '>
        <div className='container ms-auto p-4 flex flex-col gap-4 lg:flex-row justify-between'>
            <p className='flex justify-center'>© All Right Reserved 2024</p>
        <div className='flex item-center gap-4 justify-center'>
            <a href="" className='hover:text-primary-100'><CiFacebook /></a>

            <a href="" className='hover:text-primary-100'><FaInstagram /></a>
            <a href="" className='hover:text-primary-100'><CiLinkedin />
</a>

        </div>
        </div>
    </footer>
  )
}

export default Footer