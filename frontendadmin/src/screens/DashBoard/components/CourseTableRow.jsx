import * as React from "react";

export default function CourseTableRow({ courseId, name, sold, price, profit, state }) {
  return (
    <div className="flex shrink overflow-hidden my-3 bg-white h-[70px] w-full">
      {/* Mã khóa học */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{courseId}</span>
      </div>

      {/* Tên sản phẩm */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{name}</span>
      </div>

      {/* Số lượng đã bán */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{sold}</span>
      </div>

      {/* Giá */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{price}</span>
      </div>

      {/* Lợi nhuận */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate w-[95%]">{profit}</span>
      </div>

      {/* Trạng thái */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center">
        <div
          className={`self-center shrink w-[90%] max-w-full px-4 py-2 rounded-[99px] border-2 justify-center items-center inline-flex ${
            state === "Hoạt động" ? "bg-[#D1F669]" : "bg-[#FFD75B]"
          }`}
        >
          <span className="text-[#131313] text-center text-xl font-medium truncate">
            {state}
          </span>
        </div>
      </div>
    </div>
  );
}