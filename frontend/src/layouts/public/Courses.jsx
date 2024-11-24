import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../public/Header'
import Footer from '../public/Footer'   
import CourseNavigation from '../public/PageNav'

const Courses = () => {
  return (
    <div className="bg-[url('Image/BG.png')] bg-cover bg-center bg-fixed flex flex-col justify-center pb-0 bg-[#131313] min-h-screen">
      <Header />
      <CourseNavigation/>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Courses