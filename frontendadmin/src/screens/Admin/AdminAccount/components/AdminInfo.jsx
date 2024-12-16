import React, { useState } from "react";

export function AdminInfoField({ label, value, editable, onChange }) {
  // Quản lý trạng thái giá trị của trường input
  const [inputValue, setInputValue] = useState(value);

  // Hàm xử lý khi người dùng nhập vào input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        onChange(label, e.target.value); // Gọi callback khi thay đổi
    };


  const fieldClasses = `flex items-center flex-1 shrink p-2.5 mt-2 rounded-lg size-full text-neutral-900 ${
    editable
      ? "border border-solid border-slate-500 border-opacity-80"
      : "bg-[#CDD5DF] bg-opacity-50"
  }`;

  return (
    <div className="flex flex-col mt-8 max-w-full min-h-[91px] min-w-[240px] w-[360px]">
      {/* Label cho trường */}
      <label className="text-neutral-900 text-opacity-50 ">{label}</label>
      {/* Input thay thế cho div */}
      {editable ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange} // Xử lý khi thay đổi giá trị
          className={fieldClasses}
        />
      ) : (
        <div className={fieldClasses}>{inputValue}</div> // Hiển thị như văn bản nếu không chỉnh sửa được
      )}
    </div>
  );
}
