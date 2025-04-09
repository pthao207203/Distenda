import * as React from "react";

export default function CourseTableHeader() {

  return (
<div className="flex shrink overflow-hidden w-full rounded-t-3xl mt-3 min-h-[70px] max-md:max-w-full">
  <div className="flex overflow-hidden w-full rounded-t-3xl bg-[#6C8299] min-h-[70px] max-md:max-w-full">
    {/* Mã khóa học */}
    <div className="flex shrink justify-center items-center px-3 py-0 min-h-[70px] text-white basis-1/5 min-w-0 ">
      <span className="text-center">Số thứ tự</span>
    </div>

    {/* Tên khóa */}
    <div className="flex flex-1 shrink justify-center items-center px-3 py-0 min-h-[70px] bg-[#EBF1F9] basis-1/5 min-w-0 ">
      <span className="text-center">Tên khóa</span>
    </div>

    {/* Ngày tham gia */}
    <div className="flex flex-1 shrink justify-center items-center px-3 py-0 min-h-[70px] text-white basis-1/5 min-w-0 ">
      <span className="text-center">Ngày bắt đầu học</span>
    </div>

    {/* Lần cuối cập nhật */}
    <div className="flex flex-1 shrink justify-center items-center px-3 py-0 min-h-[70px] bg-[#EBF1F9] basis-1/5 min-w-0 ">
      <span className="text-center">Lần cuối cập nhật</span>
    </div>

    {/* Trạng thái */}
    <div className="flex flex-1 shrink justify-center items-center px-3 py-0 min-h-[70px] text-white basis-1/5 min-w-0 ">
      <span className="text-center">Trạng thái</span>
    </div>
  </div>
</div>


  );
}