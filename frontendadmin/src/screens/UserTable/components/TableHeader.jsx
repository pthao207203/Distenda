import * as React from "react";

function TableHeader() {
  return (
    <div className="flex overflow-hidden flex-wrap w-full rounded-3xl bg-slate-500 min-h-[70px] max-md:max-w-full">
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">Mã người dùng</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full text-white basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">Tên người dùng</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">Thời gian tham gia</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full text-white basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">Doanh thu</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">Lần cuối cập nhật</div>
      </div>
    </div>
  );
}

export default TableHeader;