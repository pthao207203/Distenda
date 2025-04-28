import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import CourseTableHeader from "./components/CourseTableHeader";
import CourseTableRow from "./components/CourseTableRow";
import SearchBar from "../../layouts/private/SearchBar";
import ActionButton from "./components/ActionButton";
import { coursesController } from "../../controllers/course.controller";
import { useRole } from "../../layouts/AppContext";
import Loading from "../../components/Loading";
import HistoryButton from "../../components/HistoryButton";
import CourseHistory from "./components/CourseHistory";

function CourseList() {
  const [allCourses, setAllCourses] = useState([]);         // Dữ liệu gốc từ API
  const [filteredCourses, setFilteredCourses] = useState([]); // Dữ liệu sau khi lọc
  const [loading, setLoading] = useState(false);
  const { role } = useRole();

  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  // Gọi API 1 lần duy nhất khi load trang
  useEffect(() => {
    async function fetchData() {
      const result = await coursesController(setLoading);
      if (result) {
        setAllCourses(result);
        setFilteredCourses(result);   // Ban đầu hiển thị toàn bộ
      }
    }

    fetchData();
  }, []);

  // Hàm xử lý tìm kiếm realtime
  const handleSearch = (value) => {
    const keyword = value.toLowerCase();
  
    const filtered = allCourses.filter(course => {
      const courseName = course.CourseName?.toLowerCase() || "";
      const instructor = course.intructorFullName?.toLowerCase() || "";
      const price = (course.CoursePrice * ((100 - course.CourseDiscount) / 100)).toString();
      const profit = (course.CourseProfit * course.CourseBought).toString();
      const bought = course.CourseBought?.toString() || "";
  
      const statusText = course.CourseStatus === 1 ? "hoạt động" : "tạm dừng";
  
      return (
        courseName.includes(keyword) ||
        instructor.includes(keyword) ||
        price.includes(keyword) ||
        profit.includes(keyword) ||
        bought.includes(keyword) ||
        statusText.includes(keyword)
      );
    });
  
    setFilteredCourses(filtered);
  };
  

  const handleHistoryRequest = () => {
    setIsHistoryVisible(true);
  };

  const handleCloseHistoryRequest = () => {
    setIsHistoryVisible(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>Khóa học</title>
      </Helmet>
      <main className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <SearchBar onSearch={handleSearch} />
        
        {role?.role?.RolePermissions?.includes("course_view") && (
          <section className="flex flex-wrap gap-3 items-start self-end mt-3 text-2xl text-white max-md:max-w-full">
            <ActionButton text="Danh mục" />
            <ActionButton text="Thêm khóa học" />
            <HistoryButton onClick={handleHistoryRequest} />
          </section>
        )}

        <section className="flex flex-col pb-16 mt-3 w-full text-neutral-900 max-md:max-w-full">
          <div className="self-stretch text-right text-[#131313] text-xl font-medium leading-tight">
            Tổng số khóa học: {filteredCourses.length}
          </div>
          <CourseTableHeader />

          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <CourseTableRow key={index} {...course} />
            ))
          ) : (
            <p className="mt-4 text-center">Không tìm thấy khóa học nào.</p>
          )}
        </section>
      </main>

      {isHistoryVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 max-md:px-10 overflow-hidden">
          <CourseHistory onClose={handleCloseHistoryRequest} />
        </div>
      )}
    </>
  );
}

export default CourseList;
