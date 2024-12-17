import React from "react";
import ContentSection from "./ContentSection";

function QuestionEditor() {
  const sections = [
    {
      title: "Đề bài",
      content: `Given an integer, n, perform the following conditional actions:

If n is odd, print Weird
If n is even and in the inclusive range of 2 to 5, print Not Weird
If n is even and in the inclusive range of 6 to 20, print Weird
If n is even and greater than 20, print Not Weird`,
    },
    {
      title: "Template",
      content: "",
    },
    {
      title: "Đáp án",
      content: "",
    },
  ];

  return (
    <div className="flex flex-col px-16 pt-16 pb-40 text-xl font-medium bg-white max-md:px-5 max-md:pb-24">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-2.5 items-start w-full leading-none max-md:max-w-full">
          <button className="flex gap-3 justify-center items-center px-8 py-3 text-white rounded-lg bg-slate-500 min-h-[46px] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/778afc149db89cc04e0d99cf372aaf6d47b636a305e03ead4a1ee6de46838cb9?apiKey=bb36f631e8e54463aa9d0d8a1339282b&"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <span className="gap-2.5 self-stretch my-auto">Cập nhật</span>
          </button>
          <button className="flex gap-3 justify-center items-center px-8 py-3.5 whitespace-nowrap rounded-lg bg-slate-300 min-h-[46px] text-blue-950 max-md:px-5">
            <span className="gap-2.5 self-stretch my-auto">Hủy</span>
          </button>
        </div>

        {sections.map((section, index) => (
          <ContentSection
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionEditor;
