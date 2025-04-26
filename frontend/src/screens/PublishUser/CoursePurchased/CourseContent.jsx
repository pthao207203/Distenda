import * as React from "react";
import CourseLesson from "./CourseLesson";

export default function CourseContent(course) {
  // console.log(course.lesson)
  const lessons = course.lesson;
  // console.log(lessons)
  return (
    <div className="flex flex-col  mt-10 w-full max-lg:max-w-full">
      <div className="flex flex-col px-16 w-full text-3xl max-lg:text-[18px] font-semibold text-white max-lg:px-0 max-lg:max-w-full">
        <h2 className="max-lg:max-w-full">Nội dung khóa học</h2>
        <div className="flex mt-2.5 w-full bg-slate-300 min-h-[2px] max-lg:max-w-full"></div>
      </div>
      <div className="flex flex-wrap gap-16 content-start items-center self-center px-10 py-5 mt-10 max-w-full w-[1000px] max-lg:px-0">
        {lessons &&
          lessons.length > 0 &&
          lessons.map((lesson, index) => (
            <CourseLesson
              {...lesson}
              courseSlug={course.CourseSlug}
              key={index}
            />
          ))}
      </div>
    </div>
  );
}
