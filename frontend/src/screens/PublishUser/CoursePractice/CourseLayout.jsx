import * as React from "react";
import NavigationBar from "./Navigation";
import LessonList from "./LessonList";
import CodeEditor from "./CodeEditor";

function CourseLayout() {
  return (
    <div className="flex flex-col bg-neutral-900">
      <NavigationBar />
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap flex-1 gap-1.5 justify-center bg-white bg-opacity-10 size-full max-md:max-w-full">
          <LessonList />
          <CodeEditor />
        </div>
      </div>
    </div>
  );
}

export default CourseLayout;