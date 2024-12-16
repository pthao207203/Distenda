import React from "react";

export const PopupSuccess = ({ isVisible, message, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
      <div className="flex flex-col justify-center px-10 py-16 bg-white rounded-3xl w-[600px] font-semibold">
        <div className="flex flex-col items-center w-full text-center">
          <img
            src={`${process.env.PUBLIC_URL}/icons/check_ring.svg`}
            className="object-contain shrink-0 my-auto w-14 aspect-square"
            alt="Success icon"
          />
          <p className="mt-6 text-xl text-neutral-900 font-semibold text-center">{message}</p>
          <button
            className="w-[150px] h-[60px] bg-[#CDD5DF] text-[#14375F] rounded-lg flex justify-center items-center font-semibold text-2xl hover:bg-gray-400 mt-4"
            onClick={onClose}
          >
            Thoát
          </button>
        </div>
      </div>
    </div>
  );
};
