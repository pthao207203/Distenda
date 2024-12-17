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
    <div className="flex flex-col px-16 pt-16 pb-40 bg-white text-xl font-medium max-md:px-5 max-md:pb-24">
      {/* Header: Buttons */}
      <div className="flex gap-4 items-center mb-6">
        <button className="flex gap-2.5 justify-center items-center px-8 py-3 text-white rounded-lg bg-[#6C8299] hover:bg-slate-500">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/778afc149db89cc04e0d99cf372aaf6d47b636a305e03ead4a1ee6de46838cb9?apiKey=bb36f631e8e54463aa9d0d8a1339282b&"
            alt="Update"
            className="w-5 h-5"
          />
          <span className="font-medium">Cập nhật</span>
        </button>
        <button className="flex gap-2.5 justify-center items-center px-8 py-3 bg-[#CDD5DF] rounded-lg hover:bg-gray-400">
          <span className="font-medium">Hủy</span>
        </button>
      </div>

      {/* Content Sections */}
      <div className="flex flex-col gap-6">
        {sections.map((section, index) => (
          <ContentSection
            key={index}
            title={section.title}
            content={section.content || "Chưa có nội dung"}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionEditor;
