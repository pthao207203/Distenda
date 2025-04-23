import React from "react";

const navItems = [
  { id: "overview", label: "Tổng quan" },
  { id: "content", label: "Nội dung khóa học" },
  { id: "instructor", label: "Thông tin giảng viên" },
  { id: "reviews", label: "Đánh giá" },
];

export default function CourseNavigation({ onNavigate }) {
  return (
    <nav className="flex flex-wrap flex-grow items-center justify-between p-[12px] w-full text-[1.25rem] max-lg:text-[18px] font-semibold bg-white text-neutral-900 max-lg:flex-col max-lg:max-w-full">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)} // Gọi hàm onNavigate với id của section
          className="flex-1 z-0 justify-center items-center text-center px-5 py-2 hover:bg-[#CFF500] active:bg-[#CFF500] transition whitespace-nowrap max-lg:whitespace-normal max-lg:w-full"
        >
          <span className="flex gap-2.5 justify-center py-2 my-auto">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
