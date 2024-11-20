import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className="bg-[url('Image/BG.png')] bg-cover bg-center flex overflow-hidden flex-col pb-52 relative bg-[#131313] max-md:pb-24">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main