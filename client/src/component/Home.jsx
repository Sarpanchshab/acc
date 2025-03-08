import React from 'react'
import Slider from './Home/Slider'
import BestCourse from './Home/BestCourse'
import OurFeatures from './Home/OurFeatures'
import StudentReview from './Home/StudentReview'
import HomeMarquee from './Home/HomeMarquee'
import Counter from './Home/Counter'
import AppSection from './Home/AppSection'

function Home() {
  return (
    <>
    <Slider/>
    <HomeMarquee/>
    <BestCourse/>
    
    <OurFeatures/>
    <Counter/>
    <StudentReview/>
    <AppSection/>
    </>
  )
}

export default Home
