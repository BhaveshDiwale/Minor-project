import React,{useState} from 'react'
import Navbar from '../LandlingPage/Navbar'
import ClientAddForm from './ClientAddForm'

export default function ClientDashboard() {
    const [getPostedJobs,setGetPostedJobs] = useState(false);
  return (
    <>
    <Navbar/>
    <div className="px-16 my-5">
      <img src="/images/dashboard1.png" alt="" className='h-[500px] w-full rounded-3xl'/>
    </div>    
    <ClientAddForm/>
    <div className="px-16">
    <h3 className='text-3xl'>Jobs Posted Previously</h3>
    {getPostedJobs?''
    :
    <div className='flex flex-col items-center justify-center border border-gray-300 my-8 shadow-lg rounded-lg h-96 w-full'>
    <p className='text-gray-500 font-bold'>It's all empty.</p>
    <p className='text-gray-500 font-bold'>Create some jobs to see it here.</p>
    </div>}
    </div>
    
    </>
  )
}
