import React from "react";

function ContentSection({ title, content }) {
  return (
    <div className="flex flex-col mt-6 w-full min-h-[229px] max-md:max-w-full">
      {/* Tiêu đề */}
      <div className="text-xl font-semibold text-neutral-900 text-opacity-50 leading-none max-md:max-w-full">
        {title}
      </div>

      {/* Nội dung */}
      <div className="flex-1 shrink px-5 py-4 mt-2 leading-6 rounded-[12px] border border-solid border-[#6C8299] bg-[#F3F6FC] text-[#131313] text-base max-md:max-w-full">
        {content}
      </div>
    </div>
  );
}

export default ContentSection;
