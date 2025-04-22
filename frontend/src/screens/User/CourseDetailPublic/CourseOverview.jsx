import React from "react";
import parse from "html-react-parser";

export default function CourseOverview(course) {
  return (
    <div className="flex overflow-hidden flex-col items-start px-[73px] pt-14 pb-9 w-full bg-[#131313] max-md:px-5 max-md:max-w-full max-md:px-[20px]">
      <div className="flex gap-3 justify-center items-center px-3 max-w-full md:text-[1.25rem] text-[16px] font-medium leading-none bg-[#CFF500] border-2 border-black border-solid min-h-[40px] shadow-[-6px_6px_0px_rgba(255,255,255,1)] text-neutral-900  max-md:ml-2">
        <span className="gap-2.5 self-center my-auto">
          {course.CoursePrice === 0 ? "Miễn phí" : "Pro"}
        </span>
      </div>
      <div className="flex flex-col mt-4 md:w-[65%] max-w-full ">
        <div className="flex flex-col w-full text-white max-md:max-w-full">
          <h2 className="flex-1 shrink gap-2.5 py-2.5 pr-2.5 w-full md:text-[1.875rem] text-[30px] font-bold max-md:max-w-full">
            {course.CourseName}
          </h2>
          <div className="flex-1 shrink gap-1.5 self-stretch py-2.5 space-y-3 w-full leading-relaxed md:text-[1.25rem] text-[20px] max-md:max-w-full">
            {course.CourseDescription && (
              <div className="font-medium md:text-[1.25rem] max-md:max-w-full">
                {typeof course.CourseDescription === "string"
                  ? parse(course.CourseDescription)
                  : ""}
              </div>
            )}
          </div>
        </div>
        {/* <div className="flex gap-7 items-center self-start mt-4">
          <div className="flex relative flex-col md:text-[1.25rem] text-[20px] font-semibold text-amber-500 whitespace-nowrap aspect-[5.6] w-[140px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/9c7992bcbe164b8dad4f2629b8fc1688/fdf41e18-e903-41a0-8bca-c05fb507a9d7?apiKey=9c7992bcbe164b8dad4f2629b8fc1688&"
              alt="Rating background"
              className="object-contain absolute inset-0 size-full"
            />
            5.0
          </div> */}
        {/* <div className="flex gap-1.5 md:text-[0.875rem] text-[14px] font-light text-white">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/9c7992bcbe164b8dad4f2629b8fc1688/f0bbf77da14dacd16945c1606101c97cc8e38d261a7db20d463c9e79447d709e?apiKey=9c7992bcbe164b8dad4f2629b8fc1688&"
              alt="Students icon"
              className="object-contain shrink-0 aspect-square"
            />
            <span>100 học viên</span>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
