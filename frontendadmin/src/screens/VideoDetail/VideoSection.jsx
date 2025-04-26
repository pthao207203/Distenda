import * as React from "react";
import cloudinary from "cloudinary-video-player";
import { useRef, useEffect } from "react";

export function VideoSection({ video }) {
  return (
    <div className="flex flex-col mt-11 w-full max-md:mt-10 max-md:max-w-full h-[1000px]">
      <label className="text-xl font-medium leading-none text-neutral-900 pb-3 text-opacity-50 max-md:max-w-full">
        Video <span className="text-red-600">*</span>
      </label>

      {video?.VideoUrl && (
        <video
          controls
          width="100%"
          src={video.VideoUrl}
          className="rounded-xl"
        />
      )}
      {/* <div
        className="w-full h-full"
        dangerouslySetInnerHTML={{ __html: video?.VideoUrl }}
      ></div> */}
      {/* <div className="flex flex-col mt-2 w-full bg-[#EBF1F9] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2a3302df829ca14b40222377650598d8d5fbdf510977445d1164d142fe99acc?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
          alt="Course video content"
          className="object-contain z-10 w-full aspect-[1.77] max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col mt-2 max-w-full text-xl font-medium leading-none w-[569px]">
        <button className="flex gap-3 justify-center items-center self-start px-3 py-3 text-white rounded-lg bg-[#6C8299] min-h-[46px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e6d8440f1f20af9db42a97a51642268ab1311088ced96ec49dc9a2a9191ba40?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <span className="gap-2.5 self-stretch my-auto">Chọn tệp</span>
        </button>
        <div className="mt-2 text-slate-500">video.http.com</div>
      </div> */}
    </div>
  );
}
