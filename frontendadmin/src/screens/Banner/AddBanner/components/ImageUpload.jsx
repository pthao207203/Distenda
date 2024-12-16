import * as React from "react";

function ImageUpload({ label, uploadIcon }) {
  return (
    <div className="flex flex-col mt-10 w-full max-md:max-w-full">
      <label className="text-neutral-900 text-opacity-50 max-md:max-w-full">
        {label}
      </label>
      <div className="flex mt-2 w-full bg-[#EBF1F9] min-h-[217px] max-md:max-w-full" />
      <div className="flex flex-col mt-2 max-w-full w-[569px]">
        <button
          type="button"
          className="flex gap-3 justify-center items-center self-start px-3 py-3 text-white rounded-lg bg-[#6C8299] min-h-[46px]"
          tabIndex={0}
        >
          <img
            loading="lazy"
            src={uploadIcon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <div className="gap-2.5 self-stretch my-auto">Chọn tệp</div>
        </button>
        <div className="mt-2 text-slate-500">Không có tệp nào được chọn.</div>
      </div>
    </div>
  );
}

export default ImageUpload;