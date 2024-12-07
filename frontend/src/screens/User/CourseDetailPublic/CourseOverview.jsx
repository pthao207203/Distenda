import React from 'react';
import parse from 'html-react-parser';


export default function CourseOverview(course) {
  const addSpacingToParagraphs = (html) => {
    if (typeof html !== "string") {
      return "Nội dung không khả dụng";
    }

    return parse(html, {
      replace: (domNode) => {
        // Kiểm tra nếu phần tử là thẻ <p>
        if (domNode.name === "p") {
          // Kiểm tra các phần tử con để đảm bảo mỗi phần tử là chuỗi hợp lệ
          const children = domNode.children?.map((child, index) => {
            if (typeof child === "string") {
              return child; // Nếu là chuỗi, trả về trực tiếp
            } else if (child?.name === "strong") {
              // Giữ nguyên thẻ <strong>
              return <strong key={index}>{child.children?.map(c => c.data).join("")}</strong>;
            } else if (child && typeof child.data === "string") {
              return child.data; // Nếu có thuộc tính `data`, trả về chuỗi
            } else {
              return ""; // Trả về chuỗi rỗng nếu không phải chuỗi hợp lệ
            }
          });

          return (
            <p style={{ marginTop: "1em", lineHeight: "1.8" }}>
              {children}
            </p>
          );
        }

        return null; // Trả về null nếu không phải thẻ <p>
      },
    });
  };
  return (
    <div className="flex overflow-hidden flex-col items-start px-[73px] pt-14 pb-9 w-full bg-[#131313] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3 justify-center items-center px-3 max-w-full text-xl font-medium leading-none bg-[#CFF500] border-2 border-black border-solid min-h-[40px] shadow-[-6px_6px_0px_rgba(255,255,255,1)] text-neutral-900  max-md:ml-2">
        <span className="gap-2.5 self-center my-auto">Ngắn hạn</span>
      </div>
      <div className="flex flex-col mt-4 md:w-[65%] max-w-full ">
        <div className="flex flex-col w-full text-white max-md:max-w-full">
          <h2 className="flex-1 shrink gap-2.5 py-2.5 pr-2.5 w-full text-3xl font-bold max-md:max-w-full">
            {course.CourseName}
          </h2>
          <div className="flex-1 shrink gap-1.5 self-stretch py-2.5 space-y-3 w-full leading-relaxed text-xl max-md:max-w-full">
            {course.CourseDescription && (
              <div className="font-medium text-xl max-md:max-w-full">
                {addSpacingToParagraphs(course.CourseDescription)}
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-7 items-center self-start mt-4">
          <div className="flex relative flex-col text-xl font-semibold text-amber-500 whitespace-nowrap aspect-[5.6] w-[140px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/9c7992bcbe164b8dad4f2629b8fc1688/fdf41e18-e903-41a0-8bca-c05fb507a9d7?apiKey=9c7992bcbe164b8dad4f2629b8fc1688&"
              alt="Rating background"
              className="object-contain absolute inset-0 size-full"
            />
            5.0
          </div>
          {/* <div className="flex gap-1.5 text-sm font-light text-white">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/9c7992bcbe164b8dad4f2629b8fc1688/f0bbf77da14dacd16945c1606101c97cc8e38d261a7db20d463c9e79447d709e?apiKey=9c7992bcbe164b8dad4f2629b8fc1688&"
              alt="Students icon"
              className="object-contain shrink-0 aspect-square"
            />
            <span>100 học viên</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}