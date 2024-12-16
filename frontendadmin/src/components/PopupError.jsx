import React from "react";

export const PopupError = ({ isVisible, message, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
      <div className="flex flex-col justify-center px-10 py-16 bg-white rounded-3xl w-[600px] font-semibold">
        <div className="flex flex-col items-center w-full text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/e5f9826e22b01b1c8bd327296b2948721450b01230f9c87f02d8f9a1ed2e4ddb?apiKey=7a79403a23cb489f853e4845c47ede19&"
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
