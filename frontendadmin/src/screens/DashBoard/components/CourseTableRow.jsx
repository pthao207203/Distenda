import * as React from "react";

export default function CourseTableRow({ courseId, name, sold, price, profit }) {
  return (
    <div className="flex flex-wrap w-full bg-white min-h-[70px]">
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full whitespace-nowrap bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{courseId}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{name}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full whitespace-nowrap bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{sold}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full whitespace-nowrap basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{price}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full whitespace-nowrap bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{profit}</div>
      </div>
      <div className="flex flex-col flex-1 shrink justify-center p-3 basis-0">
        <div className="flex gap-3 justify-center items-center px-3 py-2.5 w-full bg-lime-300 min-h-[40px] rounded-[99px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
          <div className="gap-2.5 self-stretch my-auto">Hoạt động</div>
        </div>
      </div>
    </div>
  );
}