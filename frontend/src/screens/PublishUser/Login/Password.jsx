import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginNewController } from "../../../controllers/auth.controller.js";

function Password() {
  const [formData, setFormData] = useState({
    UserPassword: "",
    UserPasswordAgain: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setError(null);
    setSuccess(null);

    // Kiểm tra mật khẩu có khớp không
    if (formData.UserPassword !== formData.UserPasswordAgain) {
      alert("Mật khẩu không khớp!");
      return;
    }

    // Gửi dữ liệu tới server
    const result = await loginNewController(formData, setSuccess, setError);
    console.log(result.code);
    if (result.code === 200) {
      alert("Đổi mật khẩu thành công!");
      navigate("/courses");
    }
  };
  return (
    <div className="flex z-0 flex-col w-full max-lg:max-w-full">
      <div className="flex flex-col w-full leading-none text-white max-lg:max-w-full">
        <div className="flex flex-col self-center max-w-full">
          <h2 className="flex gap-3 items-end self-center px-3 max-w-full text-3xl max-lg:text-[16px] font-semibold text-center text-white font-['Montserrat'] leading-loose">
            Nhập mật khẩu mới
          </h2>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-lg:max-w-full"
      >
        <div className="flex flex-col w-full text-lg max-lg:text-[14px] text-white">
          <div className="flex flex-col mt-4 w-full">
            <label htmlFor="password" className="self-start">
              Nhập mật khẩu mới
            </label>
            <input
              className={
                "mt-[10px] w-full px-[16px] py-[5px] bg-white/0 text-white border border-solid  border-[#d0d7df]"
              }
              type="password"
              id="password"
              required
              aria-label="Mật khẩu"
              name="UserPassword"
              value={formData.UserPassword}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-[16px] w-full">
            <label htmlFor="Xác nhận mật khẩu" className="self-start">
              Xác nhận mật khẩu
            </label>
            <input
              className={
                "mt-[10px] w-full px-[16px] py-[5px] bg-white/0 text-white border border-solid  border-[#d0d7df]"
              }
              type="password"
              id="Xác nhận mật khẩu"
              required
              aria-label="Xác nhận mật khẩu"
              name="UserPasswordAgain"
              value={formData.UserPasswordAgain}
              onChange={handleChange}
            />
          </div>
        </div>
        {error && (
          <p className="mt-4 text-lg max-lg:text-[14px] text-red-500">
            {error}
          </p>
        )}
        {success && (
          <p className="mt-4 text-lg max-lg:text-[14px]text-[#CFF500]">
            {success}
          </p>
        )}
        <button
          type="submit"
          className="flex flex-wrap gap-5 justify-center items-center mt-4 w-full text-xl max-lg:text-lg font-normal bg-[#CFF500] min-h-[70px] text-neutral-900 max-lg:max-w-full"
        >
          Xác nhận
        </button>
      </form>
    </div>
  );
}

export default Password;
