import * as React from "react";
import { CourseHeader } from "./CourseHeader";
import { NavigationBreadcrumb } from "./NavigationBreadcrumb";
import { VideoSection } from "./VideoSection";

export default function CourseContent() {
  return (
    <main className="flex overflow-hidden flex-col bg-indigo-50">
      {/* <CourseHeader /> */}
      <NavigationBreadcrumb />
      <section className="flex overflow-hidden flex-col px-16 pt-8 mt-2 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col pb-16 w-full max-md:max-w-full">
          <form className="flex flex-wrap gap-10 items-end w-full font-medium leading-none max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink justify-center text-xl basis-0 min-w-[240px] max-md:max-w-full">
              <label htmlFor="lessonName" className="text-neutral-900 text-opacity-50 max-md:max-w-full">
                Tên bài <span className="text-red-600">*</span>
              </label>
              <input
                id="lessonName"
                type="text"
                value="Xây dựng giao diện website"
                className="flex-1 shrink gap-2.5 self-stretch px-3 py-3 w-full rounded-lg border border-solid border-slate-500 border-opacity-80 min-h-[63px] text-neutral-900 max-md:max-w-full"
              />
            </div>
            <div className="flex gap-2.5 items-end text-3xl text-white min-w-[240px]">
              <button type="submit" className="flex gap-3 justify-center items-center px-3 py-3 rounded-lg bg-[#6C8299]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9c84cc0d21b5241ee40d83334bf9289f4fc6a242a7bb8a736e90effdbd86720?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <span className="gap-2.5 self-stretch my-auto">Cập nhật</span>
              </button>
              <button type="button" className="flex gap-3 justify-center items-center px-3 py-3 bg-red-600 rounded-lg">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/42648122efa6f387983f11efeb38ca614809d3a449f7a41f54d965ae2b480b89?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <span className="gap-2.5 self-stretch my-auto">Xóa</span>
              </button>
            </div>
          </form>
          <VideoSection />
        </div>
      </section>
    </main>
  );
}