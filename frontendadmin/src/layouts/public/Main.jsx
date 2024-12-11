import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header';
import Cookies from "js-cookie"


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
    <div className="flex overflow-hidden flex-col justify-start leading-none bg-white w-screen h-screen">
      <Header />
      <div className="flex flex-wrap grow justify-center items-center gap-1.5 ">
      <Outlet />
      </div>
    </div>
  );
};


export default Main