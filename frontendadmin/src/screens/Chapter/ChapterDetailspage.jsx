import * as React from "react";
import LessonRow from "./components/LessonRow";
import TableHeader from "./components/TableHeader";
import StatusBadge from "./components/StatusBadge";
import EditButton from "./components/EditButton";
import DeleteButton from "./components/DeleteButton";

const lessons = [
  { id: 1, name: "HTML cơ bản", lastUpdated: "29/11/2024 23:13" },
  { id: 2, name: "HTML cơ bản", lastUpdated: "29/11/2024 23:13" },
  { id: 3, name: "HTML cơ bản", lastUpdated: "29/11/2024 23:13" },
  { id: 4, name: "HTML cơ bản", lastUpdated: "29/11/2024 23:13" },
];

function CourseLesson() {
  return (
    <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <div className="flex z-0 flex-col w-full max-md:max-w-full">
        <div className="text-xl font-semibold text-neutral-900 max-md:max-w-full">
          Thông tin cơ bản
        </div>
        <div className="flex flex-wrap gap-10 items-start mt-6 w-full max-md:max-w-full">
          <div className="flex flex-col font-semibold min-w-[240px] w-[270px]">
            <div className="text-lg text-neutral-900 text-opacity-50">
              Tên chương
            </div>
            <div className="mt-4 text-xl text-neutral-900 text-opacity-80">
              Tổng quan về HTML
            </div>
          </div>
          <StatusBadge />
        </div>
      </div>
      <div className="flex z-0 flex-wrap gap-6 items-center mt-10 w-full text-xl max-md:max-w-full">
        <div className="self-stretch my-auto font-semibold text-neutral-900">
          Bài tập
        </div>
        <EditButton />
      </div>
      <div className="flex z-0 flex-col mt-10 w-full text-xl text-neutral-900 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
          <div className="font-semibold">Danh sách bài học</div>
          <div className="flex-1 shrink font-medium leading-none text-right basis-0 max-md:max-w-full">
            Tong so bai hoc: {lessons.length}
          </div>
        </div>
        <div className="flex flex-col pb-16 mt-6 w-full font-medium leading-none max-md:max-w-full">
          <TableHeader />
          {lessons.map((lesson) => (
            <LessonRow
              key={lesson.id}
              number={lesson.id}
              name={lesson.name}
              lastUpdated={lesson.lastUpdated}
            />
          ))}
        </div>
      </div>
      <DeleteButton />
    </div>
  );
}

export default CourseLesson;
