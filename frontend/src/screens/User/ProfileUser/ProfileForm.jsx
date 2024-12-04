import React from 'react';

const ProfileForm = () => (
  <form className="flex flex-col px-[20px] pt-[20px] max-w-[930px] min-h-[874px] max-md:mt-10 max-md:max-w-full">
    
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="flex flex-col w-full text-white max-md:max-w-full">
        <label htmlFor="fullName" className="text-xl font-medium max-md:max-w-full">
          Họ và tên
        </label>
        <input
          id="fullName"
          type="text"
          className="flex-1 shrink gap-2.5 self-stretch text-black px-[8px] py-[8px] mt-2 w-full text-lg border border-gray-300 border-solid min-h-[60px] max-md:max-w-full"
          defaultValue="Pham Hải Yến"
        />
      </div>

      <div className="flex flex-col mt-8 w-full whitespace-nowrap max-md:max-w-full">
        <label htmlFor="email" className="text-xl font-medium text-white max-md:max-w-full">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="flex-1 shrink gap-2.5 self-stretch px-[8px] py-[8px] mt-2 w-full text-lg bg-indigo-50 min-h-[60px] text-neutral-900 text-opacity-60 max-md:max-w-full"
          defaultValue="Hyen@gmail.com"
          readOnly
        />
      </div>

      <div className="flex flex-col mt-8 w-full max-md:max-w-full">
        <label htmlFor="phone" className="text-xl font-medium text-white max-md:max-w-full">
          Số điện thoại
        </label>
        <input
          id="phone"
          type="tel"
          className="flex-1 shrink gap-2.5 self-stretch px-[8px] py-[8px] mt-2 w-full text-lg whitespace-nowrap bg-indigo-50 min-h-[60px] text-neutral-900 text-opacity-60 max-md:max-w-full"
          defaultValue="09834743959"
          readOnly
        />
      </div>

      <div className="flex flex-col mt-8 w-full text-white max-md:max-w-full">
        <label htmlFor="currentPassword" className="text-xl font-medium max-md:max-w-full">
          Mật khẩu hiện tại
        </label>
        <div className="flex flex-wrap gap-2.5 justify-center items-center px-[8px] py-[8px] mt-2 w-full text-lg whitespace-nowrap border border-gray-300 border-solid min-h-[60px] max-md:max-w-full">
          <input
            id="currentPassword"
            type="password"
            className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full bg-transparent border-none"
            defaultValue="password123"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/a155b4761efd94f16c2afa5e83b56da228002f6521e76bef914a6e2d510c7d1a?apiKey=1914b3001bed44e2a53adf842ab19f47&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </div>
      </div>

      <div className="flex flex-col mt-8 w-full max-md:max-w-full">
        <label htmlFor="newPassword" className="text-xl font-medium text-white max-md:max-w-full">
          Mật khẩu mới
        </label>
        <div className="flex gap-2.5 justify-center items-center px-[8px] py-[8px] mt-2 w-full border border-gray-300 border-solid min-h-[60px] max-md:max-w-full">
          <input
            id="newPassword"
            type="password"
            className="flex-1 bg-transparent border-none"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/a9095190d5e4cb976fe63e70cc3dbada2a8da49765dff77b6c5b2852b18856ef?apiKey=1914b3001bed44e2a53adf842ab19f47&"
            alt=""
            className="object-contain self-stretch my-auto w-6 aspect-square"
          />
        </div>
      </div>

      <div className="flex flex-col mt-8 w-full max-md:max-w-full">
        <label htmlFor="confirmPassword" className="text-xl font-medium text-white max-md:max-w-full">
          Xác nhận mật khẩu
        </label>
        <div className="flex gap-2.5 justify-center items-center px-[8px] py-[8px] mt-2 w-full border border-gray-300 border-solid min-h-[60px] max-md:max-w-full">
          <input
            id="confirmPassword"
            type="password"
            className="flex-1 bg-transparent border-none"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/d869b01bf44fd3d0d0a9d49750a7b186abf8eae62a9a4611c5d1a7e4b43f66b8?apiKey=1914b3001bed44e2a53adf842ab19f47&"
            alt=""
            className="object-contain self-stretch my-auto w-6 aspect-square"
          />
        </div>
      </div>
    </div>

    <button type="submit" className="flex gap-3 justify-center items-center self-center px-[12px] py-[20px] mt-[40px] max-w-full text-xl font-semibold leading-none bg-[#CFF500] min-h-[71px] text-neutral-900 w-[380px]">
      Cập nhật tài khoản
    </button>
  </form>
);

export default ProfileForm