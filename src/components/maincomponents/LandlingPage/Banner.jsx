import React from 'react'
export default function Banner() {
  return (
    <>
      <div className="container flex justify-between">
            <div className="title w-6/12">
                <h1 className='text-7xl font-bold mt-36 text-gray-800'>Connecting <br /> Visionaries with Developers</h1>
                <button className='bg-blue-800 text-white px-8 py-2 text-lg rounded-3xl mt-8'>Get Started</button>
            </div>
            <div className="bannerimg w-6/12">
                <img src="/images/banner.jpg" alt="banner" className='h-max-11/12'/>
            </div>
      </div>
    </>
  )
}
