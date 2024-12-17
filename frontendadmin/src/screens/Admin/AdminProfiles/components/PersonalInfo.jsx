import React, { useState } from "react";

const PersonalInfo = ({
  name: initialName,
  email: initialEmail,
  phone: initialPhone,
  positionOptions,
  position: initialPosition,
  status: initialStatus,
}) => {
  // Quản lý trạng thái cho các trường thông tin
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);
  const [position, setPosition] = useState(initialPosition || positionOptions[0]);
  const [status, setStatus] = useState(initialStatus);

  // Chuyển đổi trạng thái khi nhấn vào statusText
  const toggleStatus = () => {
    setStatus((prevStatus) => (prevStatus === 1 ? 0 : 1));
  };

  // Class và nội dung text cho status
  const statusClass = status === 1 ? "bg-[#D1F669]" : "bg-[#FFD75B]";
  const statusText = status === 1 ? "Đang hoạt động" : "Tạm dừng";

  return (
    <div className="flex flex-col mt-10 w-full text-xl max-md:max-w-full">
      <div className="font-semibold text-neutral-900 max-md:max-w-full">
        Thông tin cá nhân
      </div>
      <div className="flex flex-col mt-6 w-full font-medium leading-none max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
          {/* Họ và tên */}
          <div className="flex flex-col min-h-[91px] min-w-[240px] w-[360px]">
            <label htmlFor="name" className="text-neutral-900 text-opacity-50">
              Họ và tên
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2.5 mt-2 rounded-lg border border-solid border-slate-500 text-neutral-900"
            />
          </div>

          {/* Gmail */}
          <div className="flex flex-col min-h-[91px] min-w-[240px] w-[360px]">
            <label htmlFor="email" className="text-neutral-900 text-opacity-50">
              Gmail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2.5 mt-2 rounded-lg border border-solid border-slate-500 text-neutral-900"
            />
          </div>

          {/* Số điện thoại */}
          <div className="flex flex-col min-h-[91px] min-w-[240px] w-[360px]">
            <label htmlFor="phone" className="text-neutral-900 text-opacity-50">
              Số điện thoại
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2.5 mt-2 rounded-lg border border-solid border-slate-500 text-neutral-900"
            />
          </div>
        </div>

        {/* Chức vụ */}
        <div className="flex flex-wrap gap-10 justify-between items-start mt-8 max-w-full w-[900px]">
          <div className="flex flex-col min-h-[91px] min-w-[240px] w-[360px]">
            <label htmlFor="position" className="text-neutral-900 text-opacity-50">
              Chức vụ
            </label>
            <select
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="p-2.5 mt-2 rounded-lg border border-solid border-slate-500 text-neutral-900"
            >
              {positionOptions.map((role) => (
                <option key={role._id} value={role._id} disabled={role.disabled}>
                  {role.RoleName}
                </option>
              ))}
            </select>
          </div>

          {/* Trạng thái */}
          <div className="flex flex-col min-h-[91px] min-w-[240px] w-[360px]">
            <label htmlFor="status" className="text-neutral-900 text-opacity-50">
              Trạng thái
            </label>
            <button
              onClick={toggleStatus}
              className={`flex justify-center items-center p-3 mt-2 w-full rounded-[99px] ${statusClass}`}
            >
              {statusText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
