import * as React from "react";
import CourseTableHeader from "./components/CourseTableHeader";
import CourseTableRow from "./components/CourseTableRow";
import SearchBar from "../../layouts/private/SearchBar";
import ActionButton from "./components/ActionButton";
import SideBar from "../../layouts/private/SideBar";

const courseData = [
  {
    id: "HTML2025",
    name: "HTML cơ bản",
    sold: "23",
    price: "1.000.000",
    profit: "23.000.000",
    status: "active"
  },
  {
    id: "HTML2024",
    name: "HTML cơ bản",
    sold: "23",
    price: "23.000.000", 
    profit: "1.000.000",
    status: "inactive"
  }
];

function CourseList() {
  return (
    <main className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <SearchBar />
      <section className="flex flex-wrap gap-3 items-start self-end mt-3 text-3xl text-white max-md:max-w-full">
        <ActionButton text="Thêm phân loại" />
        <ActionButton text="Thêm khóa học" />
      </section>

      <section className="flex flex-col pb-16 mt-6 w-full text-neutral-900 max-md:max-w-full">
        <CourseTableHeader />
        
        {Array(8).fill(courseData).flat().map((course, index) => (
          <CourseTableRow key={index} {...course} />
        ))}
      </section>
    </main>
  );
}

export default CourseList;