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
import { BrowserRouter } from 'react-router-dom'
import UserDetailsForm from './components/maincomponents/UserDetails/UserDetailsForm'
import Profile from './components/maincomponents/Profile/Profile'

 function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/dev_dashboard' element={<DevDashboard/>}/>
      <Route path='/client_dashboard' element={<ClientDashboard/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/user_details' element={<UserDetailsForm/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
