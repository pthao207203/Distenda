import React from 'react';

function Navigation() {
  return (
    <header className="flex flex-wrap items-center w-[1728px] h-[84px] px-[60px] justify-start gap-[373px]  leading-none text-white bg-white bg-opacity-0">
      <div className="flex flex-1 shrink gap-3 items-center self-stretch px-3 py-5 my-auto text-[60px] font-['Squada One'] uppercase whitespace-nowrap basis-0 ">
        <h1>Distenda</h1>
      </div>
      <nav className="flex flex-wrap flex-1 shrink gap-[29px] h-[60px] items-center self-stretch my-auto text-[20px] font-semibold text-center basis-6 min-w-[240px] max-md:max-w-full">
        <a href="#about" className="flex gap-3 items-center self-stretch px-3 py-5 my-auto">
          Về chúng tôi
        </a>
        <a href="#login" className="flex gap-3 justify-center items-center self-stretch px-3 py-3.5 my-auto text-black bg-[#CFF500] ">
          Đăng nhập
        </a>
        <a href="#signup" className="flex gap-3 items-center self-stretch px-3 py-5 my-auto">
          Đăng ký
        </a>
        <a href="#help" className="flex gap-3 items-center self-stretch px-3 py-5 my-auto">
          Trợ giúp
        </a>
      </nav>
    </header>
  );
}

export default Navigation;