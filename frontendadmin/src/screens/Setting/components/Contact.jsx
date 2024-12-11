import * as React from "react";

export function ContactInput({ label, initialValue, type = "text" }) {
  // Tạo state để lưu giá trị của input
  const [value, setValue] = React.useState(initialValue);

  // Hàm xử lý khi giá trị của input thay đổi
  const handleChange = (event) => {
    setValue(event.target.value); // Cập nhật state với giá trị mới
  };

  return (
    <div className="flex flex-col leading-none min-h-[91px] min-w-[240px] w-[360px]">
      <label
        className="text-neutral-900 text-opacity-50"
        htmlFor={`input-${label}`}
      >
        {label}
      </label>
      <input
        id={`input-${label}`}
        type={type}
        value={value} // Gắn giá trị từ state
        onChange={handleChange} // Gắn hàm xử lý thay đổi
        className="flex-1 shrink gap-2.5 self-stretch p-2.5 mt-2 whitespace-nowrap rounded-lg border border-solid border-slate-500 border-opacity-80 size-full text-neutral-900"
      />
    </div>
  );
}
