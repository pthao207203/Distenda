import * as React from "react";

export default function CourseTableRow({ courseId, name, sold, price, profit, state }) {
  return (
    <div className="flex shrink overflow-hidden my-3 bg-white h-[70px] w-full">
      {/* Mã khóa học */}
      <div className="flex flex-1 shrink justify-center items-center bg-[#EBF1F9] ">
        <span>{courseId}</span>
      </div>

      {/* Tên sản phẩm */}
      <div className="flex flex-1 shrink justify-center items-center ">
        <span>{name}</span>
      </div>

      {/* Số lượng đã bán */}
      <div className="flex flex-1 shrink justify-center items-center bg-[#EBF1F9] ">
        <span>{sold}</span>
      </div>

      {/* Giá */}
      <div className="flex flex-1 shrink justify-center items-center ">
        <span>{price}</span>
      </div>

      {/* Lợi nhuận */}
      <div className="flex flex-1 shrink justify-center items-center bg-[#EBF1F9] ">
        <span>{profit}</span>
      </div>

      {/* Trạng thái */}
      <div className="flex flex-1 shrink justify-center items-center">
        <div className="self-center shrink max-h-10 px-11 py-4 bg-[#d1f569] rounded-[99px] border-2 justify-center items-center inline-flex">
          <span className="text-[#131313] text-center text-xl font-medium max-md:text-lg">{state}</span>
        </div>
      </div>
    </div>
  );
}
