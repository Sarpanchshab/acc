import React from 'react'
import Navbar from './component/Layout/Navbar'
import Footer from './component/Layout/Footer'
import { Route,Routes } from 'react-router'
import Home from './component/Home'
import Typing from './component/Typing'
import Login from './component/Auth/Login'
import Register from './component/Auth/Register'
import Contact from './component/Contact'


function App() {
  return (
    <>
    
    <Navbar/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/typing' element={<Typing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
