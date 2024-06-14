import React from 'react'
import heroImagen from '../assets/hero-image-github-profile.png'


export const Seach = () => {


  
  return (
<>
<div className='relative '>
        <figure>
          <img src={heroImagen} alt="heroImagen" className='h-[40vh] w-full' />
        </figure>
        <div className='flex justify-center absolute top-[5%] w-full h-max'>

          <button className='h-16 w-16 p-5 rounded-l-lg bg-[#20293a]'>
            <svg className='bg-[#20293a]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="#97A3B6" stroke-width="2" />
              <path d="M20 20L17 17" stroke="#97A3B6" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>

          <input type="text" className=' p-3 h-16 w-1/3  bg-[#20293a] rounded-r-lg outline-none text-white' placeholder='Username' />
        </div>
      </div>
</>
  )
}


