import React from 'react';

function Header() {
  return (
    <div className="flex flex-wrap gap-6 items-center px-10 w-full text-6xl leading-none uppercase whitespace-nowrap bg-[#EBF1F9] text-[#14375F] max-md:px-5 max-md:max-w-full max-md:text-4xl">
      <div className="flex flex-1 shrink gap-3 items-center self-stretch p-3 my-auto basis-0 min-w-[240px] max-md:max-w-full max-md:text-4xl">
        <div className="gap-2.5 self-stretch my-auto max-md:text-4xl">
          Distenda
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/caeb0270d74bd6d5eef317a6ae682bbde41667e85b1d33453328ea9668bfd276?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.34] w-[75px]"
      />
    </div>
  );
}

export default Header;