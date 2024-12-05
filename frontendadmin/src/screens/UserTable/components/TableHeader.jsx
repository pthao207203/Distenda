import * as React from "react";

function TableHeader() {
  return (
    <div className="flex overflow-hidden w-full rounded-3xl bg-slate-500 h-[70px] max-md:max-w-full">
      {/* Mã người dùng */}
      <div className="flex flex-1 justify-center items-center bg-indigo-50 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="text-center">Mã người dùng</span>
      </div>

      {/* Tên người dùng */}
      <div className="flex flex-1 justify-center items-center text-white min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="text-center">Tên người dùng</span>
      </div>

      {/* Thời gian tham gia */}
      <div className="flex flex-1 justify-center items-center bg-indigo-50 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="text-center">Thời gian tham gia</span>
      </div>

      {/* Doanh thu */}
      <div className="flex flex-1 justify-center items-center text-white min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="text-center">Doanh thu</span>
      </div>

      {/* Lần cuối cập nhật */}
      <div className="flex flex-1 justify-center items-center bg-indigo-50 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="text-center">Lần cuối cập nhật</span>
      </div>
    </div>
  );
}

export default TableHeader;
