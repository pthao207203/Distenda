import * as React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// const lessonData = [
//   {
//     title: "Bài 01: Giới thiệu khóa học, Học HTML cơ bản",
//     topics: [
//       "Web technoligies",
//       "Web design",
//       "Web Development",
//       "Web Design vs Web Development"
//     ]
//   },
//   {
//     title: "Bài 01: Giới thiệu khóa học, Học HTML cơ bản",
//     topics: [
//       "Web technoligies",
//       "Web design",
//       "Web Development",
//       "Web Design vs Web Development"
//     ]
//   }
// ];

function LessonCard({ videoKey, courseSlug, videoStatusList,markVideoAsCompleted, ...lesson  }) {
  return (
    <div className="flex overflow-hidden flex-col w-full text-xl max-lg:text-[16px] leading-none">
      <div className="flex gap-3 items-center px-3 py-4 w-full font-medium leading-5 text-white bg-neutral-900 min-h-[60px]">
        <div className="flex-1 shrink gap-2.5 self-stretch my-auto w-full max-w-[28rem]">
          {lesson ? lesson.LessonName : ""}
        </div>
      </div>
      <div className="flex flex-col justify-center w-full text-black bg-white">
        <div className="flex flex-col  w-full">
          {lesson &&
            lesson.video &&
            lesson.video.length > 0 &&
            lesson.video.map((topic, index) => (
              <Link
                to={`/courses/CoursePurchased/${courseSlug}/${topic.VideoSlug}`}
                key={index}
                className={`flex gap-3 items-center justify-between px-4 py-3 w-full hover:text-[#CDD5DF] ${
                  topic._id === videoKey ? "bg-[#EBF1F9]" : "bg-white"
                }`}
                onClick={() => markVideoAsCompleted(topic._id)}
              >
                <div className="gap-2.5 self-stretch my-auto">
                  {topic.VideoName}
                </div>
                {videoStatusList[topic._id] === 1  ? (
                  <img
                    loading="lazy"
                    src="/Icon/done.svg"
                    alt="Completed"
                    className="object-cover self-center my-auto aspect-square w-[1.875rem] h-[1.875rem]"
                  />
                ) : (
                  <img
                    loading="lazy"
                    src="/Icon/undone.svg"
                    alt="Not Completed"
                    className="object-cover self-center my-auto aspect-square w-[1.875rem] h-[1.875rem]"
                  />
                )}
              </Link>
            ))}
        </div>
      </div>
      {lesson.exercise && (
        <Link
          to={`/courses/CoursePurchased/:CourseSlug/CourseCode/${lesson.exercise.ExerciseSlug}`}
          className="flex items-start py-2.5 w-full text-lg max-lg:text-[14px] font-semibold bg-slate-300 text-neutral-900"
        >
          <div className="flex flex-1 shrink gap-3 items-center p-2 basis-0">
            <div className="gap-2.5 self-stretch my-auto">Bài tập</div>
          </div>
          <div className="flex gap-3 items-center p-2">
            <div className="gap-2.5 self-stretch my-auto">Điểm: 0.0</div>
          </div>
        </Link>
      )}
    </div>
  );
}

function LessonList({course, videoKey, videoStatusList, markVideoAsCompleted}) {
  const lessons = Object.values(course.lesson);
  return (
    <div className="flex flex-col min-w-[200px]">
      {lessons &&
        lessons.length > 0 &&
        lessons.map((lesson, index) => (
          <LessonCard
          videoKey={videoKey}
          courseSlug={course?.CourseSlug}
          videoStatusList={videoStatusList}
          markVideoAsCompleted={markVideoAsCompleted}
          {...lesson}
          key={index}
          />
        ))}
    </div>
  );
}

export default LessonList;
