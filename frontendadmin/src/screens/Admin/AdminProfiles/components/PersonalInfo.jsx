import React, { useState } from "react";
import moment from "moment";

const PersonalInfo = ({ data, handleChange, handleToggle, roles, handleHistoryRequest }) => {
  // Class và nội dung text cho status
  const statusClass =
    data?.CourseStatus === 1 ? "bg-[#D1F669]" : "bg-[#FFD75B]";
  const statusText = data?.CourseStatus === 1 ? "Đang hoạt động" : "Tạm dừng";
  console.log("roles", roles);

  return (
    <div className="flex flex-col mt-10 w-full text-xl max-md:max-w-full">
      <div className="font-semibold text-neutral-900 max-md:max-w-full">
        Thông tin cá nhân
      </div>
      <div className="flex flex-col mt-6 w-full font-medium leading-none max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
          {/* Họ và tên */}
          <div className="flex flex-col min-h-[91px] min-w-[240px] w-[360px]">
            <label
              htmlFor="AdminFullName"
              className="text-neutral-900 text-opacity-50"
            >
              Họ và tên
            </label>
            <input
              id="AdminFullName"
              type="text"
              value={data?.AdminFullName}
              onChange={handleChange}
              className="p-2.5 mt-2 rounded-lg border border-solid border-slate-500 text-neutral-900"
            />
          </div>

          {/* Gmail */}
          <div className="flex flex-col min-h-[91px] min-w-[240px] w-[360px]">
            <label
              htmlFor="AdminEmail"
              className="text-neutral-900 text-opacity-50"
            >
              Gmail
            </label>
            <input
              id="AdminEmail"
              type="email"
              value={data?.AdminEmail}
              onChange={handleChange}
              className="p-2.5 mt-2 rounded-lg border border-solid border-slate-500 text-neutral-900"
            />
          </div>

          {/* Số điện thoại */}
          <div className="flex flex-col min-h-[91px] min-w-[240px] w-[360px]">
            <label
              htmlFor="AdminPhone"
              className="text-neutral-900 text-opacity-50"
            >
              Số điện thoại
            </label>
            <input
              id="AdminPhone"
              type="tel"
              value={data?.AdminPhone}
              onChange={handleChange}
              className="p-2.5 mt-2 rounded-lg border border-solid border-slate-500 text-neutral-900"
            />
          </div>
        </div>

        {/* Chức vụ */}
        <div className="flex flex-wrap gap-10 justify-between items-start mt-8 max-w-full">
          <div className="flex flex-col min-h-[91px] min-w-[240px] w-[360px]">
            <label
              htmlFor="position"
              className="text-neutral-900 text-opacity-50"
            >
              Chức vụ
            </label>
            <select
              id="AdminRole_id"
              value={data?.AdminRole_id}
              onChange={(e) => handleChange(e)} // Kích hoạt hàm onChange khi chọn
              className="p-2.5 mt-2 rounded-lg border border-solid border-slate-500 text-neutral-900"
            >
              {roles &&
                roles.length > 0 &&
                roles.map((option, index) => (
                  <option
                    key={index}
                    value={option._id}
                    disabled={option.disabled}
                    selected={option._id === data.AdminRole_id}
                  >
                    {option.RoleName}
                  </option>
                ))}
            </select>
            {/* <select
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
            </select> */}
          </div>

          {/* Trạng thái */}
          <div className="flex flex-col min-h-[91px] min-w-[240px] w-[360px]">
            <label
              htmlFor="AdminStatus"
              className="text-neutral-900 text-opacity-50"
            >
              Trạng thái
            </label>
            {data?.AdminStatus === 1 ? (
              <button
                onClick={handleToggle}
                className={`flex justify-center items-center p-3 mt-2 w-full rounded-[99px] bg-[#D1F669]`}
              >
                Đang hoạt động
              </button>
            ) : (
              <button
                onClick={handleToggle}
                className={`flex justify-center items-center p-3 mt-2 w-full rounded-[99px] bg-[#FFD75B]`}
              >
                Tạm dừng
              </button>
            )}
            {/* <button
              onClick={handleToggle}
              className={`flex justify-center items-center p-3 mt-2 w-full rounded-[99px] ${statusClass}`}
            >
              {statusText}
            </button> */}
          </div>

          {/* Lần cuối cập nhật */}
          <div className="flex flex-col min-h-[91px] min-w-[240px] w-[360px]">
            <div className="flex gap-3 items-center">
              <label
                htmlFor="AdminLastUpdated"
                className="text-neutral-900 text-opacity-50"
              >
                Lần cuối cập nhật
              </label>
              <button className="flex gap-3 justify-center items-center" onClick ={handleHistoryRequest}>
                <img
                  loading="lazy"
                  src="/icons/Show.svg"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square filter-[#6c8299] sepia-60 saturate-200 hue-rotate-190 "
                  alt="Icon"
                />
              </button>
            </div>
            <span className="p-2.5 mt-2 rounded-lg text-neutral-900">
            {moment(
                data?.editedBy?.[data.editedBy?.length - 1]?.editedAt ||
                  data?.createdAt
              ).format("DD/MM/YYYY")}   
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;