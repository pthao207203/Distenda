import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'

const MainAdmin = () => {
  return (
    <div>
      <Header />
      <div>
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}

export default MainAdmin