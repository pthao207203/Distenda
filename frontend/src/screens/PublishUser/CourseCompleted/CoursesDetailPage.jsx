import * as React from "react";
import CourseHeader from "./CoursesHeader";
import CourseContent from "./CoursesContent";

export default function CoursesDetailPage() {
  return (
    <div className="flex overflow-hidden flex-col">
      <CourseHeader />
      <div className="flex z-10 flex-col mt-0 w-full bg-white bg-opacity-10 min-h-screen max-md:mt-0 max-md:max-w-full">
        <CourseContent />
      </div>
    </div>
  );
}