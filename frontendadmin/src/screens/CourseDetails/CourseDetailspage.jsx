import * as React from "react";
import { CourseHeader } from "./components/CourseHeader";
import { CourseImage } from "./components/CourseImage";
import { CourseInfo } from "./components/CourseInfo";
import { ChapterList } from "./components/ChapterList";

function CourseDetails() {
  return (
    <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <CourseHeader />
      <CourseImage />
      <CourseInfo />
      <ChapterList />
    </div>
  );
}

export default CourseDetails;
