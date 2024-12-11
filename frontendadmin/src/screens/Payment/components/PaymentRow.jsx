import * as React from "react";

export default function PaymentRow({ id, userName, courseCode, price, time, status, onRowClick }) {
  const getStatusStyles = (status) => {
    switch (status) {
      case "pending":
        return "bg-amber-300";
      case "paid":
        return "bg-[#D1F669]";
      case "cancelled":
        return "bg-red-600 text-white";
      default:
        return "bg-amber-300";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "pending":
        return "Chờ thanh toán";
      case "paid":
        return "Đã thanh toán";
      case "cancelled":
        return "Đã hủy";
      default:
        return "Chờ thanh toán";
    }
  };

  return (
    <div
      className="flex overflow-hidden flex-wrap mt-6 w-280 bg-white h-[70px] cursor-pointer"
      onClick={() => onRowClick && onRowClick(id)}
    >
      {/* Mã thanh toán */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{id}</span>
      </div>

      {/* Tên người dùng */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{userName}</span>
      </div>

      {/* Mã khóa học */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{courseCode}</span>
      </div>

      {/* Giá */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{price}</span>
      </div>

      {/* Thời gian */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{time}</span>
      </div>

      {/* Trạng thái */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center">
        <div
          className={`self-center shrink w-[90%] max-w-full px-4 py-2 justify-center items-center inline-flex ${getStatusStyles(
            status
          )} min-h-[40px] rounded-[99px]`}
        >
          <span className="text-center text-xl font-medium truncate">{getStatusText(status)}</span>
        </div>
      </div>
    </div>
  );
}
