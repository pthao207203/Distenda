import * as React from "react";

export default function TableHeader() {
  return (
    <div className="flex shrink overflow-hidden w-full rounded-t-3xl bg-[#6C8299] min-h-[70px] max-md:max-w-full">
      {/* Mã khóa học */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-center">Phân loại</span>
      </div>

      {/* Tên khóa */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center text-white">
        <span className="text-center">Tên khóa</span>
      </div>

      {/* Đã bán */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-center">Đã bán</span>
      </div>

      {/* Giá */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center text-white">
        <span className="text-center">Giá</span>
      </div>

      {/* Lợi nhuận */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-center">Lợi nhuận</span>
      </div>

      {/* Trạng thái */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center text-white">
        <span className="text-center">Trạng thái</span>
      </div>
    </div>
  );
}

