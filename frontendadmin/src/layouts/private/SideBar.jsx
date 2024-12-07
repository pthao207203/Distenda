import * as React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const menuItems = [
    { link: "/", icon: "./icons/home.svg", label: "Trang chủ", isActive: false },
    { link: "/courses", icon: "./icons/document.svg", label: "Khóa học", isActive: false },
    { link: "/user", icon: "./icons/2user.svg", label: "Người dùng", isActive: false },
    { link: "/admin", icon: "./icons/work.svg", label: "Quản trị viên", isActive: false },
    { link: "/payment", icon: "./icons/paper.svg", label: "Hóa đơn", isActive: false },
    { link: "/", icon: "./icons/setting.svg", label: "Phân quyền", isActive: false },
    { link: "/", icon: "./icons/notification.svg", label: "Thông báo", isActive: false },
    { link: "/setting", icon: "./icons/category.svg", label: "Thông tin web", isActive: false },
  ];

  return (
    <div
      className="d-flex flex-column vh-100 bg-white"
      style={{ width: "350px", minWidth: "350px", maxWidth: "450px" }}
    >
      {/* Profile Section */}
      <div className="d-flex align-items-center gap-4 px-5 py-5 border-bottom">
        <img loading="lazy" src="./profile.svg" alt="Profile"
          className="rounded-circle object-fit-cover" style={{ width: "80px", height: "80px" }}
        />
        <div>
          <h4 className="mb-1 fw-bold" style={{ fontSize: "24px", color: "black" }}>Ngọc Khanh</h4> 
          <span style={{ fontSize: "18px", color: "black" }}>Manager</span> 
        </div>
      </div>

     {/* Menu Items */}
      <div className="flex-grow-1 overflow-auto">
        {menuItems.map((item, index) => (
          <Link to={item.link} key={index} className="text-decoration-none">
            <div className={`d-flex align-items-center gap-4 px-5 py-4 ${
                item.isActive ? "bg-light fw-bold" : ""
              }`}
              style={{ fontSize: "20px", color: "black" }} >
              <img loading="lazy" src={item.icon} alt=""
                className="object-contain" style={{ width: "36px", height: "36px" }} />
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
