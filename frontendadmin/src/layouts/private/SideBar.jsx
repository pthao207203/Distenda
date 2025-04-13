import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRole } from "../AppContext";
import { headerController } from "../../controllers/home.controller"

export default function SideBar({ headerHeight }) {
  const [isOpen, setIsOpen] = useState(false); // Quản lý trạng thái mở/đóng sidebar
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024); // Kiểm tra xem có phải desktop hay không
  const location = useLocation(); // Lấy đường dẫn hiện tại
  const { role } = useRole();
  console.log(role)

  const [data, setData] = useState();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Màn hình >= 1024px là desktop
    };

    handleResize(); // Kiểm tra kích thước ngay khi component mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await headerController(setLoading);
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setIsOpen(false); // Đặt về mặc định là không mở khi ở desktop
    }
  }, [isDesktop]);
  
  const menuItems = [
    (role?.role?.RolePermissions?.includes("dashboard_view") && { link: "/", icon: "/icons/home.svg", label: "Trang chủ" }),
    (role?.role?.RolePermissions?.includes("course_view") && { link: "/courses", icon: "/icons/document.svg", label: "Khóa học" }),
    (role?.role?.RolePermissions?.includes("user_view") && { link: "/user", icon: "/icons/2user.svg", label: "Người dùng" }),
    (role?.role?.RolePermissions?.includes("admin_view") && { link: "/admin", icon: "/icons/work.svg", label: "Quản trị viên" }),
    (role?.role?.RolePermissions?.includes("payment_view") && { link: "/payment", icon: "/icons/paper.svg", label: "Hóa đơn" }),
    (role?.role?.RolePermissions?.includes("role_view") && { link: "/authorities", icon: "/icons/setting.svg", label: "Phân quyền" }),
    (role?.role?.RolePermissions?.includes("error_view") && { link: "/notification", icon: "/icons/notification.svg", label: "Thông báo" }),
    (role?.role?.RolePermissions?.includes("setting_view") && { link: "/setting", icon: "/icons/category.svg", label: "Thông tin web" }),
  ].filter(item => item);;
  
  const adminAvatar = data?.setting?.user?.AdminAvatar || "/profile.svg";

  console.log("SideBar => ", data)
  return (
    <>
      {isOpen && !isDesktop && (
        <div
          className="fixed top-0 left-0 w-full h-full z-60"
          onClick={() => setIsOpen(false)} // Đóng Sidebar khi nhấn vào overlay
        ></div>
      )}
      <aside
        className={`fixed top-0 left-0 z-40 bg-white text-white min-h-screen transition-all duration-300 ${isDesktop || isOpen ? `w-[310px] mt-[${headerHeight}px]` : "w-0 "} overflow-hidden`}
        // Thay thế giá trị top bằng chiều cao header
        style={{
          boxShadow: isOpen ? "4px 0px 30px 0px rgba(0, 0, 0, 0.2)" : "none", // Đổ bóng chỉ khi Sidebar mở
        }}
        onClick={(e) => e.stopPropagation()} // Ngăn sự kiện lan đến overlay
      >
        <div className="flex gap-2 justify-evenly items-center px-3 w-full pt-[20px] pb-[27px]">
          <img
            loading="lazy"
            src={data?.setting?.user?.AdminAvatar ? data.setting.user.AdminAvatar : "/profile.svg"}
            alt="Profile"
            className="rounded-full object-cover"
            style={{ width: "65px", height: "65px" }}
          />
          <div>
            <h4 className="mb-1 font-semibold shrink" style={{ fontSize: "28px", color: "black" }}>
              {data?.setting?.user?.AdminFullName?.split(" ").slice(-2).join(" ")}
            </h4>
            <h4 className="font-medium text-lg text-black">{data?.role?.RoleName || "Không có vai trò"}</h4>
          </div>
        </div>


        <div className="flex flex-col overflow-auto px-3">
          {menuItems.map((item, index) => (
            <Link to={item.link} key={index}>
              <div
                className={`flex items-center text-xl gap-4 px-2 py-4 ${(location.pathname.includes(item.link) && item.link !== "/") || (item.link === "/" && location.pathname === "/") ? "bg-[#EBF1F9] font-medium p-1 rounded-xl" : ""
                  }`}
                style={{ fontSize: "20px", color: "black" }}
              >
                <img
                  loading="lazy"
                  src={item.icon}
                  alt=""
                  className="object-contain"
                  style={{ width: "24px", height: "24px" }}
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