import React, { useState } from 'react';

const ProfileForm = () => {
  // Define state for password fields
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Define state for toggling password visibility
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Toggle visibility of the current password
  const togglePasswordVisibility = (passwordType) => {
    if (passwordType === 'currentPassword') {
      setShowCurrentPassword(!showCurrentPassword);
    } else if (passwordType === 'newPassword') {
      setShowNewPassword(!showNewPassword);
    } else if (passwordType === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <form className="flex flex-col px-[20px] pt-[20px] max-w-[930px] min-h-[874px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col w-full text-white max-md:max-w-full">
          <label htmlFor="fullName" className="text-xl font-medium max-md:max-w-full">
            Họ và tên
          </label>
          <input
            id="fullName"
            type="text"
            className="flex-1 shrink gap-2.5 self-stretch text-white bg-transparent px-[8px] py-[8px] mt-2 w-full text-lg border border-[#D0D7DF] border-solid min-h-[60px] max-md:max-w-full"
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
            className="flex-1 shrink gap-2.5 self-stretch px-[8px] py-[8px] mt-2 w-full text-lg bg-[#EBF1F9] min-h-[60px] text-neutral-900 text-opacity-60 max-md:max-w-full"
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
            className="flex-1 shrink gap-2.5 self-stretch px-[8px] py-[8px] mt-2 w-full text-lg whitespace-nowrap bg-[#EBF1F9] min-h-[60px] text-neutral-900 text-opacity-60 max-md:max-w-full"
            defaultValue="09834743959"
            readOnly
          />
        </div>
      </div>

      <div className="flex flex-col w-full max-md:max-w-full">
        {/* Current Password */}
        <div className="flex flex-col mt-8 w-full text-white max-md:max-w-full">
          <label htmlFor="currentPassword" className="text-xl font-medium max-md:max-w-full">
            Mật khẩu hiện tại
          </label>
          <div className="flex gap-2.5 justify-center items-center px-[8px] py-[8px] mt-2 w-full border border-[#D0D7DF] border-solid min-h-[60px] max-md:max-w-full">
            <input
              id="currentPassword"
              type={showCurrentPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)} // Update the state when user types
              autoComplete="off"
              className="flex-1 bg-transparent border-none outline-none text-white"
            />
            <img
              loading="lazy"
              src={showCurrentPassword
                ? "https://cdn.builder.io/api/v1/image/assets/TEMP/6d0691d3e7343fc6c0028f1faa5c59306b98586db03c35bcda1991ff364f4d53?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e"
                : "https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/d869b01bf44fd3d0d0a9d49750a7b186abf8eae62a9a4611c5d1a7e4b43f66b8?apiKey=1914b3001bed44e2a53adf842ab19f47&"}
              alt="eye icon"
              className="object-contain self-stretch my-auto w-6 aspect-square cursor-pointer"
              onClick={() => togglePasswordVisibility("currentPassword")}
            />
          </div>
        </div>

        {/* New Password */}
        <div className="flex flex-col mt-8 w-full max-md:max-w-full">
          <label htmlFor="newPassword" className="text-xl font-medium text-white max-md:max-w-full">
            Mật khẩu mới
          </label>
          <div className="flex gap-2.5 justify-center items-center px-[8px] py-[8px] mt-2 w-full border border-[#D0D7DF] border-solid min-h-[60px] max-md:max-w-full">
            <input
              id="newPassword"
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)} // Update the state when user types
              autoComplete="off"
              className="flex-1 bg-transparent border-none outline-none text-white"
            />
            <img
              loading="lazy"
              src={showNewPassword
                ? "https://cdn.builder.io/api/v1/image/assets/TEMP/6d0691d3e7343fc6c0028f1faa5c59306b98586db03c35bcda1991ff364f4d53?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e"
                : "https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/d869b01bf44fd3d0d0a9d49750a7b186abf8eae62a9a4611c5d1a7e4b43f66b8?apiKey=1914b3001bed44e2a53adf842ab19f47&"}
              alt="eye icon"
              className="object-contain self-stretch my-auto w-6 aspect-square cursor-pointer"
              onClick={() => togglePasswordVisibility("newPassword")}
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col mt-8 w-full max-md:max-w-full">
          <label htmlFor="confirmPassword" className="text-xl font-medium text-white max-md:max-w-full">
            Xác nhận mật khẩu
          </label>
          <div className="flex gap-2.5 justify-center items-center px-[8px] py-[8px] mt-2 w-full border border-[#D0D7DF] border-solid min-h-[60px] max-md:max-w-full">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} // Update the state when user types
              autoComplete="off"
              className="flex-1 bg-transparent border-none outline-none text-white"
            />
            <img
              loading="lazy"
              src={showConfirmPassword
                ? "https://cdn.builder.io/api/v1/image/assets/TEMP/6d0691d3e7343fc6c0028f1faa5c59306b98586db03c35bcda1991ff364f4d53?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e"
                : "https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/d869b01bf44fd3d0d0a9d49750a7b186abf8eae62a9a4611c5d1a7e4b43f66b8?apiKey=1914b3001bed44e2a53adf842ab19f47&"}
              alt="eye icon"
              className="object-contain self-stretch my-auto w-6 aspect-square cursor-pointer"
              onClick={() => togglePasswordVisibility("confirmPassword")}
            />
          </div>
        </div>
      </div>

      <button type="submit" className="flex gap-3 justify-center items-center self-center px-[12px] py-[20px] mt-[40px] max-w-full text-xl font-semibold leading-none bg-[#CFF500] min-h-[71px] text-neutral-900 w-[380px]">
        Cập nhật tài khoản
      </button>
    </form>
  );
};

export default ProfileForm;
