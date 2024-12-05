import * as React from "react";

function PaymentRow({ id, userName, courseCode, price, time, status }) {
  const getStatusStyles = (status) => {
    switch(status) {
      case 'pending':
        return 'bg-amber-300';
      case 'paid':
        return 'bg-yellow-400';
      case 'cancelled':
        return 'bg-red-600 text-white';
      default:
        return 'bg-amber-300';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'pending':
        return 'Chờ thanh toán';
      case 'paid':
        return 'Đã thanh toán';
      case 'cancelled':
        return 'Đã hủy';
      default:
        return 'Chờ thanh toán';
    }
  };

  return (
    <div className="flex overflow-hidden flex-wrap mt-6 w-full bg-white min-h-[70px] max-md:max-w-full">
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full whitespace-nowrap bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{id}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{userName}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full whitespace-nowrap bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{courseCode}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full whitespace-nowrap basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{price}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{time}</div>
      </div>
      <div className={`flex flex-col flex-1 shrink justify-center p-3 basis-0 ${status === 'cancelled' ? 'text-white' : ''}`}>
        <div className={`flex gap-3 justify-center items-center px-3 py-2.5 w-full min-h-[40px] rounded-[99px] shadow-[-6px_6px_0px_rgba(255,255,255,1)] ${getStatusStyles(status)}`}>
          <div className="gap-2.5 self-stretch my-auto">{getStatusText(status)}</div>
        </div>
      </div>
    </div>
  );
}

export default PaymentRow;