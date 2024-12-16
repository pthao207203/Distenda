import React, { useState, useEffect } from "react";
import { AdminInfoField } from "./components/AdminInfo";
import { AccountHeader } from "./components/AccountHeader";
import { myAccountController} from "../../../controllers/myAccount.controller";
import moment from 'moment';

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
  const handleConfirmUpdate = async () => {
    setIsPopupVisible(false); // Ẩn popup xác nhận
    await updateUserInfo();   // Gọi hàm cập nhật
    setSuccessPopupVisible(true);
    console.log("Cập nhật thông tin thành công!");
  };
  // Hàm đóng popup thành công
  const closeSuccessPopup = () => {
    setSuccessPopupVisible(false);
  };

  const [data, setData] = useState();
  const [userFields, setUserFields] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const result = await myAccountController(setLoading);
        if (result && result.user) {
          setData(result); // Lưu dữ liệu nếu hợp lệ
          const fields = [
            { label: "Họ và tên", value: result.user.AdminFullName, editable: true },
            { label: "Gmail", value: result.user.AdminEmail, editable: true },
            { label: "Số điện thoại", value: result.user.AdminPhone, editable: true },
            { label: "Ngày tham gia", value: moment(result.createdBy?.createdAt).format("DD/MM/YYYY hh:mm:ss"), editable: false },
            { label: "Chức vụ", value: result.user.role, editable: false },
          ];
          setUserFields(fields);
        }
    }
    fetchData();
  }, []);
  async function updateUserInfo() {
    try {
        const updatedData = userFields.reduce((acc, field) => {
            if (field.editable) acc[field.label] = field.value;
            return acc;
        }, {});
  
        const response = await myAccountController.updateUser(updatedData);
        if (response.success) {
            console.log("Cập nhật thành công:", response);
            setSuccessPopupVisible(true); // Hiển thị popup thành công
        } else {
            console.error("Cập nhật thất bại:", response.message);
        }
    } catch (error) {
        console.error("Lỗi khi cập nhật thông tin:", error);
    }
  }

  const handleFieldChange = (label, newValue) => {
    setUserFields((prevFields) =>
        prevFields.map((field) =>
            field.label === label ? { ...field, value: newValue } : field
        )
    );
  };
  

  if (loading) {
    return (
      <div>
        Đang tải...
      </div>
    )
  }
  console.log("My account => ", data)

  return (
    <main className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] min-h-screen max-md:px-5 max-md:max-w-full">
      {/* Header */}
      <AccountHeader
        name={data?.user?.AdminFullName?.split(" ").slice(-1)[0]}
        email={data?.user?.AdminEmail}
        avatarSrc={data?.user?.AdminAvatar}
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
                  className="w-[150px] h-[60px] bg-[#6C8299] text-white rounded-lg flex justify-center items-center hover:bg-slate-700"
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
        <div className="flex flex-col items-start mt-3 w-full font-medium leading-none max-md:max-w-full">
          <div className="flex flex-wrap justify-between items-start self-stretch w-full max-md:max-w-full">
            {userFields.slice(0, 3).map((field, index) => (
              <AdminInfoField
                key={index}
                label={field.label}
                value={field.value}
                onChange={handleFieldChange}
                editable={field.editable}
              />
            ))}
          </div>
          {userFields.slice(3).map((field, index) => (
            <AdminInfoField
              key={index + 3}
              label={field.label}
              value={field.value}
              onChange={handleFieldChange}
              editable={field.editable}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProfileCard;
