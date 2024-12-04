import * as React from "react";

export default function TableHeader() {
  return (
    <header className="flex overflow-hidden flex-wrap w-full rounded-3xl bg-slate-500 min-h-[70px] max-md:max-w-full">
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <h2 className="gap-2.5 self-stretch my-auto">Mã khóa học</h2>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full text-white basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <h2 className="gap-2.5 self-stretch my-auto">Tên khóa</h2>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <h2 className="gap-2.5 self-stretch my-auto">Đã bán</h2>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full text-white whitespace-nowrap basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <h2 className="gap-2.5 self-stretch my-auto">Giá</h2>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <h2 className="gap-2.5 self-stretch my-auto">Lợi nhuận</h2>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-amber-300 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <h2 className="gap-2.5 self-stretch my-auto">Trạng thái</h2>
      </div>
    </header>
  );
}
