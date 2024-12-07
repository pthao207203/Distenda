import * as React from "react";

export default function CoursesInfo() {
  const courseDetails = {
    type: "Dài hạn",
    title: "Chuyên viên thiết kế đồ họa & web",
    instructor: "Xuyến Nguyễn",
    chapters: "10 chương",
    duration: "300 phút",
    progress: "100%"
  };

  return (
    <div className="flex z-10 flex-col px-16 py-7 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3 max-md:flex-col">
        <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto mr-0 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-3 justify-center items-center px-3 py-2.5 max-w-full text-xl font-medium leading-none bg-[#CFF500] border-2 border-black border-solid min-h-[40px] shadow-[-6px_6px_0px_rgba(255,255,255,1)] text-neutral-900 w-[127px]">
              <div className="gap-2.5 self-stretch my-auto">{courseDetails.type}</div>
            </div>
            <div className="flex flex-col mt-4 w-full text-white max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <h2 className="flex-1 shrink gap-2.5 py-3 w-full text-3xl font-bold max-md:max-w-full">
                  {courseDetails.title}
                </h2>
                <div className="flex flex-col items-start w-full text-xl font-medium leading-none max-md:max-w-full">
                  <InfoItem text={`Giảng viên: ${courseDetails.instructor}`} />
                  <InfoItem text={`Nội dung: ${courseDetails.chapters}`} />
                  <InfoItem text={`Thời lượng: ${courseDetails.duration}`} />
                  <InfoItem text={`Tiến độ: ${courseDetails.progress}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/439591aa7510483e01711ddaf1ee8eb64a8de40cb41d08592ddd471622c91cbb?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
            alt="Course preview image"
            className="object-contain grow w-full aspect-[2.04] max-md:mt-7 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

function InfoItem({ text }) {
  return (
    <div className="flex gap-3 items-center mt-4">
      <div className="gap-2.5 self-stretch my-auto">{text}</div>
    </div>
  );
}