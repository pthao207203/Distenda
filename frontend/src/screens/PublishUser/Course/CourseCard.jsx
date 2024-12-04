import * as React from "react";
import { Link } from "react-router-dom";

function CourseCard(course) {
  return (
    <article className="flex flex-col grow shrink-0  py-[20px] px-[20px] bg-white bg-opacity-10 backdrop-blur-[10px] overflow-hidden">
      <img
        loading="lazy"
        src={course.CoursePicture}
        alt={`${course.CourseName}`}
        className="object-cover aspect-[1.42]  max-h-[242px] rounded-md mb-[24px] "
      />
      <div className="flex flex-col px-[12px] py-0 mb-[24px] w-full text-lg text-white">

        <div className="flex items-start py-[20px] w-full text-[28px] font-semibold leading-7 min-h-[100px]">
          <h2 className="flex-1 shrink gap-2.5 self-stretch w-full ">
            {course.CourseName}
          </h2>
        </div>

        <div className="flex gap-5 items-start mt-[16px] w-full">
          <div className="flex-1 shrink-0">Thời gian</div>
          <div className="flex-1 shrink-0 text-right ">{course.CourseDuration}</div>
        </div>

        <div className="flex gap-5 items-start mt-[16px] w-full">
          <div className="flex-1 shrink-0">Bài giảng</div>
          <div className="flex-1 shrink-0 text-right ">{ }</div>
        </div>

        <div className="flex gap-5 items-start mt-[16px] w-full">
          <div className="flex-1 shrink-0 ">Giảng viên</div>
          <div className="flex-1 shrink-0 text-right ">{course.intructor}</div>
        </div>

      </div>

      <button className="flex justify-center items-center w-full px-[12px] py-[20px] text-xl font-medium leading-none  bg-[#CFF500] min-h-[60px] text-neutral-900">
        <Link to={`/courses/${course.CourseSlug}`} className="self-stretch my-auto">Xem chi tiết</Link>
      </button>
    </article>
  );
}

export default CourseCard;