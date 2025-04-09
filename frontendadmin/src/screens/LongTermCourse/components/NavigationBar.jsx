import * as React from "react";

function NavigationBar() {
  return (
    <nav className="flex flex-wrap items-center px-5 mt-1.5 w-full text-lg font-semibold leading-none bg-white text-[#14375F] max-md:max-w-full">
      <div className="flex gap-3 items-center self-stretch px-3 py-1.5 my-auto">
        <span className="gap-2.5 self-stretch my-auto">Khóa học</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/c536dfa9b7619f310d15c246f8752220ec697d856df18b5cf8670929a3f9251c?apiKey=7a79403a23cb489f853e4845c47ede19&"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
        />
      </div>
      <div className="flex gap-3 items-center self-stretch px-3 py-1.5 my-auto min-w-[240px]">
        <span className="gap-2.5 self-stretch my-auto">
          Thêm khóa học dài hạn
        </span>
      </div>
    </nav>
  );
}

export default NavigationBar;