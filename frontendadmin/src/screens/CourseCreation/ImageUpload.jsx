import React from 'react';

function ImageUpload() {
  return (
    <div className="flex flex-col font-medium leading-none">
      <div className="flex flex-col min-h-[395px]">
        <label htmlFor="course-image" className="text-xl text-neutral-900">
          Ảnh minh họa
        </label>
        <div className="flex flex-col justify-center items-center px-20 py-32 mt-2 w-full bg-indigo-50 max-md:px-5 max-md:py-24">
          <div className="flex flex-col mb-0 max-w-full w-[294px] max-md:mb-2.5">
            <button
              type="button"
              onClick={() => document.getElementById('course-image').click()}
              className="flex gap-3 justify-center items-center self-center px-3 py-3 text-2xl text-white rounded-lg bg-[#6C8299]"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cd852f3ca24e03709de8ef8158dd80a190d0ca006fbc8c833a43fe6dfe5639b?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <span className="gap-2.5 self-stretch my-auto text-2xl">Chọn tệp</span>
            </button>
            <input
              type="file"
              id="course-image"
              accept="image/*"
              className="hidden"
              aria-label="Upload course image"
            />
            <div className="mt-3.5 text-xl text-neutral-900 text-opacity-50">
              Không có tệp nào được chọn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;