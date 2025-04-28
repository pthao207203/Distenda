import * as React from "react";
import { Link } from "react-router-dom";

function CourseCard(course) {
  return (
    <article className="flex flex-col grow shrink-0 p-[12px] bg-white bg-opacity-10 backdrop-blur-[10px] overflow-hidden">
      <img
        loading="lazy"
        src={course.CoursePicture}
        alt={`${course.CourseName}`}
        className="object-cover aspect-[1.42] w-full"
      />
      <div className="flex flex-col py-0 my-[1.25rem] w-full text-[1.125rem] max-lg:text-[12px] text-white">
        <div className="flex items-start py-[8px] w-full text-[1.5rem] max-lg:text-[16px] font-semibold leading-7 min-h-[5rem]">
          <h2
            className="flex-1 shrink gap-2.5 self-stretch w-full"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2, // Giới hạn hiển thị 2 dòng
              overflow: "hidden",
              whiteSpace: "normal",
              textOverflow: "ellipsis",
            }}
          >
            {course.CourseName}
          </h2>
        </div>

        <div className="flex gap-5 items-start mt-[0.75rem] w-full">
          <div className="flex shrink-0">Thời gian</div>
          <div className="flex-1 shrink-0 text-right ">
            {course.CourseDuration === 0
              ? "Không giới hạn"
              : course.CourseDuration + " tháng"}
          </div>
        </div>

        {/* <div className="flex gap-5 items-start mt-[0.75rem] w-full">
          <div className="flex-1 shrink-0">Bài giảng</div>
          <div className="flex-1 shrink-0 text-right ">{}</div>
        </div> */}

        <div className="flex items-start mt-[0.75rem] w-full">
          <div className="flex shrink-0 w-auto">Giảng viên</div>
          <div className="flex-1 text-right">
            {course.intructor ? course.intructor.AdminFullName : "Không có"}
          </div>
        </div>
      </div>
      {/* Nút Xem chi tiết */}
      <div className="mt-auto">
        <button className="flex justify-center items-center w-full px-[12px] text-[1.25rem] max-lg:text-[16px] font-medium leading-none bg-[#CFF500] min-h-[40px] text-neutral-900">
          <Link
            to={`/courses/CoursePurchased/${course.CourseSlug}`}
            className="self-stretch my-auto"
          >
            Xem chi tiết
          </Link>
        </button>
      </div>
    </article>
  );
}

export default CourseCard;
