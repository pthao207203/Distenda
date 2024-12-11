import * as React from "react";
import { Link } from "react-router-dom";

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

function LessonCard({ videoKey, courseSlug, ...lesson }) {
  return (
    <div className="flex overflow-hidden flex-col w-full text-xl leading-none">
      <div className="flex gap-3 items-center px-3 py-4 w-full font-medium leading-5 text-white bg-neutral-900 min-h-[100px]">
        <div className="flex-1 shrink gap-2.5 self-stretch my-auto w-full min-w-[240px]">
          {lesson ? lesson.LessonName : ""}
        </div>
      </div>
      <div className="flex flex-col justify-center w-full text-black bg-white">
        <div className="flex flex-col  w-full">
          {lesson && lesson.video && lesson.video.length > 0 && lesson.video.map((topic, index) => (
            <Link to={`/courses/CoursePurchased/${courseSlug}/${topic.VideoSlug}`} key={index} className={`flex gap-3 items-center px-4 py-4 w-full ${topic._id === videoKey ? "bg-[#EBF1F9]" : "bg-white"
              }`}>
              <div className='gap-2.5 self-stretch my-auto'>
                {topic.VideoName}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {lesson.exercise && (
        <Link to={`/courses/CoursePurchased/:CourseSlug/CourseCode/${lesson.exercise.ExerciseSlug}`} className="flex items-start py-2.5 w-full text-lg font-semibold bg-slate-300 text-neutral-900">
          <div className="flex flex-1 shrink gap-3 items-center p-3 basis-0 min-w-[240px]">
            <div className="gap-2.5 self-stretch my-auto">Bài tập</div>
          </div>
          <div className="flex gap-3 items-center p-3">
            <div className="gap-2.5 self-stretch my-auto">Điểm: 0.0</div>
          </div>
        </Link>
      )}

    </div>
  );
}

function LessonList(video) {
  const course = video.course
  const lessons = Object.values(course.lesson)
  return (
    <div className="flex flex-col min-w-[240px] w-[410px]">
      {lessons && lessons.length > 0 && lessons.map((lesson, index) => (
        <LessonCard videoKey={video._id} courseSlug={course?.CourseSlug} {...lesson} key={index} />
      ))}
    </div>
  );
}

export default LessonList;