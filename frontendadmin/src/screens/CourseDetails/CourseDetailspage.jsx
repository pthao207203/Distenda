import * as React from "react";
import { Link } from "react-router-dom";
import { CourseHeader } from "./components/CourseHeader";
import { CourseImage } from "./components/CourseImage";
import { CourseInfo } from "./components/CourseInfo";
import { ChapterList } from "./components/ChapterList";

function Breadcrumb() {
  return (
    <nav className="flex items-center text-sm font-medium text-neutral-600">
      <Link to="/courses" className="hover:underline text-neutral-900">
        Khóa học
      </Link>
      <span className="mx-2 text-neutral-400">›</span>
      <span className="text-neutral-900">HTML cơ bản</span>
    </nav>
  );
}

function CourseDetails() {
  return (
    <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <Breadcrumb />
      <CourseHeader />
      <CourseImage />
      <CourseInfo />
      <ChapterList />
    </div>
  );
}

export default CourseDetails;
