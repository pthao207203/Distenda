import * as React from "react";

const lessonSections = [
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

function SidebarMenu() {
  return (
    <>
      <div className="flex overflow-hidden flex-col px-2 pt-3 w-12 bg-neutral-900 pb-[956px] max-md:hidden max-md:pb-24">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e84b2a74101103610349e0f083f944bc5f742a95e1f2992faf849270d162a4c3?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
          alt=""
          className="object-contain w-5 aspect-[2]"
        />
      </div>
      <aside className="flex flex-col self-stretch pb-3 min-w-[240px] w-[410px]" role="complementary">
        {lessonSections.map((section, index) => (
          <div key={index} className="flex overflow-hidden flex-col w-full text-xl leading-none">
            <div className="flex gap-3 items-center px-3 py-4 w-full font-medium leading-5 text-white bg-neutral-900 min-h-[100px]">
              <div className="flex-1 shrink gap-2.5 self-stretch my-auto w-full min-w-[240px]">
                {section.title}
              </div>
            </div>
            <div className="flex flex-col justify-center py-2.5 w-full text-black bg-white">
              <div className="flex flex-col px-5 w-full">
                {section.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex gap-3 items-center px-3 py-4 w-full bg-white bg-opacity-10">
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
        ))}
      </aside>
    </>
  );
}

export default SidebarMenu;