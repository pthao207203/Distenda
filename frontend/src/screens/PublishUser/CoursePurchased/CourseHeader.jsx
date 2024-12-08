import * as React from "react";

export default function CoursesInfo(course) {
  let lessons = [];

  // Kiểm tra xem course.lesson có tồn tại và là một đối tượng hay mảng
  if (Array.isArray(course.lesson)) {
    // Nếu là mảng, gán trực tiếp cho lessons
    lessons = course.lesson;
  } else if (course.lesson && typeof course.lesson === 'object') {
    // Nếu là đối tượng, chuyển nó thành mảng các giá trị
    lessons = Object.values(course.lesson);
  }

  const courseDetails = {
    type: "Ngắn hạn",
    title: `${course.CourseName}`,
    instructor: `${course.intructor ? course.intructor.AdminFullName : "Không có"}`,
    chapters: `${course.lesson ? lessons.length : "0"} chương`,
    duration: `${course.CourseDuration} tháng`,
    progress: `100%`
  };

  return (
    <div className="flex z-10 flex-col px-16 py-7 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3 max-md:flex-col">
        <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto mr-0  w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-3 justify-center items-center px-3 py-2.5 max-w-full text-xl font-medium leading-none bg-[#CFF500] border-2 border-black border-solid min-h-[40px] shadow-[-6px_6px_0px_rgba(255,255,255,1)] text-neutral-900 w-[150px]">
              <div className="gap-2.5 self-stretch my-auto">{courseDetails.type}</div>
            </div>
            <div className="flex flex-col mt-4 w-full text-white max-md:max-w-full ">
              <div className="flex flex-col w-full max-md:max-w-full">
                <h2 className="flex-1 shrink gap-2.5 pt-3 w-full text-4xl font-bold max-md:max-w-full">
                  {courseDetails.title}
                </h2>
                <div className="flex flex-col items-start w-full text-xl font-medium leading-[15px] max-md:max-w-full">
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
            src={course.CoursePicture}
            alt={courseDetails.title}
            className="object-contain grow aspect-[2.04] w-[720px] h-[350px] max-md:mt-7 max-md:max-w-full"
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