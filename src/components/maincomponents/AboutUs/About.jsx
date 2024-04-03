import React from 'react'
import Navbar from '../LandlingPage/Navbar'

export default function About() {
  return (
    <>
        <Navbar/>
        <section className="py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-800">
        <div className="container py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap ">
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                    <div className="lg:max-w-xl">
                        <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                            <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                                About Us
                            </h1>
                        </div>
                        <p className="px-4 mb-5 text-base leading-7 text-gray-500 dark:text-gray-400">
                        Our team of experienced consultants is dedicated to guiding candidates through the
                        job search process, providing career advice, and helping them land their dream jobs.
                        Whether you're an entry-level professional or an experienced executive, we are here
                        to support you in your career journey.
                        </p>
                        <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                        As a leading consultancy firm, we work closely with employers to understand their
                        hiring needs and find the perfect candidates for their teams. Our goal is to foster
                        successful partnerships between employers and employees, contributing to the growth
                        and success of both.
                        </p>
                        <div className="flex flex-wrap items-center">
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6 bg-white dark:bg-gray-900">
                                    <span className="text-blue-500 dark:text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                                            fill="currentColor" viewBox="0 0 16 16">
                                            <path
                                                d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                            <path
                                                d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                        </svg>
                                    </span>
                                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">80
                                    </p>
                                    <h2 className="text-sm text-gray-700 dark:text-gray-400">Projects and Plans</h2>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6 bg-white dark:bg-gray-900">
                                    <span className="text-blue-500 dark:text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                                            fill="currentColor"  viewBox="0 0 16 16">
                                            <path
                                                d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            <path fill-rule="evenodd"
                                                d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                        </svg>
                                    </span>
                                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">30
                                    </p>
                                    <h2 className="text-sm text-gray-700 dark:text-gray-400">Helped people</h2>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6 bg-white dark:bg-gray-900">
                                    <span className="text-blue-500 dark:text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                                            fill="currentColor"viewBox="0 0 16 16">
                                            <path
                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                    </span>
                                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">3
                                    </p>
                                    <h2 className="text-sm text-gray-700 dark:text-gray-400">Volunteer</h2>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6 bg-white dark:bg-gray-900">
                                    <span className="text-blue-500 dark:text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                                            fill="currentColor" viewBox="0 0 16 16">
                                            <path
                                                d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                        </svg>
                                    </span>
                                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">100
                                    </p>
                                    <h2 className="text-sm text-gray-700 dark:text-gray-400">Timing</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <img src="/images/about.jpg" alt=""
                        className="relative object-cover w-full rounded-lg"/>
                    {/* <h2 className='text-5xl text-gray-800 my-4'>Credits</h2>
                    
                    <div className='flex'><a target='_blank' className='block' href="https://www.freepik.com/free-vector/pair-programming-concept-illustration_8449769.htm#fromView=search&term=developer&track=ais&regularType=vector&page=1&position=16&uuid=cbef1806-02c1-48c4-8895-acba5f4e260a">Image by storyset</a> on Freepik</div>

                    <div className='flex'><a target='_blank' className='block' href="https://www.freepik.com/free-vector/privacy-policy-concept-illustration_20547283.htm#query=login&position=1&from_view=search&track=sph&uuid=4a16b643-223f-4e4a-acd9-68fc1d3bcac3">Image by storyset</a> on Freepik</div>

                    <div className='flex'><a target='_blank' className='block' href="https://www.freepik.com/free-vector/sign-up-concept-illustration_20824341.htm#query=signup&position=2&from_view=search&track=sph&uuid=36ebbc5f-c1ba-42b5-b017-4bc6c033914c">Image by storyset</a> on Freepik</div>

                    <div className='flex'><a target='_blank' className='block' href="https://www.freepik.com/free-vector/live-collaboration-concept-illustration_6183491.htm#fromView=search&term=client+starting&track=ais&regularType=vector&page=1&position=9&uuid=26247325-d44b-4ac9-952f-bd8a3b755edf">Image by storyset</a> on Freepik</div>

                    <div className='flex'><a target='_blank' className='block' href="https://www.freepik.com/free-vector/people-search-concept-illustration_6203414.htm#fromView=search&term=client&track=ais&regularType=vector&page=1&position=18&uuid=19dfc3fb-f3c4-466a-8672-3457c51e3c6a">Image by storyset</a> on Freepik</div>

                    <div className='flex'><a target='_blank' className='block' href="https://www.freepik.com/free-vector/programmer-concept-illustration_8775515.htm#fromView=search&term=developer&track=ais&regularType=vector&page=1&position=1&uuid=90c209ee-a2a7-47fd-9701-f357a5819841">Image by storyset</a> on Freepik</div>

                    <div className='flex'><a target='_blank' className='block' href="https://www.freepik.com/free-vector/programming-concept-illustration_7118755.htm#fromView=search&term=developer&track=ais&regularType=vector&page=1&position=6&uuid=69418386-58e2-400d-8d26-4c200f576723">Image by storyset</a> on Freepik</div>

                    <div className='flex'><a target='_blank' className='block' href="https://www.freepik.com/free-vector/business-deal-concept-illustration_7119384.htm#fromView=search&term=client&track=ais&regularType=vector&page=1&position=26&uuid=c38e755d-be18-40c0-a30c-098014cd4cdf">Image by storyset</a> on Freepik</div>

                    <div className='flex'><a target='_blank' className='block' href="https://www.freepik.com/free-vector/privacy-policy-concept-illustration_20547283.htm#query=signup&position=1&from_view=search&track=sph&uuid=21f1f288-e7fe-48d1-a96e-da7606fc19cf">Image by storyset</a> on Freepik</div>

  <div className='flex'><a target='_blank' className='block' href="https://www.freepik.com/free-vector/forming-team-leadership-concept-illustration_35294599.htm#fromView=search&term=+team&track=sph&regularType=vector&page=1&position=2&uuid=a6831d25-2c39-4923-858e-5b03923580c0">Image by storyset</a> on Freepik</div>*/}
                  </div> 
                  </div>
              </div>
        
    </section>
    </>
  )
}
