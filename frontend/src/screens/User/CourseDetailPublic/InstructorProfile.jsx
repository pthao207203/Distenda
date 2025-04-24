import React from "react";

export default function InstructorProfile(intructor) {
  // console.log(intructor)
  return (
    <div className="flex flex-wrap basis-auto items-start gap-5 mt-5 w-full max-lg:flex-col max-lg:max-w-full">
      {/* Phần ảnh */}
      <div className="flex flex-col items-start max-lg:items-center justify-start text-[1.125rem] max-lg:text-[16px] font-semibold max-lg:w-full">
        <img
          loading="lazy"
          src={`${
            intructor.AdminAvatar ? intructor.AdminAvatar : "/Icon/image.svg"
          }`}
          alt="Instructor profile"
          className="object-cover z-0 w-[14.125rem] h-[15.125rem] max-lg:h-[120px] max-lg:w-[120px] rounded-3xl"
        />
        <div className="z-0 mt-2.5 text-center justify-end w-full block max-lg:hidden">
          GIẢNG VIÊN DISTENDA
        </div>
      </div>

      {/* Phần text */}
      <article className="flex flex-col flex-1 w-full max-lg:max-w-full">
        <h3 className="text-[1.875rem] max-lg:text-[20px] font-bold max-lg:max-w-full">
          {intructor.AdminFullName}
        </h3>
        <div className="flex flex-col mt-1 leading-[20px] text-[1.125rem] max-lg:text-[14px] w-full max-lg:max-w-full">
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
              className="flex flex-wrap shrink items-start mt-2 w-full max-lg:mt-4"
            >
              <span className="font-semibold">{item.label}</span>
              {item.value}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
