import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderPublic from "../public/Header";
import HeaderPrivate from "../private/Header";
import Footer from "../private/Footer";
import TaskBar from "../private/TaskBar";
import Cookies from "js-cookie";

const Courses = () => {
  let token = Cookies.get("user_token");
  // console.log("token ", token)
  const [headerHeight, setHeaderHeight] = useState(0);
  const [headerHeightPublic, setHeight] = useState(0);
  // Trạng thái kiểm soát hiển thị TaskBar
  const [isTaskBarVisible, setIsTaskBarVisible] = useState(false);
  // Hàm xử lý toggle TaskBar
  const handleTaskBarToggle = () => {
    setIsTaskBarVisible((prev) => !prev); // Đảo trạng thái hiển thị TaskBar
  };
  return (
    <div className="bg-[url('/Image/BG.png')] overflow-x-hidden bg-cover bg-center bg-fixed flex flex-col justify-center pb-0 bg-[#131313] min-h-screen">
      {token ? (
        <HeaderPrivate
          setHeaderHeight={setHeaderHeight}
          handleTaskBarToggle={handleTaskBarToggle}
        />
      ) : (
        <HeaderPublic setHeight={setHeight} />
      )}
      <div
        style={{
          paddingTop: token ? `${headerHeight}px` : `${headerHeightPublic}px`,
        }}
      >
        <Outlet
          context={{ headerHeight: token ? headerHeight : headerHeightPublic }}
        />

        <Footer />
        {/* Hiển thị TaskBar dưới dạng overlay nếu trạng thái isTaskBarVisible là true */}
        {isTaskBarVisible && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-end right-[18px]"
            style={{
              marginTop: `${headerHeight}px`,
            }}
          >
            <TaskBar />
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
