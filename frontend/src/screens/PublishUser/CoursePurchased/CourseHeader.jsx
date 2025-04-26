import * as React from "react";

export default function CoursesInfo(course) {
  let lessons = [];

  // Kiểm tra xem course.lesson có tồn tại và là một đối tượng hay mảng
  if (Array.isArray(course.lesson)) {
    // Nếu là mảng, gán trực tiếp cho lessons
    lessons = course.lesson;
  } else if (course.lesson && typeof course.lesson === "object") {
    // Nếu là đối tượng, chuyển nó thành mảng các giá trị
    lessons = Object.values(course.lesson);
  }

  const courseDetails = {
    type: `${course.CoursePrice === 0 ? "Miễn phí" : "Pro"}`,
    title: `${course.CourseName}`,
    instructor: `${
      course.intructor ? course.intructor.AdminFullName : "Không có"
    }`,
    chapters: `${course.lesson ? lessons.length : "0"} chương`,
    duration: `${
      course.CourseDuration === 0
        ? "Không giới hạn"
        : course.CourseDuration + " tháng"
    }`,
    progress: `100%`,
  };

  return (
    <div className="flex z-10 flex-col px-40 py-16 w-full bg-neutral-900 max-lg:max-w-full max-lg:px-[20px]">
      <div className="flex max-lg:flex-col self-center w-full">
        <div className="flex flex-col flex-1 max-lg:ml-0 max-lg:w-full">
          <div className="flex flex-col self-stretch my-auto mr-0  w-full max-lg:mt-10 max-lg:max-w-full">
            <div className="flex gap-3 justify-center items-center px-3 py-2 max-w-full lg:text-[1.25rem] text-[16px] font-medium leading-none bg-[#CFF500] border-2 border-black border-solid min-h-[40px] shadow-[-6px_6px_0px_rgba(255,255,255,1)] text-neutral-900 w-[100px]">
              <div className="gap-2.5 self-stretch my-auto">
                {courseDetails.type}
              </div>
            </div>
            <div className="flex flex-col mt-4 max-lg:mt-[20px] w-full text-white max-lg:max-w-full ">
              <div className="flex flex-col w-full max-lg:max-w-full">
                <h2 className="flex-1 shrink gap-2.5 lg:pt-3 max-lg:pt-[16px] w-full lg:text-[1.875rem] text-[20px] font-bold max-lg:max-w-full">
                  {courseDetails.title}
                </h2>
                <div className="flex flex-col items-start w-full lg:text-[1.25rem] text-[16px] font-medium leading-[15px] max-lg:max-w-full max-lg:mb-[16px]">
                  <InfoItem text={`Giảng viên: ${courseDetails.instructor}`} />
                  <InfoItem text={`Nội dung: ${courseDetails.chapters}`} />
                  <InfoItem text={`Thời gian: ${courseDetails.duration}`} />
                  <InfoItem text={`Tiến độ: ${courseDetails.progress}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-lg:w-full self-left justify-center">
          <img
            loading="lazy"
            src={course.CoursePicture}
            alt={courseDetails.title}
            className="object-cover aspect-[1.64] h-[18.125rem] max-lg:w-full max-lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
}

function InfoItem({ text }) {
  return (
    <div className="flex gap-3 items-center lg:mt-4 max-lg:mt-[8px]">
      <div className="gap-2.5 self-stretch my-auto">{text}</div>
    </div>
  );
}
