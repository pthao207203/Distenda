import * as React from "react";
import Cookies from "js-cookie";

function TaskBarItem({ text, onClick }) {
    return (
      <button className="flex items-center text-left first-letter:justify-start px-3 py-4 w-full"
          onClick={onClick} // Gọi hàm onClick khi nhấn vào button
          tabIndex="0"
          role="button"
        >
          {text}
    </button>
);
}

function TaskBar() {
    // Hàm xử lý đăng xuất
    const handleLogout = () => {
    // Xóa token trong cookies
    Cookies.remove("user_token");

    // Có thể thêm logic để điều hướng người dùng hoặc thông báo đăng xuất thành công
    alert("Đã đăng xuất thành công!");

    // Nếu cần điều hướng người dùng về trang khác sau khi đăng xuất, có thể sử dụng `useNavigate` từ react-router-dom
    // ví dụ: navigate('/login');
  };
  const menuItems = [
    { text: "Thông báo" },
    { text: "Thông tin học viên" },
    { text: "Đăng xuất", onClick: handleLogout }
  ];

  return (
    <div className="flex flex-col px-4 py-3 justify-center text-xl leading-none text-white bg-gradient-to-b from-[#131313]/90 via-[#1B1B1B]/90 to-[#403F3F]/90 backdrop-blur-[20px]">
      {menuItems.map((item, index) => (
        <div        
            onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(0, 0, 0, 0.6)") // Hiệu ứng hover
            }
            onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(0, 0, 0, 0)") // Reset khi rời chuột
            }>
        <TaskBarItem key={index} text={item.text} onClick={item.onClick}/>
        </div>
      ))}
    </div>
  );
}

export default TaskBar;