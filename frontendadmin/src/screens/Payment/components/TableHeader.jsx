import * as React from "react";

function TableHeader() {
  return (
    <div className="flex overflow-hidden w-full rounded-t-3xl bg-[#6C8299] h-[70px] max-md:max-w-full">
      {/* Mã hóa đơn */}
      <div className="flex flex-1 justify-center items-center bg-[#EBF1F9] min-w-[240px]">
        <span className="text-center">Mã hóa đơn</span>
      </div>

      {/* Tên người dùng */}
      <div className="flex flex-1 justify-center items-center text-white min-w-[240px]">
        <span className="text-center">Tên người dùng</span>
      </div>

      {/* Mã khóa học */}
      <div className="flex flex-1 justify-center items-center bg-[#EBF1F9] min-w-[240px]">
        <span className="text-center">Mã khóa học</span>
      </div>

      {/* Giá */}
      <div className="flex flex-1 justify-center items-center text-white min-w-[240px]">
        <span className="text-center">Giá</span>
      </div>

      {/* Thời gian */}
      <div className="flex flex-1 justify-center items-center bg-[#EBF1F9] min-w-[240px]">
        <span className="text-center">Thời gian</span>
      </div>

      {/* Trạng thái */}
      <div className="flex flex-1 justify-center items-center text-white bg-[#6C8299] min-w-[240px]">
        <span className="text-center">Trạng thái</span>
      </div>
    </div>
  );
}

export default TableHeader;
