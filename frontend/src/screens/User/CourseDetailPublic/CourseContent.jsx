import React, { useRef } from "react";
import parse from "html-react-parser";

import CourseSection from "./CourseSection";
import CourseNavigation from "./CourseNavigation";
import InstructorProfile from "./InstructorProfile";
import CourseStats from "./CourseStats";
import LearningOutcomes from "./LearningOutcomes";
import CourseLessons from "./CourseLessons";
import CourseReviews from "./CourseReviews";
import CourseCard from "./CourseCard";
import CourseOverview from "./CourseOverview";

export default function CourseContent({ onRegister, headerHeight, ...course }) {
  // console.log("course ", course)
  const refs = {
    overview: useRef(null),
    content: useRef(null),
    instructor: useRef(null),
    reviews: useRef(null),
  };

  const scrollToSection = (section) => {
    const ref = refs[section];
    if (ref?.current) {
      const elementTop =
        ref.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementTop - headerHeight, // Use headerHeight prop directly
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  const addSpacingToParagraphs = (html) => {
    if (typeof html !== "string") {
      return "Nội dung không khả dụng";
    }

    return parse(html, {
      replace: (domNode) => {
        // Kiểm tra nếu phần tử là thẻ <p>
        if (domNode.name === "p") {
          // Kiểm tra các phần tử con để đảm bảo mỗi phần tử là chuỗi hợp lệ
          const children = domNode.children?.map((child, index) => {
            if (typeof child === "string") {
              return child; // Nếu là chuỗi, trả về trực tiếp
            } else if (child?.name === "strong") {
              // Giữ nguyên thẻ <strong>
              return (
                <strong key={index}>
                  {child.children?.map((c) => c.data).join("")}
                </strong>
              );
            } else if (child && typeof child.data === "string") {
              return child.data; // Nếu có thuộc tính `data`, trả về chuỗi
            } else {
              return ""; // Trả về chuỗi rỗng nếu không phải chuỗi hợp lệ
            }
          });

          return (
            <p style={{ marginTop: "1em", lineHeight: "1.8" }}>{children}</p>
          );
        }

        return null; // Trả về null nếu không phải thẻ <p>
      },
    });
  };

  return (
    <main className="flex flex-col shrink relative text-white items-start w-full bg-white/15 backdrop-blur-[30px] max-ms:px-4 max-ms:max-w-full overflow-x-hidden">
      <div className="hidden lg:block">
        <CourseOverview {...course} />
      </div>

      <aside className="absolute flex flex-col z-10 ml-5 items-center justify-end w-1/4 max-lg:w-full max-lg:relative max-lg:ml-0 lg:right-0 max-lg:mb-10">
        <CourseCard {...course} onRegister={onRegister} />{" "}
        {/* Truyền hàm mở Payment */}
      </aside>

      {/* Main Content Section */}
      <div className="flex gap-5 px-[73px] max-lg:flex-col w-full max-lg:w-full max-lg:px-[20px]">
        <section className="flex flex-col flex-shrink lg:w-[65%] max-lg:w-full">
          {/* Navigation */}
          <CourseNavigation onNavigate={scrollToSection} />

          {/* Course Sections */}
          <CourseSection
            ref={refs.overview}
            title="Tổng quan khóa học"
            description={addSpacingToParagraphs(course.CourseDescription)}
          >
            <CourseStats {...course} />
          </CourseSection>

          {/* <CourseSection title="Bạn sẽ học được gì?">
            <LearningOutcomes />
          </CourseSection> */}

          <CourseSection ref={refs.content} title="Nội dung khóa học">
            <CourseLessons {...course.lesson} />
          </CourseSection>

          <CourseSection ref={refs.instructor} title="Thông tin giảng viên">
            <InstructorProfile {...course.intructor} />
          </CourseSection>

          <CourseSection ref={refs.reviews} title="Đánh giá của học viên">
            <CourseReviews {...course.CourseReview} />
          </CourseSection>
        </section>
      </div>
    </main>
  );
}
