import React from "react";

function ContentSection({ title, content }) {
  return (
    <div className="flex flex-col mt-6 w-full min-h-[229px] max-md:max-w-full">
      <div className="leading-none text-neutral-900 text-opacity-50 max-md:max-w-full">
        {title}
      </div>
      <div className="flex-1 shrink gap-2.5 self-stretch px-2.5 py-5 mt-2 leading-5 rounded-lg border border-solid border-slate-500 border-opacity-80 size-full text-neutral-900 max-md:max-w-full">
        {content}
      </div>
    </div>
  );
}

export default ContentSection;
