import React from 'react';
import UserProfile from './UserProfile';

const SideBar = () => {
  const menuItems = [
    "Khóa học của tôi",
    "Đang học",
    "Đã hoàn thành",
    "Thi thử",
    "Bài tập"
  ];

  return (
    <aside data-layername="taskBar" className="fixed flex flex-col pt-5 mx-auto leading-none text-white bg-black pb-[536px] max-md:pb-24 max-md:mt-1.5 w-full max-w-md">
      <UserProfile />
      <nav data-layername="khoaHọc" className="flex flex-col mt-7 w-full text-3xl font-light">
        {menuItems.map((item, index) => (
          <div key={index} data-layername="button" className="flex gap-3 items-center px-6 py-6 w-full min-h-[77px] max-md:px-5">
            <div data-layername="button" className="flex-1 shrink gap-2.5 self-stretch my-auto w-full min-w-[240px]">
              {item}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;