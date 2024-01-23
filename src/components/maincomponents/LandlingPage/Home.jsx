import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Howtostart from './Howtostart'
import WhyChooseUs from './WhyChooseUs'
import Footer from './Footer'
import Loadingbar from './LoadingBar'
import Reviews from './Reviews'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Howtostart/>
      <WhyChooseUs/>
      <Reviews/>
      <Footer/>
    </>
  )
}
