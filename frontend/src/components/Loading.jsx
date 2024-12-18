import React from "react";
import MoonLoader from 'react-spinners/MoonLoader';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen max-w-full bg-white bg-opacity-10 backdrop-blur-[10px] pb-8">
      <div className="flex flex-col items-center">
        <MoonLoader color="#CFF500" size={80} />
        <p className="mt-4 text-xl text-[#CFF500]">Đang tải...</p>
      </div>
    </div>
  );
};

export default Loading;
