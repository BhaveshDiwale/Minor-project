import React, { createContext, useContext, useReducer } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Howtostart from './Howtostart'
import WhyChooseUs from './WhyChooseUs'
import Footer from './Footer'
// import { LoginContext } from '../../../App'

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Howtostart/>
      <WhyChooseUs/>
      {/* <Reviews/> */}
      <Footer/>
    </>
  )
}
