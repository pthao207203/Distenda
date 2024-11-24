import * as React from "react";

function CourseTableRow({ id, name, sold, price, profit, status }) {
  const statusClass = status === "active" ? "bg-lime-300" : "bg-slate-300";
  const statusText = status === "active" ? "Hoạt động" : "Tạm dừng";

  return (
    <article className="flex flex-wrap mt-6 w-full bg-white min-h-[70px] max-md:max-w-full">
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full whitespace-nowrap bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="gap-2.5 self-stretch my-auto">{id}</span>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="gap-2.5 self-stretch my-auto">{name}</span>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full whitespace-nowrap bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="gap-2.5 self-stretch my-auto">{sold}</span>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full whitespace-nowrap basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="gap-2.5 self-stretch my-auto">{price}</span>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full whitespace-nowrap bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="gap-2.5 self-stretch my-auto">{profit}</span>
      </div>
      <div className="flex flex-col flex-1 shrink justify-center p-3 basis-0">
        <div className={`flex gap-3 justify-center items-center px-3 py-2.5 w-full ${statusClass} min-h-[40px] rounded-[99px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]`}>
          <span className="gap-2.5 self-stretch my-auto">{statusText}</span>
        </div>
      </div>
    </article>
  );
}

export default CourseTableRow;