import React from 'react';

function CustomerInfo({ data }) {
  return (
    <div className="flex flex-col max-w-full w-[540px]">
      <div className="text-xl font-semibold text-neutral-900 max-md:max-w-full">
        Chi tiết hóa đơn
      </div>
      <div className="flex flex-col items-start mt-6 w-full text-lg max-md:max-w-full">
        <div className="flex gap-4 items-start">
          <div className="font-semibold text-neutral-900 text-opacity-50">
            Họ và tên
          </div>
          <div className="font-medium text-neutral-900 text-opacity-80">
            {data.name}
          </div>
        </div>
        <div className="flex gap-4 items-start mt-4">
          <div className="font-semibold text-neutral-900 text-opacity-50">
            Mã giao dịch
          </div>
          <div className="font-medium text-neutral-900">{data.transactionId}</div>
        </div>
        <div className="flex gap-4 items-start mt-4">
          <div className="font-semibold text-neutral-900 text-opacity-50">
            Thời gian
          </div>
          <div className="flex gap-2 items-center font-medium whitespace-nowrap text-neutral-900">
            <div className="self-stretch my-auto">{data.time}</div>
            <div className="self-stretch my-auto">{data.date}</div>
          </div>
        </div>
        <div className="flex gap-4 items-start mt-4">
          <div className="font-semibold text-neutral-900 text-opacity-50">
            User ID
          </div>
          <div className="flex gap-2 items-center font-medium whitespace-nowrap text-neutral-900">
            <div className="self-stretch my-auto">{data.time}</div>
            <div className="self-stretch my-auto">{data.userId}</div>
          </div>
        </div>
        <div className="flex gap-4 items-start mt-4">
          <div className="font-semibold text-neutral-900 text-opacity-50">
            Mã thanh toán
          </div>
          <div className="font-medium text-neutral-900">{data.paymentCode}</div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;