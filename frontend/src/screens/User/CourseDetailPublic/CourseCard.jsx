import React from "react";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ onRegister, ...course }) {
  // console.log("course", course)
  // console.log("intructor", course.intructor.AdminFullName)
  let lessons = [];
  const navigate = useNavigate();

  // Kiểm tra xem course.lesson có tồn tại và là một đối tượng hay mảng
  if (Array.isArray(course.lesson)) {
    // Nếu là mảng, gán trực tiếp cho lessons
    lessons = course.lesson;
  } else if (course.lesson && typeof course.lesson === "object") {
    // Nếu là đối tượng, chuyển nó thành mảng các giá trị
    lessons = Object.values(course.lesson);
  }
  const countVideo = lessons.reduce((total, lesson) => {
    // Kiểm tra xem lesson có thuộc tính videos và videos là mảng không
    if (lesson.video && Array.isArray(lesson.video)) {
      return total + lesson.video.length; // Cộng số lượng video của bài học
    }
    return total; // Nếu không có videos, không thay đổi total
  }, 0);

  const countExer = lessons.reduce((total, lesson) => {
    // Kiểm tra xem lesson có thuộc tính videos và videos là mảng không
    if (lesson.exercise && Array.isArray(lesson.exercise)) {
      return total + lesson.exercise.length; // Cộng số lượng exercise của bài học
    }
    return total; // Nếu không có videos, không thay đổi total
  }, 0);

  const courseDetails = [
    {
      label: "Chương",
      value: `${course.lesson ? lessons.length : "0"} chương`,
    },
    { label: "Bài giảng", value: `${countVideo} bài` },
    { label: "Bài tập", value: `${countExer} bài` },
    { label: "Thời gian học", value: `${course.CourseDuration} tháng` },
    {
      label: "Giảng viên",
      value: `${
        course.intructor ? course.intructor.AdminFullName : "Không có"
      }`,
    },
  ];

  const onChange = () => {
    navigate(`/courses/CoursePurchased/${course.CourseSlug}`);
  };

  return (
    <article className="inline-flex relative flex-col self-center px-[1.3rem] justify-start items-center gap-6 pb-20 mt-24 max-w-full bg-white max-lg:w-full max-lg:px-[20px] max-lg:py-[20px] max-lg:mt-10 max-lg:mr-0">
      <img
        loading="lazy"
        src={course.CoursePicture}
        alt="Course thumbnail"
        className="object-cover aspect-[1.64] h-[15.125rem] max-lg:w-full max-lg:h-auto mt-[1.3rem]"
      />
      <div className="inline-flex flex-wrap items-center justify-between px-[0.8rem] py-2 w-full font-medium leading-none">
        {/* Giá hiện tại */}
        <div className="flex gap-3 items-center max-lg:text-[20px] text-[1.875rem] text-[#df322b]">
          <span>
            {course.CoursePrice === 0
              ? "Miễn phí"
              : (
                  (course.CoursePrice * (100 - course.CourseDiscount)) /
                  100
                ).toLocaleString("vi-VN")}
          </span>
        </div>

        {/* Giá gạch bỏ */}
        <div className="flex gap-3 items-center text-[1.25rem] max-lg:text-[16px] text-[#e24943] line-through">
          <span>
            {course.CoursePrice &&
              !isNaN(course.CoursePrice) &&
              course.CoursePrice !== 0 &&
              course.CoursePrice.toLocaleString("vi-VN")}
          </span>
        </div>
      </div>
      {!course.has ? (
        <button
          onClick={onRegister} // Gọi hàm được truyền từ parent
          className="flex justify-center items-center px-3 w-full text-[1.25rem] max-lg:text-[16px] font-medium leading-none bg-[#CFF500] min-h-[3.75rem] max-lg:h-[40px] shadow-[-10px_10px_0px_rgba(255,255,255,1)] text-neutral-900"
          tabIndex={0}
        >
          Đăng ký ngay
        </button>
      ) : (
        <button
          onClick={onChange} // Gọi hàm được truyền từ parent
          className="flex justify-center items-center px-3 py-2 w-full text-[1.25rem] max-lg:text-[16px] font-medium leading-none bg-[#CFF500] min-h-[3.75rem] max-lg:h-[40px] shadow-[-10px_10px_0px_rgba(255,255,255,1)] text-neutral-900"
          tabIndex={0}
        >
          Vào học ngay
        </button>
      )}
      <section className="flex flex-col px-[0.8rem] w-full text-[1.125rem] max-lg:text-[14px] justify-start gap-4 items-start">
        {courseDetails.map((detail, index) => (
          <div
            key={index}
            className="inline-flex justify-between items-start gap-5 first:mt-0 w-full"
          >
            <div className="text-neutral-900 font-medium">{detail.label}</div>
            <div className="text-right text-black">{detail.value}</div>
          </div>
        ))}
      </section>
    </article>
  );
}
