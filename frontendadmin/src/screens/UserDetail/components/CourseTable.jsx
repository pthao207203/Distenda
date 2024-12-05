import * as React from "react";
import CourseTableRow from "./CourseTableRow";

export default function CourseTable() {
  const courseData = [
    {
      courseId: "HTML2024",
      courseName: "HTML cơ bản",
      joinDate: "29/11/2024 23:13",
      lastUpdate: "29/11/2024 23:13",
      status: "Đã học xong"
    },
    {
      courseId: "HTML2024",
      courseName: "HTML cơ bản",
      joinDate: "29/11/2024 23:13",
      lastUpdate: "29/11/2024 23:13",
      status: "Đang học"
    },
    {
      courseId: "HTML2024",
      courseName: "HTML cơ bản",
      joinDate: "29/11/2024 23:13",
      lastUpdate: "29/11/2024 23:13",
      status: "Đã học xong"
    },
    {
      courseId: "HTML2024",
      courseName: "HTML cơ bản",
      joinDate: "29/11/2024 23:13",
      lastUpdate: "29/11/2024 23:13",
      status: "Đang học"
    },
    {
      courseId: "HTML2024",
      courseName: "HTML cơ bản",
      joinDate: "29/11/2024 23:13",
      lastUpdate: "29/11/2024 23:13",
      status: "Đã học xong"
    }
  ];

  return (
<div className="flex flex-col pb-16 mt-6 w-full font-medium leading-none max-md:max-w-full">
  <div className="flex overflow-hidden w-full rounded-3xl bg-slate-500 max-h-[70px] max-md:max-w-full">
    {/* Mã khóa học */}
    <div className="flex flex-1 shrink justify-center items-center px-3 py-0 h-[70px] bg-indigo-50 basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
      <span className="text-center">Mã khóa học</span>
    </div>

    {/* Tên khóa */}
    <div className="flex flex-1 shrink justify-center items-center px-3 py-0 h-[70px] text-white basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
      <span className="text-center">Tên khóa</span>
    </div>

    {/* Ngày tham gia */}
    <div className="flex flex-1 shrink justify-center items-center px-3 py-0 h-[70px] bg-indigo-50 basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
      <span className="text-center">Ngày tham gia</span>
    </div>

    {/* Lần cuối cập nhật */}
    <div className="flex flex-1 shrink justify-center items-center px-3 py-0 h-[70px] text-white basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
      <span className="text-center">Lần cuối cập nhật</span>
    </div>

    {/* Trạng thái */}
    <div className="flex flex-1 shrink justify-center items-center px-3 py-0 h-[70px] bg-indigo-50 basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
      <span className="text-center">Trạng thái</span>
    </div>
  </div>

  {/* Dòng dữ liệu */}
  {courseData.map((course, index) => (
    <CourseTableRow key={index} {...course} />
  ))}
</div>


  );
}