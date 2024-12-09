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
      <div className="flex flex-1 shrink justify-center items-center bg-[#EBF1F9] min-w-[240px]">
        <span>{id}</span>
      </div>

      {/* Tên người dùng */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <span>{userName}</span>
      </div>

      {/* Mã khóa học */}
      <div className="flex flex-1 shrink justify-center items-center bg-[#EBF1F9] min-w-[240px]">
        <span>{courseCode}</span>
      </div>

      {/* Giá */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <span>{price}</span>
      </div>

      {/* Thời gian */}
      <div className="flex flex-1 shrink justify-center items-center bg-[#EBF1F9] min-w-[240px]">
        <span>{time}</span>
      </div>

      {/* Trạng thái */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <div
          className={`flex gap-3 justify-center items-center min-w-[240px] py-2.5 w-280 ${getStatusStyles(
            status
          )} min-h-[40px] rounded-[99px]`}
        >
          <span>{getStatusText(status)}</span>
        </div>
      </div>
    </div>
  );
}
