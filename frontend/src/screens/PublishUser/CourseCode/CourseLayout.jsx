import * as React from "react";
import BreadcrumbNav from "./BreadcrumbNav";
import SidebarMenu from "./SideBarMenu";
import TaskContent from "./TaskContent";
import CodeEditor from "./CodeEditors";

function CourseLayout() {
  return (
    <div className="flex flex-col">
      <div className="flex relative flex-col py-0.5 w-full min-h-screen max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a96208249e99f892690a38403ef65715e8397ce2ec94f44b8034c91c728a4a58?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
          alt="Course background"
          className="object-cover absolute inset-0 size-full"
        />
        <BreadcrumbNav />
        <div className="flex overflow-hidden relative flex-wrap items-start mt-1 h-[981px]">
          <SidebarMenu />
          <TaskContent />
          <CodeEditor />
        </div>
      </div>
    </div>
  );
}

export default CourseLayout;