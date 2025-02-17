import * as React from "react";

function TableRow({ id, name, joinDate, revenue, lastUpdate, onRowClick }) {
  return (
    <div
      className="flex overflow-hidden flex-wrap mt-6 w-full bg-white min-h-[70px] max-md:max-w-full cursor-pointer"
      onClick={() => onRowClick(id)} // Gọi hàm `onRowClick` khi click vào dòng
    >
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full whitespace-nowrap bg-indigo-50 basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{id}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{name}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{joinDate}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full whitespace-nowrap basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{revenue}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{lastUpdate}</div>
      </div>
    </div>
  );
}

export default TableRow;
