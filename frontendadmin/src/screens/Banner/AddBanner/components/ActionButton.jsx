import * as React from "react";
import { useNavigate } from "react-router-dom"; // Import hook điều hướng

export const ActionButton = ({ icon, label, variant }) => {
  const [isPopupVisible, setIsPopupVisible] = React.useState(false); // Trạng thái hiển thị popup
  const navigate = useNavigate(); // Khởi tạo hook điều hướng

  const handleClick = () => {
    if (label === "Lưu") {
      navigate("/banner"); // Điều hướng đến trang AdminPage
    } else if (label === "Hủy") {
      setIsPopupVisible(true); // Hiển thị popup nếu là nút Hủy
    }
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false); // Đóng popup
  };

  const handlePopupConfirm = () => {
    setIsPopupVisible(false); // Đảm bảo đóng popup trước
    setTimeout(() => {
      navigate("/banner"); // Điều hướng về AdminPage sau khi popup đóng
    }, 200); // Thêm độ trễ nhỏ để đảm bảo người dùng thấy popup đóng trước khi điều hướng
  };

  const baseClasses =
    "flex gap-3 justify-center items-center px-8 py-3 rounded-lg min-h-[46px] max-md:px-5";
  const variantClasses =
    variant === "primary"
      ? "text-white bg-slate-500 hover:bg-slate-600"
      : "bg-slate-300 text-blue-950 hover:bg-slate-400";

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
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="flex flex-col justify-center px-10 py-16 bg-white rounded-3xl w-[600px] font-semibold">
            <div className="flex flex-col items-center w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/e5f9826e22b01b1c8bd327296b2948721450b01230f9c87f02d8f9a1ed2e4ddb?apiKey=7a79403a23cb489f853e4845c47ede19&"
                alt=""
                className="object-contain aspect-square w-[59px]"
              />
              <div className="mt-6 text-xl text-neutral-900 font-semibold text-center">
                Bạn có chắc chắn muốn hủy những thay đổi không?
              </div>
              <div className="flex gap-2.5 items-start mt-8 text-3xl whitespace-nowrap">
                <button
                  className="w-[150px] h-[60px] bg-red-600 text-white rounded-lg flex justify-center items-center hover:bg-red-700"
                  onClick={handlePopupConfirm}
                >
                  Hủy
                </button>
                <button
                  className="w-[150px] h-[60px] bg-slate-500 text-white rounded-lg flex justify-center items-center hover:bg-slate-600"
                  onClick={handlePopupClose}
                >
                  Thoát
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
