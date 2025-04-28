import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VoucherRow = ({ id, index, voucher }) => {
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(false);

  // Nếu voucher bị undefined → trả về null (không render hàng lỗi)
  if (!voucher) return null;

  const {
    voucherCode = "Chưa có mã",
    minAmount = 0,
    discountPercentage = 0,
    discountAmount = 0,
    // validityPeriod = 30,  // Mặc định là 30 nếu không có giá trị
    status = -1,
  } = voucher;

  // Xử lý sự kiện nhấn vào row để chuyển đến chi tiết voucher
  const handleEdit = () => {
    navigate(`/voucher/detail/${id}`); // Chuyển hướng tới URL chi tiết voucher với ID
  };

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
    // TODO: Gọi API cập nhật trạng thái nếu cần
  };

  const getStatusStyles = (status) => {
    if (status === 1) {
      return {
        bgColor: "bg-lime-300",
        text: "Hoạt động",
      };
    } else if (status === 0) {
      return {
        bgColor: "bg-amber-300",
        text: "Tạm dừng",
      };
    }
    return {
      bgColor: "bg-gray-300",
      text: "Không xác định",
    };
  };

  const statusInfo = getStatusStyles(status);

  return (
    <div className="flex overflow-hidden flex-wrap mt-3 w-full bg-white min-h-[70px] max-md:max-w-full" onClick={handleEdit}>
      {/* STT */}
      <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center bg-[#EBF1F9]">
        <div className="text-[#131313] text-center text-xl font-medium truncate">{index + 1}</div>
      </div>

      {/* Mã voucher */}
      <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3">
        <div className="text-[#131313] text-center text-xl font-medium truncate">{voucherCode}</div>
      </div>

      {/* Tối thiểu */}
      <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3 bg-[#EBF1F9]">
        <div className="text-[#131313] text-center text-xl font-medium truncate">{minAmount}</div>
      </div>

      {/* % Giảm giá */}
      <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3">
        <div className="text-[#131313] text-center text-xl font-medium truncate">{discountPercentage}%</div>
      </div>

      {/* Số tiền giảm */}
      <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3 bg-[#EBF1F9]">
        <div className="text-[#131313] text-center text-xl font-medium truncate">{discountAmount}</div>
      </div>

      {/* Trạng thái */}
      <div className="flex basis-1/6 min-w-0 shrink justify-center items-center px-3 min-h-[70px] max-md:max-w-full">
        <button
          className={`flex w-full justify-center items-center px-4 py-2 rounded-[99px] ${statusInfo.bgColor}`}
          onClick={toggleVisibility}
        >
          <div className="text-[#131313] text-center text-xl font-medium truncate">
            {statusInfo.text}
          </div>
        </button>
      </div>
    </div>
  );
};

export default VoucherRow;
