import * as React from "react";
import { useNavigate } from "react-router-dom"; // Import hook điều hướng
import { bannerUpdatePostController, bannerDeleteController } from "../../../../controllers/banner.controller";

function ActionButton({ icon, text, variant, handleSubmit }) {
  const navigate = useNavigate(); // Khởi tạo hook điều hướng

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // Lấy dữ liệu từ handleSubmit
      const data = await handleSubmit();
      console.log("User profile data:", data);

      // Kiểm tra giá trị của `data` và thực hiện hành động tương ứng
      if (text === "Cập nhật") {
        if (data && data._id) {
          await bannerUpdatePostController(data._id, data);
          navigate("/banner"); // Điều hướng đến trang AdminPage
        } else {
          console.error("Data không hợp lệ hoặc thiếu _id");
        }
      } else if (text === "Xóa") {
        if (data && data._id) {
          console.log("Xóa");
          await bannerDeleteController(data._id);
          // setIsPopupVisible(true); // Hiển thị popup nếu cần
        } else {
          console.error("Không thể xóa vì thiếu _id");
        }
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
    }
  };

  const bgColor = variant === "red" ? "bg-[#DF322B]" : "bg-[#6C8299]";

  return (
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
  );
}

export default ActionButton;