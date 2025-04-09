import * as React from "react";

export default function CourseHeader() {
  const menuItems = [
    "TRANG CHỦ", "NOTEJS", "JQUERY", "JAVACRIPT", "REACT",
    "PHP", "SQL", "HTML", "CSS", "PYTHON", "MYSQL", "C++"
  ];

  return (
    <header className="flex flex-wrap gap-2.5 items-center px-5 w-full leading-none text-white bg-white bg-opacity-10">
      <div className="flex gap-3 items-center self-stretch p-3 my-auto text-6xl uppercase whitespace-nowrap max-md:text-4xl">
        <h1 className="gap-2.5 self-stretch my-auto max-md:text-4xl">
          Distenda
        </h1>
      </div>
      <nav className="flex relative items-center self-stretch my-auto text-xl font-semibold text-center min-w-[240px]">
        <div className="flex absolute bottom-0 left-0 z-0 shrink-0 self-start bg-yellow-400 h-[60px] w-[166px]" />
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="flex z-0 gap-3 items-center self-stretch p-5 my-auto whitespace-nowrap"
            tabIndex={0}
          >
            <span className="gap-2.5 self-stretch my-auto">{item}</span>
          </button>
        ))}
      </nav>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/833b87ad9103783bd68118a90cdb33791b730945d620968fdfe741d8a47c7586?apiKey=1914b3001bed44e2a53adf842ab19f47&"
        alt="Company logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.34] w-[75px]"
      />
    </header>
  );
}