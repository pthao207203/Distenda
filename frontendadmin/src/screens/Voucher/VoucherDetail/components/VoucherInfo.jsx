import React, { useState } from "react";

const VoucherInfo = ({ voucher }) => { // Nhận voucher từ prop
  return (
    <section>
      <div className="flex flex-wrap gap-2.5 items-center w-full max-md:max-w-full">
        <div className="flex-1 shrink self-stretch my-auto basis-6 min-w-60 max-md:max-w-full">
          <div className="flex flex-wrap gap-3 items-start w-full text-lg font-semibold text-[#13131380] max-md:max-w-full">
            <p>Lần cuối cập nhật</p>
            <span className="flex shrink-0 w-6 h-6" />
          </div>
          <p className="mt-4 text-xl font-medium text-neutral-900 max-md:max-w-full">
            {voucher.lastUpdated} {/* Hiển thị thời gian cập nhật cuối cùng */}
          </p>
        </div>

        <ActionButton label="Cập nhật" bgColor="bg-[#6C8299]" />
        <ActionButton label="Xóa" bgColor="bg-[#DF322B]" />
      </div>

      <VoucherDetails voucher={voucher} /> {/* Truyền voucher cho component VoucherDetails */}
    </section>
  );
};

// Component Button hành động (Cập nhật, Xóa)
const ActionButton = ({ label, bgColor }) => {
  return (
    <button
      className={`flex gap-3 justify-center items-center self-stretch px-3 py-3 my-auto text-xl font-medium leading-none text-white rounded-lg ${bgColor} min-h-[46px]`}
    >
      <span className="flex shrink-0 self-stretch my-auto w-6 h-6" />
      <span className="gap-2.5 self-stretch my-auto">{label}</span>
    </button>
  );
};

// Component hiển thị thông tin voucher
const VoucherDetails = ({ voucher }) => {
  return (
    <div className="mt-10 w-full text-xl max-md:max-w-full">
      <h3 className="font-semibold text-neutral-900 max-md:max-w-full">
        Thông tin voucher
      </h3>

      <div className="mt-8 w-full font-medium leading-none max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
          <FormField label="Mã Voucher" value={voucher.voucherCode} /> {/* Hiển thị mã voucher */}
          <FormField label="Giảm giá (%)" value={voucher.discountPercentage} /> {/* Hiển thị % giảm giá */}
        </div>

        <div className="flex flex-wrap gap-10 items-start mt-8 w-full max-md:max-w-full">
          <FormField label="Tối thiểu" value={voucher.minAmount} /> {/* Hiển thị giá trị tối thiểu */}
          <FormField label="Giới hạn" value={voucher.discountAmount} /> {/* Hiển thị số tiền giảm */}
        </div>
      </div>
    </div>
  );
};

// Component hiển thị mỗi trường thông tin
const FormField = ({ label, value }) => {
  const [inputValue, setInputValue] = useState(value); // Khởi tạo giá trị input

  const handleChange = (e) => {
    setInputValue(e.target.value); // Cập nhật giá trị khi người dùng thay đổi
  };

  return (
    <div className="flex-1 shrink basis-0 min-h-[91px] min-w-60 max-md:max-w-full">
      <label className="text-[#13131380] max-md:max-w-full">{label}</label>
      <div className="flex-1 shrink gap-1.5 self-stretch p-2.5 mt-3 whitespace-nowrap rounded-lg border border-3 basis-0 border-[#6C8299] border-opacity-80 size-full w-[44rem] h-[4.25rem] text-[#131313] max-md:max-w-full">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="w-full h-full outline-none border-none text-[#131313]"
        />
      </div>
    </div>
  );
};

export default VoucherInfo;
