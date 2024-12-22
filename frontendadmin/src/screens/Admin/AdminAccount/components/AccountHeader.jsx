import React, { useRef, useState } from "react";

/* eslint-disable jsx-a11y/img-redundant-alt */
export function AccountHeader({ name, email, avatarSrc, updateIconSrc, openPopup, onAvatarChange, uploadImagePreviewRef }) {
  const fileInputRef = useRef(null); // Tham chiếu đến input file

  // Hàm xử lý nhấp vào ảnh
  const handleImageClick = () => {
    fileInputRef.current.click(); // Kích hoạt input file
  };

  return (
    <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full ">
      <div className="flex flex-wrap flex-1 shrink gap-3 items-center basis-4 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col">
          {/* Ảnh đại diện */}
          <img
            ref={uploadImagePreviewRef}
            loading="lazy"
            src={avatarSrc}
            alt={`Profile picture of ${name}`}
            className="object-cover shrink-0 self-stretch my-auto aspect-square rounded-full w-[119px] h-[119px] cursor-pointer"
            onClick={handleImageClick} // Gọi hàm khi nhấp vào ảnh
          />
          {/* Input file ẩn */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }} // Ẩn input file
            accept="image/*" // Chỉ nhận file ảnh
            onChange={onAvatarChange} // Gọi hàm xử lý khi người dùng chọn ảnh
          />
        </div>
        <div className="flex flex-col self-stretch my-auto">
          <div className="flex flex-col">
            <div className="text-2xl font-semibold text-neutral-900">{name}</div>
            <div className="mt-3 text-lg font-medium text-neutral-900 text-opacity-50">
              {email}
            </div>
          </div>
        </div>
      </div>
      {/* Nút Cập nhật */}
      <button
        className="flex gap-3 justify-center items-center px-3 py-3 text-xl font-medium leading-none text-white rounded-lg bg-[#6C8299] min-h-[46px]"
        onClick={openPopup} // Gọi hàm mở popup
        tabIndex="0"
      >
        <img
          loading="lazy"
          src={updateIconSrc}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <span className="gap-2.5 self-stretch my-auto">Cập nhật</span>
      </button>
    </div>
  );
}
