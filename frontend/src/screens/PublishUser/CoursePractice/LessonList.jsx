import * as React from "react";

const lessonData = [
  {
    title: "Bài 01: Giới thiệu khóa học, Học HTML cơ bản",
    topics: [
      "Web technoligies",
      "Web design", 
      "Web Development",
      "Web Design vs Web Development"
    ]
  },
  {
    title: "Bài 01: Giới thiệu khóa học, Học HTML cơ bản",
    topics: [
      "Web technoligies",
      "Web design",
      "Web Development", 
      "Web Design vs Web Development"
    ]
  }
];

function LessonCard({ title, topics }) {
  return (
    <div className="flex overflow-hidden flex-col w-full text-xl leading-none">
      <div className="flex gap-3 items-center px-3 py-4 w-full font-medium leading-5 text-white bg-neutral-900 min-h-[100px]">
        <div className="flex-1 shrink gap-2.5 self-stretch my-auto w-full min-w-[240px]">
          {title}
        </div>
      </div>
      <div className="flex flex-col justify-center py-2 w-full text-black bg-white">
        <div className="flex flex-col px-5 w-full">
          {topics.map((topic, index) => (
            <div key={index} className="flex gap-3 items-center px-4 py-4 w-full bg-white bg-opacity-10">
              <div className="gap-2.5 self-stretch my-auto">
                {topic}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-start py-2.5 w-full text-lg font-semibold bg-slate-300 text-neutral-900">
        <div className="flex flex-1 shrink gap-3 items-center p-3 basis-0 min-w-[240px]">
          <div className="gap-2.5 self-stretch my-auto">Bài tập</div>
        </div>
        <div className="flex gap-3 items-center p-3">
          <div className="gap-2.5 self-stretch my-auto">Điểm: 0.0</div>
        </div>
      </div>
    </div>
  );
}

function LessonList() {
  return (
    <div className="flex flex-col pb-5 min-w-[240px] w-[410px]">
      {lessonData.map((lesson, index) => (
        <LessonCard key={index} {...lesson} />
      ))}
    </div>
  );
}

export default LessonList;