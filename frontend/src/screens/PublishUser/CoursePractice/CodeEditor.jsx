import * as React from "react";

function CodeEditor(video) {
  return (
    <div className="flex flex-col flex-1 shrink px-2 basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col w-full bg-black min-h-[calc(100vh-200px)] max-md:max-w-full">
        <div
          className="flex items-center justify-center w-full h-full"
          dangerouslySetInnerHTML={{ __html: video.VideoUrl }}
        ></div>
      </div>
      {/* <nav
        className="flex flex-wrap justify-between items-center px-12 mt-1.5 w-full text-xl font-medium leading-none text-white bg-black min-h-[75px] max-md:px-5 max-md:max-w-full"
        role="navigation"
        aria-label="Code navigation"
      >
        <button className="flex flex-wrap flex-1 shrink gap-3 items-center self-stretch px-3 py-3 my-auto basis-0 min-w-[240px] max-md:max-w-full ">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1ca9e9a4357fd9106f0a52c0624d8cc318758a4589316924ef16242c1429a8f?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
          />
          <div className="gap-2.5 self-stretch my-auto">Bài trước</div>
        </button>
        <button className="flex flex-wrap flex-1 shrink gap-3 items-center self-stretch px-3 py-5 my-auto basis-0 min-w-[240px] max-md:max-w-full justify-end">
          <div className="gap-2.5 self-stretch my-auto">Bài sau</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1a22b6f0cc53f9f687e21c33a51b59112be8f38757b13cd0aa702709af3c38e?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </button>
      </nav> */}
    </div>
  );
}

export default CodeEditor;
