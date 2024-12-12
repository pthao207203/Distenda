import * as React from "react";

function CourseTableRow(course) {
  const statusClass = course.CourseStatus === 1 ? "bg-[#D1F669]" : "bg-[#FFD75B]";
  const statusText = course.CourseStatus === 1 ? "Hoạt động" : "Tạm dừng";

  return (
    <article className="flex overflow-hidden flex-wrap mt-3 w-full bg-white h-[70px] cursor-pointer">
      {/* Tên khóa học*/}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium px-3 truncate">{course.CourseName}</span>
      </div>

      {/* Tên sản phẩm */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{course.intructorFullName}</span>
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
        <span className="text-[#131313] text-center text-xl font-medium truncate">0</span>
      </div>

      {/* Trạng thái */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center ">
        <div className={`self-center shrink w-[90%] max-w-full px-4 py-2 rounded-[99px] border-2 justify-center items-center inline-flex ${statusClass} text-center`}
        >
          <span className="text-[#131313] text-center text-xl font-medium truncate">{statusText}</span>
        </div>
      </div>
    </article>
  );
}

export default CourseTableRow;
