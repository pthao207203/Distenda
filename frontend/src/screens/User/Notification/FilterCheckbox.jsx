import React from 'react';

function FilterCheckbox({ label }) {
  return (
    <div className="flex overflow-hidden gap-[8px] items-center p-[4px]" style={{ fontFamily: 'Montserrat' }}>
      <input
        type="checkbox"
        id={label}
        className="flex self-stretch py-0.5 my-auto rounded border-2 border-gray-300 border-solid min-h-[20px] w-[20px] h-[20px] gap-[10px] items-start"
        style={{
          padding: '2px',                  // Padding 2px
          alignItems: 'flex-start',         // Căn chỉnh các phần tử con ở đầu
          backgroundColor: 'transparent',   // Loại bỏ màu nền
        }}
        aria-label={label}
      />
      <label htmlFor={label} className="self-stretch my-auto">{label}</label>
    </div>
  );
}

export default FilterCheckbox;
