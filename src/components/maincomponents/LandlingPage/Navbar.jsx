import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
export default function Navbar(props) {  
  // console.log(props.loginstatus);
  let status = props.loginstatus;
  console.log(status)


  return (
    <>
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 w-full sticky top-0 z-10 ">
        <div className="flex items-center">
  <div className="w-full flex flex-wrap items-center py-4 px-8">
    <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dev&Client</span>
    </Link>
    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto ms-16" id="navbar-multi-level">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to='/' className={" block py-2 px-3 text-white bg-blue-700 rounded md:text-blue-700 md:bg-transparent md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"} aria-current="page" >Home</Link>
        </li>
        <li>
            <HoverCard openDelay={0}>
             <HoverCardTrigger className='cursor-pointer flex items-center'>Find Jobs<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg></HoverCardTrigger>
             <HoverCardContent >
             <ul className="text-sm text-gray-700 dark:text-gray-200" >
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
             </HoverCardContent>
              </HoverCard>

        </li>
        <li>
        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Hire Talent
            </button> 
        </li>
        <li>
          <Link to='/about' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"  >About</Link>
        </li>
        <li>
          <Link to='/contact' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Contact</Link>
        </li>
        {/* <li className="text-red-800"> {loginstatus}</li> */}

      </ul>
    </div>
    </div>

    {status===false?<> <div className='w-[400px] p-4 flex'>
    <Link to='/signup'><button className='bg-blue-800 text-white px-8 py-2 rounded-3xl mx-2 hover:bg-blue-900 hover:text-white'>Sign Up</button></Link>
    <Link to='/signin'><button className='border border-blue-800 text-blue-800 px-8 py-2 rounded-3xl mx-2 hover:bg-blue-900 hover:text-white'>Sign In</button></Link>
  
    </div></>
    :
    <div className='pe-8'>
    {/* {JSON.stringify(status)} */}
      <HoverCard openDelay={0} >
             <HoverCardTrigger className='cursor-pointer flex items-center'>
             <Avatar className='w-12 h-12'>
             <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
             <AvatarFallback>CN</AvatarFallback>
             </Avatar>
             </HoverCardTrigger>
             <HoverCardContent >
             <ul className="text-sm text-gray-700 dark:text-gray-200" >
                  <li>
                    <Link to='/dev_dashboard' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Applications</a>
                  </li>
                  <li>
                    <Link to='/' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=>{status=false}}>Logout</Link>
                  </li>
                </ul>
             </HoverCardContent>
              </HoverCard>
    </div>
    // {/* <> */}
   
     }
    
  </div>

</nav>

    </>
  )
}
