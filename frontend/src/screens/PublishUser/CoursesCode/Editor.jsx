import React, { useState } from "react";

import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/monokai.css";

function CodeEditor({ code, handleCodeChange, handleButton, submit }) {
  // const [exerciseSample, setExerciseSample] = useState(exercise.ExerciseSample);
  return (
    <section
      className="flex flex-col flex-1 shrink lg:py-5 max-lg:py-[8px] text-xl max-lg:text-[14px] basis-[60px] bg-neutral-900 bg-opacity-30 h-full min-w-[240px] max-md:max-w-full"
      role="complementary"
      aria-label="Code Editor"
    >
      <h2 className="shrink gap-2.5 self-stretch w-full mb-2 font-semibold text-white whitespace-nowrap max-md:max-w-full">
        Code
      </h2>

      <CodeMirror
        value={code}
        options={{
          theme: "monokai",
          lineNumbers: true,
        }}
        onChange={handleCodeChange}
      />
      {/* <textarea
        value={exerciseSample} // Giá trị textarea là state
        onChange={(e) => setExerciseSample(e.target.value)} // Cập nhật giá trị khi người dùng thay đổi
        className="w-full p-2 bg-gray-800 text-white"
        rows={20} // Số dòng hiển thị trong textarea
        style={{ whiteSpace: 'pre-wrap' }} // Đảm bảo giữ các dấu ngắt dòng
      >
      </textarea> */}
      <div className="flex justify-end gap-x-4 items-center px-3 mt-4 w-full font-medium leading-none text-white max-md:max-w-full">
        {/* <button
          className="flex items-center justify-start px-3 py-3 bg-black min-h-[60px] w-[160px]"
          aria-label="File code"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fe2a35d0339ce0741bfb0eb65ee3f988514cd914c6e2ca8eb1e4ade0f6db41b?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
          />
          <span className="ml-2">File code</span>
        </button> */}
        {/* Nút 'Check code' */}
        <button
          className="flex justify-center items-center px-3 py-3 bg-black min-h-[40px] w-[120px] focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onClick={() => handleButton("check")}
        >
          <div className="gap-2 self-stretch my-auto">Check code</div>
        </button>

        {/* Nút 'Nộp bài' */}
        {submit && (
          <button
            className="flex justify-center items-center px-3 py-2 bg-[#CFF500] text-neutral-900 min-h-[40px] w-[120px] focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={() => handleButton("submit")}
          >
            <div className="gap-2 self-stretch my-auto">Nộp bài</div>
          </button>
        )}
      </div>
    </section>
  );
}

export default CodeEditor;
