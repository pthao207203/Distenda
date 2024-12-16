import * as React from "react";
import ActionButton from "./components/ActionButton";
import LessonRow from "./components/LessonRow";

export default function CourseDetails() {
  const lessons = [
    { number: 1, title: "HTML cơ bản", lastUpdated: "29/11/2024 23:13" },
    { number: 2, title: "HTML cơ bản", lastUpdated: "29/11/2024 23:13" },
    { number: 3, title: "HTML cơ bản", lastUpdated: "29/11/2024 23:13" },
    { number: 4, title: "HTML cơ bản", lastUpdated: "29/11/2024 23:13" },
  ];

  return (
    <div className="flex flex-col grow shrink px-16 py-14 bg-white min-w-[240px] w-[1347px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2.5 items-start self-start text-xl font-medium leading-none text-white">
        <ActionButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/84fdfd4c4d34c64c558acb40d245b2d594b0b0f000c7b4c1dd0353682f135f9d?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
          label="Cập nhật"
        />
        <ActionButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/42648122efa6f387983f11efeb38ca614809d3a449f7a41f54d965ae2b480b89?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
          label="Xóa"
          bgColor="bg-[#DF322B]"
        />
      </div>

      <div className="flex flex-col mt-10 w-full max-md:max-w-full">
        <div className="text-xl font-semibold text-neutral-900 max-md:max-w-full">
          Thông tin cơ bản
        </div>
        <div className="flex flex-wrap gap-10 items-start mt-6 w-full max-md:max-w-full">
          <div className="flex flex-col font-semibold min-w-[240px] w-[270px]">
            <div className="text-lg text-neutral-900 text-opacity-50">
              Tên chương
            </div>
            <div className="mt-4 text-xl text-neutral-900 text-opacity-80">
              Tổng quan về HTML
            </div>
          </div>
          <div className="flex gap-2 items-center text-xl font-medium leading-none min-w-[240px]">
            <div className="self-stretch my-auto text-neutral-900 text-opacity-50">
              Trạng thái
            </div>
            <div className="flex flex-col justify-center self-stretch p-3 my-auto w-64 min-w-[240px] text-neutral-900">
              <div className="flex gap-3 justify-center items-center px-3 py-2.5 w-full bg-[#D1F669] min-h-[40px] rounded-[99px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
                <div className="gap-2.5 self-stretch my-auto">
                  Đang hoạt động
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 items-center mt-10 w-full text-xl max-md:max-w-full">
        <div className="self-stretch my-auto font-semibold text-neutral-900">
          Bài tập
        </div>
        <div className="flex gap-2.5 items-center self-stretch my-auto font-medium leading-none text-white min-w-[240px]">
          <ActionButton
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/633de2d3639375a6ff1a98039c27b613549cb8289fb7e40b9d60eb0e5e6224cc?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
            label="Chỉnh sửa"
          />
          <ActionButton
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/42648122efa6f387983f11efeb38ca614809d3a449f7a41f54d965ae2b480b89?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
            label="Xóa"
            bgColor="bg-[#DF322B]"
          />
        </div>
      </div>

      <div className="flex flex-col mt-10 w-full text-xl text-neutral-900 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
          <div className="font-semibold">Danh sách bài học</div>
          <div className="flex-1 shrink font-medium leading-none text-right basis-0 max-md:max-w-full">
            Tong so bai hoc: 10
          </div>
        </div>

        <div className="flex flex-col pb-16 mt-6 w-full font-medium leading-none max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap w-full rounded-3xl bg-[#6C8299] min-h-[70px] max-md:max-w-full">
            <div className="flex gap-3 justify-center items-center px-3 py-5 h-full whitespace-nowrap bg-[#EBF1F9] shadow-[-6px_6px_0px_rgba(255,255,255,1)] w-[200px]">
              <div className="gap-2.5 self-stretch my-auto">STT</div>
            </div>
            <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full text-white basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
              <div className="gap-2.5 self-stretch my-auto">Tên bài</div>
            </div>
            <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-[#EBF1F9] basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
              <div className="gap-2.5 self-stretch my-auto">
                Lần cuối cập nhật
              </div>
            </div>
            <div className="flex gap-3 justify-center items-center px-3 py-5 h-full text-white min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)] w-[247px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ed99d5fa1c35d0b53a77a4661afcb70ba8fd8f57d1e0f756eab68f69535ca53?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
              />
              <div className="gap-2.5 self-stretch my-auto">Bài mới</div>
            </div>
          </div>

          {lessons.map((lesson, index) => (
            <LessonRow
              key={index}
              number={lesson.number}
              title={lesson.title}
              lastUpdated={lesson.lastUpdated}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
