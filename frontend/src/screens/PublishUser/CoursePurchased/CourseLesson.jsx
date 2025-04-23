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
  const videos = lesson.video;
  return (
    <div className="flex flex-col overflow-hidden grow shrink self-start my-auto w-full max-w-[1600px]  bg-neutral-900 text-white">
      <div className="flex gap-3 items-center px-5 py-4 w-full text-xl max-lg:text-[16px] font-medium leading-5 text-white bg-neutral-900 min-h-[60px] max-lg:max-w-full">
        <div className="flex-1 shrink gap-2.5 self-stretch my-auto w-full min-w-[240px]">
          {lesson.LessonName}
        </div>
      </div>
      <div className="flex flex-col w-full leading-none bg-white max-lg:max-w-full">
        <div className="flex flex-col px-5 py-2 w-full text-xl max-lg:text-[14px] text-black max-lg:max-w-full">
          {videos &&
            videos.length > 0 &&
            videos.map((topic, index) => (
              <Link
                to={`/courses/CoursePurchased/${courseSlug}/${topic.VideoSlug}`}
                key={index}
                className="flex gap-3 items-center px-3 lg:py-3 w-full bg-white bg-opacity-10 max-lg:py-[16px] hover:text-[#CDD5DF] transition"
              >
                <div className="gap-2.5 my-auto">{topic.VideoName}</div>
              </Link>
            ))}
        </div>
        {lesson.exercise && (
          <Link
            to={`/courses/CoursePurchased/${courseSlug}/CourseCode/${lesson.exercise.ExerciseSlug}`}
            className="flex items-start lg:py-2 px-5 max-lg:py-[16px] w-full text-lg max-lg:text-[14px] font-semibold bg-[#CDD5DF] text-neutral-900 max-lg:max-w-full hover:text-white transition"
          >
            <div className="flex flex-1 shrink gap-3 items-center p-3 basis-0 min-w-[240px]">
              <div className="gap-2.5 self-stretch my-auto">Bài tập</div>
            </div>
            <div className="flex gap-3 items-center p-3">
              <div className="gap-2.5 self-stretch my-auto">Điểm: 0.0</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
