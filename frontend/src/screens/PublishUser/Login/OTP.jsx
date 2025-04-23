import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  loginOTPController,
  loginResetController,
} from "../../../controllers/auth.controller.js";

function OTP({ onNext, email }) {
  const [formData, setFormData] = useState({
    UserEmail: email,
    UserOTP: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); //Xử lý loading button
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn reload trang
    setIsLoading(true); // Bắt đầu trạng thái loading

    try {
      if (!/^\d{6}$/.test(formData.UserOTP)) {
        setError("Mã OTP phải là 6 chữ số.");
        setIsLoading(false); // Kết thúc trạng thái loading nếu lỗi
        return;
      }

      // Gọi API xử lý
      const result = await loginOTPController(
        formData,
        setSuccess,
        setError,
        navigate
      );

      // Thành công -> điều hướng
      if (result.code === 200) {
        if (onNext) {
          onNext(); // Chỉ gọi hàm onNext nếu OTP hợp lệ và xử lý thành công
        }
      }
    } catch (err) {
      setError("Đã xảy ra lỗi. Vui lòng thử lại.");
    } finally {
      setIsLoading(false); // Kết thúc trạng thái loading
    }
  };
  return (
    <div className="flex z-0 flex-col w-full max-lg:max-w-full">
      <div className="flex flex-col w-full leading-none text-white max-lg:max-w-full">
        <div className="flex flex-col self-center max-w-full">
          <h2 className="flex gap-3 items-end self-center px-3 max-w-full text-3xl max-lg:text-[16px] font-semibold text-center text-white font-['Montserrat'] leading-loose">
            Khôi phục mật khẩu
          </h2>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-4 w-full max-lg:max-w-full"
      >
        <div className="flex flex-col w-full text-lg max-lg:text-[14px] text-white">
          <div className="flex flex-col w-full  whitespace-nowrap">
            <label htmlFor="email" className="self-start">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-[10px] w-full px-[16px] py-[5px] bg-white/0 text-white border border-solid border-[#d0d7df]"
              aria-label="Email"
              name="UserEmail"
              value={email}
              disabled
            />
          </div>
          <div className="flex gap-1 items-center mt-4 w-full max-lg:text-[16px]">
            <p className="flex gap-3 items-center font-medium text-xl max-lg:text-[14px] self-stretch py-[6px] leading-[14px] my-auto">
              Chúng tôi vừa gửi một mã OTP tới Email của bạn!
            </p>
          </div>
          <div className="flex flex-col mt-4 w-full">
            <label htmlFor="otp" className="self-start">
              Nhập mã OTP
            </label>
            <input
              className="mt-[10px] w-full px-[16px] py-[5px] bg-white/0 text-white border border-solid border-[#d0d7df]"
              type="text" // Sử dụng type="text" để kiểm soát độ dài và loại ký tự
              id="otp"
              required
              aria-label="Mã OTP"
              name="UserOTP"
              value={formData.UserOTP}
              onChange={(e) => {
                const value = e.target.value;
                // Chỉ cho phép nhập số và giới hạn tối đa 6 ký tự
                if (/^\d*$/.test(value) && value.length <= 6) {
                  handleChange(e); // Gọi hàm xử lý thay đổi giá trị
                }
              }}
              pattern="^\d{6}$" // Đảm bảo chính xác 6 chữ số
              title="Vui lòng nhập chính xác 6 chữ số"
              maxLength={6} // Giới hạn nhập không quá 6 ký tự
            />
          </div>
        </div>
        <div className="flex mt-2 items-center justify-end text-right w-full">
          <button
            type="button"
            disabled={isClicked}
            tabIndex={0}
            className={`flex text-right text-white text-base font-normal hover:font-medium hover:underline self-end mt-[10px] lg:text-lg max-lg:text-[14px] ${
              isClicked && "hidden"
            }`}
            onClick={async (e) => {
              e.preventDefault();
              setIsClicked(true);
              setIsLoading(true);
              try {
                console.log(email);
                const result = await loginResetController(email);
              } catch (err) {
                console.log(err.message);
                // setError(String(err));
              } finally {
                setIsLoading(false); // Kết thúc trạng thái loading
              }
            }}
          >
            Gửi lại
          </button>
        </div>

        <button
          type="submit"
          className={`flex flex-wrap gap-5 mt-[10px] justify-center items-center w-full text-xl max-lg:text-[14px] font-medium bg-[#CFF500] min-h-[40px] text-neutral-900 max-lg:max-w-full ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Đang xử lý..." : "Xác nhận"}
        </button>
        {error && (
          <p className="mt-[16px] text-lg max-lg:text-[14px] text-red-500">
            {error}
          </p>
        )}
        {success && (
          <p className="mt-[16px] text-lg max-lg:text-[14px] text-[#CFF500]">
            {success}
          </p>
        )}
      </form>
    </div>
  );
}

export default OTP;
