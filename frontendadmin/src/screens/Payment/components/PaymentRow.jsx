import * as React from "react";
import moment from 'moment';

export default function PaymentRow({pay, onRowClick}) {
  const getStatusStyles = (status) => {
    switch (status) {
      case -1: //Chờ thanh toán
        return "bg-[#FFD75B]";
      case 1: //Đã thanh toán
        return "bg-[#D1F669]";
      case 0: //Đã hủy
        return "bg-[#DF322B] text-white";
      default:
        return "bg-[#FFD75B]";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case -1:
        return "Chờ thanh toán";
      case 1:
        return "Đã thanh toán";
      case 0:
        return "Đã hủy";
      default:
        return "Chờ thanh toán";
    }
  };

  return (
    <div
      className="flex overflow-hidden flex-wrap mt-3 w-280 bg-white min-h-[70px] cursor-pointer"
      onClick={() => onRowClick && onRowClick(pay)} // Truyền toàn bộ `pay` khi gọi onRowClick
    >
      {/* Mã thanh toán */}
      <div className="flex basis-1/6 min-w-0 justify-center p-3 items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{pay._id}</span>
      </div>

      {/* Tên người dùng */}
      <div className="flex basis-1/6 min-w-0 justify-center p-3 items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{pay.user}</span>
      </div>

      {/* Mã khóa học */}
      <div className="flex basis-1/6 min-w-0 justify-center p-3 items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{pay.course}</span>
      </div>

      {/* Giá */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{pay.PayTotal? pay.PayTotal : 0}</span>
      </div>

      {/* Thời gian */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{moment(pay.createdBy.createdAt).format("DD/MM/YYYY hh:mm:ss")}</span>
      </div>

      {/* Trạng thái */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center">
        <div
          className={`self-center shrink w-[90%] max-w-full px-4 py-2 justify-center items-center inline-flex ${getStatusStyles(
            pay.PayStatus
          )} min-h-[40px] rounded-[99px]`}
        >
          <span className="text-center text-xl font-medium truncate">{getStatusText(pay.PayStatus)}</span>
        </div>
      </div>
    </div>
  );
}
