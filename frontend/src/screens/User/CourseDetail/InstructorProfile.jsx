import React from 'react';

export default function InstructorProfile() {
  return (
  <div className="flex flex-wrap basis-auto items-start gap-5 mt-5 w-full max-md:flex-col max-md:max-w-full">
    {/* Phần ảnh */}
    <div className="flex flex-col items-start justify-start text-lg font-semibold">
      <img
        loading="lazy"
        src="../Icon/image.svg"
        alt="Instructor profile"
        className="object-cover z-0 w-30 h-30 rounded-3xl"
      />
      <div className="z-0 mt-2.5 text-center">GIẢNG VIÊN DISCENDA</div>
    </div>

    {/* Phần text */}
    <article className="flex flex-col flex-1 w-full max-md:max-w-full">
      <h3 className="text-3xl font-bold max-md:max-w-full">XUYẾN NGUYỄN</h3>
      <div className="flex flex-col  mt-1 text-lg w-full max-md:max-w-full">
        {[
          { label: "Ngày sinh:", value: "01/09/1998" },
          { label: "SĐT:", value: "0123456789" },
          { label: "Email:", value: "123456789@gmail.com" },
          { label: "Trình độ chuyên môn:", value: "Thạc sĩ..." },
          {
            label: "Kinh nghiệm làm việc:",
            value:
              "4 năm kinh nghiệm giảng dạy, thiết kế chương trình - tài liệu giảng dạy, kiểm tra đánh giá và công tác chủ nhiệm.",
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