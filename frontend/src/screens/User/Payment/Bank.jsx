import React from "react";
import BankDetail from "./BankDetail";

function Bank({ onClose, handleConfirm }) {
  return (
    <main className="flex overflow-hidden flex-col pt-4 pb-10 bg-white max-w-[803px] p-6 max-md:p-2 shadow-lg w-full max-h-[90vh] overflow-y-auto">
      <button className="justify-end self-end " onClick={onClose}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/18ce7f5d3a0e8a95408a91d7f810fd4a3daa1c23a4824327ff1f5f9f74b720b0?apiKey=1914b3001bed44e2a53adf842ab19f47&"
          alt="Close"
          className="object-contain self-end aspect-[0.94] hover:brightness-110 hover:scale-105 transition duration-200"
        />
      </button>
      <section className="flex flex-col justify-center items-center px-10 mt-2 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col self-stretch w-full max-md:max-w-full">
          <header className="flex flex-wrap gap-4 items-center w-full text-[1.5rem] leading-none max-md:max-w-full">
            <h2 className="flex flex-1 shrink gap-3 items-center self-stretch my-auto font-medium basis-5 min-w-[240px] text-neutral-900 max-md:max-w-full">
              Vui lòng chuyển khoản đến
            </h2>
            <time className="gap-2.5 self-stretch px-3 py-3 my-auto font-semibold text-white bg-neutral-900 ">
              24 : 59 : 50
            </time>
          </header>
          <BankDetail />
        </div>
        <div className="flex flex-col p-4 mt-7 max-w-full text-[1.25rem] text-black bg-[#FFD75B]">
          <h2 className="font-semibold leading-none max-md:max-w-full">
            LƯU Ý QUAN TRỌNG
          </h2>
          <div className="mt-2 leading-6 max-md:max-w-full">
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Vui lòng chuyển đúng số tiền (bao gồm 3 chữ số cuối cùng của mã
                duy nhất).
              </li>
              <li>
                Chọn <strong>Dịch vụ Chuyển tiền nhanh 24/7</strong> đối với
                chuyển tiền từ các ngân hàng khác ngoài MBbank.
              </li>
            </ol>
          </div>
        </div>
        <button
          onClick={handleConfirm}
          className="flex gap-3 justify-center items-center self-center px-3 py-4 mt-7 max-w-full text-[1.25rem] font-medium leading-none text-white bg-neutral-900 w-[272px]"
        >
          <span className="gap-2.5 self-stretch my-auto">Xác nhận</span>
        </button>
      </section>
    </main>
  );
}

export default Bank;
