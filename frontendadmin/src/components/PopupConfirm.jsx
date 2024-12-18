import React from "react";

export const PopupConfirm = ({ isVisible, content, onConfirm, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10000]">
      <div className="flex flex-col justify-center px-10 py-16 bg-white rounded-3xl w-[600px] font-semibold">
        <div className="flex flex-col items-center w-full text-center">
          <img
            src={`${process.env.PUBLIC_URL}/icons/charcoal_dot.svg`}
            className="object-contain shrink-0 my-auto w-14 aspect-square"
            alt="Icon"
          />
          <p className="mt-6 text-xl text-neutral-900 font-semibold text-center">{content}</p>
          <div className="mt-4 flex gap-3 justify-center items-center min-h-[70px] py-4 rounded-lg text-2xl">
            <button
              className="w-[150px] h-[60px] bg-[#6C8299] text-white rounded-lg flex justify-center items-center hover:bg-slate-700"
              onClick={onConfirm}
            >
              Có
            </button>
            <button
              className="w-[150px] h-[60px] bg-[#CDD5DF] text-[#14375F] rounded-lg flex justify-center items-center hover:bg-gray-400"
              onClick={onClose}
            >
              Không
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
