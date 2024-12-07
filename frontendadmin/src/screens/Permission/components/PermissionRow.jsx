import React, { useState } from "react";

export default function PermissionRow({ permission, isFirst, roles }) {
  // Tạo state để lưu trạng thái của các checkbox
  const [checkboxStates, setCheckboxStates] = useState(
    Array(roles).fill(false) // Khởi tạo mảng trạng thái cho tất cả checkbox, mặc định là `false`
  );

  // Hàm xử lý khi thay đổi trạng thái checkbox
  const handleCheckboxChange = (index) => {
    const updatedStates = [...checkboxStates];
    updatedStates[index] = !updatedStates[index]; // Đảo trạng thái của checkbox được chọn
    setCheckboxStates(updatedStates);
  };

  return (
    <div className={`flex flex-wrap w-full bg-white h-[50px] max-md:max-w-full ${!isFirst ? "mt-1.5" : ""}`}>
      {/* Ô hiển thị thông tin permission */}
      <div className="flex flex-1 justify-center items-center basis-0 h-[50px] text-xl font-medium whitespace-nowrap bg-indigo-50 text-neutral-900">
        <div className="gap-2.5 self-stretch my-auto">{permission}</div>
      </div>

      {/* Các ô chứa checkbox */}
      {checkboxStates.map((isChecked, index) => (
        <div
          key={index}
          className="flex overflow-hidden flex-1 shrink gap-2.5 justify-center items-center p-1 basis-4 h-[50px] bg-white"
        >
          <div className="flex justify-center items-center w-full relative">
            {/* Checkbox chính */}
            <input
              type="checkbox"
              checked={isChecked} // Liên kết trạng thái với state
              onChange={() => handleCheckboxChange(index)} // Gọi hàm khi thay đổi trạng thái
              className={`w-5 h-5 cursor-pointer appearance-none rounded-[4px] border border-gray-300 ${
                isChecked ? "bg-slate-500" : "bg-white"
              }`} // Hiển thị màu bên trong checkbox
            />
            {/* Hiển thị hình ảnh khi checkbox được tick */}
            {isChecked && (
              <img
                src={`${process.env.PUBLIC_URL}/icons/check.svg`}
                alt="Checked"
                className="absolute w-4 h-4 pointer-events-none" // Không chặn sự kiện click
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
