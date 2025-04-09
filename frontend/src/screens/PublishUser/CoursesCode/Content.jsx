import * as React from "react";
import parse from 'html-react-parser';

function TaskContent(exercise) {

  return (
    <main className="table-container flex flex-col px-8 pt-5 text-white bg-[#131313] bg-opacity-0 h-full min-w-[240px] w-[522px] max-md:px-5 max-md:max-w-full" role="main">
      {(typeof exercise.ExerciseQuestion) === 'string' ? parse(exercise.ExerciseQuestion) : ""}
    </main>
  );
}

export default TaskContent;