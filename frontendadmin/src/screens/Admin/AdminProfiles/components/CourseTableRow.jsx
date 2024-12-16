import * as React from "react";

const CourseTableRow = ({ category, name, sold, price, profit, status }) => {
  const getStatusStyle = (status) => {
    return status === "Hoạt động" ? "bg-[#D1F669]" : "bg-[#FFD75B]";
  };

  return (
    <div className="flex overflow-hidden flex-wrap mt-3 w-full bg-white h-[70px] cursor-pointer">
      {/* Danh mục */}
      <div className="flex basis-1/6 min-w-0 p-3 shrink justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{category}</span>
      </div>
      
      {/* Tên sản phẩm */}
      <div className="flex basis-1/6 min-w-0 p-3 shrink justify-center items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{name}</span>
      </div>

      {/* Đã bán */}
      <div className="flex basis-1/6 min-w-0 p-3 shrink justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{sold}</span>
      </div>

      {/* Giá */}
      <div className="flex basis-1/6 min-w-0 p-3 shrink justify-center items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{price}</span>
      </div>

      {/* Lợi nhuận */}
      <div className="flex basis-1/6 min-w-0 p-3 shrink justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{profit}</span>
      </div>

      {/* Trạng thái */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center">
        <div
          className={`self-center shrink w-[90%] max-w-full px-4 py-2 justify-center items-center inline-flex ${getStatusStyle(
            status
          )} min-h-[40px] rounded-[99px]`}
        >
          <div className="text-center text-xl font-medium truncate">{status}</div>
        </div>
      </div>
    </div>
  );
};

export default CourseTableRow;
