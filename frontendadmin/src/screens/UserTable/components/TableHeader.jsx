import * as React from "react";

function TableHeader() {
  return (
    <div className="flex overflow-hidden w-full rounded-t-3xl bg-[#6C8299] min-h-[70px] max-md:max-w-full">
      {/* Mã người dùng */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-center">Tên người dùng</span>
      </div>

      {/* Tên người dùng */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center text-white">
        <span className="text-center">Thời gian tham gia</span>
      </div>

      {/* Thời gian tham gia */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-center">Chi tiêu</span>
      </div>

      {/* Doanh thu */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center text-white">
        <span className="text-center">Lần cuối cập nhật</span>
      </div>

      {/* Lần cuối cập nhật */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-center">Trạng thái</span>
      </div>
    </div>
  );
}

export default TableHeader;
