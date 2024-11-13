import React from 'react';
import LoginButton from './LoginButton';

function SignUpForm() {
  return (
    <div className="flex z-0 flex-col w-full max-md:max-w-full">
      <div className="flex flex-col w-full leading-none text-white max-md:max-w-full">
        <div className="flex flex-col self-center max-w-full">
          <h2 className="flex gap-3 items-end self-center px-3 max-w-full text-3xl max-md:text-2xl font-semibold text-center text-white font-['Montserrat'] leading-loose">
            ĐĂNG KÝ
          </h2>
          <div className="flex gap-1 items-center w-full text-lg max-md:text-[16px]">
            <p className="flex gap-3 items-center font-normal self-stretch py-1  my-auto">
              Bạn đã có tài khoản?&nbsp;
            </p>
            <a href="#signup" className="flex gap-3 items-center font-semibold self-stretch my-auto ">
              Đăng nhập ngay
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-2 w-full text-xl max-md:text-lg max-md:max-w-full">
          <LoginButton
            provider="Facebook"
            iconSrc="Icon/FBicon.svg"
          />
          <LoginButton
            provider="Google"
            iconSrc="Icon/GGicon.svg"
          />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 items-center mt-4 w-full text-lg max-md:text-[16px] leading-none text-white font-['Montserrat'] whitespace-nowrap max-md:max-w-full">
      </div>
      <div data-layername="divider" className="flex flex-wrap gap-3 items-center self-center mt-4 w-full text-lg leading-none text-white whitespace-nowrap  max-md:max-w-full">
          <div className="flex-grow self-stretch my-auto h-px border border-white border-solid " />
          <p data-layername="text" className="flex gap-3 items-center self-stretch py-1.5 ">
            <span data-layername="button" className="gap-2.5 self-stretch my-auto">
              Hoặc
            </span>
          </p>
          <div className="flex-grow self-stretch my-auto h-px border border-white border-solid" />
      </div>
      <form className="flex flex-col mt-4 w-full max-md:max-w-full">
        <div className="flex flex-col w-full text-lg max-md:text-[16px] text-white">
           <div className="flex flex-col w-full  whitespace-nowrap">
            <label htmlFor="userName" className="self-start">Tên của bạn</label>
            <input
              type="text"
              id="userName"
              className="mt-1 w-full px-4 py-2 bg-white/0 text-white border border-solid border-[#d0d7df]"
              required
              aria-label="Tên của bạn"
            />
          </div>
          <div className="flex flex-col w-full mt-4 whitespace-nowrap">
            <label htmlFor="email" className="self-start">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 bg-white/0 text-white border border-solid border-[#d0d7df]"
              required
              aria-label="Email"
            />
          </div>
          <div className="flex flex-col mt-4 w-full">
            <label htmlFor="password" className="self-start">Mật khẩu</label>
            <input  
              className={"mt-1 w-full px-4 py-2 bg-white/0 text-white border border-solid  border-[#d0d7df]"}
              type="password"
              id="password"
              required
              aria-label="Mật khẩu" 
            />
          </div>
          <div className="flex flex-col mt-4 w-full">
            <label htmlFor="Xác nhận mật khẩu" className="self-start">Xác nhận mật khẩu</label>
            <input  
              className={"mt-1 w-full px-4 py-2 bg-white/0 text-white border border-solid  border-[#d0d7df]"}
              type="password"
              id="Xác nhận mật khẩu"
              required
              aria-label="Xác nhận mật khẩu" 
            />
          </div>
        </div>
        <button type="submit" className="flex flex-wrap gap-5 justify-center items-center mt-4 w-full text-xl max-md:text-lg font-normal bg-[#CFF500] min-h-[70px] text-neutral-900 max-md:max-w-full">
          Đăng Ký
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;

