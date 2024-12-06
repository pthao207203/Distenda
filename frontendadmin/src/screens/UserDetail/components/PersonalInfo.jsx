import React from 'react';

function PersonalInfo() {
  const personalDetails = [
    { label: 'Họ và tên', value: 'Lê Thị Dung' },
    { label: 'Số điện thoại', value: '09876543213' },
    { label: 'Gmail', value: 'cabietbay@gmail.com' },
    { label: 'Ngày tham gia', value: '20/08/2023' },
    { label: 'Cập nhật lần cuối', value: '20/10/2023' }
  ];

  return (
    <div className="flex flex-col mt-10 w-full max-md:max-w-full">
      <div className="text-xl font-semibold text-neutral-900 max-md:max-w-full">
        Thông tin cá nhân
      </div>
      <div className="flex flex-col mt-6 w-full text-lg max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
          {personalDetails.slice(0, 3).map((detail, index) => (
            <div key={index} className="flex flex-col min-w-[240px] w-[270px]">
              <div className="font-semibold text-neutral-900 text-opacity-50">
                {detail.label}
              </div>
              <div className="mt-4 font-medium text-neutral-900">
                {detail.value}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-10 items-center mt-8 w-full max-md:max-w-full">
          {personalDetails.slice(3).map((detail, index) => (
            <div key={index} className="flex flex-col self-stretch my-auto min-w-[240px] w-[270px]">
              <div className="font-semibold text-neutral-900 text-opacity-50">
                {detail.label}
              </div>
              <div className="mt-4 font-medium text-neutral-900">
                {detail.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;