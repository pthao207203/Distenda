import React, { useState } from "react";

function CourseTableHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Đảo trạng thái dropdown
  };

  const handleOptionClick = (option) => {
    alert(`Bạn đã chọn: ${option}`);
    setIsDropdownOpen(false); // Đóng dropdown sau khi chọn
  };

  return (
    <div className="flex shrink overflow-hidden w-full rounded-t-3xl mt-3 bg-[#6C8299] min-h-[70px] max-md:max-w-full">
      {/* Mã khóa học */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-center">Tên khóa học</span>
      </div>

      {/* Tên khóa */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center text-white">
        <span className="text-center">Giảng viên</span>
      </div>

      {/* Đã bán */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-center">Đã bán</span>
      </div>

      {/* Giá */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center text-white">
        <span className="text-center">Giá</span>
      </div>

      {/* Lợi nhuận */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-center">Lợi nhuận</span>
      </div>

      {/* Dropdown Trạng thái */}
      <div className="relative flex basis-1/6 min-w-0 justify-center items-center text-white">
        {/* Nút dropdown */}
        <button
          className="flex items-center gap-2 text-center"
          onClick={toggleDropdown}
        >
          <span className="text-center">Trạng thái</span>
          {/* <span className="transform transition-transform">
            {isDropdownOpen ? "▲" : "▼"}
          </span> */}
        </button>

        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg z-60 w-auto max-w-[150px]">
            <ul className="flex flex-col gap-2 p-3">
              <li
                className="cursor-pointer px-4 py-2 bg-[#D1F669] hover:bg-gray-300 rounded-lg"
                onClick={() => handleOptionClick("Hoạt động")}
              >
                Hoạt động
              </li>
              <li
                className="cursor-pointer px-4 py-2 bg-[#FFD75B] hover:bg-gray-300 rounded-lg"
                onClick={() => handleOptionClick("Tạm dừng")}
              >
                Tạm dừng
              </li>
            </ul>
          </div>
        )}
      </div>

    </div>
  );
}

export default CourseTableHeader;
