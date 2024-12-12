import React, { useState } from "react";
import { FileUpload } from "./components/FIleUpload";
import { ContactInput } from "./components/Contact";
import { SocialLink } from "./components/SocialLink";
import { TextArea } from "./components/TextArea";

export default function Settingpage() {
  const [popupContent, setPopupContent] = useState(null); // Trạng thái quản lý nội dung popup
  const [isPopupVisible, setPopupVisible] = useState(false); // Trạng thái hiển thị popup xác nhận
  const [successPopupVisible, setSuccessPopupVisible] = useState(false); // Trạng thái hiển thị popup thành công

  const socialLinks = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e02aeb2fb0a5596f245e0de6d4cedc110a0e1cf5e761b628a6a8a76fdbfb4941?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b",
      url: "facebook.com",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/364f76b00741a55a173b8ad0e5c1838609e0070fe7107da38b1bd1e110f332b5?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b",
      url: "facebook.com",
    },
  ];

  const textAreas = [
    { label: "Giới thiệu", minHeight: 101 },
    { label: "Tuyển dụng", minHeight: 88 },
    { label: "Chính sách bảo mật", minHeight: 101 },
    { label: "Hỗ trợ", minHeight: 88 },
  ];

  const handlePopup = (action) => {
    if (action === "update") {
      setPopupContent("Bạn có chắc chắn muốn cập nhật những thay đổi không?");
    }
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setPopupContent(null);
  };

  const confirmAction = () => {
    setPopupVisible(false); // Ẩn popup xác nhận
    setSuccessPopupVisible(true); // Hiển thị popup thành công
  };

  const closeSuccessPopup = () => {
    setSuccessPopupVisible(false); // Ẩn popup thành công
  };

  return (
    <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <div className="flex z-0 flex-col w-full max-md:max-w-full">
        <div className="flex justify-end items-center w-full">
          <button
            className="flex gap-3 justify-center items-center px-3 font-medium leading-none text-white rounded-lg bg-slate-500 h-[46px] min-h-[46px]"
            onClick={() => handlePopup("update")} // Sửa lỗi: Truyền tham số "update"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9c84cc0d21b5241ee40d83334bf9289f4fc6a242a7bb8a736e90effdbd86720?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <span className="gap-2.5 self-stretch my-auto">Cập nhật</span>
          </button>
        </div>
        <div className="font-semibold text-neutral-900 max-md:max-w-full">
          Cài đặt chung
        </div>
        <div className="flex flex-col mt-6 w-full font-medium leading-none max-md:max-w-full">
          <div className="flex flex-col max-w-full min-h-[91px] w-[360px]">
            <label className="text-neutral-900 text-opacity-50" htmlFor="website-name">
              Tên website
            </label>
            <input
              id="website-name"
              type="text"
              value="DISTENDA"
              className="flex-1 shrink gap-2.5 self-stretch p-2.5 mt-2 whitespace-nowrap rounded-lg border border-solid border-slate-500 border-opacity-80 size-full text-neutral-900"
            />
          </div>
          <div className="flex flex-wrap gap-10 justify-between items-start mt-8 w-full max-md:max-w-full">
            <FileUpload
              label="Logo Admin"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c40f66528cb791d426d8ea76422afef2a82cb234fd59bc808eee9f4ee110a169?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
              onFileSelect={() => {}}
            />
            <FileUpload
              label="Logo User"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7af3e75caa1c99d0856f6da43a77e4b1772a9ccbf99554e110afea16403b6e19?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
              onFileSelect={() => {}}
            />
          </div>
        </div>
      </div>

      {/* Popup xác nhận */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
          <div className="flex flex-col justify-center px-10 py-16 bg-white rounded-3xl w-[600px] font-semibold">
            <div className="flex flex-col items-center w-full text-center">
              <img
                src={`${process.env.PUBLIC_URL}/icons/charcoal_dot.svg`}
                className="object-contain shrink-0 my-auto w-14 aspect-square"
                alt="Icon"
              />
              <p className="mt-6 text-xl text-neutral-900 font-semibold text-center">{popupContent}</p>
              <div className="mt-4 flex gap-3 justify-center items-center max-h-[70px] py-4 rounded-lg text-2xl">
                <button
                  className="w-[150px] h-[60px] bg-slate-500 text-white rounded-lg flex justify-center items-center hover:bg-slate-700"
                  onClick={confirmAction}
                >
                  Có
                </button>
                <button
                  className="w-[150px] h-[60px] bg-gray-300 text-gray-900 rounded-lg flex justify-center items-center hover:bg-gray-400"
                  onClick={closePopup}
                >
                  Không
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup thành công */}
      {successPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
          <div className="flex flex-col justify-center px-10 py-16 bg-white rounded-3xl w-[600px] font-semibold">
            <div className="flex flex-col items-center w-full text-center">
              <img
                src={`${process.env.PUBLIC_URL}/icons/check_ring.svg`}
                className="object-contain shrink-0 my-auto w-14 aspect-square"
                alt="Success icon"
              />
              <p className="mt-6 text-xl text-neutral-900 font-semibold text-center">Cập nhật thành công!</p>
              <button
                className="w-[150px] h-[60px] bg-gray-300 text-gray-900 rounded-lg flex justify-center items-center font-semibold text-2xl hover:bg-gray-400 mt-4"
                onClick={closeSuccessPopup}
              >
                Thoát
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex z-0 flex-col mt-10 w-full font-medium max-md:max-w-full">
        <div className="font-semibold text-neutral-900 max-md:max-w-full">
          Thông tin liên hệ
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-start mt-6 w-full max-md:max-w-full">
          <ContactInput label="Số điện thoại" value="0912227225" type="tel" />
          <ContactInput label="Email" value="22521212@gmail.com" type="email" />
          <ContactInput label="Link" value="© 2024 DORA. All Rights Reserved." />
        </div>

        {socialLinks.map((link, index) => (
          <SocialLink key={index} {...link} />
        ))}
      </div>

      <div className="flex z-0 flex-col mt-10 w-full font-medium text-neutral-900 text-opacity-50 max-md:max-w-full">
        <div className="font-semibold text-neutral-900 max-md:max-w-full">
          Về chúng tôi
        </div>
        {textAreas.slice(0, 2).map((area, index) => (
          <TextArea key={index} {...area} />
        ))}
      </div>

      <div className="flex z-0 flex-col pb-16 mt-10 w-full font-medium text-neutral-900 text-opacity-50 max-md:max-w-full">
        <div className="font-semibold text-neutral-900 max-md:max-w-full">
          RESOURCE
        </div>
        {textAreas.slice(2).map((area, index) => (
          <TextArea key={index} {...area} />
        ))}
      </div>
    </div>
  );
}
