import * as React from "react";
import { useNavigate } from "react-router-dom";

function TableHeader() {
  const navigate = useNavigate();

  const handleAddVoucher = () => {
    navigate("/voucher/create");
  };

  return (
    <div className="flex overflow-hidden mt-3 flex-wrap w-full rounded-t-3xl bg-[#6C8299] min-h-[70px] max-md:max-w-full">
      <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3 bg-[#EBF1F9]">
        <div className="text-[#131313] text-center text-xl font-medium truncate">STT</div>
      </div>
      <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3">
        <div className="text-[#fff] text-center text-xl font-medium truncate">Mã voucher</div>
      </div>
      <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3 bg-[#EBF1F9]">
        <div className="text-[#131313] text-center text-xl font-medium truncate">Giá tối thiểu</div>
      </div>
      <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3">
        <div className="text-[#fff] text-center text-xl font-medium truncate">Giảm giá</div>
      </div>
      <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3 bg-[#EBF1F9]">
        <div className="text-[#131313] text-center text-xl font-medium truncate">Giới hạn</div>
      </div>
      <button
        className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3"
        onClick={handleAddVoucher}>
        <img
          loading="lazy"
          src={process.env.PUBLIC_URL + "/icons/paper_plus.svg"}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
        />
        <div className="text-[#fff] text-center text-xl font-medium truncate">Voucher mới</div>
      </button>
    </div>
  );
}

export default TableHeader;
