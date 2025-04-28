import React from "react";

export default function CourseStats(course) {
  let lessons = [];

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

  const stats = [
    {
      label: "Số lượng chương học",
      value: `${course.lesson ? lessons.length : "0"} chương`,
    },
    { label: "Số lượng bài học", value: `${countVideo} bài` },
    { label: "Số lượng bài tập", value: `${countExer} bài` },
    { label: "Yêu cầu đầu vào", value: course.CourseRequire },
    { label: "Thời gian học", value: `${course.CourseDuration} tháng` },
  ];

  return (
    <div className="flex flex-col w-full text-[1.25rem] max-lg:text-[14px] font-bold max-lg:max-w-full">
      {stats.map((stat, index) => (
        <div key={index} className="mt-4 max-lg:max-w-full">
          <span className="font-bold">{stat.label} : </span>
          <span className="font-medium text-white">{stat.value}</span>
        </div>
      ))}
    </div>
  );
}
