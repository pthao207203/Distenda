import * as React from "react";

function CourseTableRow({ item }) {
  return (
    <div className="flex flex-wrap mt-6 w-full bg-white min-h-[70px]">
      {/* Mã khóa học */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <div className="gap-2.5 self-stretch my-auto">{item.courseId}</div>
      </div>
      {/* Tên khóa học */}
      <div className="flex flex-1 shrink justify-center items-center bg-[#EBF1F9] min-w-[240px] text-neutral-900">
        <div className="gap-2.5 self-stretch my-auto">{item.courseName}</div>
      </div>
      {/* Giá */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <div className="gap-2.5 self-stretch my-auto">{item.price}</div>
      </div>
    </div>
  );
}

export default CourseTableRow;
