import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className="bg-[url('Image/BG.png')] bg-cover bg-center bg-fixed flex flex-col justify-center pb-0 bg-[#131313] min-h-screen">
      <Header /> 
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Main