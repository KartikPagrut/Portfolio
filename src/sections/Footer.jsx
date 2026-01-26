import React from 'react'
import github from "../public/assets/github.svg"
import instagram from "../public/assets/instagram.svg"
import linkdin from "../public/assets/linkedin.svg"
const Footer = () => {
  return (
   <>
   <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-5'>
    <div className='text-white-500 flex gap-2'>
      <p>Terms & Conditions</p>
      <p></p>
    </div>
    <div className='flex gap-3 '>
        <div className='social-icon'>
         <img src={github} alt="" className='w-1/2 h-1/2'/>
        </div>
        <div className='social-icon'>
         <img src={instagram} alt="" className='w-1/2 h-1/2'/>
        </div>
        <div className='social-icon'>
         <img src={linkdin} alt="" className='w-1/2 h-1/2'/>
        </div>
    </div>
    <p className='text-white-500'>© 2026 kartik .All rights reserved.</p>

   </section>
   
   </>
  )
}

export default Footer
