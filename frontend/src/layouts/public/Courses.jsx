import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../public/Header'
import Footer from '../public/Footer'   

const Courses = () => {
  return (
    <div className="bg-[url('Image/BG.png')] bg-cover bg-center bg-fixed flex flex-col justify-center pb-0 bg-[#131313] min-h-screen">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Courses