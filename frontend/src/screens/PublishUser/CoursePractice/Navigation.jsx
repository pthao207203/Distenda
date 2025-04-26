import * as React from "react";
import { Link } from "react-router-dom";

function SubNavigation(video) {
  return (
    <nav
      className="flex flex-wrap items-center px-[20px] mt-1 w-full text-lg max-lg:text-[12px] font-semibold leading-none text-white bg-white bg-opacity-10 max-lg:max-w-full"
      role="navigation"
      aria-label="Secondary navigation"
    >
      <div className="flex gap-3 items-center self-stretch px-3 py-1.5 my-auto">
        <Link to="/" className="gap-2.5 self-stretch my-auto">
          Trang chủ
        </Link>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7ae7fa626af7f71bb642e4f41c6e0a1e355fb5f990053a7157b292ff3f994f4?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
          alt=""
          className="object-cover shrink-0 self-stretch my-auto aspect-square w-[20px]"
        />
      </div>
      <div className="flex gap-3 items-center self-stretch px-3 py-1.5 my-auto">
        <Link
          to="/courses/CoursePurchased"
          className="gap-2.5 self-stretch my-auto"
        >
          Khóa học của tôi
        </Link>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9795753e4400c4f2afa2b198b7a13e28393a1a84c2213741e415cf62c9d4aa70?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
          alt=""
          className="object-cover shrink-0 self-stretch my-auto aspect-square w-[20px]"
        />
      </div>
      <div className="flex gap-3 items-center self-stretch px-3 py-1.5 my-auto min-w-[240px]">
        <Link
          to={`/courses/CoursePurchased/${video.course?.CourseSlug}`}
          className="gap-2.5 self-stretch my-auto"
        >
          {video.course?.CourseName}
        </Link>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9795753e4400c4f2afa2b198b7a13e28393a1a84c2213741e415cf62c9d4aa70?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
          alt=""
          className="object-cover shrink-0 self-stretch my-auto aspect-square w-[20px]"
        />
      </div>
      <div className="flex gap-3 items-center self-stretch px-3 py-1.5 my-auto min-w-[240px] min-h-[20px]">
        <Link to="" className="gap-2.5 self-stretch my-auto min-w-[240px]">
          {video.VideoName}
        </Link>
      </div>
    </nav>
  );
}

export default SubNavigation;
