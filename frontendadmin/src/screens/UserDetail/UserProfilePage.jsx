import * as React from "react";
import CourseTable from "./components/CourseTable";

export default function UserProfile() {
  return (
  <main className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
    <div className="flex flex-col px-16 pt-16 bg-white max-md:px-5">
      <div className="flex gap-3 items-center self-start text-lg font-medium">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/4d4854acb7a6e508e93c5e0ed1944b29e7a75c82071720689dfc86f3e86f3c34?apiKey=7a79403a23cb489f853e4845c47ede19&"
          alt="User profile avatar"
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[119px]"
        />
        <div className="flex flex-col self-stretch my-auto">
          <div className="flex flex-col">
            <div className="text-2xl font-semibold text-neutral-900">
              Lê Thị Dung
            </div>
            <div className="flex gap-1 items-center self-start mt-3">
              <div className="self-stretch my-auto text-neutral-900 text-opacity-50">
                User ID
              </div>
              <div className="self-stretch my-auto text-neutral-900">
                USE1234
              </div>
            </div>
            <div className="mt-3 text-neutral-900 text-opacity-50">
              cabietbay@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 w-full max-md:max-w-full">
        <div className="text-xl font-semibold text-neutral-900 max-md:max-w-full">
          Thông tin cá nhân
        </div>
        <div className="flex flex-col mt-6 w-full text-lg max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
            <div className="flex flex-col min-w-[240px] w-[270px]">
              <div className="font-semibold text-neutral-900 text-opacity-50">
                Họ và tên
              </div>
              <div className="mt-4 font-medium text-neutral-900 text-opacity-80">
                Lê Thị Dung
              </div>
            </div>
            <div className="flex flex-col min-w-[240px] w-[270px]">
              <div className="font-semibold text-neutral-900 text-opacity-50">
                Số điện thoại
              </div>
              <div className="mt-4 font-medium text-neutral-900">
                09876543213
              </div>
            </div>
            <div className="flex flex-col whitespace-nowrap min-w-[240px] w-[270px]">
              <div className="font-semibold text-neutral-900 text-opacity-50">
                Gmail
              </div>
              <div className="mt-4 font-medium text-neutral-900">
                cabietbay@gmail.com
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 items-center mt-8 w-full max-md:max-w-full">
            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[270px]">
              <div className="font-semibold text-neutral-900 text-opacity-50">
                Ngày tham gia
              </div>
              <div className="mt-4 font-medium text-neutral-900">
                20/08/2023
              </div>
            </div>
            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[270px]">
              <div className="font-semibold text-neutral-900 text-opacity-50">
                Cập nhật lần cuối
              </div>
              <div className="mt-4 font-medium text-neutral-900">
                20/10/2023
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 w-full text-xl text-neutral-900 max-md:max-w-full">
        <div className="font-semibold max-md:max-w-full">Khóa học</div>
        <CourseTable />
      </div>
    </div>
  </main>
  );
}