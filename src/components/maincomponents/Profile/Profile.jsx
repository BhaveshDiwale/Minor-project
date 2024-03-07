import React from 'react'
import Navbar from '../LandlingPage/Navbar'
import { Avatar,AvatarImage,AvatarFallback } from '@/components/ui/avatar'

export default function Profile() {
  return (
    <>
    <Navbar/>
    <div className='container'>
    <div className="p-5">

        <div className="flex flex-col sm:flex-row sm:mt-10">

            <div className="flex flex-col sm:w-3/12 border py-4 h-full rounded-lg ">
            <Avatar className='w-40 h-40 mx-auto'>
           <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
           <AvatarFallback className="text-xs">CN</AvatarFallback>
           </Avatar>
               
                <div className="py-3 px-4">
                    <span className="text-xl font-[Kanit] border-b-2 border-blue-400 font-bold">Skills</span>
                        <div className="flex items-center mt-4">
                            <div className="text-sm font-semibold">Tailwind CSS</div>
                        </div>
                </div>
         
                <div className="py-3 px-4">
                    <span className="text-xl font-[Kanit] border-b-2 border-blue-400 font-bold">Education </span>

                    <div className="flex flex-col space-y-1 mt-4">
                        <div className="flex flex-col">
                            <p className="font-semibold text-xs text-gray-700">2021</p>
                            <p className="text-sm font-medium">
                                <span className="text-blue-700">BTech</span>, Jabalpur Engineering College
                            </p>
                            <p className="font-bold text-xs text-gray-700 mb-2">Percentage: 76.61</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-xs text-gray-700">2017</p>
                            <p className="text-sm font-medium"><span className="text-blue-700">10+2</span>, ABC School</p>
                            <p className="font-bold text-xs text-gray-700 mb-2">Percentage: 80.77</p>
                        </div>

                    </div>
                </div>

            </div>


            <div className="flex flex-col sm:w-2/3 order-first sm:order-none px-8 py-4 mx-auto rounded-lg  border">
            <h2 className=" font-bold text-4xl mb-4">
                ShadCN
            </h2>
                <div className="py-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">Summary</h2>
                    <div className="border-2 w-20 border-top-color mt-1 mb-3"></div>
                    <p className='text-sm'>To get a career opportunity which would help me to utilize my academic background to assist
                        me to gain experience, employ my excellent skills, and enable me to make positive
                        contribution. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci praesentium odio, fuga iusto.</p>
                </div>

                <div className="py-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">Experience</h2>
                    <div className="border-2 w-20 border-top-color mt-1 mb-3"></div>

                    <div className="flex flex-col">

                        <div className="flex flex-col">
                            <p className="text-lg font-bold text-gray-700">Netcracker Technology | Software Engineer</p>
                            <p className="font-semibold text-sm text-gray-700">2021 - Present</p>
                            <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key Responsibilities</p>
                            <ul className="text-sm list-disc pl-4 space-y-1">
                                <li>Working on customer facing product</li>
                                <li>Deliverying highly efficient solutions</li>
                                <li>Solving critical bugs</li>
                            </ul>
                        </div>

                        <div className="flex flex-col mt-8">
                            <p className="text-lg font-bold text-gray-700">TailwindFlex.com | Lead</p>
                            <p className="font-semibold text-sm text-gray-700">2020-2021</p>
                            <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key Responsibilities</p>
                            <ul className="text-sm list-disc pl-4 space-y-1">
                                <li>Developed usable components</li>
                                <li>Solving complex problems</li>
                                <li>Solving critical bugs</li>
                            </ul>
                        </div>

                    </div>

                </div>

         
                <div className="py-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">Projects</h2>
                    <div className="border-2 w-20 border-top-color mt-1 mb-3"></div>

                    <div className="flex flex-col">

                        <div className="flex flex-col">
                            <p className="text-lg font-semibold text-gray-700">Used Books mobile app</p>
                            <p className="font-normal text-sm text-gray-700 mb-1 pl-2">A platform to sell as well as to
                                buy used books only for PCCoE College due to this reuse of books will be there
                                beneficial for environment also indirectly helps increase communication between
                                juniors and seniors.</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold text-gray-700">Parking Automation System</p>
                            <p className="font-normal text-sm text-gray-700 mb-1 pl-2">it’s a web application which
                                helps you to book your slot for your car just like booking a movie ticket from home.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    </div>
    </div>
    </>
  )
}

