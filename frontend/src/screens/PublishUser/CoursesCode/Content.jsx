import * as React from "react";
import parse from "html-react-parser";

function TaskContent({ exercise }) {
  return (
    <main
      className="table-container flex flex-col px-8 pt-5 text-white bg-[#131313] bg-opacity-0 h-full min-w-[240px] w-[522px] max-md:px-5 max-md:max-w-full"
      role="main"
    >
      <h2 className="shrink gap-2.5 self-stretch px-4 w-full font-semibold text-white whitespace-nowrap max-md:max-w-full">
        Đề bài
      </h2>
      {typeof exercise?.ExerciseQuestion === "string"
        ? parse(exercise.ExerciseQuestion)
        : ""}
      <p className="shrink gap-2.5 self-stretch px-4 w-full font-semibold text-white whitespace-nowrap max-md:max-w-full">
        Ví dụ
      </p>
      Input: {exercise?.ExerciseTestcase[0]?.Input}
      {/* <p className="shrink gap-2.5 self-stretch px-4 w-full mb-2 font-semibold text-white whitespace-nowrap max-md:max-w-full">
        Output
      </p> */}
      <br />
      Output: {exercise?.ExerciseTestcase[0]?.Output}
    </main>
  );
}

export default TaskContent;
