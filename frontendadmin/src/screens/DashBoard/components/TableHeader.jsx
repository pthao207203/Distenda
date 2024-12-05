import * as React from "react";

export default function TableHeader() {
  return (
    <div className="flex overflow-hidden w-full rounded-3xl bg-slate-500 h-[70px] max-md:max-w-full">
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

      {/* Trạng thái */}
      <div className="flex flex-1 justify-center items-center text-white min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="text-center">Trạng thái</span>
      </div>
    </div>
  );
}
