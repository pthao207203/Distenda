import React from "react";

const navItems = [
  { id: "overview", label: "Tổng quan" },
  { id: "content", label: "Nội dung khóa học" },
  { id: "instructor", label: "Thông tin giảng viên" },
  { id: "reviews", label: "Đánh giá" },
];

export default function CourseNavigation({ onNavigate }) {
  return (
<nav className="flex flex-wrap flex-grow items-center justify-between p-[12px] w-full text-xl font-semibold bg-white text-neutral-900 max-md:flex-col max-md:max-w-full">
  {navItems.map((item) => (
    <button
      key={item.id}
      onClick={() => onNavigate(item.id)} // Gọi hàm onNavigate với id của section
      className="flex-1 z-0 justify-center items-center text-center px-5 py-2 hover:bg-[#CFF500] active:bg-[#CFF500] transition whitespace-nowrap max-md:whitespace-normal max-md:w-full"
    >
      <span className="flex gap-2.5 justify-center py-2 my-auto">{item.label}</span>
    </button>
  ))}
</nav>
  );
}
