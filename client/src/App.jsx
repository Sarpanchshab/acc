import React from 'react'
import Navbar from './component/Layout/Navbar'
import Footer from './component/Layout/Footer'
import { Route, Routes } from 'react-router'
import Home from './component/Home'
import Login from './component/Auth/Login'
import Register from './component/Auth/Register'
import Contact from './component/Contact'
import HindiTypingTest from './component/Typing/TypingHindi'
import EnglishTyping from './component/Typing/TypingEnglish'
import Blog from './component/Blog/Blog'
import BlogView from './component/Blog/BlogView'
import CourseInsert from './component/Admin Dashboard/CourseInsert'
import CourseDisplay from './component/Admin Dashboard/CourseDisplay'
import LatestCourse from './component/Home/LatestCourse'
import AdminDashboard from './component/Admin Dashboard/AdminDashboard'



function App() {
  return (
    <>

      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/hindityping' element={<HindiTypingTest />} />
        <Route path='/englishtyping' element={<EnglishTyping />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/getNumberCourse' element={<LatestCourse />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogview/:postId' element={<BlogView />} />
        <Route path="/courseinsert" element={<CourseInsert />} />
        <Route path="/coursedisplay" element={<CourseDisplay />} />
      </Routes>
      <Footer />
      
      <Routes>
        <Route path='/dashboard' element={<AdminDashboard />} />
      </Routes>

    </>
  )
}

export default App
