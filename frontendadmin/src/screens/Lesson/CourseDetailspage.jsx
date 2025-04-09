import * as React from "react";
import { useNavigate } from "react-router-dom";
import ActionButton from "./components/ActionButton";
import LessonRow from "./components/LessonRow";

export default function CourseDetails() {
  const lessons = [
    { number: 1, title: "HTML cơ bản", lastUpdated: "29/11/2024 23:13" },
    { number: 2, title: "HTML cơ bản", lastUpdated: "29/11/2024 23:13" },
    { number: 3, title: "HTML cơ bản", lastUpdated: "29/11/2024 23:13" },
    { number: 4, title: "HTML cơ bản", lastUpdated: "29/11/2024 23:13" },
  ];

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/edit-question"); // Điều hướng đến trang QuestionEditorPage
  };

  return (
    <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <div className="flex justify-between items-start mt-10 w-full max-md:max-w-full">
        {/* Nội dung bên trái */}
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold text-neutral-900">
            Thông tin cơ bản
          </div>
          <div className="flex gap-10 items-center">
            {/* Tên chương */}
            <div className="flex flex-col font-semibold min-w-[240px] w-[270px]">
              <div className="text-lg text-neutral-900 text-opacity-50">
                Tên chương
              </div>
              <div className="mt-4 text-xl text-neutral-900 text-opacity-80">
                Tổng quan về HTML
              </div>
            </div>
            {/* Trạng thái */}
            <div className="flex gap-2 items-center text-xl font-medium leading-none">
              <div className="text-neutral-900 text-opacity-50">Trạng thái</div>
              <div className="px-4 py-2 bg-lime-300 rounded-[99px]">
                Đang hoạt động
              </div>
            </div>
          </div>
        </div>

            {/* Button Xóa */}
            <div className="self-start">
              <ActionButton
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/42648122efa6f387983f11efeb38ca614809d3a449f7a41f54d965ae2b480b89?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
                label="Xóa"
                bgColor="bg-red-600"
              />
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
            onClick={handleEdit} 
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
      {/* Header Table */}
      <div className="flex overflow-hidden w-full rounded-t-3xl bg-[#6C8299] h-[70px] max-md:max-w-full">
          {/* STT */}
          <div className="flex justify-center items-center p-3 bg-[#F3F6FC] basis-1/6 border-r border-white">
            <span className="text-[#131313] text-xl font-medium">STT</span>
          </div>

          {/* Tên bài */}
          <div className="flex justify-center items-center p-3 text-white basis-1/3 border-r border-white">
            <span className="text-xl font-medium">Tên bài</span>
          </div>

          {/* Lần cuối cập nhật */}
          <div className="flex justify-center items-center p-3 bg-[#F3F6FC] basis-1/3 border-r border-white">
            <span className="text-[#131313] text-xl font-medium">Lần cuối cập nhật</span>
          </div>

          {/* Bài mới */}
          <div className="flex justify-center items-center p-3 text-white basis-1/6">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ed99d5fa1c35d0b53a77a4661afcb70ba8fd8f57d1e0f756eab68f69535ca53?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
              alt="Bài mới"
              className="object-contain aspect-square w-[30px]"
            />
            <span className="text-xl font-medium">Bài mới</span>
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
