import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SideBar from './SideBar'

const Main = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  return (
    <div className="bg-[url('Image/BG.png')] bg-cover bg-center bg-fixed flex flex-col justify-center pb-0 bg-[#131313] min-h-screen">
      <Header setHeaderHeight={setHeaderHeight} />
      <div
        style={{
          paddingTop: `${headerHeight}px`,
        }}
      >
        <SideBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main