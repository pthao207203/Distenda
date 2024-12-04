import * as React from "react";
import Cookies from "js-cookie";

function TaskBarItem({ text, onClick }) {
    return (
      <div className="flex gap-3 items-center justify-start px-3 py-5 w-full">
        <button
          onClick={onClick} // Gọi hàm onClick khi nhấn vào button
          className="self-stretch my-auto text-left"
          tabIndex="0"
          role="button"
        >
          {text}
        </button>
      </div>
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
    <div className="flex flex-col px-5 py-3 justify-center text-xl leading-none text-white bg-gradient-to-b from-[#131313] via-[#1B1B1B] to-[#403F3F] backdrop-blur-[20px]">
      {menuItems.map((item, index) => (
        <TaskBarItem key={index} text={item.text} onClick={item.onClick}  />
      ))}
    </div>
  );
}

export default TaskBar;