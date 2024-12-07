import * as React from "react";

function CodeEditor() {
  return (
    <div className="flex flex-col flex-1 shrink px-2 basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col w-full bg-black min-h-[698px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2230c23571b14d3c5497d29fa5d1e128a406dbb37b177cd644c165ebe7fe1e8?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
          alt="Code preview"
          className="object-contain w-full aspect-[1.86] max-md:max-w-full"
        />
      </div>
      <nav
        className="flex flex-wrap justify-between items-center px-12 mt-1.5 w-full text-xl font-medium leading-none text-white bg-black min-h-[75px] max-md:px-5 max-md:max-w-full"
        role="navigation"
        aria-label="Code navigation"
      >
        <button className="flex flex-wrap flex-1 shrink gap-3 items-center self-stretch px-3 py-3 my-auto basis-0 min-w-[240px] max-md:max-w-full focus:outline-none focus:ring-2 focus:ring-yellow-400">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1ca9e9a4357fd9106f0a52c0624d8cc318758a4589316924ef16242c1429a8f?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
          />
          <div className="gap-2.5 self-stretch my-auto">Bài trước</div>
        </button>
        <button className="flex flex-wrap flex-1 shrink gap-3 items-center self-stretch px-3 py-5 my-auto basis-0 min-w-[240px] max-md:max-w-full justify-end focus:outline-none focus:ring-2 focus:ring-yellow-400">
          <div className="gap-2.5 self-stretch my-auto">Bài sau</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1a22b6f0cc53f9f687e21c33a51b59112be8f38757b13cd0aa702709af3c38e?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </button>
      </nav>
      <div className="flex flex-col flex-1 py-3 mt-0 w-full max-md:max-w-full">
        <div className="shrink gap-2 self-stretch px-2 py-1 text-3xl font-semibold text-white whitespace-nowrap max-md:max-w-full">
          Code
        </div>
        <div className="flex overflow-hidden flex-wrap flex-1 gap-5 items-start px-2 mt-0 text-lg bg-neutral-900 size-full max-md:max-w-full">
          <div className="text-slate-300">
            1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9
            <br />
            10
            <br />
            11
            <br />
            12
            <br />
            13
          </div>
          <div className="flex-1 shrink text-white basis-0 max-md:max-w-full">
            <span className="text-yellow-400">#!/bin/python3</span>
            <br />
            <br />
            <span className="text-amber-300">import</span> math
            <br />
            <span className="text-amber-300">import</span> os
            <br />
            <span className="text-amber-300">import</span> random
            <br />
            <span className="text-amber-300">import</span> re
            <br />
            <span className="text-amber-300">import</span> sys
            <br />
            <br />
            <br />
            <br />
            <span className="text-amber-300">if __name__</span> =={" "}
            <span className="text-red-600">'__main__':</span>
            <br /> n = <span className="text-amber-300">int</span>(
            <span className="text-amber-300">input</span>().strip())
            <br />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 justify-end items-center px-3 mt-4 w-full text-xl font-medium leading-none text-white max-md:max-w-full">
  {/* Nút 'File code' */}
  <button className="flex justify-center items-center px-3 py-3 bg-black min-h-[60px] w-[200px] focus:outline-none focus:ring-2 focus:ring-yellow-400">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9223503658f19808e9d7fc01813a009a841e63a9a3c2d547c0aac010ef82eb8?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
      alt=""
      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
    />
    <div className="gap-2.5 self-stretch my-auto">File code</div>
  </button>
  
  {/* Nút 'Check code' */}
  <button className="flex justify-center items-center px-3 py-3 bg-black min-h-[60px] w-[200px] focus:outline-none focus:ring-2 focus:ring-yellow-400">
    <div className="gap-2.5 self-stretch my-auto">Check code</div>
  </button>
  
  {/* Nút 'Nộp bài' */}
  <button className="flex justify-center items-center px-3 py-3 bg-[#CFF500] text-neutral-900 min-h-[60px] w-[200px] focus:outline-none focus:ring-2 focus:ring-yellow-400">
    <div className="gap-2.5 self-stretch my-auto">Nộp bài</div>
  </button>
</div>

      </div>
    </div>
  );
}

export default CodeEditor;
