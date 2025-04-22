import React from "react";
import { Link } from "react-router-dom";

// const courseData = [
//   {
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/461185e564abbcabe8a565059033a7552c836cf7cb34770a13288b29d066bd97?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
//     title: "Chuyên viên thiết kế đồ họa & web",
//     duration: "120 tiếng",
//     price: "10.000.000"
//   },
//   {
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c651f8125d452ea0ce349f8384ba92e10e9e5bef8132e1ed0c250cedc6db7aad?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
//     title: "Data Analytics Certificate",
//     duration: "120 tiếng",
//     price: "10.000.000"
//   },
//   {
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/67414f9ed8f8cc3493bc4c1224dcb669d2f25a151de0cbc054bcac953e0fc938?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
//     title: "Ứng dụng CNTT cơ bản",
//     duration: "120 tiếng",
//     price: "10.000.000"
//   },
//   {
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a2201ab1d3aaacd3deca64ad983d89b0e4fdf05fd7343080effcb0fcae1cdbb?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
//     title: "Kỹ thuật viên Thiết kế Hệ thống nhận dạng thương hiệu",
//     duration: "120 tiếng",
//     price: "10.000.000"
//   },
//   {
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/aaa36daa023884cf26fc4cea6c317cf3450d2e378b07667aa8deb23f7a382bf8?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
//     title: "Thiết kế Giao diện Website toàn phần (Layout UX/UI với Figma + HTML, CSS, JQuery)",
//     duration: "120 tiếng",
//     price: "10.000.000"
//   },
//   {
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/80a292b824d8123307dceca7e5c4b6fce18ef4410b70cf756b94dd1afec8a209?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
//     title: "Trực quan hóa dữ liệu - Data Visualization",
//     duration: "120 tiếng",
//     price: "10.000.000"
//   }
// ];

function CourseCard(course) {
  return (
    <div className="flex flex-col md:flex-row gap-[24px] justify-center items-center self-stretch px-[16px] py-[16px] bg-white bg-opacity-10 backdrop-blur-[10px]">
      <img
        loading="lazy"
        src={course.CoursePicture}
        alt={course.CourseName}
        className="object-cover shrink-0 aspect-[1.14] h-[8rem] max-lg:h-[128px]"
      />
      <div className="flex flex-col flex-1 self-stretch basis-0 min-w-0">
        <h3 className="flex items-start text-[1.75rem] max-lg:text-[20px] font-semibold leading-8 max-lg:leading-[28px] text-white h-[80px] lg:h-[6.25rem]">
          <div className="line-clamp-2">{course.CourseName}</div>
        </h3>
        <div className="flex flex-col items-start w-full font-medium leading-none">
          <p className="flex mb-[12px] items-center text-[1.25rem] max-lg:text-[18px] font-medium text-white">
            Thời gian: {course.CourseDuration} tiếng
          </p>
          <p className="flex items-center text-[2rem] max-lg:text-[18px] text-[#CFF500] whitespace-nowrap">
            {course.CoursePrice === 0
              ? "Miễn phí"
              : course.CoursePrice.toLocaleString("vi-VN")}
          </p>
        </div>
      </div>
    </div>
  );
}

function CourseSection(courseData) {
  const courses = courseData ? Object.values(courseData.courseData) : [];
  return (
    <section className="max-md:max-w-full justify-center ovef">
      <div className="text-left mb-[16px]">
        <h2 className="text-left px-[12px] py-[20px] mb-[24px] text-[1.25rem] max-lg:text-[18px] font-medium leading-none text-white max-w-[1333px] max-md:max-w-full">
          Đề xuất
        </h2>
      </div>
      <div className="container max-md:container-fluid">
        <div className="row justify-content-center mb-[55px] mx-[50px]">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[50px]">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
          {/* Nút Xem tất cả nằm ở giữa */}
          <div className="flex justify-center mt-[50px]">
            <Link
              to="/courses"
              className="flex justify-center items-center w-full h-[3.75rem] max-lg:h-[50px] mb-[16px] text-[1.25rem] max-lg:text-[16px] font-semibold leading-none text-black bg-[#CFF500]"
            >
              Xem tất cả
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseSection;
