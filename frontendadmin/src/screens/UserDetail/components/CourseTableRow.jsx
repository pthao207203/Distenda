import * as React from "react";

export default function CourseTableRow({ courseId, courseName, joinDate, lastUpdate, status }) {
  const statusColors = {
    'Đã học xong': 'bg-amber-300',
    'Đang học': 'bg-lime-300',
  };

  return (
    <div className="flex overflow-hidden flex-wrap mt-6 w-full bg-white h-[70px] cursor-pointer">
      {/* Mã khóa học */}
      <div className="flex flex-1 shrink justify-center items-center bg-indigo-50 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span>{courseId}</span>
      </div>

      {/* Tên khóa */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span>{courseName}</span>
      </div>

      {/* Ngày tham gia */}
      <div className="flex flex-1 shrink justify-center items-center bg-indigo-50 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span>{joinDate}</span>
      </div>

      {/* Lần cuối cập nhật */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span>{lastUpdate}</span>
      </div>

      {/* Trạng thái */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <div className={`flex gap-3 justify-center items-center px-3 py-2.5 w-full ${statusColors[status]} min-h-[40px] rounded-[99px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]`}>
            <div className="gap-2.5 self-stretch my-auto">{status}</div>
            </div>
      </div>
    </div>
  );
}
