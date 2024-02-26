import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/maincomponents/LandlingPage/Home'
import Login from './components/maincomponents/Auth/Login'
import Signup from './components/maincomponents/Auth/Signup'
import DevDashboard from './components/maincomponents/Dashboard/DevDashboard'
import Category from './components/maincomponents/Category/Category'
import ClientDashboard from './components/maincomponents/Dashboard/ClientDashboard'
import About from './components/maincomponents/AboutUs/About'
import Contact from './components/maincomponents/ContactUs/Contact'
import { useState } from 'react'
function App() {
  const [isLoggedin,setIsLoggedin] = useState(false);
   
  function getStatus(loginstatus){
    // console.log(loginstatus)
    setIsLoggedin(loginstatus);
    console.log(isLoggedin)
  }
  return (
    <>
    <Routes>
      <Route path='/' element={<Home loginstatus={isLoggedin}/>}/>
      <Route path='/signin' element={<Login getStatus={getStatus}/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/dev_dashboard' element={<DevDashboard/>}/>
      <Route path='/client_dashboard' element={<ClientDashboard/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
