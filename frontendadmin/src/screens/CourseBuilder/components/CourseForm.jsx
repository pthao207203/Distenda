import * as React from "react";

export function CourseForm() {
  return (
    <form className="flex overflow-hidden flex-col px-16 pt-8 mt-2 w-full font-medium bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col pb-16 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink justify-center self-start text-xl basis-0 min-w-[240px] max-md:max-w-full">
            <label htmlFor="courseName" className="text-neutral-900 text-opacity-50 max-md:max-w-full">
              Tên bài <span className="text-red-600">*</span>
            </label>
            <input
              id="courseName"
              type="text"
              defaultValue="Xây dựng giao diện website"
              className="flex-1 shrink gap-2.5 self-stretch px-3 py-3 mt-2 w-full rounded-lg border border-solid border-slate-500 border-opacity-80 min-h-[63px] text-neutral-900 max-md:max-w-full"
              aria-required="true"
            />
          </div>
          <div className="flex gap-2.5 items-end px-2 text-3xl whitespace-nowrap min-w-[240px]">
            <button type="submit" className="flex gap-3 justify-center items-center px-3 py-3 text-white rounded-lg bg-[#6C8299] min-h-[63px] w-[180px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06c25587ce9cf91cec2298d9a319552d6f67f260590ab623aa6b5c1e069f1103?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <span className="gap-2.5 self-stretch my-auto">Lưu</span>
            </button>
            <button type="button" className="flex gap-3 justify-center items-center px-3 py-3 rounded-lg bg-[#CDD5DF] min-h-[63px] text-[#14375F] w-[180px]">
              <span className="gap-2.5 self-stretch my-auto">Hủy</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-11 w-full text-xl max-md:mt-10 max-md:max-w-full">
          <label htmlFor="videoUpload" className="text-neutral-900 text-opacity-50 max-md:max-w-full">
            Video
          </label>
          <div className="flex mt-2 w-full bg-[#EBF1F9] min-h-[897px] max-md:max-w-full" />
          <div className="flex flex-col mt-2 max-w-full w-[569px]">
            <button type="button" className="flex gap-3 justify-center items-center self-start px-3 py-3 text-white rounded-lg bg-[#6C8299] min-h-[46px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c99e21ebf8289a5ca1f155d497040eba85af0f2bf7275330ff4d1854229cb2a?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <span className="gap-2.5 self-stretch my-auto">Chọn tệp</span>
            </button>
            <div className="mt-2 text-slate-500">
              Không có tệp nào được chọn.
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}