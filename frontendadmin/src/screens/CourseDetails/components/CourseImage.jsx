import * as React from "react";

export function CourseImage() {
  return (
    <div className="flex flex-wrap gap-4 mt-10 w-full max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3d9a379e5be12bd8fe1c22e1cabd179d38e43a407862004e07ce617972fa2c6?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
        alt="Course thumbnail"
        className="object-contain shrink-0 self-end aspect-[1.61] min-w-[240px] w-[316px]"
      />
      <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-wrap flex-1 gap-8 items-center size-full max-md:max-w-full">
          <DateInfo label="Ngày đăng" date="20/08/2023" />
          <DateInfo label="Lần cuối cập nhật" date="20/10/2023" />
        </div>
        <div className="flex flex-col mt-4 max-w-full text-xl font-medium leading-none w-[569px]">
          <button className="flex gap-3 justify-center items-center self-start px-3 py-3 text-white rounded-lg bg-slate-500 min-h-[46px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6eecc98a0f9718c1dc0340db6cbf2f701a99fc836d53cc8931f3168bac4cf732?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <span className="gap-2.5 self-stretch my-auto">Chọn tệp</span>
          </button>
          <div className="mt-2 text-slate-500 max-md:max-w-full">
            htmljpeg.com.sdhgsg.ie104
          </div>
        </div>
      </div>
    </div>
  );
}

function DateInfo({ label, date }) {
  return (
    <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[270px]">
      <div className="text-lg font-semibold text-neutral-900 text-opacity-50">
        {label}
      </div>
      <div className="mt-4 text-xl font-medium text-neutral-900">{date}</div>
    </div>
  );
}
