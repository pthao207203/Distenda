import * as React from "react";
import { Link } from "react-router-dom";

function BreadcrumbNav(course) {
  console.log("course", course);
  const breadcrumbItems = [
    {
      text: "Trang chủ",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/89e020ef9b5a7ac817fbe3235cfd2edc48d4e48b592d3b6ba3ac6ca3c468f56b?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e",
      link: "/",
    },
    {
      text: "Khóa học của tôi",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/306cce165a493382cae2a69d1a4411fadc933cd2f3a23c65d754e4add2fab8af?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e",
      link: "/courses/CoursePurchased",
    },
    {
      text: `${course.course?.CourseName ? course.course.CourseName : ""}`,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5a0451c61c99e5ef2e55f94e3d954790d1c890fb52a51c02b43fe879c4db9a7?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e",
      link: `${
        course.course
          ? `/courses/CoursePurchased/${course.course.CourseSlug}`
          : ""
      }`,
    },
    {
      text: "Bài tập",
      icon: null,
      link: "",
    },
  ];
  return (
    <nav
      className="flex relative flex-wrap items-center px-[20px] mt-4 w-full text-lg max-lg:text-[14px] font-semibold leading-none text-white bg-white bg-opacity-10 max-md:max-w-full"
      role="navigation"
      aria-label="Breadcrumb"
    >
      {breadcrumbItems.map((item, index) => (
        <Link
          to={item.link}
          key={index}
          className="flex gap-3 items-center self-stretch px-3 py-1.5 my-auto"
        >
          <div className="gap-2.5 self-stretch my-auto">{item.text}</div>
          {item.icon && (
            <img
              loading="lazy"
              src={item.icon}
              alt=""
              className="object-cover shrink-0 self-stretch my-auto aspect-square w-[20px]"
            />
          )}
        </Link>
      ))}
    </nav>
  );
}

export default BreadcrumbNav;
