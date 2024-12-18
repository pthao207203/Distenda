import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function CourseTableRow(course) {
  const navigate = useNavigate()
  const onClick = () => {
    navigate(`/courses/detail/${course._id}`)
  }
  return (
    <div onClick={onClick} className="flex shrink overflow-hidden mt-3 bg-white cursor-pointer min-h-[70px] w-full">
      {/* Mã khóa học */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{course.CategoryName}</span>
      </div>

      {/* Tên sản phẩm */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center">
        <span className="text-[#131313] text-center text-xl px-3 font-medium truncate">{course.CourseName}</span>
      </div>

      {/* Số lượng đã bán */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{course.CourseBought}</span>
      </div>

      {/* Giá */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{course.CoursePrice * ((100 - course.CourseDiscount) / 100)}</span>
      </div>

      {/* Lợi nhuận */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{course.CourseProfit ? course.CourseProfit : 0}</span>
      </div>

      {/* Trạng thái */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center">
        <div
          className={`self-center shrink w-[90%] max-w-full px-4 py-2 rounded-[99px] justify-center items-center inline-flex ${course.CourseStatus === 1 ? "bg-[#D1F669]" : "bg-[#FFD75B]"
            }`}
        >
          <span className="text-[#131313] text-center text-xl font-medium truncate">
            {course.CourseStatus === 1 ? "Hoạt động" : "Tạm dừng"}
          </span>
        </div>
      </div>
    </div>
  );
}