import React, {useState, useEffect} from 'react';
import moment from 'moment';

function CustomerInfo({ data }) {
  const [paymentCode, setPaymentCode] = useState("");

  useEffect(() => {
    // Tạo mã thanh toán ngẫu nhiên
    const generatedCode = `PAY${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setPaymentCode(generatedCode);
  }, []); // Chỉ chạy một lần khi component được mount
  return (
    <div className="flex flex-col max-w-full w-[540px]">
      <div className="text-xl font-semibold text-[#131313] max-md:max-w-full">
        Chi tiết hóa đơn
      </div>
      <div className="flex flex-col items-start mt-6 w-full text-lg max-md:max-w-full">
        <div className="flex gap-4 items-start">
          <div className="font-semibold text-[#131313] text-opacity-50">
            Họ và tên
          </div>
          <div className="font-medium text-[#131313] text-opacity-80">
            {data.user}
          </div>
        </div>
        <div className="flex gap-4 items-start mt-4">
          <div className="font-semibold text-[#131313] text-opacity-50">
            Mã giao dịch
          </div>
          <div className="font-medium text-[#131313]">{data._id}</div>
        </div>
        <div className="flex gap-4 items-start mt-4">
          <div className="font-semibold text-[#131313] text-opacity-50">
            Thời gian
          </div>
          <div className="flex gap-2 items-center font-medium whitespace-nowrap text-[#131313]">
            <div className="self-stretch my-auto">{moment(data.createdBy.createdAt).format("DD/MM/YYYY hh:mm:ss")}</div>
          </div>
        </div>
        <div className="flex gap-4 items-start mt-4">
          <div className="font-semibold text-[#131313] text-opacity-50">
            User ID
          </div>
          <div className="flex gap-2 items-center font-medium whitespace-nowrap text-[#131313]">
            <div className="self-stretch my-auto">{data.UserId}</div>
          </div>
        </div>
        <div className="flex gap-4 items-start mt-4">
          <div className="font-semibold text-[#131313] text-opacity-50">
            Mã thanh toán
          </div>
          <div className="font-medium text-[#131313]">{paymentCode}</div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;