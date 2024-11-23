import * as React from "react";

function CourseTableHeader() {
  return (
    <header className="flex overflow-hidden flex-wrap w-full rounded-3xl bg-slate-500 min-h-[70px] max-md:max-w-full">
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="gap-2.5 self-stretch my-auto">Mã khóa học</span>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full text-white basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="gap-2.5 self-stretch my-auto">Tên khóa</span>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="gap-2.5 self-stretch my-auto">Đã bán</span>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full text-white whitespace-nowrap basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="gap-2.5 self-stretch my-auto">Giá</span>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="gap-2.5 self-stretch my-auto">Lợi nhuận</span>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-amber-300 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="gap-2.5 self-stretch my-auto">Trạng thái</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/55c441b6aa3ff892ae620315402461269bf0bc841283bea547b5e2762d900a11?apiKey=ce9d43b270ae41158192dec03af70a1a&"
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
          alt=""
        />
      </div>
    </header>
  );
}

export default CourseTableHeader;