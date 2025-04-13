import React, {useState} from 'react';

const HistoryButton = ({ onClick }) => {
  return (
    <button onClick={ onClick } className="flex gap-3 justify-center items-center px-3 py-3 rounded-lg bg-[#F19F19] w-fit hover:bg-[#D3D7DC] transition-colors">
      <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d0691d3e7343fc6c0028f1faa5c59306b98586db03c35bcda1991ff364f4d53?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e"
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          alt="Icon"
        />
    </button>
  );
};

export default HistoryButton;
