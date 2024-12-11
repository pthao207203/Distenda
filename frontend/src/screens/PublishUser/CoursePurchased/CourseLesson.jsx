import * as React from "react";
import { Link } from "react-router-dom";

// const lessonData = {
//   title: "Bài 01: Giới thiệu khóa học, Học HTML cơ bản",
//   topics: [
//     "Web technoligies",
//     "Web design",
//     "Web Development",
//     "Web Design vs Web Development"
//   ]
// };

export default function CourseLesson({ courseSlug, ...lesson }) {
  // console.log("slug", courseSlug)
  // console.log("lesson", lesson)
  const videos = lesson.video
  return (
    <div className="flex flex-col overflow-hidden grow shrink self-start my-auto w-full max-w-[1600px]  bg-neutral-900 text-white">
      <div className="flex gap-3 items-center px-5 py-8 w-full text-xl font-medium leading-5 text-white bg-neutral-900 min-h-[100px] max-md:max-w-full">
        <div className="flex-1 shrink gap-2.5 self-stretch my-auto w-full min-w-[240px]">
          {lesson.LessonName}
        </div>
      </div>
      <div className="flex flex-col w-full leading-none bg-white max-md:max-w-full">
        <div className="flex flex-col px-5 py-2.5 w-full text-xl text-black max-md:max-w-full">
          {videos && videos.length > 0 && videos.map((topic, index) => (
            <Link to={`/courses/CoursePurchased/${courseSlug}/${topic.VideoSlug}`} key={index} className="flex gap-3 items-center px-3 py-3 w-full bg-white bg-opacity-10">
              <div className="gap-2.5 self-stretch my-auto">
                {topic.VideoName}
              </div>
            </Link>
          ))}
        </div>
        {lesson.exercise && (
          <Link to={`/courses/CoursePurchased/${courseSlug}/CourseCode/${lesson.exercise.ExerciseSlug}`} className="flex items-start py-2.5 w-full text-lg font-semibold bg-slate-300 text-neutral-900 max-md:max-w-full">
            <div className="flex flex-1 shrink gap-3 items-center p-3 basis-0 min-w-[240px]">
              <div className="gap-2.5 self-stretch my-auto">Bài tập</div>
            </div>
            <div className="flex gap-3 items-center p-3">
              <div className="gap-2.5 self-stretch my-auto">
                Điểm: 0.0
              </div>
            </div>
          </Link>
        )}

      </div>
    </div>
  );
}