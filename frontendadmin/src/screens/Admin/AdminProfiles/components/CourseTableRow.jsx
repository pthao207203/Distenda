import * as React from "react";
import { useNavigate } from "react-router-dom";

const CourseTableRow = ({ course, name }) => {
  const navigate = useNavigate()
  const statusClass =
    course.CourseStatus === 1 ? "bg-[#D1F669]" : "bg-[#FFD75B]";
  const statusText =
    course.CourseStatus === 1 ? "Hoạt động" : "Tạm dừng";
  const onClick = () => {
    navigate(`/courses/detail/${course._id}`)
  }
  return (
    <div
      className="flex overflow-hidden flex-wrap mt-3 w-full bg-white min-h-[70px] cursor-pointer"
      onClick={onClick}
    >
      {/* Tên khóa học */}
      <div className="flex basis-1/6 min-w-0 p-3 shrink justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{course.CourseName}</span>
      </div>

      {/* Tên giảng viên */}
      <div className="flex basis-1/6 min-w-0 p-3 shrink justify-center items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{name}</span>
      </div>

      {/* Đã bán */}
      <div className="flex basis-1/6 min-w-0 p-3 shrink justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{course.CourseBought}</span>
      </div>

      {/* Giá */}
      <div className="flex basis-1/6 min-w-0 p-3 shrink justify-center items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{course.CoursePrice * ((100 - course.CourseDiscount) / 100)}</span>
      </div>

      {/* Lợi nhuận */}
      <div className="flex basis-1/6 min-w-0 p-3 shrink justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{course?.CourseProfit ? course.CourseProfit : 0}</span>
      </div>

      {/* Trạng thái */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center">
        <div
          className={`self-center shrink w-[90%] max-w-full px-4 py-2 justify-center items-center inline-flex  ${statusClass} min-h-[40px] rounded-[99px]`}
        >
          <div className="text-[#131313] text-center text-xl font-medium truncate">{statusText}</div>
        </div>
      </div>
    </div>
  );
};

export default CourseTableRow;
