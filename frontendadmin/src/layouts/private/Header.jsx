import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import { headerController } from "../../controllers/home.controller";

export default function Header({ setHeaderHeight, handleTaskBarToggle }) {
  const [openDetails, setOpenDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleTaskBar = () => {
    setOpenDetails(!openDetails); // Đảo trạng thái openDetails
    handleTaskBarToggle();
  };
  useEffect(() => {
    async function fetchData() {
      const result = await headerController(setLoading);
      console.log("result", result)
    }


    fetchData();
  }, []);

  const headerRef = useRef(null);
  useEffect(() => {
    async function fetchData() {
      const result = await headerController(setLoading);
      console.log("Header result:", result);
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    }

    fetchData();
  }, [setLoading, setHeaderHeight]);


  if (loading) {
    return <div>Đang tải...</div>;
  }
  // useEffect(() => {
  //   const updateHeight = () => {
  //     if (headerRef.current) {
  //       setHeaderHeight(headerRef.current.offsetHeight);
  //     }
  //   };
  
  //   updateHeight(); // Cập nhật ngay khi mount
  //   const timeout = setTimeout(updateHeight, 0); // Trì hoãn để DOM ổn định
  
  //   return () => clearTimeout(timeout); // Xóa timeout nếu component unmount
  // }, [headerRef, setHeaderHeight]);

  return (
    <header
      ref={headerRef}
      className="fixed border-box left top-0 z-50 w-full bg-[#EBF1F9] max-md:max-w-full"
    >
      <div className="flex items-center justify-between px-[60px] max-md:pr-[20px]">
        <div className="flex items-center p-3">
          <img loading="lazy" src="./logo1.svg" alt="Logo"
            className="object-contain w-[200px] h-auto max-md:w-[150px]"
          />
        </div>
        <button
          className="flex flex-row items-center gap-2"
          onClick={toggleTaskBar}
        >
          <img loading="lazy" src="./profile.svg" alt="Profile"
            className="object-contain w-[56px] h-auto"
          />
          <img
            loading="lazy"
            src={`./icons/${openDetails ? "tam_giac2" : "tam_giac"}.svg`}
            alt=""
            className="object-center shrink-0 w-[15px] aspect-[2.14]"
          />
        </button>
      </div>
    </header>
  );
}
