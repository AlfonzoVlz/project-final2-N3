import React from 'react'
import gitHub from '../assets/github.jpg'

export const DetailsPerfil = ({data}) => {


    
  return (
<>
    {data &&(
        <div className='flex justify-evenly w-full h-40  text-[#CDD5E0] '>
        <div className='w- flex flex-col'>
          <figure className='w-32 h-32 absolute top-[33%]'>
            <img src={data.avatar_url} alt="GitHub" className='rounded-lg border-solid border-[10px] border-[#20293A] ' />
          </figure>
          <h1 className='font-bold text-5xl  mt-20 mb-2'>GitHub</h1>
          <p className='text-xl'>How people build software</p>
        </div>

        <div className='mt-5 bg-[#111729] px-4 py-2 rounded-lg h-14 w-60 flez items-center text-2xl'>
          <span className='mr-10 font-normal text-[#4a5366] '>Followers</span>
          <span className='ml-5'>{data.followers}</span>
        </div>

        <div className='mt-5 bg-[#111729] px-4 py-2 rounded-lg h-14 w-60 flez items-center text-2xl'>
          <span className='mr-10 font-normal text-[#4a5366] '>Following</span>
          <span className='ml-5'>{data.following}</span>
        </div>

        <div className='mt-5 bg-[#111729] px-4 py-2 rounded-lg h-14 max-w flez items-center text-2xl'>
          <span className='mr-5 font-normal text-[#4a5366] '>Location</span>
          <span className='ml-5'>{data.location}</span>
        </div>
      </div>

    )

    }
  

</>
  )
}


