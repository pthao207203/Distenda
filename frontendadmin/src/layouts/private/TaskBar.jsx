import * as React from "react";
import { useNavigate } from "react-router-dom";
import { logoutController } from "../../controllers/auth.controller";

function TaskBarItem({ text, onClick }) {
  return (
    <button className="flex items-center text-left first-letter:justify-start px-3 py-4 w-full"
      onClick={onClick} // Gọi hàm onClick khi nhấn vào button
      tabIndex="0"
    >
      {text}
    </button>
  );
}

function TaskBar({ handleTaskBarToggle }) {
  // Hàm xử lý đăng xuất
  const handleLogout = async () => {
    try {
      // Gọi API xử lý
      await logoutController(navigate);
      alert("Đã đăng xuất thành công!");
    } catch (err) {
      console.log(err)
    }
  };
  const navigate = useNavigate(); // Khởi tạo useNavigate
  const handleProfileNavigation = () => {
    handleTaskBarToggle();
    navigate("/admin-account"); // Điều hướng đến trang profile
  };
  const handleBanne = () => {
    handleTaskBarToggle();
    navigate("/banner"); // Điều hướng đến trang Banner
  };
  const menuItems = [
    { text: "Tài khoản", onClick: handleProfileNavigation },
    { text: "Banner", onClick: handleBanne },
    { text: "Đăng xuất", onClick: handleLogout }
  ];

  return (
    <div className="flex flex-col justify-center text-xl leading-none text-[#131313] bg-white border-l border-r border-b border-[#cdd5de] min-w-[200px]">
      {menuItems.map((item, index) => (
        <div
          key={index}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgb(235, 241, 249)") // Hiệu ứng hover
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(0, 0, 0, 0)") // Reset khi rời chuột
          }>
          <TaskBarItem text={item.text} onClick={item.onClick} />
        </div>
      ))}
    </div>
  );
}

export default TaskBar;