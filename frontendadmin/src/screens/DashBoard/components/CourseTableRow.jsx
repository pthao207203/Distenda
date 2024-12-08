import * as React from "react";

export default function CourseTableRow({ courseId, name, sold, price, profit }) {
  return (
    <div className="flex shrink overflow-hidden mt-6 bg-white max-h-[70px]">
      {/* Mã khóa học */}
      <div className="flex flex-1  justify-center items-center bg-indigo-50 ">
        <span>{courseId}</span>
      </div>

      {/* Tên sản phẩm */}
      <div className="flex flex-1  justify-center items-center ">
        <span>{name}</span>
      </div>

      {/* Số lượng đã bán */}
      <div className="flex flex-1  justify-center items-center bg-indigo-50 ">
        <span>{sold}</span>
      </div>

      {/* Giá */}
      <div className="flex flex-1 shrink justify-center items-center ">
        <span>{price}</span>
      </div>

      {/* Lợi nhuận */}
      <div className="flex flex-1 justify-center items-center bg-indigo-50 ">
        <span>{profit}</span>
      </div>

      {/* Hành động */}
      <div className="flex p-3 flex-col justify-center items-center gap-2.5">
        <div className="self-stretch shrink max-h-10 px-11 py-4 bg-[#d1f569] rounded-[99px] border-2 justify-center items-center gap-3 inline-flex">
          <span className="text-[#131313] text-xl font-medium max-md:text-lg">Hoạt động</span>
        </div>
      </div>
    </div>
  );
}
