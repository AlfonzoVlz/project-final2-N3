import React from 'react';

export const DetailsPerfil = ({ data }) => {
  return (
    <div className='flex flex-col md:flex-row justify-evenly items-start w-full text-[#CDD5E0]'>
      {data && (
        <>
          <div className='flex flex-col items-center'>
            <figure className='w-32 h-32 md:absolute md:top-[33%]'>
              <img src={data.avatar_url} alt="Avatar" className='rounded-lg border-solid border-[10px] border-[#20293A]' />
            </figure>
            <h1 className='font-bold text-5xl mt-16 mb-2'>{data.login}</h1>
            <p className='text-xl'>{data.bio}</p>
          </div>

          <div className='mt-5 bg-[#111729] px-4 py-2 rounded-lg md:w-60 md:ml-4 flex items-center text-2xl'>
            <span className='mr-2 font-normal text-[#4a5366]'>Followers:</span>
            <span>{data.followers}</span>
          </div>

          <div className=' bg-[#111729] px-4 py-2 rounded-lg md:w-60 md:ml-4 mt-2 md:mt-5 flex items-center text-2xl'>
            <span className='mr-2 font-normal text-[#4a5366]'>Following:</span>
            <span>{data.following}</span>
          </div>

          <div className=' bg-[#111729] px-4 py-2  rounded-lg md:w-60 md:ml-4 mt-2 md:mt-5 flex items-center text-2xl'>
            <span className='mr-2 font-normal text-[#4a5366]'>Location:</span>
            <span>{data.location}</span>
          </div>
        </>
      )}
    </div>
  );
};



