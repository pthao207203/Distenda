//Fix API của email trang này: kiểm tra email không tồn tại, email không hợp lệ do sai cú pháp
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginResetController } from "../../../controllers/auth.controller.js";

function PasswordReset({ onNext, onSetEmail }) {
  const [formData, setFormData] = useState({
    UserEmail: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); //Xử lý loading button

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    onSetEmail(formData.UserEmail);
    setError(null);
    setSuccess(null);
    setIsLoading(true); // Bắt đầu trạng thái loading

    // Gửi dữ liệu tới server
    try {
      console.log(formData);
      const result = await loginResetController(formData);
      if (result.code === 200) {
        if (onNext) {
          onNext(); // Chỉ gọi hàm onNext nếu OTP hợp lệ và xử lý thành công
        }
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false); // Kết thúc trạng thái loading
    }
  };
  return (
    <div className="flex z-0 flex-col w-full max-md:max-w-full">
      <div className="flex flex-col w-full leading-none text-white max-md:max-w-full">
        <div className="flex flex-col self-center max-w-full">
          <h2 className="flex gap-3 items-end self-center px-3 max-w-full text-3xl max-md:text-2xl font-semibold text-center text-white font-['Montserrat'] leading-loose">
            Khôi phục mật khẩu
          </h2>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-4 w-full max-md:max-w-full"
      >
        <div className="flex flex-col w-full text-lg max-md:text-[16px] text-white">
          <div className="flex flex-col w-full  whitespace-nowrap">
            <label htmlFor="email" className="self-start">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 bg-white/0 text-white border border-solid border-[#d0d7df]"
              required
              aria-label="Email"
              name="UserEmail"
              value={formData.UserEmail}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className={`flex flex-wrap gap-5 justify-center items-center mt-4 w-full text-xl max-md:text-lg font-normal bg-[#CFF500] min-h-[70px] text-neutral-900 max-md:max-w-full ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Đang xử lý..." : "Nhận mã"}
        </button>
        {error && (
          <p className="mt-4 text-[1.125rem] max-lg:text-[12px] text-red-500">
            {error}
          </p>
        )}
        {success && (
          <p className="mt-4 text-[1.125rem] max-lg:text-[12px] text-[#CFF500]">
            {success}
          </p>
        )}
      </form>
    </div>
  );
}

export default PasswordReset;
