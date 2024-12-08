import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../private/Header'
import Footer from '../private/Footer'
import SideBar from '../private/SideBar'
import Cookies from 'js-cookie';
import TaskBar from '../private/TaskBar';
const Main = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  // Trạng thái kiểm soát hiển thị TaskBar
  const [isTaskBarVisible, setIsTaskBarVisible] = useState(false);
  // Hàm xử lý toggle TaskBar
  const handleTaskBarToggle = () => {
    setIsTaskBarVisible((prev) => !prev); // Đảo trạng thái hiển thị TaskBar
  };
  return (
    <div className="bg-[url('Image/BG.png')] bg-cover bg-center bg-fixed flex flex-col justify-center pb-0 bg-[#131313] min-h-screen">
      <Header setHeaderHeight={setHeaderHeight} handleTaskBarToggle={handleTaskBarToggle} />
      <SideBar/>
      <div
        className="transition-all duration-300 ml-[292px]"
        style={{
          paddingTop: `${headerHeight}px`,
        }}
      >
        {/* Hiển thị TaskBar dưới dạng overlay nếu trạng thái isTaskBarVisible là true */}
        {isTaskBarVisible && (
          <div className="fixed inset-0 z-50 flex items-start justify-end right-[18px]"
            style={{
              marginTop: `${headerHeight}px`,
            }}
          >
            <TaskBar />
          </div>
        )}
        {/* Hiển thị Outlet */}
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Main