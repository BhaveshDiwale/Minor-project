import React from 'react'
import { Link } from 'react-router-dom'
export default function Banner() {
  return (
    <>
      <div className="container flex justify-between">
            <div className="title w-6/12">
                <h1 className='text-7xl font-bold mt-36 text-gray-800'>Connecting <br /> Visionaries with Developers</h1>
                <Link to='/signup'><button className='bg-blue-800 text-white rounded-3xl px-8 py-2 mt-8 hover:bg-blue-900'>Get Started</button></Link>
            </div>
            <div className="bannerimg w-6/12">
                <img src="/images/banner.jpg" alt="banner" className='h-max-11/12'/>
            </div>
      </div>
    </>
  )
}
