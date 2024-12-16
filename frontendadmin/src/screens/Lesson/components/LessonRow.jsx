import * as React from "react";

export default function LessonRow({ number, title, lastUpdated }) {
  return (
    <div className="flex flex-wrap mt-6 w-full bg-white min-h-[70px] max-md:max-w-full">
      <div className="flex gap-3 justify-center items-center px-3 py-5 h-full whitespace-nowrap bg-[#EBF1F9] shadow-[-6px_6px_0px_rgba(255,255,255,1)] w-[200px]">
        <div className="gap-2.5 self-stretch my-auto">{number}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{title}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-[#EBF1F9] basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{lastUpdated}</div>
      </div>
      <div className="flex gap-2.5 justify-center px-3 py-2 h-full whitespace-nowrap min-w-[240px] w-[245px]">
        <button className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-[#D1F669] basis-0 rounded-[99px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
          <div className="gap-2.5 self-stretch my-auto">Sửa</div>
        </button>
        <button className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-amber-300 basis-0 rounded-[99px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
          <div className="gap-2.5 self-stretch my-auto">Ẩn</div>
        </button>
      </div>
    </div>
  );
}
