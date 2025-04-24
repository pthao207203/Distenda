import * as React from "react";
import { useNavigate } from "react-router-dom";

function CourseTableRow(course) {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate(`/courses/detail/${course?._id}`); // Điều hướng đến trang CourseDetailsPage với ID khóa học
  };

  const statusClass =
    course?.CourseStatus === 1 ? "bg-[#D1F669]" : "bg-[#FFD75B]";
  const statusText =
    course?.CourseStatus === 1 ? "Hoạt động" : "Tạm dừng";

  return (
    <article
      className="flex overflow-hidden flex-wrap mt-3 w-full bg-white min-h-[70px] cursor-pointer hover:bg-gray-100 transition-colors"
      onClick={handleRowClick} // Thêm sự kiện onClick
    >
      {/* Tên khóa học */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium px-3 truncate">
          {course?.CourseName}
        </span>
      </div>

      {/* Tên giảng viên*/}
      <div className="flex basis-1/6 min-w-0 p-3 justify-center items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{course?.intructorFullName || "Không có"}</span>
      </div>

      {/* Số lượng đã bán */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">
          {course?.CourseBought}
        </span>
      </div>

      {/* Giá */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">
          {course?.CoursePrice * ((100 - course.CourseDiscount) / 100)}
        </span>
      </div>

      {/* Lợi nhuận */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">
          {course?.CourseProfit * course?.CourseBought}
        </span>
      </div>

      {/* Trạng thái */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center">
        <div
          className={`self-center shrink w-[90%] max-w-full px-4 py-2 rounded-[99px] border-2 justify-center items-center inline-flex ${statusClass} text-center`}
        >
          <span className="text-[#131313] text-center text-xl font-medium truncate">
            {statusText}
          </span>
        </div>
      </div>
    </article>
  );
}


export default CourseTableRow;
