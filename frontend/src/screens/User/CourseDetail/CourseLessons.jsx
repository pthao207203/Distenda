import React, { useState } from "react";

export default function CourseLessons() {
  const lessons = [
    {
      title: "Bài 01: Giới thiệu khóa học, Học HTML cơ bản",
      content: `- Giới thiệu khóa học và lộ trình học 
       - Hướng dẫn cài đặt các phần mềm cần thiết 
       - Học HTML - Bài tập luyện tập`,
    },
    {
      title: "Bài 02: HTML Nâng cao",
      content: "- Chèn Video - Chèn Audio (Âm thanh) - Table (Bảng) - Thẻ ul, ol, li (Hiển thị danh sách) - Phân biệt: block và inline - Form (Biểu mẫu) - Bài tập luyện tập",
    },
    {
      title: "Bài 03: CSS Cơ bản",
      content: "- Khái niệm, cú pháp, selectors - Simple selectors (Bộ chọn đơn giản) - Ba kiểu chèn CSS - Colors, Backgrounds - Box Model, Borders, Padding, Margins - Text, Fonts, Icons - Display (Hiển thị) - Combinator selectors (Bộ chọn tổ hợp) - Position (Vị trí) - z-index - Bài tập luyện tập",
    },
  ];

  // Theo dõi trạng thái mở/đóng của từng `details`
  const [openDetails, setOpenDetails] = useState(Array(lessons.length).fill(false));

  const toggleDetails = (index) => {
    setOpenDetails((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section className="flex flex-wrap flex-col p-2.5 w-full rounded-3xl">
      {lessons.map((lesson, index) => (
        <details
          key={index}
          open={openDetails[index]}
          className="mt-2 first:mt-0"
          onToggle={() => toggleDetails(index)}
        >
          <summary className="flex flex-wrap gap-1 justify-start items-center px-2.5 w-full text-2xl font-semibold tracking-normal leading-none min-h-[70px] cursor-pointer">
            <img
              loading="lazy"
              src="../Icon/play-circle.svg"
              alt=""
              className="object-center shrink-0 self-center my-auto w-6 aspect-square"
            />
            <span className="flex-1 shrink gap-1.5 self-center pl-2.5 h-full rounded-md min-w-[240px]">
              {lesson.title}
            </span>
            <img
              loading="lazy"
              src={`../Icon/${openDetails[index] ? "minus" : "plus"}.svg`} // Thay đổi biểu tượng theo trạng thái
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.7] w-[34px]"
            />
          </summary>
          <div className="gap-2.5 p-2.5 w-full text-xl font-medium border-2 border-dashed border-white border-opacity-60">
            {lesson.content
              .split("- ") // Tách nội dung theo dấu "- "
              .filter((line) => line.trim()) // Loại bỏ các dòng rỗng
              .map((line, i) => (
                <p key={i} className="mb-2">
                  - {line.trim()}
                </p>
              ))}
          </div>
        </details>
      ))}
    </section>
  );
}