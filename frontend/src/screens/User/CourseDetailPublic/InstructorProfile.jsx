import React from 'react';

export default function InstructorProfile(intructor) {
  console.log(intructor)
  return (
    <div className="flex flex-wrap basis-auto items-start gap-5 mt-5 w-full max-md:flex-col max-md:max-w-full">
      {/* Phần ảnh */}
      <div className="flex flex-col items-start justify-start text-lg font-semibold">
        <img
          loading="lazy"
          src={`${intructor.AdminAvatar ? intructor.AdminAvatar : "../Icon/image.svg"}`}
          alt="Instructor profile"
          className="object-cover z-0 w-[230px] h-[240px] rounded-3xl"
        />
        <div className="z-0 mt-2.5 text-center justify-end w-full">GIẢNG VIÊN DISCENDA</div>
      </div>

      {/* Phần text */}
      <article className="flex flex-col flex-1 w-full max-md:max-w-full">
        <h3 className="text-3xl font-bold max-md:max-w-full">{intructor.AdminFullName}</h3>
        <div className="flex flex-col mt-1 leading-[20px] text-lg w-full max-md:max-w-full">
          {[
            { label: "Ngày sinh:", value: "01/09/1998" },
            { label: "SĐT:", value: `${intructor.AdminPhone}` },
            { label: "Email:", value: `${intructor.AdminEmail}` },
            { label: "Trình độ chuyên môn:", value: `${intructor.AdminLevel}` },
            {
              label: "Kinh nghiệm làm việc:",
              value: `${intructor.AdminExp}`,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap shrink items-start gap-3 mt-4 w-full max-md:max-w-full"
            >
              <div className="font-semibold ">{item.label}</div>
              <div className="flex-1 shrink basis-0 max-md:max-w-full">{item.value}</div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}