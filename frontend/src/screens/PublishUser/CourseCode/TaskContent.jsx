import * as React from "react";

function TaskContent() {
  return (
    <main className="flex flex-col px-8 pt-5 text-white bg-[#131313] bg-opacity-0 h-[985px] min-w-[240px] w-[522px] max-md:px-5 max-md:max-w-full" role="main">
      <section className="flex flex-col w-full max-md:max-w-full">
        <h2 className="text-xl font-semibold max-md:max-w-full">Task</h2>
        <div className="mt-2 text-lg max-md:max-w-full">
          Given an integer,<em>n</em>, perform the following conditional actions:
          <ul>
            <li>If <em>n</em> is odd, print Weird</li>
            <li>If <em>n</em> is even and in the inclusive range of <em>2</em> to <em>5</em>, print Not Weird</li>
            <li>If <em>n</em> is even and in the inclusive range of <em>6</em> to <em>20</em>, print Weird</li>
            <li>If <em>n</em> is even and greater than <em>20</em>, print Not Weird</li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col mt-4 w-full text-lg max-md:max-w-full">
        <h3 className="font-semibold max-md:max-w-full">Input Format</h3>
        <div className="mt-2 max-md:max-w-full">
          A single line containing a positive integer, <em>n</em>.
        </div>
      </section>

      <section className="flex flex-col mt-4 w-full text-lg max-md:max-w-full">
        <h3 className="font-semibold max-md:max-w-full">Constraints</h3>
        <div className="mt-2 max-md:max-w-full">
          1 &lt;= <em>n</em> &lt;= 100
        </div>
      </section>

      <section className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="text-xl font-semibold max-md:max-w-full">Output Format</h3>
        <div className="mt-2 text-lg max-md:max-w-full">
          Print Weird if the number is weird. Otherwise, print Not Weird.
        </div>
      </section>

      <section className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="text-xl font-semibold max-md:max-w-full">Sample Input 0</h3>
        <div className="shrink gap-2.5 self-stretch p-3 mt-1 w-full text-lg whitespace-nowrap bg-white bg-opacity-10 max-md:max-w-full">
          3
        </div>
      </section>

      <section className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="text-xl font-semibold max-md:max-w-full">Sample Output 0</h3>
        <div className="shrink gap-2.5 self-stretch p-3 mt-1 w-full text-lg whitespace-nowrap bg-white bg-opacity-10 max-md:max-w-full">
          Weird
        </div>
      </section>
    </main>
  );
}

export default TaskContent;