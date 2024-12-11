import * as React from "react";

export default function CourseTableRow({ courseId, courseName, joinDate, lastUpdate, status }) {
  const statusColors = {
    'Đã học xong': 'bg-amber-300',
    'Đang học': 'bg-lime-300',
  };

  return (
    <div className="flex overflow-hidden flex-wrap mt-6 w-full bg-white h-[70px] cursor-pointer">
      {/* Mã khóa học */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <span>{courseId}</span>
      </div>

      {/* Tên khóa */}
      <div className="flex flex-1 shrink justify-center items-center bg-[#EBF1F9] min-w-[240px]">
        <span>{courseName}</span>
      </div>

      {/* Ngày tham gia */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <span>{joinDate}</span>
      </div>

      {/* Lần cuối cập nhật */}
      <div className="flex flex-1 shrink justify-center items-center bg-[#EBF1F9] min-w-[240px]">
        <span>{lastUpdate}</span>
      </div>

      {/* Trạng thái */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <div className={`flex gap-3 justify-center items-center min-w-[240px] py-2.5 ${statusColors[status]} min-h-[40px] rounded-[99px]`}>
            <div className="gap-2.5 self-stretch my-auto">{status}</div>
            </div>
      </div>
    </div>
  );
}
