import React, { useState, useEffect, useRef } from "react";
import { headerController } from "../../controllers/home.controller";

export default function Header({ setHeaderHeight, handleTaskBarToggle }) {
  const [openDetails, setOpenDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleTaskBar = () => {
    setOpenDetails(!openDetails); // Đảo trạng thái openDetails
    handleTaskBarToggle();
  };

  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await headerController(setLoading);
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
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
          <img
            src={data?.setting?.WebsiteLogoAdmin}
            alt={data?.setting?.WebsiteName}
            className="w-[200px] object-contain "
          />
        </div>
        <button
          className="flex flex-row items-center gap-2"
          onClick={toggleTaskBar}
        >
          <img loading="lazy" src={data?.setting?.user?.AdminAvatar ? data.setting.user.AdminAvatar : "/profile.svg"} alt="Profile"
            className="object-cover rounded-full w-[56px] h-[56px]"
          />
          <img
            loading="lazy"
            src={`/icons/${openDetails ? "tam_giac2" : "tam_giac"}.svg`}
            alt=""
            className="object-center shrink-0 w-[15px] aspect-[2.14]"
          />
        </button>
      </div>
    </header>
  );
}
