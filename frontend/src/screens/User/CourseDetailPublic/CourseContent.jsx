import React, { useRef} from "react";
import CourseSection from "./CourseSection";
import CourseNavigation from "./CourseNavigation";
import InstructorProfile from "./InstructorProfile";
import CourseStats from "./CourseStats";
import LearningOutcomes from "./LearningOutcomes";
import CourseLessons from "./CourseLessons";
import CourseReviews from "../CourseDetail/CourseReviews";
import CourseCard from "./CourseCard";
import CourseOverview from "./CourseOverview";

export default function CourseContent({onRegister}) {
  const refs = {
    overview: useRef(null),
    content: useRef(null),
    instructor: useRef(null),
    reviews: useRef(null),
  };

  const scrollToSection = (section) => {
    const ref = refs[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="flex flex-col shrink relative text-white items-start w-full bg-white/15 backdrop-blur-[30px] max-md:px-4 max-md:max-w-full overflow-x-hidden">
      <CourseOverview />

      <aside className="absolute flex flex-col z-10 ml-5 justify-end w-1/4 max-md:w-full max-md:relative max-md:ml-0 md:right-0 max-md:mb-10">
        <CourseCard onRegister={onRegister} /> {/* Truyền hàm mở Payment */}
      </aside>

      {/* Main Content Section */}
      <div className="flex gap-5 px-[73px] max-md:flex-col w-full max-md:w-full max-md:px-0">
        <section className="flex flex-col flex-shrink md:w-[65%] max-md:w-full">
          {/* Navigation */}
          <CourseNavigation onNavigate={scrollToSection} />

          {/* Course Sections */}
          <CourseSection
            ref={refs.overview}
            title="Tổng quan khóa học"
            description="Khóa học dành cho các bạn sinh viên CNTT có định hướng theo phát triển website phía Backend sử dụng NodeJS và các Framework liên quan.  
            Yêu cầu chung: Khóa học sẽ dạy từ cơ bản đến nâng cao. Các bạn chỉ cần: chăm chỉ, không ngại hỏi đáp cũng như đưa ra các thắc mắc trong quá trình học tập."
          >
            <CourseStats />
          </CourseSection>

          <CourseSection title="Bạn sẽ học được gì?">
            <LearningOutcomes />
          </CourseSection>

          <CourseSection ref={refs.content} title="Nội dung khóa học">
            <CourseLessons />
          </CourseSection>

          <CourseSection ref={refs.instructor} title="Thông tin giảng viên">
            <InstructorProfile />
          </CourseSection>

          <CourseSection ref={refs.reviews} title="Đánh giá của học viên">
            <CourseReviews />
          </CourseSection>
        </section>
      </div>
    </main>
  );
}
