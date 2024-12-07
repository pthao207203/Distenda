import * as React from "react";

const lessonData = {
  title: "Bài 01: Giới thiệu khóa học, Học HTML cơ bản",
  topics: [
    "Web technoligies",
    "Web design", 
    "Web Development",
    "Web Design vs Web Development"
  ]
};

export default function CourseLesson() {
  return (
    <div className="flex overflow-hidden flex-col grow shrink self-stretch my-auto min-w-[240px] w-[368px] max-md:max-w-full">
      <div className="flex gap-3 items-center px-5 py-8 w-full text-xl font-medium leading-5 text-white bg-neutral-900 min-h-[100px] max-md:max-w-full">
        <div className="flex-1 shrink gap-2.5 self-stretch my-auto w-full min-w-[240px]">
          {lessonData.title}
        </div>
      </div>
      <div className="flex flex-col pt-2.5 w-full leading-none bg-white max-md:max-w-full">
        <div className="flex flex-col px-5 w-full text-xl text-black max-md:max-w-full">
          {lessonData.topics.map((topic, index) => (
            <div key={index} className="flex gap-3 items-center px-3 py-5 w-full bg-white bg-opacity-10">
              <div className="gap-2.5 self-stretch my-auto">
                {topic}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-start py-2.5 w-full text-lg font-semibold bg-slate-300 text-neutral-900 max-md:max-w-full">
          <div className="flex flex-1 shrink gap-3 items-center p-3 basis-0 min-w-[240px]">
            <div className="gap-2.5 self-stretch my-auto">Bài tập</div>
          </div>
          <div className="flex gap-3 items-center p-3">
            <div className="gap-2.5 self-stretch my-auto">
              Điểm: 0.0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}