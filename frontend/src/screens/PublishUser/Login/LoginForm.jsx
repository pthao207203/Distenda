import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
import LoginButton from "./LoginButton.jsx";
// import FacebookLoginButton from './FacebookLoginButton.jsx';

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

  // const handleFacebookLogin = async (fbResponse) => {
  //   try {
  //     const res = await axios.post(
  //       `${process.env.REACT_APP_API_BASE_URL}/auth/login/facebook`,
  //       { accessToken: fbResponse.accessToken },
  //       { withCredentials: true }
  //     );
  //     if (res.data.code === 200) {
  //       localStorage.setItem("user_role", "user");
  //       navigate("/");
  //     } else {
  //       setError(res.data.message);
  //     }
  //   } catch (err) {
  //     setError("Lỗi đăng nhập với Facebook");
  //   }
  // };  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  
  // const handleFacebookLogin = async (authResponse) => {
  //     // Gửi access token về backend để xác thực
  //     const res = await fetch('/auth/login/facebook', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ accessToken: authResponse.accessToken }),
  //     });
  //     const data = await res.json();
  //     if (data.code === 200) {
  //       console.log('Đăng nhập Facebook thành công!');
  //       localStorage.setItem('user_role', 'user'); // Lưu role vào localStorage
  //       navigate('/'); // Chuyển về trang chủ sau khi đăng nhập thành công
  //     } else {
  //       console.error(data.message);
  //     }
  //   };

  // // Xử lý đăng nhập với Facebook
  // const responseFacebook = (response) => {
  //   console.log(response);
  //   if (response.accessToken) {
  //     fetch('/auth/login/facebook', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ accessToken: response.accessToken })
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         if (data.code === 200) {
  //           console.log('Đăng nhập Facebook thành công!');
  //           // Cập nhật role vào context hoặc state nếu bạn có
  //           localStorage.setItem("user_role", "user"); // ví dụ đơn giản
  //           navigate('/'); // Chuyển về Home
  //         } else {
  //           console.error(data.message);
  //         }
  //       });
  //   }
  // };

  return (
    <div className="flex z-0 flex-col w-full max-md:max-w-full">
      <div className="flex flex-col w-full leading-none text-white max-md:max-w-full">
        <div className="flex flex-col self-center max-w-full">
          <h2 className="flex gap-3 items-end self-center px-3 max-w-full text-3xl max-md:text-2xl font-semibold text-center text-white font-['Montserrat'] leading-loose">
            ĐĂNG NHẬP
          </h2>
          <div className="flex gap-1 items-center w-full text-lg max-md:text-[16px]">
            <p className="flex gap-3 items-center font-normal self-stretch py-1  my-auto">
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
        <div className="flex flex-col mt-2 w-full justify-center items-center text-xl max-md:text-lg max-md:max-w-full">
          {/* <FacebookLogin
            appId={process.env.REACT_APP_FB_CLIENT_ID} // ID ứng dụng Facebook
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            icon="fa-facebook"
            textButton="Tiếp tục với Facebook" // Tùy chỉnh văn bản nút
            cssClass="flex flex-wrap gap-1 justify-center items-center p-3 w-full bg-white/15 max-md:max-w-full mt-4"
          /> */}
          {/* <FacebookLoginButton
   onLoginSuccess={handleFacebookLogin}
   onLoginFailure={(err) => setError("Đăng nhập Facebook thất bại")}
/> */}
          <LoginButton
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
          />
          {error && <p>{error}</p>}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center mt-4 w-full text-lg max-md:text-[16px] leading-none text-white font-['Montserrat'] whitespace-nowrap max-md:max-w-full"></div>
      <div
        data-layername="divider"
        className="flex flex-wrap gap-3 items-center self-center mt-4 w-full text-lg leading-none text-white whitespace-nowrap  max-md:max-w-full"
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
          <div className="flex flex-col mt-4 w-full">
            <label htmlFor="password" className="self-start">
              Mật khẩu
            </label>
            <input
              className={
                "mt-1 w-full px-4 py-2 bg-white/0 text-white border border-solid  border-[#d0d7df]"
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
        <div className="flex mt-2 items-center justify-end text-right w-full text-lg max-md:text-[16px]">
          <button
            type="button"
            onClick={onForgotPassword}
            className="flex text-right text-white text-base font-normal hover:font-medium hover:underline self-end my-auto "
          >
            Quên mật khẩu
          </button>
        </div>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {success && <p className="mt-4 text-[#CFF500]">{success}</p>}
        <button
          type="submit"
          className="flex flex-wrap gap-5 justify-center items-center mt-4 w-full text-xl max-md:text-lg font-normal bg-[#CFF500] min-h-[70px] text-neutral-900 max-md:max-w-full"
        >
          Đăng Nhập
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
