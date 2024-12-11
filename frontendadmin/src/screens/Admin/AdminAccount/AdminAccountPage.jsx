import React, { useState } from "react";
import { AdminInfoField } from "./components/AdminInfo";
import { ProfileHeader } from "./components/AccountHeader";

const userFields = [
  { label: "Họ và tên", value: "Trần Lâm Ngọc Khanh", editable: true },
  { label: "Gmail", value: "khanhkhanh@gmai.com", editable: true },
  { label: "Số điện thoại", value: "0987654321", editable: true },
  { label: "Ngày tham gia", value: "20/08/2023", editable: false },
  { label: "Chức vụ", value: "Admin", editable: false },
];

function ProfileCard() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);

  // Hàm mở popup
  const openPopup = () => {
    setIsPopupVisible(true);
  };

  // Hàm đóng popup
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  // Hàm xử lý xác nhận cập nhật
  const handleConfirmUpdate = () => {
    setIsPopupVisible(false);
    setSuccessPopupVisible(true);
    console.log("Cập nhật thông tin thành công!");
  };

  // Hàm đóng popup thành công
  const closeSuccessPopup = () => {
    setSuccessPopupVisible(false);
  };

  return (
    <main className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      {/* Header */}
      <ProfileHeader
        name="Ngọc Khanh"
        email="khanhkhanh@gmai.com"
        avatarSrc="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/6c529bb94475beadf37dd3dce72b1ed046c2d629867a18ce3edc5014490918c0?apiKey=bb36f631e8e54463aa9d0d8a1339282b&"
        updateIconSrc="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/e9c84cc0d21b5241ee40d83334bf9289f4fc6a242a7bb8a736e90effdbd86720?apiKey=bb36f631e8e54463aa9d0d8a1339282b&"
        openPopup={openPopup}
      />

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
              <p className="mt-6 text-xl text-neutral-900 font-semibold text-center">
                Bạn có chắc chắn muốn cập nhật những thay đổi không?
              </p>
              <div className="mt-4 flex gap-3 justify-center items-center max-h-[70px] py-4 rounded-lg text-2xl">
                <button
                  className="w-[150px] h-[60px] bg-slate-500 text-white rounded-lg flex justify-center items-center hover:bg-slate-700"
                  onClick={handleConfirmUpdate}
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
              <p className="mt-6 text-xl text-neutral-900 font-semibold text-center">
                Cập nhật thành công!
              </p>
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

      {/* Thông tin cá nhân */}
      <div className="flex flex-col mt-10 w-full text-xl max-md:max-w-full">
        <div className="font-semibold text-neutral-900 max-md:max-w-full">
          Thông tin cá nhân
        </div>
        <div className="flex flex-col items-start mt-6 w-full font-medium leading-none max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-start self-stretch w-full max-md:max-w-full">
            {userFields.slice(0, 3).map((field, index) => (
              <AdminInfoField
                key={index}
                label={field.label}
                value={field.value}
                editable={field.editable}
              />
            ))}
          </div>
          {userFields.slice(3).map((field, index) => (
            <AdminInfoField
              key={index + 3}
              label={field.label}
              value={field.value}
              editable={field.editable}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProfileCard;
