import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import LoginButton from "../Login/LoginButton.jsx";
import FacebookLoginButton from "../Login/FacebookLoginButton.jsx";

import { registerController } from "../../../controllers/auth.controller.js";

function RegisterForm() {
  const [formData, setFormData] = useState({
    UserFullName: "",
    UserEmail: "",
    UserPassword: "",
    UserPasswordAgain: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

   //Xử lý login with Google
   const handleGoogleLoginSuccess = async (response) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/login/google`,
        { token: response.credential },
        { withCredentials: true }
      );      
      if (res.data.code === 200) {
        localStorage.setItem("user_token", res.data.user.UserToken);
        navigate("/");
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError("Lỗi đăng nhập với Google");
    }
  };

  //Xử lý đăng nhập Facebook
  const handleFacebookLoginSuccess = async (fbResponse) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/login/facebook`,
        { accessToken: fbResponse.accessToken, userID: fbResponse.userID },
        { withCredentials: true }
      );
      if (res.data.code === 200) {
        localStorage.setItem("user_token", res.data.user);
        navigate("/");
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError("Lỗi đăng nhập với Facebook");
    }
  };

  const handleFacebookLoginFailure = (error) => {
    console.error(error);
    setError("Đăng nhập Facebook thất bại");
  };

  const handleGoogleLoginFailure = (error) => {
    console.error(error);
    setError("Đăng nhập Google thất bại");
  };

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
    registerController(formData, setSuccess, setError, navigate);
  };
  return (
    <div className="flex z-0 flex-col w-full max-lg:max-w-full max-lg:p-[20px]">
      <div className="flex flex-col w-full leading-none text-white max-lg:max-w-full">
        <div className="flex flex-col self-center max-w-full">
          <h2 className="flex gap-3 items-end self-center px-3 max-w-full text-[1.875rem] max-lg:text-[20px] font-semibold text-center text-white font-['Montserrat'] leading-loose">
            ĐĂNG KÝ
          </h2>
          <div className="flex gap-1 items-center w-full text-[1.125rem] max-lg:text-[12px] py-2">
            <p className="flex gap-3 items-center font-normal self-stretch py-1  my-auto">
              Bạn đã có tài khoản?&nbsp;
            </p>
            <a
              href="/login"
              className="flex gap-3 items-center font-semibold self-stretch my-auto "
            >
              Đăng nhập ngay
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-[4px] w-full max-lg:text-lg max-lg:max-w-full">
          {/* <LoginButton
            provider="Facebook"
            iconSrc="Icon/FBicon.svg"
          /> */}
          <FacebookLoginButton
            onSuccess={handleFacebookLoginSuccess}
            onFailure={handleFacebookLoginFailure}
          />
          <LoginButton
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
          />
          {error && <p>{error}</p>}
        {/* <div className="flex flex-col mt-2 w-full text-xl max-lg:text-lg max-lg:max-w-full">
          <LoginButton provider="Facebook" iconSrc="Icon/FBicon.svg" />
          <LoginButton provider="Google" iconSrc="Icon/GGicon.svg" /> */}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center mt-4 w-full text-[1.125rem] max-lg:text-[16px] leading-none text-white font-['Montserrat'] whitespace-nowrap max-lg:max-w-full"></div>
      <div
        data-layername="divider"
        className="flex flex-wrap gap-3 items-center self-center w-full text-[1.125rem] max-lg:text-[12px] leading-none text-white whitespace-nowrap  max-lg:max-w-full"
      >
        <div className="flex-grow self-stretch my-auto h-px border border-white border-solid " />
        <p
          data-layername="text"
          className="flex gap-3 items-center self-stretch py-1.5 "
        >
          <span
            data-layername="button"
            className="gap-2.5 self-stretch my-auto"
          >
            Hoặc
          </span>
        </p>
        <div className="flex-grow self-stretch my-auto h-px border border-white border-solid" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-[16px] w-full max-lg:max-w-full"
      >
        <div className="flex flex-col w-full text-[1.125rem] max-lg:text-[12px] text-white">
          <div className="flex flex-col w-full  whitespace-nowrap">
            <label htmlFor="userName" className="self-start">
              Tên của bạn
            </label>
            <input
              type="text"
              id="userName"
              className="mt-[4px] w-full px-[16px] py-[8px] bg-white/0 text-white border border-solid border-[#d0d7df]"
              required
              aria-label="Tên của bạn"
              name="UserFullName"
              value={formData.UserFullName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full mt-[16px] whitespace-nowrap">
            <label htmlFor="email" className="self-start">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-[4px] w-full px-[16px] py-[8px] bg-white/0 text-white border border-solid border-[#d0d7df]"
              required
              aria-label="Email"
              name="UserEmail"
              value={formData.UserEmail}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-[16px] w-full">
            <label htmlFor="password" className="self-start">
              Mật khẩu
            </label>
            <input
              className={
                "mt-[4px] w-full px-[16px] py-[8px] bg-white/0 text-white border border-solid  border-[#d0d7df]"
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
                "mt-[4px] w-full px-[16px] py-[8px] bg-white/0 text-white border border-solid  border-[#d0d7df]"
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
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {success && <p className="mt-4 text-[#CFF500]">{success}</p>}
        <button
          type="submit"
          className="flex flex-wrap gap-5 justify-center items-center mt-[20px] w-full text-[1.25rem] max-lg:text-[14px] font-normal bg-[#CFF500] min-h-[40px] text-neutral-900 max-lg:max-w-full"
        >
          Đăng Ký
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
