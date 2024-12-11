import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SideBar({headerHeight}) {
  const [isOpen, setIsOpen] = useState(false); // Quản lý trạng thái mở/đóng sidebar
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024); // Kiểm tra xem có phải desktop hay không
  const location = useLocation(); // Lấy đường dẫn hiện tại

  const menuItems = [
    { link: "/", icon: "./icons/home.svg", label: "Trang chủ" },
    { link: "/courses", icon: "./icons/document.svg", label: "Khóa học" },
    { link: "/user", icon: "./icons/2user.svg", label: "Người dùng" },
    { link: "/admin", icon: "./icons/work.svg", label: "Quản trị viên" },
    { link: "/payment", icon: "./icons/paper.svg", label: "Hóa đơn" },
    { link: "/permission", icon: "./icons/setting.svg", label: "Phân quyền" },
    { link: "/notification", icon: "./icons/notification.svg", label: "Thông báo" },
    { link: "/setting", icon: "./icons/category.svg", label: "Thông tin web" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Màn hình >= 1024px là desktop
    };

    handleResize(); // Kiểm tra kích thước ngay khi component mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setIsOpen(false); // Đặt về mặc định là không mở khi ở desktop
    }
  }, [isDesktop]);

  return (
    <>
      {isOpen && !isDesktop && (
        <div
          className="fixed top-0 left-0 w-full h-full z-60"
          onClick={() => setIsOpen(false)} // Đóng Sidebar khi nhấn vào overlay
        ></div>
      )}
      <aside
        className={`fixed top-0 left-0 z-40 bg-white text-white min-h-screen transition-all duration-300 ${isDesktop || isOpen ? `w-[310px] mt-[${headerHeight}px]` : "w-0 " } overflow-hidden`}
        // Thay thế giá trị top bằng chiều cao header
        style={{
          boxShadow: isOpen ? "4px 0px 30px 0px rgba(0, 0, 0, 0.2)" : "none", // Đổ bóng chỉ khi Sidebar mở
        }}
        onClick={(e) => e.stopPropagation()} // Ngăn sự kiện lan đến overlay
      >
        <div className="flex gap-2 justify-center items-center px-[16px] w-full pt-[20px] pb-[27px]">
            <img
              loading="lazy"
              src="./profile.svg"
              alt="Profile"
              className="rounded object-cover"
              style={{ width: "65px", height: "65px" }}
            />
            <div>
              <h4 className="mb-1 font-semibold shrink" style={{ fontSize: "28px", color: "black" }}>
                Ngọc Khanh
              </h4>
              <span className="font-medium text-lg text-black">Manager</span>
            </div>
          </div>
        

        <div className="flex flex-col overflow-auto px-3">
          {menuItems.map((item, index) => (
            <Link to={item.link} key={index}>
              <div
                className={`flex items-center text-xl gap-4 px-2 py-4 ${
                  location.pathname === item.link ? "bg-[#EBF1F9] font-medium p-1 rounded-xl" : ""
                }`}
                style={{ fontSize: "20px", color: "black" }}
              >
                <img
                  loading="lazy"
                  src={item.icon}
                  alt=""
                  className="object-contain"
                  style={{ width: "36px", height: "36px" }}
                />
                <span>{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </aside>
      {!isDesktop && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-5 left-5 z-50 p-2 text-white rounded-md max-md:top-3 max-md:left-3"
        >
          {/* Biểu tượng SVG */}
          <svg id="mySvg" xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20" fill="none">
            <path
              d="M1 1H37"
              stroke="#384D6C"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1 10H37"
              stroke="#384D6C"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1 19H37"
              stroke="#384D6C"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </>
  );
}