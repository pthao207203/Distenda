import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderPublic from '../public/Header'
import HeaderPrivate from '../private/Header'
import Footer from '../private/Footer'
import SideBar from '../private/SideBar'
import Cookies from 'js-cookie';
import TaskBar from '../private/TaskBar';

const Courses = () => {
  let token = Cookies.get('user_token');
  console.log("token ", token)
  const [isDesktop, setIsDesktop] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [headerHeightPublic, setHeight] = useState(0);

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
    <div className="bg-[url('../Image/BG.png')] bg-cover bg-center bg-fixed flex flex-col justify-center pb-0 bg-[#131313] min-h-screen">
      {token ? <HeaderPrivate setHeaderHeight={setHeaderHeight} handleTaskBarToggle={handleTaskBarToggle} /> : <HeaderPublic setHeight={setHeight} />}

      {/* Chỉ hiển thị Sidebar nếu đã đăng nhập */}
      {token && <SideBar headerHeight={headerHeight} />}

      <div
        className={`transition-all duration-300 ${isDesktop && token ? "ml-[292px]" : "ml-0"}`}
        style={{
          paddingTop: token ? `${headerHeight}px` : `${headerHeightPublic}px`,
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
  );
};

export default Courses;
