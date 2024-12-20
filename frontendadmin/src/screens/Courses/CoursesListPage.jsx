import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import CourseTableHeader from "./components/CourseTableHeader";
import CourseTableRow from "./components/CourseTableRow";
import SearchBar from "../../layouts/private/SearchBar";
import ActionButton from "./components/ActionButton";
import { coursesController } from "../../controllers/course.controller";
import { useRole } from "../../layouts/AppContext"
import Loading from "../../components/Loading";

function CourseList() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const { role } = useRole();

  useEffect(() => {
    async function fetchData() {
      // console.log("vaof")
      const result = await coursesController(setLoading);
      // console.log(result)
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  console.log("Courses => ", data)
  const totalCourses = data?.length || 0; // Đảm bảo không lỗi nếu data undefined
  return (
    <>
      <Helmet>
        <title>Khóa học</title>
      </Helmet>
    <main className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <SearchBar />
      {role?.role?.RolePermissions?.includes("course_view") && (
        <section className="flex flex-wrap gap-3 items-start self-end mt-3 text-2xl text-white max-md:max-w-full">
          <ActionButton text="Danh mục" />
          <ActionButton text="Thêm khóa học" />
        </section>
      )}


      <section className="flex flex-col pb-16 mt-3 w-full text-neutral-900 max-md:max-w-full">
        <div className="self-stretch text-right text-[#131313] text-xl font-medium leading-tight">Tổng số khóa học: {totalCourses}</div>
        <CourseTableHeader />

        {data && data.length > 0 && data.map((course, index) => (
          <CourseTableRow key={index} {...course} />
        ))}
      </section>
    </main>
  </>
  );
}

export default CourseList;
