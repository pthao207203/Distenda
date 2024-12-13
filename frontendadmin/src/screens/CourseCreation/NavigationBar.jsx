import React from 'react';

function NavigationBar() {
  return (
    <div className="flex flex-wrap items-center px-5 w-full text-lg font-semibold leading-none bg-white text-neutral-900 max-md:max-w-full">
      <div className="flex gap-3 items-center self-stretch px-3 py-1 my-auto">
        <div className="gap-2.5 self-stretch my-auto">Khóa học</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0b66f3a95f905aedb5e0c3d61681feed7e6fc848b54e46dffcd6da2fbea8cf4?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
        />
      </div>
      <div className="flex gap-3 items-center self-stretch px-1 py-1.5 my-auto min-w-[240px]">
        <div className="gap-2.5 self-stretch my-auto">
          Thêm khóa học ngắn hạn
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;