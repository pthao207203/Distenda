import * as React from "react";

export default function CourseTableRow({ courseId, name, sold, price, profit }) {
  return (
    <div className="flex overflow-hidden flex-wrap mt-6 w-280 bg-white h-[70px]">
      {/* Mã khóa học */}
      <div className="flex flex-1 shrink justify-center items-center bg-indigo-50 min-w-[240px]">
        <span>{courseId}</span>
      </div>

      {/* Tên sản phẩm */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <span>{name}</span>
      </div>

      {/* Số lượng đã bán */}
      <div className="flex flex-1 shrink justify-center items-center bg-indigo-50 min-w-[240px]">
        <span>{sold}</span>
      </div>

      {/* Giá */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <span>{price}</span>
      </div>

      {/* Lợi nhuận */}
      <div className="flex flex-1 shrink justify-center items-center bg-indigo-50 min-w-[240px]">
        <span>{profit}</span>
      </div>

      {/* Hành động */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <div className="flex gap-3 justify-center items-center px-14 min-w-[240px] py-2.5 w-280 bg-lime-300 min-h-[40px] rounded-[99px]">
          <span>Hoạt động</span>
        </div>
      </div>
    </div>
  );
}
