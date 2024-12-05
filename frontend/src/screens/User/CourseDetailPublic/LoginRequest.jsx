import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginRequest({onClose}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center p-10 text-2xl font-medium leading-6 text-black bg-white max-w-[600px] max-md:p-5">
      <button className="justify-end self-end " onClick={onClose}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/18ce7f5d3a0e8a95408a91d7f810fd4a3daa1c23a4824327ff1f5f9f74b720b0?apiKey=1914b3001bed44e2a53adf842ab19f47&"
        alt="Close"
        className="object-contain self-end aspect-[0.94] hover:brightness-110 hover:scale-105 transition duration-200"
      />
      </button>
      <p className="self-center text-center mt-10 max-md:mt-5 max-md:max-w-full">
      Bạn phải đăng nhập để có thể đăng ký khóa học này!
      </p>
      <button 
          className="flex gap-3 justify-center items-center px-3 py-6 mt-11 w-4/5 max-w-full text-xl font-medium bg-[#CFF500] min-h-[60px] shadow-[-10px_10px_0px_rgba(255,255,255,1)] max-md:mt-10"
          onClick={handleClick }
          tabIndex={0}
      >
        Đăng Nhập
      </button>
      <div className="flex gap-1 items-center max-w-full text-lg w-[346px]">
        <p className="flex gap-3 items-center font-normal self-stretch py-5 my-auto">
            Bạn chưa có tài khoản?{" "}
        </p>
        <button 
            className="flex gap-3 items-center self-stretch py-5 my-auto font-semibold"
            onClick={() => {}}
            tabIndex={0}
        >
            <a href="/register">Đăng ký ngay</a>
        </button>
      </div>
    </main>
  );
}