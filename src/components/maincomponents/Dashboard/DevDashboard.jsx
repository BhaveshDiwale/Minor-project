import React from 'react'
import Navbar from '../LandlingPage/Navbar'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function DevDashboard() {
  return (
    <>
    <Navbar/>
    <div className="px-16 my-5">
      <img src="/images/dashboard1.png" alt="" className='h-[500px] w-full rounded-3xl'/>
    </div>    
    <Drawer>
    <div className="jobs mx-16 rounded-3xl border hover:border-blue-600 py-5 px-10 my-10">
      <DrawerTrigger className='hover:text-blue-800 hover:underline'><h3 className='text-xl mb-4'>Need an Expert Frontend Developer for Wordpress Website</h3></DrawerTrigger>
      <p className='text-sm text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae provident, animi labore reprehenderit cupiditate ab. Voluptatum accusantium nostrum obcaecati fuga itaque quas magni cum iste qui consectetur consequatur soluta, delectus ipsa repellat praesentium reiciendis iure quos odio, eligendi et architecto expedita labore nemo distinctio! Voluptates amet consequatur pariatur nobis necessitatibus.</p>
      <div className="skills my-4">
      <span className='me-4 text-sm text-gray-500'>Skills Required:</span>
      <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Wordpress</span>
      <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Figma</span>
      <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">MongoDB</span>
      <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">UI/UX</span>
      </div>
    </div>
   <DrawerContent>
  
   <div className="jobs mx-16 rounded-3xl border hover:border-blue-600 py-5 px-10 my-10">
   <div className="author mb-4">
    <span className='text-gray-500 font-bold text-sm me-2'>Job Poster:</span>
    <h4 className=' inline text-lg'>Alex_Carey_28</h4>
    </div>
      <span className='text-sm font-bold text-gray-500'>Job Title:</span>
      <h3 className='text-xl mb-4'>Need an Expert Frontend Developer for Wordpress Website</h3>
      <span className='text-sm font-bold text-gray-500'>Job Description:</span>
      <p className='text-sm text-gray-500 mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae provident, animi labore reprehenderit cupiditate ab. Voluptatum accusantium nostrum obcaecati fuga itaque quas magni cum iste qui consectetur consequatur soluta, delectus ipsa repellat praesentium reiciendis iure quos odio, eligendi et architecto expedita labore nemo distinctio! Voluptates amet consequatur pariatur nobis necessitatibus.</p>
      <span className='text-sm font-bold text-gray-500'>Additional Details:</span>
      <p className='text-sm text-gray-500'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ducimus animi doloremque quisquam ullam exercitationem. Quidem eligendi alias quia odio ab id temporibus similique quod possimus velit delectus distinctio, animi blanditiis consequuntur officiis libero vitae sit adipisci eum repudiandae laboriosam?
      </p>
      <div className="skills my-4">
      <span className='me-4 text-sm text-gray-500'>Skills Required:</span>
      <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Wordpress</span>
      <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Figma</span>
      <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">MongoDB</span>
      <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">UI/UX</span>
      </div>

      <div className="file mb-10">
        <h3 className='mb-2'>Working Files:</h3>
        <div className='border rounded-lg w-full h-28'></div>
      </div>

      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Apply</button>
      <DrawerClose>
      <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Close</button>
    </DrawerClose>
    </div>
    
  </DrawerContent>
</Drawer>

    </>
  )
}
