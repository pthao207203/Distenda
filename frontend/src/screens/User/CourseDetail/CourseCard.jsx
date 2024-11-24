import React from "react";

export default function CourseCard({ onRegister }) {
  const courseDetails = [
    { label: "Chương", value: "10" },
    { label: "Bài giảng", value: "100" },
    { label: "Thời lượng", value: "300 phút" },
    { label: "Tài liệu", value: "5" },
    { label: "Giảng viên", value: "Xuyến Nguyễn" },
  ];

  return (
    <article className="inline-flex relative flex-col self-end px-[1.3rem] pt-5 justify-start items-start gap-6 pb-10 mt-24 md:mr-16 max-w-full bg-white md:w-full max-md:pb-5 max-md:mt-10 max-md:mr-0">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/be7c8e619eccf8a1a535f808b15d45e6bb88885f3fdd0671b22a52393c88b4fd?apiKey=1914b3001bed44e2a53adf842ab19f47&"
        alt="Course thumbnail"
        className="object-contain w-full aspect-[1.64]"
      />
      <div className="inline-flex flex-wrap items-center justify-between px-[0.8rem] py-2 w-full font-medium leading-none">
        {/* Giá hiện tại */}
        <div className="flex gap-3 items-center text-3xl text-[#df322b]">
          <span>3.000.000</span>
        </div>

        {/* Giá gạch bỏ */}
        <div className="flex gap-3 items-center text-xl text-[#e24943] line-through">
          <span>12.300.000</span>
        </div>
      </div>
      <button
        onClick={onRegister} // Gọi hàm được truyền từ parent
        className="flex justify-center items-center px-3 py-2 w-full text-xl font-medium leading-none bg-[#CFF500] min-h-[60px] shadow-[-10px_10px_0px_rgba(255,255,255,1)] text-neutral-900"
        tabIndex={0}
      >
        Đăng ký ngay
      </button>
      <section className="flex flex-col px-[0.8rem] w-full text-lg justify-start gap-5 items-start">
        {courseDetails.map((detail, index) => (
          <div key={index} className="inline-flex justify-between items-start gap-5 first:mt-0 w-full">
            <div className="text-neutral-900 font-medium">{detail.label}</div>
            <div className="text-right text-black">{detail.value}</div>
          </div>
        ))}
      </section>
    </article>
  );
}
