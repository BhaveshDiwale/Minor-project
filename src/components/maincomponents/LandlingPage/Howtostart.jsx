import React from 'react'

export default function Howtostart() {
  return (
    <>
      <div className="container">
      <h2 className='font-bold text-6xl text-gray-800 text-center mb-10'>How does it work?</h2>
      
      <div className="flex justify-around pt-10 pb-5">
       <div className="client w-4/12">
        <h4 className='text-4xl text-gray-800 mb-4'>For Clients</h4>
      <video autoPlay muted loop className='rounded-xl border border-gray-50 shadow-xl border-e-2'>
        <source src="/images/3 Easy Steps1.mp4" type='video/mp4'/>
      </video>
      
      </div>
       <div className="developer w-4/12">
       <h4 className='text-4xl text-gray-800 mb-4'>For Developers</h4>
      <video autoPlay muted loop className='border border-gray-50 border-e-2 shadow-xl rounded-xl'>
        <source src="/images/developer.mp4" type='video/mp4'/>
      </video>
      </div>
      </div>

      <div className="flex justify-evenly">
        <img src="/images/arrow.png" alt=""  className='h-72'/>
        <img src="/images/arrow1.png" alt="" className='h-72' />
      </div>

      <div className='w-4/12 mx-auto mb-28'>
      <button className='w-full mx-auto bg-blue-800 hover:bg-blue-900 font-bold text-2xl rounded-xl p-4 text-white'>Sign Up Now!</button>
      </div>
      </div>
    </>
  )
}
