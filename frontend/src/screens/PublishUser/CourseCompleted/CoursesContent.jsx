import * as React from "react";
import CourseLesson from "./CoursesLesson";

export default function CoursesContent() {
  return (
    <div className="flex flex-col self-center mt-10 w-full max-md:max-w-full">
      <div className="flex flex-col px-16 w-full text-3xl font-semibold text-white max-md:px-5 max-md:max-w-full">
        <h2 className="max-md:max-w-full">Nội dung khóa học</h2>
        <div className="flex mt-2.5 w-full bg-slate-300 min-h-[2px] max-md:max-w-full" />
      </div>
      <div className="flex flex-wrap gap-16 items-center self-center px-10 py-5 mt-10 max-w-full w-[1600px] max-md:px-5">
        {[...Array(9)].map((_, index) => (
          <CourseLesson key={index} />
        ))}
      </div>
    </div>
  );
}