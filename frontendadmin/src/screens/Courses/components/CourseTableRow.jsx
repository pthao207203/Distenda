import * as React from "react";

function CourseTableRow({ id, name, sold, price, profit, status }) {
  const statusClass = status === "active" ? "bg-[#D1F669]" : "bg-[#FFD75B]";
  const statusText = status === "active" ? "Hoạt động" : "Tạm dừng";

  return (
    <article className="flex overflow-hidden flex-wrap mt-3 w-full bg-white h-[70px] cursor-pointer">
      {/* Mã khóa học*/}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{id}</span>
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
        <span className="text-[#131313] text-center text-xl font-medium truncate">{profit}</span>
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
