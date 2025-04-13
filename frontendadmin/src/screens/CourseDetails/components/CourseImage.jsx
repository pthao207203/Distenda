import * as React from "react";
import moment from "moment";

export function CourseImage({
  data,
  imageUrl,
  uploadImageInputRef,
  uploadImagePreviewRef,
  handleImageChange,
  handleHistoryRequest,
}) {
  // console.log("data", data)
  return (
    <div className="flex flex-wrap gap-4 mt-10 w-full max-md:max-w-full">
      <img
        ref={uploadImagePreviewRef}
        loading="lazy"
        src={imageUrl}
        alt={data.CourseName}
        className="object-contain shrink-0 self-end aspect-[1.61] min-w-[240px] w-[316px]"
      />
      <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-wrap flex-1 gap-8 items-center size-full max-md:max-w-full">
          <DateInfo
            label="Ngày đăng"
            date={moment(data?.createdAt).format("DD/MM/YYYY")}
          />
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[270px]">
            <div className="flex gap-3 items-center">
              <div className="text-lg font-semibold text-neutral-900 text-opacity-50">
                Lần cuối cập nhật
              </div>
              <button className="flex gap-3 justify-center items-center" onClick ={handleHistoryRequest}>
                <img
                  loading="lazy"
                  src="/icons/Show.svg"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square filter-[#6c8299] sepia-60 saturate-200 hue-rotate-190 "
                  alt="Icon"
                />
              </button>
            </div>
            <div className="mt-4 text-xl font-medium text-neutral-900">
              {moment(
                data?.editedBy?.[data.editedBy?.length - 1]?.editedAt ||
                  data?.createdAt
              ).format("DD/MM/YYYY")}
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 max-w-full text-xl font-medium leading-none w-[569px]">
          <button>
            <label
              htmlFor="CoursePicture"
              className="flex gap-3 justify-center items-center self-start px-3 py-3 text-white rounded-lg bg-[#6C8299] min-h-[46px] w-[166px]"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b516c63e31267ce6e114c8d3b4292335012bee5e99d5deb37cc823ac993268f?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              Chọn tệp
            </label>
            <input
              type="file"
              className="gap-2.5 self-stretch my-auto form-control-file hidden" // Ẩn input file
              id="CoursePicture"
              name="CoursePicture"
              accept="image/*"
              ref={uploadImageInputRef}
              onChange={handleImageChange}
            />
          </button>
          {/* <div className="mt-2 text-slate-500 max-md:max-w-full">
            htmljpeg.com.sdhgsg.ie104
          </div> */}
        </div>
      </div>
    </div>
  );
}

function DateInfo({ label, date }) {
  return (
    <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[270px]">
      <div className="text-lg font-semibold text-neutral-900 text-opacity-50">
        {label}
      </div>
      <div className="mt-4 text-xl font-medium text-neutral-900">{date}</div>
    </div>
  );
}
