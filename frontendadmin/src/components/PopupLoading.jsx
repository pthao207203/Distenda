import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

export const PopupLoading = ({ isVisible, message, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
      <div className="flex flex-col justify-center px-10 py-16 bg-white rounded-3xl w-[600px] font-semibold">
        <div className="flex flex-col items-center w-full text-center">
          <MoonLoader color="#6c8299" size={80} />
          <p className="mt-4 text-xl text-gray-700">Đang tải...</p>
        </div>
      </div>
    </div>
  );
};
