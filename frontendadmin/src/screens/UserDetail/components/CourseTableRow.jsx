import * as React from "react";
import moment from 'moment';

export default function CourseTableRow({ course, index}) {
  const statusClass = course.CourseStatus === 0 ? "bg-[#D1F669]" : "bg-[#FFD75B]";
  const statusText = course.CourseStatus === 0 ? "Đang học" : "Đã học xong";
  return (
    <div className="flex overflow-hidden flex-wrap mt-3 w-full bg-white min-h-[70px] cursor-pointer">
      {/* STT */}
      <div className="flex basis-1/5 min-w-0 p-3 shrink justify-center items-center ">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{index+1}</span>
      </div>
      
      {/* Tên khóa */}
      <div className="flex basis-1/5 min-w-0 p-3 shrink justify-center items-center bg-[#EBF1F9] ">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{course.course.CourseName}</span>
      </div>

      {/* Ngày tham gia */}
      <div className="flex basis-1/5 min-w-0 shrink justify-center items-center ">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{moment(course.CourseDayAt).format("DD/MM/YYYY hh:mm:ss")}</span>
      </div>

      {/* Lần cuối cập nhật */}
      <div className="flex basis-1/5 min-w-0 shrink justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{moment(course.CourseDayAt).format("DD/MM/YYYY hh:mm:ss")}</span>
      </div>

      {/* Trạng thái */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center">
        <div className={`self-center shrink w-[90%] max-w-full px-4 py-2 justify-center items-center inline-flex ${statusClass} min-h-[40px] rounded-[99px]`}>
            <div className="text-center text-xl font-medium truncate">{statusText}</div>
            </div>
      </div>
    </div>
  );
}
