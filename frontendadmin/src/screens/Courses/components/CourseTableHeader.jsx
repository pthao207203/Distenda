import React, { useState } from "react";

function CourseTableHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    alert(`Bạn đã chọn: ${option}`);
    setIsDropdownOpen(false); // Đóng dropdown sau khi chọn
  };

  return (
    <header className="flex overflow-hidden flex-wrap w-full rounded-3xl bg-slate-500 h-[70px] max-md:max-w-full">
      {/* Mã khóa học */}
      <div className="flex flex-1 justify-center items-center bg-indigo-50 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="text-center">Mã khóa học</span>
      </div>

      {/* Tên khóa */}
      <div className="flex flex-1 justify-center items-center text-white min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="text-center">Tên khóa</span>
      </div>

      {/* Đã bán */}
      <div className="flex flex-1 justify-center items-center bg-indigo-50 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="text-center">Đã bán</span>
      </div>

      {/* Giá */}
      <div className="flex flex-1 justify-center items-center text-white min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="text-center">Giá</span>
      </div>

      {/* Lợi nhuận */}
      <div className="flex flex-1 justify-center items-center bg-indigo-50 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="text-center">Lợi nhuận</span>
      </div>

      {/* Dropdown Trạng thái */}
      <div className="relative flex flex-1 justify-center items-center bg-amber-300 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        {/* Nút dropdown */}
        <button
          className="flex items-center gap-2 text-center"
          onClick={toggleDropdown}
        >
          <span className="text-center">Trạng thái</span>
          <span className="transform transition-transform">
            {isDropdownOpen ? "▲" : "▼"}
          </span>
        </button>

        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg z-10">
            <ul className="flex flex-col gap-2 p-3">
              <li
                className="cursor-pointer px-4 py-2 bg-green-100 hover:bg-green-200 rounded-lg"
                onClick={() => handleOptionClick("Hoạt động")}
              >
                Hoạt động
              </li>
              <li
                className="cursor-pointer px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                onClick={() => handleOptionClick("Tạm dừng")}
              >
                Tạm dừng
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default CourseTableHeader;
