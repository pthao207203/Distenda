import React from 'react';
import OrderTableRow from './OrderTableRow';

function OrderTable({ items }) {
  return (
    <div className="flex flex-col mt-10 w-full text-xl text-neutral-900 max-md:max-w-full">
      <div className="font-semibold max-md:max-w-full">Chi tiết đơn hàng</div>
      <div className="flex flex-col pb-16 mt-6 w-full font-medium leading-none max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap w-full rounded-t-3xl bg-[#EBF1F9] min-h-[70px] max-md:max-w-full">
          <div className="flex basis-1/3 min-w-0  justify-center items-center text-white bg-[#6C8299]">
            <div className="gap-2.5 self-stretch my-auto">Mã khóa học</div>
          </div>
          <div className="flex basis-1/3 min-w-0  justify-center items-center  text-neutral-900">
            <div className="gap-2.5 self-stretch my-auto">Tên khóa</div>
          </div>
          <div className="flex basis-1/3 min-w-0 justify-center items-center text-white bg-[#6C8299]">
            <div className="gap-2.5 self-stretch my-auto">Giá</div>
          </div>
        </div>
        {items?.map((item, index) => (
          <OrderTableRow key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default OrderTable;
