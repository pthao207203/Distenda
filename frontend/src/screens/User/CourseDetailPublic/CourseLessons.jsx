import React, { useState } from "react";

export default function CourseLessons(lessonsData) {
  const lessons = Object.values(lessonsData);
  // const lessons = [
  //   {
  //     title: "Bài 01: Giới thiệu khóa học, Học HTML cơ bản",
  //     content: `- Giới thiệu khóa học và lộ trình học
  //      - Hướng dẫn cài đặt các phần mềm cần thiết
  //      - Học HTML - Bài tập luyện tập`,
  //   },
  //   {
  //     title: "Bài 02: HTML Nâng cao",
  //     content: "- Chèn Video - Chèn Audio (Âm thanh) - Table (Bảng) - Thẻ ul, ol, li (Hiển thị danh sách) - Phân biệt: block và inline - Form (Biểu mẫu) - Bài tập luyện tập",
  //   },
  //   {
  //     title: "Bài 03: CSS Cơ bản",
  //     content: "- Khái niệm, cú pháp, selectors - Simple selectors (Bộ chọn đơn giản) - Ba kiểu chèn CSS - Colors, Backgrounds - Box Model, Borders, Padding, Margins - Text, Fonts, Icons - Display (Hiển thị) - Combinator selectors (Bộ chọn tổ hợp) - Position (Vị trí) - z-index - Bài tập luyện tập",
  //   },
  // ];

  // Theo dõi trạng thái mở/đóng của từng `details`
  const [openDetails, setOpenDetails] = useState(
    Array(lessons.length).fill(false)
  );

  const toggleDetails = (index) => {
    setOpenDetails((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section className="flex flex-wrap flex-col w-full rounded-3xl">
      {lessons &&
        lessons.length > 0 &&
        lessons.map((lesson, index) => (
          <details
            key={index}
            open={openDetails[index]}
            className="mt-2 first:mt-0"
            onToggle={() => toggleDetails(index)}
          >
            <summary className="flex flex-wrap gap-1 justify-start items-center px-2.5 w-full text-[1.5rem] max-lg:text-[16px] font-semibold tracking-normal leading-none min-h-[40px] cursor-pointer">
              <img
                loading="lazy"
                src="/Icon/play-circle.svg"
                alt=""
                className="object-center shrink-0 self-center my-auto w-[24px] aspect-square"
              />
              <span className="flex-1 shrink gap-1.5 self-center pl-2.5 h-full rounded-md min-w-[240px]">
                {lesson.LessonName}
              </span>
              <img
                loading="lazy"
                src={`/Icon/${openDetails[index] ? "minus" : "plus"}.svg`} // Thay đổi biểu tượng theo trạng thái
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-[1.7] w-[34px]"
              />
            </summary>
            <div className="gap-2.5 p-2.5 w-full text-[1.25rem] max-lg:text-[14px] font-medium border-2 border-dashed border-white border-opacity-60">
              {lesson.video &&
                lesson.video.length > 0 &&
                lesson.video.map((video, index) => (
                  <p key={index} className="mb-2">
                    - {video.VideoName}
                  </p>
                ))}
            </div>
          </details>
        ))}
    </section>
  );
}
