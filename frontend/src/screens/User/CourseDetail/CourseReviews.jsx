import * as React from "react";
import StudentReviews from "./StudentReviews";

export default function CourseReviews() {
  const ratings = [5, 4, 3, 2, 1];

  return (
    <section className="flex flex-col items-start self-start  w-full rounded-3xl ">
      <div className="flex flex-wrap gap-10 items-start self-start px-8 py-5 whitespace-nowrap">
        <div className="flex flex-col text-7xl font-bold w-[150px] py-3 max-md:text-4xl">
          <span className="self-center max-w-full w-[134px]">4.5</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/bc77be56aab98bd847fe78df6226861fefebd7f98cd9e0d3198e47d06d42757f?apiKey=1914b3001bed44e2a53adf842ab19f47&"
            alt="Rating stars"
            className="object-contain mt-2.5 w-full aspect-[5]"
          />
        </div>
        <div className="flex flex-col justify-center text-3xl font-medium ">
          {ratings.map((rating) => (
            <div key={rating} className="flex flex-wrap gap-3 items-center mt-3 first:mt-0">
              <span className="self-stretch my-auto w-5">{rating}</span>
              <div className={`flex shrink self-stretch my-auto bg-[#CFF500] h-[21px] rounded-[99px] ${
                rating === 5 ? "w-[619px]" :
                rating === 4 ? "w-[412px]" :
                rating === 3 ? "w-[209px]" :
                rating === 2 ? "w-[209px]" : "w-[82px]"
              }`} />
              </div>
          ))}
        </div>
      </div>
      <StudentReviews/>
    </section>
  );
}