import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
          
    const currentYear = new Date().getFullYear();

  return (
    <div>
        <div className=' font-sans absolute w-full bg-[#bc6c25]   '>
       <div className='ml-4 m-5 grid grid-cols-1 lg:grid-cols-3'>
       <div className='grid grid-cols-1 gap-4  mt-5'>
            <p className='font-extralight'>Where to find us?</p>
            <h1 className='font-bold'> Bandra West, Mumbai, Maharashtra 400050, India</h1>
            <div className='flex gap-3'>
            <FaInstagram />
            <FaXTwitter />
            <FaSquareFacebook />
            </div>
        </div>
        <div className=' mt-5 grid grid-cols-1 gap-4'>
            <p >Contact</p>
            <div className=''>
            <h1 className='font-bold'>Phone: <span className='font-extralight'>(65) 305 2409 671</span></h1>
            <h1 className='font-bold'>Email: <span className='font-extralight'>hello@cafe.co</span></h1>
            </div>
        </div>
        <div className='font-extralight mt-5 grid grid-cols-1 gap-4' >
            <p className=''>Opening Hours.</p>
            <div className=''>
            <p>Monday-friday _______ <span className='font-bold'>9.00 - 18.00</span></p>
            <p>Saturday _______ <span className='font-bold'>11:00 - 16:30</span></p>
            <p>Sunday _______ <span className='font-bold'>Closed</span></p>
            </div>
        </div>
       </div>
         
         <div className='m-3 text-center'>
            <p>Copyright &copy; Cafe Shop {currentYear} designed by MANIKANDAN.</p>
         </div>

      </div>
    </div>
  )
}

export default Footer;