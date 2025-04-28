import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import SideBar from "./SideBar"; // Import Sidebar
import SearchBar from "../Course/SearchBar"; // Import SearchBar
import CourseCard from "../Course/CourseCard"; // Import CourseCard
import { categoryController } from "../../../controllers/category.controller";
//import TestimonialSection from "./TestimonialSection"; // Import TestimonialSection
//import TeacherSection from "./TeacherSection"; // Import TeacherSection
import Banner from "../Course/Banner";
import Loading from "../../../components/Loading";

function CategoryPage() {
  const [allCourses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const [loading, setLoading] = useState(false);

  const { CategorySlug } = useParams();

  useEffect(() => {
    async function fetchData(categorySlug) {
      const result = await categoryController(setLoading, categorySlug);
      if (result) {
        setAllCourses(result);    // Dữ liệu gốc
        setFilteredCourses(result);  // Ban đầu hiển thị toàn bộ
      }
    }

    if (CategorySlug) {
      fetchData(CategorySlug);
    }
  }, [CategorySlug]);

  const handleSearch = (keyword) => {
    const lowerKeyword = keyword.toLowerCase();
    const filtered = allCourses.filter(course =>
      course.CourseName.toLowerCase().includes(lowerKeyword)
    );
    setFilteredCourses(filtered);
  };

  if (loading) {
    return (
      <Loading />
    )
  }
  // console.log("courses => ", data)

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Nội dung chính */}
      <main>
        <div className="max-w-full flex flex-col items-center w-full px-5 pt-12 pb-20 bg-white bg-opacity-10 backdrop-blur-[10px]">
          {/* Thanh tìm kiếm */}
          <SearchBar onSearch={handleSearch} />
          <Banner />

          {/* Khu vực chứa các thẻ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] mt-10 w-full">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard key={course._id} {...course} />
              ))
            ) : (
              <div className="text-white">Không tìm thấy khóa học nào</div>
            )}
          </div>




          {/* Thêm TestimonialSection và TeacherSection 
          <TestimonialSection />
          <TeacherSection />*/}
        </div>
      </main>
    </div>
  );
}

export default CategoryPage;
