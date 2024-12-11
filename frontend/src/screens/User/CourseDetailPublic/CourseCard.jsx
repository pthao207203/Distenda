import React from "react";

export default function CourseCard({ onRegister, ...course }) {
  // console.log("course", course)
  // console.log("intructor", course.intructor.AdminFullName)
  let lessons = [];

  // Kiểm tra xem course.lesson có tồn tại và là một đối tượng hay mảng
  if (Array.isArray(course.lesson)) {
    // Nếu là mảng, gán trực tiếp cho lessons
    lessons = course.lesson;
  } else if (course.lesson && typeof course.lesson === 'object') {
    // Nếu là đối tượng, chuyển nó thành mảng các giá trị
    lessons = Object.values(course.lesson);
  }
  const countVideo = lessons.reduce((total, lesson) => {
    // Kiểm tra xem lesson có thuộc tính videos và videos là mảng không
    if (lesson.video && Array.isArray(lesson.video)) {
      return total + lesson.video.length;  // Cộng số lượng video của bài học
    }
    return total;  // Nếu không có videos, không thay đổi total
  }, 0);

  const countExer = lessons.reduce((total, lesson) => {
    // Kiểm tra xem lesson có thuộc tính videos và videos là mảng không
    if (lesson.exercise && Array.isArray(lesson.exercise)) {
      return total + lesson.exercise.length;  // Cộng số lượng exercise của bài học
    }
    return total;  // Nếu không có videos, không thay đổi total
  }, 0);

  const courseDetails = [
    { label: "Chương", value: `${course.lesson ? lessons.length : "0"} chương` },
    { label: "Bài giảng", value: `${countVideo} bài` },
    { label: "Bài tập", value: `${countExer} bài` },
    { label: "Thời gian học", value: `${course.CourseDuration} tháng` },
    { label: "Giảng viên", value: `${course.intructor ? course.intructor.AdminFullName : "Không có"}` },
  ];

  return (
    <article className="inline-flex relative flex-col self-end px-[1.3rem] pt-2.5 justify-start items-start gap-6 pb-20 mt-24 md:mr-16 max-w-full bg-white max-md:w-full max-md:pb-5 max-md:mt-10 max-md:mr-0">
      <img
        loading="lazy"
        src={course.CoursePicture}
        alt="Course thumbnail"
        className="object-contain w-full aspect-[1.64]"
      />
      <div className="inline-flex flex-wrap items-center justify-between px-[0.8rem] py-2 w-full font-medium leading-none">
        {/* Giá hiện tại */}
        <div className="flex gap-3 items-center text-3xl text-[#df322b]">
          <span>{course.CoursePrice === 0 ? "Miễn phí" : (course.CoursePrice * (100 - course.CourseDiscount) / 100).toLocaleString('vi-VN')}</span>
        </div>

        {/* Giá gạch bỏ */}
        <div className="flex gap-3 items-center text-xl text-[#e24943] line-through">
          <span>
            {course.CoursePrice && !isNaN(course.CoursePrice) && course.CoursePrice !== 0 &&
              (course.CoursePrice).toLocaleString('vi-VN')
            }
          </span>
        </div>
      </div>
      <button
        onClick={onRegister} // Gọi hàm được truyền từ parent
        className="flex justify-center items-center px-3 py-2 w-full text-xl font-medium leading-none bg-[#CFF500] min-h-[60px] shadow-[-10px_10px_0px_rgba(255,255,255,1)] text-neutral-900"
        tabIndex={0}
      >
        Đăng ký ngay
      </button>
      <section className="flex flex-col px-[0.8rem] w-full text-lg justify-start gap-4 items-start">
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
