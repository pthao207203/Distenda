import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginButton from "./LoginButton.jsx";
import FacebookLoginButton from "./FacebookLoginButton.jsx";

import { loginController } from "../../../controllers/auth.controller.js";

function LoginForm({ onForgotPassword }) {
  const [formData, setFormData] = useState({
    UserEmail: "",
    UserPassword: "",
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

  const handleGoogleLoginFailure = (error) => {
    console.error(error);
    setError("Đăng nhập Google thất bại");
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setError(null);
    setSuccess(null);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
        formData
      );
      if (res.data.code === 200) {
        localStorage.setItem("user_role", "user");
        navigate("/");
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError("Lỗi kết nối máy chủ");
    }

    // Gửi dữ liệu tới server
    loginController(formData, setSuccess, setError, navigate);
  };

  return (
    <div className="flex z-0 flex-col w-full max-lg:max-w-full max-lg:p-[20px]">
      <div className="flex flex-col w-full leading-none text-white max-lg:max-w-full">
        <div className="flex flex-col self-center max-w-full">
          <h2 className="flex gap-3 items-end self-center px-3 max-w-full text-[1.875rem] max-lg:text-[20px] font-semibold text-center text-white font-['Montserrat'] leading-loose">
            ĐĂNG NHẬP
          </h2>
          <div className="flex gap-1 items-center w-full text-[1.125rem] max-lg:text-[12px] py-2">
            <p className="flex gap-3 items-center font-normal self-stretch py-[4px]  my-auto">
              Bạn chưa có tài khoản?&nbsp;
            </p>
            <a
              href="/register"
              className="flex gap-3 items-center font-semibold self-stretch my-auto "
            >
              Đăng ký ngay
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-[4px] w-full max-lg:text-lg max-lg:max-w-full">
          {/* <LoginButton
            provider="Facebook"
            iconSrc="Icon/FBicon.svg"
            onSuccess={handleFacebookLoginSuccess}
            onFailure={handleFacebookLoginFailure}
          /> */}
          <LoginButton
            provider="Google"
            iconSrc="Icon/GGicon.svg"
            onSuccess={handleFacebookLoginSuccess}
            onFailure={handleFacebookLoginFailure}
          />
          <FacebookLoginButton
            provider="Facebook"
            iconSrc="Icon/FBicon.svg"
            onSuccess={handleFacebookLoginSuccess}
            onFailure={handleFacebookLoginFailure}
          />
          {/* <LoginButton
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
          /> */}
          {/* {error && (
            <p className="pt-[4px] text-[1.125rem] max-lg:text-[12px] text-red-500">
              {error}
            </p>
          )} */}
        </div>
      </div>

      {/* <div className="flex flex-wrap gap-[16px] items-center mt-[16px] w-full text-[1.125rem] max-lg:text-[12px] leading-none text-white font-['Montserrat'] whitespace-nowrap max-lg:max-w-full"></div> */}
      <div
        data-layername="divider"
        className="flex flex-wrap gap-3 items-center self-center mt-[16px] w-full text-[1.125rem] max-lg:text-[12px] leading-none text-white whitespace-nowrap  max-lg:max-w-full"
      >
        <div className="flex-grow self-stretch my-auto h-px border border-white border-solid " />
        <p
          data-layername="text"
          className="flex gap-3 items-center self-stretch py-1.5 max-lg:py-[3px] "
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
        className="flex flex-col mt-4 w-full max-lg:max-w-full"
      >
        <div className="flex flex-col w-full text-[1.125rem] max-lg:text-[12px] text-white">
          <div className="flex flex-col w-full  whitespace-nowrap">
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
          <div className="flex flex-col mt-[16px] max-lg:mt-[16px] w-full">
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
        </div>
        <div className="flex lg:pt-2 max-lg:py-[12px] items-center justify-end text-right w-full text-[1.125rem] max-lg:text-[16px]">
          <button
            type="button"
            onClick={onForgotPassword}
            className="flex text-right text-white text-base font-normal hover:font-medium hover:underline self-end text-[1.125rem] max-lg:text-[10px]"
          >
            Quên mật khẩu
          </button>
        </div>
        {error && (
          <p className="text-[1.125rem] max-lg:text-[12px] text-red-500">
            {error}
          </p>
        )}
        {success && (
          <p className="text-[1.125rem] max-lg:text-[12px] text-[#CFF500]">
            {success}
          </p>
        )}
        <button
          type="submit"
          className="flex flex-wrap gap-5 justify-center items-center mt-4 max-lg:mt-[16px] w-full text-[1.25rem] max-lg:text-[14px] font-normal bg-[#CFF500] min-h-[40px] text-neutral-900 max-lg:max-w-full"
        >
          Đăng Nhập
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
