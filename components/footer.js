import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { GrInstagram } from 'react-icons/gr'


function Footer() {
  return (
    <div className=' h-36 w-full flex items-center bg-orange-600'>
        <div className='icons flex justify-center gap-8 w-[80%] mx-auto '>
            <a target='_blank' rel="noreferrer" href="https://github.com/krishna8223/Ecommerce-page-" className='flex gap-8 text-5xl ' >
             View code on  <AiFillGithub className='hover:text-white ' /> 
            </a>
            
        </div>
    </div>
  )
}

export default Footer