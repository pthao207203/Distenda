import * as React from "react";
import TableHeader from "./TableHeader";
import CourseTableRow from "./CourseTableRow";

const courseData = [
  {
    id: "HTML2025",
    name: "HTML cơ bản",
    sold: "23",
    price: "1.000.000",
    profit: "23.000.000",
    status: "Hoạt động"
  },
  {
    id: "HTML2025",
    name: "HTML cơ bản", 
    sold: "23",
    price: "1.000.000",
    profit: "23.000.000",
    status: "Hoạt động"
  },
  {
    id: "HTML2025",
    name: "HTML cơ bản",
    sold: "23", 
    price: "1.000.000",
    profit: "23.000.000",
    status: "Hoạt động"
  }
];

function CourseTable() {
  return (
    <section className="flex flex-col py-16 w-full text-xl text-neutral-900 max-md:max-w-full">
      <TableHeader />
      {courseData.map((course, index) => (
        <CourseTableRow key={index} {...course} />
      ))}
    </section>
  );
}

export default CourseTable;