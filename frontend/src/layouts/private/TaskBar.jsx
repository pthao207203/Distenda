import * as React from "react";
import TaskBarItem from "./TaskBarItem";

function TaskBarItem({ text }) {
    return (
      <div className="flex gap-3 items-center px-3 py-5 w-full max-w-[211px]">
        <div className="gap-2.5 self-stretch my-auto" tabIndex="0" role="button">
          {text}
        </div>
      </div>
    );
}

function TaskBar() {
  const menuItems = [
    { text: "Thông báo" },
    { text: "Thông tin học viên" },
    { text: "Đăng xuất" }
  ];

  return (
    <div className="flex flex-col justify-center px-5 py-4 text-xl leading-none text-white bg-neutral-900 bg-opacity-80 max-w-[247px]">
      {menuItems.map((item, index) => (
        <TaskBarItem key={index} text={item.text} />
      ))}
    </div>
  );
}

export default TaskBar;