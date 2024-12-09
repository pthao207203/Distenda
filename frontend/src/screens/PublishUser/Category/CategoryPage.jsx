import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import SideBar from "./SideBar"; // Import Sidebar
import SearchBar from "../Course/SearchBar"; // Import SearchBar
import CourseCard from "../Course/CourseCard"; // Import CourseCard
import { categoryController } from "../../../controllers/category.controller";
//import TestimonialSection from "./TestimonialSection"; // Import TestimonialSection
//import TeacherSection from "./TeacherSection"; // Import TeacherSection

function CategoryPage() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const { CategorySlug } = useParams();

  useEffect(() => {
    async function fetchData(categorySlug) {
      const result = await categoryController(setLoading, categorySlug);
      // console.log(result);
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    if (CategorySlug) {
      fetchData(CategorySlug); // Gọi fetchData với CategorySlug
    }
  }, [CategorySlug]);


  if (loading) {
    return (
      <div>
        Đang tải...
      </div>
    )
  }
  // console.log("courses => ", data)

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Sidebar */}
      {/*<SideBar />*/}

      {/* Nội dung chính */}
      <main>
        <div className="max-w-full flex flex-col items-center w-full px-5 pt-12 pb-20 bg-white bg-opacity-10 backdrop-blur-[10px]">
          {/* Thanh tìm kiếm */}
          <SearchBar />
          <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mt-5 bg-white min-h-[265px]">
            <div className="col-span-full w-full h-full" />
          </div>

          {/* Khu vực chứa các thẻ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-[24px] mt-10 w-full">
            {data && data.length > 0 && data.map((course) => (
              <CourseCard {...course} className="" />
            ))}
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
