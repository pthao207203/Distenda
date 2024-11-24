import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderPublic from '../public/Header'
import HeaderPrivate from '../private/Header'
import Footer from '../private/Footer'
import SideBar from '../private/SideBar'
import Cookies from 'js-cookie';

const Courses = () => {
  let token = Cookies.get('user_token');
  console.log("token ", token)
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Kiểm tra nếu là màn hình lớn
    };

    handleResize(); // Gọi ngay khi component mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Clean up
  }, []);

  return (
    <div className="bg-[url('Image/BG.png')] bg-cover bg-center bg-fixed flex flex-col justify-center pb-0 bg-[#131313] min-h-screen">
      {token ? <HeaderPrivate /> : <HeaderPublic />}
      {token && <SideBar />}
      <div className={`pt-[104px] transition-all duration-300 ${isDesktop && token ? "ml-[280px]" : "ml-0"}`}>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Courses;
