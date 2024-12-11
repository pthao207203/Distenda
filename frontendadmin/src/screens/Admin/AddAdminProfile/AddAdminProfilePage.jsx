import * as React from "react";
import { PersonalInfoField } from "./components/PersonalInfoField";
import { ActionButton } from "./components/ActionButton";

export const UserProfile = () => {
  const personalInfo = [
    { label: "Họ và tên", value: "Trần Lâm Ngọc Khanh" },
    { label: "Gmail", value: "khanhkhanh@gmai.com" },
    { label: "Số điện thoại", value: "0987654321" },
  ];

  return (
    <main className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      {/* Nút hành động */}
      <div className="flex gap-3 justify-end items-center w-full">
        <ActionButton
          icon="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/1829cc85a1395ac435e855f81f93714a3f953f874b6692060baaea6cd1928f74?apiKey=7a79403a23cb489f853e4845c47ede19&"
          label="Lưu"
          variant="primary"
        />
        <ActionButton label="Hủy" variant="secondary" />
      </div>

      {/* Thông tin cá nhân */}
      <section className="flex flex-col mt-10 w-full">
        <h1 className="font-semibold text-neutral-900 text-2xl mb-6">
          Thông tin cá nhân
        </h1>
        <div className="grid grid-cols-3 gap-6">
          {personalInfo.map((field, index) => (
            <PersonalInfoField
              key={index}
              label={field.label}
              value={field.value}
            />
          ))}
        </div>

        {/* Chức vụ */}
        <div className="flex flex-col mt-8">
          <h2 className="text-xl font-semibold mb-2">Chức vụ</h2>
          <select className="w-[280px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500">
            <option>Quản lý khóa học</option>
            <option>Giảng viên</option>
            <option>Quản trị viên</option>
          </select>
        </div>
      </section>
    </main>
  );
};
