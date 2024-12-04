import React, { useState } from "react";

function CourseTableHeader() {
  // Sử dụng useState để quản lý trạng thái mở/đóng của dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Hàm xử lý khi click vào Trạng thái
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Hàm xử lý khi chọn từng mục trong dropdown
  const handleOptionClick = (option) => {
    alert(`Bạn đã chọn: ${option}`);
    setIsDropdownOpen(false); // Đóng dropdown sau khi chọn
  };

  return (
    <header className="flex overflow-hidden flex-wrap w-full rounded-3xl bg-slate-500 min-h-[70px] max-md:max-w-full">
      {/* Các cột khác */}
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="gap-2.5 self-stretch my-auto">Mã khóa học</span>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full text-white basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="gap-2.5 self-stretch my-auto">Tên khóa</span>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="gap-2.5 self-stretch my-auto">Đã bán</span>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full text-white whitespace-nowrap basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="gap-2.5 self-stretch my-auto">Giá</span>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="gap-2.5 self-stretch my-auto">Lợi nhuận</span>
      </div>

      {/* Dropdown Trạng thái */}
      <div className="relative flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-amber-300 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        {/* Button mở dropdown */}
        <button
          className="flex items-center gap-2"
          onClick={toggleDropdown}
        >
          <span className="gap-2.5 self-stretch my-auto">Trạng thái</span>
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
