import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from '../private/Header'
import Cookies from 'js-cookie';
import TaskBar from '../private/TaskBar';

const MainAdmin = () => {
  let token = Cookies.get('token');
  console.log("token", token)
  const [isDesktop, setIsDesktop] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Trạng thái kiểm soát hiển thị TaskBar
  const [isTaskBarVisible, setIsTaskBarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Kiểm tra nếu là màn hình lớn
    };

    handleResize(); // Gọi ngay khi component mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Clean up
  }, []);

  // Hàm xử lý toggle TaskBar
  const handleTaskBarToggle = () => {
    setIsTaskBarVisible((prev) => !prev); // Đảo trạng thái hiển thị TaskBar
  };

  return (
    <div className="flex flex-col justify-start bg-[#EBF1F9] bg-center bg-fixed min-h-screen">
      <Header setHeaderHeight={setHeaderHeight} handleTaskBarToggle={handleTaskBarToggle} />
      <SideBar headerHeight={headerHeight} />
      <div
        className={`mt-[${headerHeight}px] transition-all duration-300 ${isDesktop && "ml-[15.625rem]"}`}
      >
        {isTaskBarVisible && (
          <div className="fixed inset-0 z-50 flex items-start justify-end right-[18px] max-md:right-1"
            style={{
              marginTop: `${headerHeight}px`,
            }}
          >
            <TaskBar handleTaskBarToggle={handleTaskBarToggle} />
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default MainAdmin