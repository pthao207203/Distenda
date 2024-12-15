import * as React from "react";

function OrderTableRow({ data }) {
  return (
    <div className="flex flex-wrap mt-6 w-full bg-white min-h-[70px]">
      {/* Mã khóa học */}
      <div className="flex basis-1/3 min-w-0  justify-center items-center ">
        <div className="text-[#131313] text-center text-xl font-medium truncate">{data._id}</div> 
      </div>
      {/* Tên khóa học */}
      <div className="flex basis-1/3 min-w-0 justify-center items-center p-3 bg-[#EBF1F9] text-neutral-900">
        <div className="text-[#131313] text-center text-xl font-medium truncate">{data.CourseName}</div>
      </div>
      {/* Giá */}
      <div className="flex basis-1/3 min-w-0  justify-center items-center ">
        <div className="text-[#131313] text-center text-xl font-medium truncate">
          {data.CoursePrice * ((100 - data.CourseDiscount) / 100)}
        </div>
      </div>
    </div>
  );
}

export default OrderTableRow;
