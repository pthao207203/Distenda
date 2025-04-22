import React from 'react';

function ImageUpload({ uploadImageInputRef, uploadImagePreviewRef, handleImageChange, imageUrl }) {
  return (
    <div className="flex flex-col font-medium leading-none">
      <div className="flex flex-col min-h-[395px]">
        <label htmlFor="CoursePicture" className="text-xl text-neutral-900">
          Ảnh khoá học
        </label>
        <label htmlFor="image" className="relative">
          <img
            ref={uploadImagePreviewRef}
            loading="lazy"
            src={imageUrl}
            alt=""
            className="object-cover shrink-0 self-end aspect-[1.61] mt-2 w-full h-full rounded-lg border border-solid border-slate-500 border-opacity-80 border-none"
          />

          {/* Button chọn tệp nằm trên ảnh và ở giữa */}
          <div className="absolute inset-0 flex justify-center items-center">
            <button
              type="button"
              onClick={() => document.getElementById('CoursePicture').click()}
              className="flex gap-3 justify-center items-center px-3 py-3 text-2xl text-white rounded-lg bg-[#6C8299] z-10 hover:bg-[#6C8299]/50"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cd852f3ca24e03709de8ef8158dd80a190d0ca006fbc8c833a43fe6dfe5639b?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <span className="gap-2.5 self-stretch my-auto text-2xl">Chọn tệp</span>
              <input
                type="file"
                id="CoursePicture"
                accept="image/*"
                className="hidden"
                aria-label="Upload course image"
                ref={uploadImageInputRef}
                onChange={handleImageChange}
              />
            </button>
          </div>
        </label>

        {/* <div id="image" className="flex flex-col justify-center items-center px-20 py-32 mt-2 w-full max-md:px-5 max-md:py-24">
          <div className="flex flex-col mb-0 max-w-full w-[294px] max-md:mb-2.5">
            <input
              type="file"
              id="CoursePicture"
              accept="image/*"
              className="hidden"
              aria-label="Upload course image"
              ref={uploadImageInputRef}
              onChange={handleImageChange}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ImageUpload;