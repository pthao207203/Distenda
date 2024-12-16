import * as React from "react";

function ActionButton({ label, variant, width, onClick }) {
  const baseStyles = "flex gap-2.5 justify-center items-center max-h-[70px] py-4 py-4 rounded-lg text-3xl ";
  const variantStyles = {
    danger: "bg-[#DF322B] text-white hover:bg-red-700",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    slate: "bg-[#6C8299] text-white hover:bg-slate-600"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]}`}
      style={{ width }}
      onClick={onClick} // Thêm sự kiện onClick cho button
    >
      {label}
    </button>
  );
}

export default ActionButton;
