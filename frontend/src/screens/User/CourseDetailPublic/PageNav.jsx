import * as React from "react";
import { Link } from "react-router-dom";

export default function PageNav(course) {
  return (
    <nav className="flex relative flex-wrap items-center px-5 my-1.5 py-1.5 w-full text-[1.125rem] font-semibold leading-none text-white bg-white/15 backdrop-blur-[60px] max-md:max-w-full">
      <div className="flex gap-3 items-center self-center py-1.5 my-auto">
        <Link to="/courses" className="gap-2.5 self-stretch my-auto">
          Trang chủ
        </Link>
      </div>
      <img
        loading="lazy"
        src="/Icon/navigate_next.svg"
        alt="Navigation arrow"
        className="object-contain shrink-0 pl-3 self-stretch my-auto aspect-square"
      />
      <div className="flex gap-3 items-center self-center pl-3 py-1.5 my-auto">
        <Link className="gap-2.5 self-stretch my-auto">
          {course.CourseName}
        </Link>
      </div>
    </nav>
  );
}
