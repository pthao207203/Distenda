import React, { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "../private/Header";
import Footer from "../private/Footer";
import SideBar from "../private/SideBar";
import TaskBar from "../private/TaskBar";
const Main = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isTaskBarVisible, setIsTaskBarVisible] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTaskBarToggle = () => {
    setIsTaskBarVisible((prev) => !prev);
  };

  // Cập nhật chiều cao header khi headerRef thay đổi
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerRef.current]);
  return (
    <div className="bg-[url('../Image/BG.png')] bg-cover bg-center bg-fixed flex flex-col justify-center pb-0 bg-[#131313] ">
      <Header
        setHeaderHeight={setHeaderHeight}
        handleTaskBarToggle={handleTaskBarToggle}
      />
      <SideBar headerHeight={headerHeight} />
      <div
        className={`transition-all duration-300 ${
          isDesktop ? "ml-[220px]" : "ml-0"
        }`}
        style={{
          paddingTop: `${headerHeight}px`,
        }}
      >
        {/* Hiển thị TaskBar dưới dạng overlay nếu trạng thái isTaskBarVisible là true */}
        {isTaskBarVisible && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-start lg:right-[18px] max-lg:right-[0px]"
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

export default Main;
