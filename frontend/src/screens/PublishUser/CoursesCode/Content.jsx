import * as React from "react";
import parse from "html-react-parser";

function TaskContent({ exercise }) {
  return (
    <main
      className="table-container flex flex-col pt-5 text-white text-[1.125rem] max-lg:text-[14px] bg-[#131313] bg-opacity-0 h-full min-w-[240px] w-[522px] max-lg:max-w-full"
      role="main"
    >
      <h2 className="shrink gap-2.5 self-stretch w-full font-semibold text-white whitespace-nowrap max-lg:max-w-full">
        Đề bài
      </h2>
      {typeof exercise?.ExerciseQuestion === "string"
        ? parse(exercise.ExerciseQuestion)
        : ""}
      <p className="shrink gap-2.5 self-stretch w-full font-semibold text-white whitespace-nowrap max-lg:max-w-full">
        Ví dụ
      </p>
      Input: {exercise?.ExerciseTestcase[0]?.Input}
      {/* <p className="shrink gap-2.5 self-stretch px-4 w-full mb-2 font-semibold text-white whitespace-nowrap max-lg:max-w-full">
        Output
      </p> */}
      <br />
      Output: {exercise?.ExerciseTestcase[0]?.Output}
    </main>
  );
}

export default TaskContent;
