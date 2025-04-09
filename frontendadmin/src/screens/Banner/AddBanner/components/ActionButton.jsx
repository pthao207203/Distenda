import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import hook điều hướng
import { bannerCreatePostController } from "../../../../controllers/banner.controller";

import { PopupConfirmCancel } from "../../../../components/PopupConfirmCancel";
import { PopupSuccess } from "../../../../components/PopupSuccess";
import { PopupError } from "../../../../components/PopupError";

import Loading from "../../../../components/Loading";

export const ActionButton = ({ icon, label, variant, handleSubmit }) => {
  const [loading, setLoading] = useState(false)
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Trạng thái hiển thị popup
  const [successPopupVisible, setSuccessPopupVisible] = useState(false); // Trạng thái hiển thị popup thành công
  const [errorPopupVisible, setErrorPopupVisible] = useState(false); // Trạng thái hiển thị popup thành công
  const navigate = useNavigate(); // Khởi tạo hook điều hướng

  const handleClick = async (e) => {
    e.preventDefault();
    if (label === "Lưu") {
      setLoading(true)
      const data = await handleSubmit()
      console.log("User profile data:", data);
      const result = await bannerCreatePostController(data)
      setLoading(false)
      if (result.code === 200) {
        setSuccessPopupVisible(true)
      } else {
        setErrorPopupVisible(false)
      }
      navigate("/banner"); // Điều hướng đến trang AdminPage
    } else if (label === "Hủy") {
      setIsPopupVisible(true); // Hiển thị popup nếu là nút Hủy
    }
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false); // Đóng popup
  };

  const closeSuccessPopup = () => {
    setSuccessPopupVisible(false); // Ẩn popup thành công
    window.location.reload();
  };
  const closeErrorPopup = () => {
    setErrorPopupVisible(false); // Ẩn popup thành công
    // window.location.reload();
  };

  const handlePopupConfirm = () => {
    setIsPopupVisible(false); // Đảm bảo đóng popup trước
    setTimeout(() => {
      navigate("/banner"); // Điều hướng về AdminPage sau khi popup đóng
    }, 200); // Thêm độ trễ nhỏ để đảm bảo người dùng thấy popup đóng trước khi điều hướng
  };

  if (loading) {
    return <Loading />;
  }

  const baseClasses =
    "flex gap-3 justify-center items-center px-8 py-3 rounded-lg min-h-[46px] max-md:px-5";
  const variantClasses =
    variant === "primary"
      ? "text-white bg-[#6C8299] hover:bg-slate-600"
      : "bg-[#CDD5DF] text-[#14375F] hover:bg-slate-400";

  return (
    <>
      <button className={`${baseClasses} ${variantClasses}`} onClick={handleClick}>
        {icon && (
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        )}
        <div className="gap-2.5 self-stretch my-auto">{label}</div>
      </button>

      {/* Popup Hủy */}
      <PopupConfirmCancel
        isVisible={isPopupVisible}
        content="Bạn có chắc chắn muốn hủy những thay đổi không?"
        confirm="Huỷ"
        onConfirm={handlePopupConfirm}
        onCancel={handlePopupClose}
      />
      {/* Popup thành công */}
      <PopupSuccess
        isVisible={successPopupVisible}
        message="Cập nhật thành công!"
        onClose={closeSuccessPopup}
      />
      {/* Popup thất bại */}
      <PopupError
        isVisible={errorPopupVisible}
        message="Cập nhật thất bại. Vui lòng thử lại sau!"
        onClose={closeErrorPopup}
      />
    </>
  );
};
