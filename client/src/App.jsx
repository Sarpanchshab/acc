import React from 'react'
import Navbar from './component/Layout/Navbar'
import Footer from './component/Layout/Footer'
import { Route,Routes } from 'react-router'
import Home from './component/Home'


function App() {
  return (
    <>
    
    <Navbar/>
    <Routes>

      <Route path='/' element={<Home/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
