import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import hook điều hướng
import { bannerUpdatePostController, bannerDeleteController } from "../../../../controllers/banner.controller";

import { PopupConfirmCancel } from "../../../../components/PopupConfirmCancel";
import { PopupSuccess } from "../../../../components/PopupSuccess";
import { PopupError } from "../../../../components/PopupError";

import Loading from "../../../../components/Loading";

function ActionButton({ icon, text, variant, handleSubmit }) {
  const navigate = useNavigate(); // Khởi tạo hook điều hướng
  const [loading, setLoading] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Trạng thái hiển thị popup
  const [successPopupVisible, setSuccessPopupVisible] = useState(false); // Trạng thái hiển thị popup thành công
  const [errorPopupVisible, setErrorPopupVisible] = useState(false); // Trạng thái hiển thị popup thành công
  const [id, setId] = useState()

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      // Lấy dữ liệu từ handleSubmit
      const data = await handleSubmit();
      console.log("User profile data:", data);

      // Kiểm tra giá trị của `data` và thực hiện hành động tương ứng
      if (text === "Cập nhật") {
        const result = await bannerUpdatePostController(data._id, data);
        setLoading(false)
        if (result.code === 200) {
          setSuccessPopupVisible(true)
        } else {
          setErrorPopupVisible(false)
        }// Điều hướng đến trang AdminPage
      } else if (text === "Xóa") {
        console.log("Xóa");
        setId(data._id)
        setLoading(false)
        setIsPopupVisible(true)
        // setIsPopupVisible(true); // Hiển thị popup nếu cần
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
    }
  };
  const handlePopupConfirm = async () => {
    setIsPopupVisible(false); // Đảm bảo đóng popup trước
    setLoading(false)
    const result = await bannerDeleteController(id);
    if (result.code === 200) {
      setSuccessPopupVisible(true)
    } else {
      setErrorPopupVisible(false)
    }
    setLoading(false)
    setTimeout(() => {
      navigate("/banner"); // Điều hướng về AdminPage sau khi popup đóng
    }, 200); // Thêm độ trễ nhỏ để đảm bảo người dùng thấy popup đóng trước khi điều hướng
  };
  const handlePopupClose = () => {
    setIsPopupVisible(false); // Đóng popup
  };
  const closeSuccessPopup = () => {
    setSuccessPopupVisible(false); // Ẩn popup thành công
    navigate("/banner");
  };
  const closeErrorPopup = () => {
    setErrorPopupVisible(false); // Ẩn popup thành công
    // window.location.reload();
  };

  if (loading) {
    return <Loading />;
  }

  const bgColor = variant === "red" ? "bg-[#DF322B]" : "bg-[#6C8299]";

  return (
    <>
      <button
        className={`flex gap-3 justify-center items-center px-3 py-3 rounded-lg ${bgColor} min-h-[46px]`}
        onClick={handleClick}
      >
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <span className="gap-2.5 self-stretch my-auto">{text}</span>
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
}

export default ActionButton;