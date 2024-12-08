import React, { useEffect, useState }  from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from '../private/Header'
import Cookies from 'js-cookie';
// import TaskBar from '../private/TaskBar'; 

const Main = () => {
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
  // const handleTaskBarToggle = () => {
  //   setIsTaskBarVisible((prev) => !prev); // Đảo trạng thái hiển thị TaskBar
  // };

  return (
    <div className="flex flex-col justify-start bg-indigo-50 bg-center bg-fixed min-h-screen">
      <Header setHeaderHeight={setHeaderHeight}  /> 
      {/* Chỉ hiển thị Sidebar nếu đã đăng nhập */}

    {/* Sidebar và nội dung */}
    <div className="flex flex-1">
      <SideBar />
      <div className={`flex-grow ${isDesktop ? "ml-[320px]" : "ml-0"}`}>
        <Outlet />
      </div>
    </div>
    </div>
  );
};

export default Main