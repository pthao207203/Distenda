import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'
// import Header from './Header'
// import SideBar from './SideBar'

const MainAdmin = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center leading-none bg-indigo-50">
      <Header />
      <div className="flex flex-wrap gap-1.5 mt-1.5">
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}

export default MainAdmin