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
  const [headerHeight, setHeaderHeight] = useState(0);
  const [headerHeightPublic, setHeight] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Kiểm tra nếu là màn hình lớn
    };

    handleResize(); // Gọi ngay khi component mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Clean up
  }, []);

  return (
    <div className="bg-[url('../Image/BG.png')] bg-cover bg-center bg-fixed flex flex-col justify-center pb-0 bg-[#131313] min-h-screen">

      {token ? <HeaderPrivate setHeaderHeight={setHeaderHeight} /> : <HeaderPublic setHeight={setHeight} />}
      {token && <SideBar headerHeight={headerHeight} />}
      <div className={`transition-all duration-300 ${isDesktop && token ? "ml-[292px]" : "ml-0"}`}
        style={{
          paddingTop: token ? `${headerHeight}px` : `${headerHeightPublic}px`,
        }}
      >
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Courses;
