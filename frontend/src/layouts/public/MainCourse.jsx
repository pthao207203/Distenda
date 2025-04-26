import React, { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import HeaderPublic from "../public/Header";
import HeaderPrivate from "../private/Header";
import Footer from "../private/Footer";
import SideBar from "../private/SideBarCourse";
import Cookies from "js-cookie";
import TaskBar from "../private/TaskBar";

const Main = () => {
  let token = Cookies.get("user_token");
  const [isDesktop, setIsDesktop] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [headerHeightPublic, setHeight] = useState(0);
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
    <div className="bg-[url('../Image/BG.png')] overflow-x-hidden bg-cover bg-center bg-fixed flex flex-col justify-center pb-0 bg-[#131313] min-h-screen">
      {token ? (
        <HeaderPrivate
          setHeaderHeight={setHeaderHeight}
          headerRef={headerRef}
          handleTaskBarToggle={handleTaskBarToggle}
        />
      ) : (
        <HeaderPublic setHeight={setHeight} headerRef={headerRef} />
      )}

      {token && (
        <SideBar headerHeight={token ? headerHeight : headerHeightPublic} />
      )}

      <div
        className={`transition-all duration-300 ${
          isDesktop && token ? "ml-[220px]" : "ml-0"
        }`}
        style={{
          paddingTop: token ? `${headerHeight}px` : `${headerHeightPublic}px`,
        }}
      >
        {isTaskBarVisible && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-end right-[18px]"
            style={{ marginTop: `${headerHeight}px` }}
          >
            <TaskBar />
          </div>
        )}
        <Outlet
          context={{ headerHeight: token ? headerHeight : headerHeightPublic }}
        />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
