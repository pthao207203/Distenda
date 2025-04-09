import React from 'react';

const outcomes = [
  "Các kiến thức cơ bản, nền móng của ngành IT",
  "Các kiến thức cơ bản, nền móng của ngành IT",
  "Các kiến thức cơ bản, nền móng của ngành IT",
  "Các kiến thức cơ bản, nền móng của ngành IT"
];

export default function LearningOutcomes() {
  return (
    <div className="flex flex-col flex-wrap mt-2 w-full text-xl font-medium max-md:max-w-full">
      {outcomes.map((outcome, index) => (
        
        <div key={index}  className="flex gap-2.5 px-2.5 items-center mt-4 first:mt-0 w-full">
          <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/9c7992bcbe164b8dad4f2629b8fc1688/97e21866bc5afbf00051ee99a6f9c653d19410723e1198a5cc1339f342a5c409?apiKey=9c7992bcbe164b8dad4f2629b8fc1688&"
                alt=""
                className="object-contain shrink-0 self-center my-auto aspect-square"
              />
          {outcome}
        </div>
      ))}
    </div>
  );
}