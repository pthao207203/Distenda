import React from "react";
import CourseRow from "./CourseRow";

const LinkedCourses = () => {
  // Sample course data
  const courses = [
    {
      category: "HTML",
      name: "HTML cơ bản",
      sold: "23",
      price: "1.000.000",
      profit: "23.000.000",
      status: "active",
    },
    {
      category: "HTML",
      name: "HTML cơ bản",
      sold: "23",
      price: "1.000.000",
      profit: "23.000.000",
      status: "paused",
    },
    {
      category: "HTML",
      name: "HTML cơ bản",
      sold: "23",
      price: "1.000.000",
      profit: "23.000.000",
      status: "active",
    },
  ];

  return (
    <section className="mt-10 w-full text-xl max-md:max-w-full">
      <div className="flex flex-wrap gap-6 items-end w-full max-md:max-w-full">
        <h3 className="flex-1 shrink font-semibold basis-[60px] text-neutral-900 max-md:max-w-full">
          Khóa học liên kết: 3
        </h3>
        <button className="flex gap-3 justify-center items-center px-8 py-3 font-medium leading-none text-white rounded-lg bg-[#6C8299] min-h-[46px] min-w-60 max-md:px-5">
          <span className="flex shrink-0 self-stretch my-auto w-6 h-6" />
          <span className="gap-2.5 self-stretch my-auto">Thêm khóa học</span>
        </button>
      </div>

      <div className="pb-16 mt-6 w-full font-medium leading-none text-neutral-900 max-md:max-w-full">
        <TableHeader />

        {courses.map((course, index) => (
          <CourseRow key={index} course={course} />
        ))}
      </div>
    </section>
  );
};

const TableHeader = () => {
  return (
    <div className="flex overflow-hidden mt-3 flex-wrap w-full rounded-t-3xl bg-[#6C8299] min-h-[70px] max-md:max-w-full">
      {/* Column: Category */}
      <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3 bg-indigo-50">
        <div className="text-[#131313] text-center text-xl font-medium truncate">Danh mục</div>
      </div>

      {/* Column: Name */}
      <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3">
        <div className="text-[#fff] text-center text-xl font-medium truncate">Tên khóa</div>
      </div>

      {/* Column: Sold */}
      <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3 bg-indigo-50">
        <div className="text-[#131313] text-center text-xl font-medium truncate">Đã bán</div>
      </div>

      {/* Column: Price */}
      <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3">
        <div className="text-[#fff] text-center text-xl font-medium truncate">Giá</div>
      </div>

      {/* Column: Profit */}
      <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3 bg-indigo-50">
        <div className="text-[#131313] text-center text-xl font-medium truncate">Lợi nhuận</div>
      </div>

      {/* Column: Status */}
      <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3">
        <div className="text-[#fff] text-center text-xl font-medium truncate">Trạng thái</div>
      </div>
    </div>
  );
};

const TableHeaderCell = ({ label, bgColor, textColor }) => {
  return (
    <div
      className={`flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full ${bgColor} ${textColor} basis-0`}
    >
      <span className="gap-2.5 self-stretch my-auto">{label}</span>
    </div>
  );
};

export default LinkedCourses;
