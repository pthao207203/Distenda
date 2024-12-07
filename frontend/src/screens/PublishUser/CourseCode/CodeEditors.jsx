import * as React from "react";

function CodeEditor() {
  return (
    <section className="flex flex-col flex-1 shrink py-5 text-xl basis-[60px] bg-neutral-900 bg-opacity-30 min-h-[984px] min-w-[240px] max-md:max-w-full" role="complementary" aria-label="Code Editor">
      <h2 className="shrink gap-2.5 self-stretch px-4 w-full font-semibold text-white whitespace-nowrap max-md:max-w-full">
        Code
      </h2>
      <div className="flex overflow-hidden flex-wrap flex-1 gap-5 items-start px-5 py-2.5 mt-4 text-lg bg-neutral-900 size-full max-md:max-w-full">
        <div className="text-slate-300">
          1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />
          10<br />11<br />12<br />13
        </div>
        <div className="flex-1 shrink text-white basis-0 max-md:max-w-full">
          <span className="text-yellow-400">#!/bin/python3</span>
          <br /><br />
          <span className="text-amber-300">import</span> math<br />
          <span className="text-amber-300">import</span> os<br />
          <span className="text-amber-300">import</span> random<br />
          <span className="text-amber-300">import</span> re<br />
          <span className="text-amber-300">import</span> sys<br />
          <br /><br /><br />
          <span className="text-amber-300">if __name__</span> == <span className="text-red-600">'__main__':</span><br />
          n = <span className="text-amber-300">int</span>(<span className="text-amber-300">input</span>().strip())<br />
        </div>
      </div>
      <div className="flex justify-end gap-x-4 items-center px-3 mt-4 w-full font-medium leading-none text-white max-md:max-w-full">
        <button className="flex items-center justify-start px-3 py-3 bg-black min-h-[60px] w-[160px]" aria-label="File code">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fe2a35d0339ce0741bfb0eb65ee3f988514cd914c6e2ca8eb1e4ade0f6db41b?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
          />
          <span className="ml-2">File code</span>
        </button>
        {/* Nút 'Check code' */}
        <button className="flex justify-center items-center px-3 py-3 bg-black min-h-[60px] w-[200px] focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <div className="gap-2 self-stretch my-auto">Check code</div>
        </button>
  
        {/* Nút 'Nộp bài' */}
        <button className="flex justify-center items-center px-3 py-3 bg-[#CFF500] text-neutral-900 min-h-[60px] w-[200px] focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <div className="gap-2 self-stretch my-auto">Nộp bài</div>
        </button>
      </div>
    </section>
  );
}

export default CodeEditor;
