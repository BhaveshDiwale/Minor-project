import React from 'react'
import { Link } from 'react-router-dom'

export default function Category() {
  const SaveRoleClient = async()=>{
    const data = await fetch('http://localhost:8080/save-as-client',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({role:"Client"})
    })
    const response = await data.json();
    console.log(response)
  }

  const SaveRoleDeveloper = async()=>{
    const data = await fetch('http://localhost:8080/save-as-developer',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({role:"Developer"})
    })
    const response = await data.json();
    console.log(response)
  }
  return (
    <div>
      <h1 className='text-5xl text-center my-20'>Get started as a:</h1>

      <div className="flex container justify-evenly items-center h-80">
        

    <div className="max-w-sm p-6 bg-white border text-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       <h3 className='mb-2 text-4xl  font-bold tracking-tight text-gray-900 dark:text-white'>Client</h3>
       <p className='mb-3 font-normal  text-gray-700 dark:text-gray-400'>As a client you will be able to hire talent for your jobs, create new jobs and explore much more in the hiring field.</p>
        <Link to='/user_details' state={{role:"client"}}
        //  onClick={SaveRoleClient} 
         className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Let's Go
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>

    <div className="max-w-sm p-6 bg-white border text-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       <h3 className='mb-2 text-4xl  font-bold tracking-tight text-gray-900 dark:text-white'>Developer</h3>
       <p className='mb-3 font-normal  text-gray-700 dark:text-gray-400'>As a developer you will be able to find jobs posted by the client and apply for the job that best suits you.</p>
        <Link to='/user_details' state={{role:'dev'}} onClick={SaveRoleDeveloper} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Let's Go
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
      </div>
    </div>
  )
}
