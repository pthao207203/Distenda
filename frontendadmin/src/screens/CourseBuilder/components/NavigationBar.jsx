import * as React from "react";

const navItems = [
  { text: "Khóa học", icon: "ext_2-" },
  { text: "HTML cơ bản", icon: "ext_3-" },
  { text: "Tổng quan về HTML", icon: "ext_4-" },
  { text: "Bài 1", icon: null }
];

export function NavigationBar() {
  return (
    <nav className="flex flex-wrap items-center px-5 w-full text-lg font-semibold leading-none bg-white text-neutral-900 max-md:max-w-full" aria-label="Breadcrumb">
      {navItems.map((item, index) => (
        <div key={index} className="flex gap-3 items-center self-stretch px-3 py-1.5 my-auto">
          <div className="gap-2.5 self-stretch my-auto">{item.text}</div>
          {item.icon && (
            <img
              loading="lazy"
              src={`https://cdn.builder.io/api/v1/image/assets/TEMP/ad72c9c285058cf0f260756264a337d71455b1b34182dd0a027042e7bec42253?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e`}
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
            />
          )}
        </div>
      ))}
    </nav>
  );
}