import React from "react";
import MoonLoader from 'react-spinners/MoonLoader';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pb-8">
      <div className="flex flex-col items-center">
        <MoonLoader color="#6c8299" size={80} />
        <p className="mt-4 text-xl text-gray-700">Đang tải...</p>
      </div>
    </div>
  );
};

export default Loading;
