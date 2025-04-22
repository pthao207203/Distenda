import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
//import SideBar from "./SideBar"; // Import Sidebar
import SearchBar from "./SearchBar"; // Import SearchBar
import CourseCard from "./CourseCard"; // Import CourseCard
import { coursesController } from "../../../controllers/course.controller";
//import TestimonialSection from "./TestimonialSection"; // Import TestimonialSection
//import TeacherSection from "./TeacherSection"; // Import TeacherSection
import Banner from "./Banner";
import Loading from "../../../components/Loading";

function CoursePage() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
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
  console.log("courses => ", data);

  return (
    <>
      <Helmet>
        <title>Khóa học</title>
      </Helmet>
      <div className="flex flex-col w-full min-h-screen">
        {/* Sidebar */}
        {/*<SideBar />*/}

        {/* Nội dung chính */}
        <main>
          <div className="max-w-full flex flex-col items-center w-full px-5 pt-12 pb-20 bg-white bg-opacity-10 backdrop-blur-[10px]">
            {/* Thanh tìm kiếm */}
            <SearchBar />
            <Banner />
            {/* Khu vực chứa các thẻ */}
            {data && data.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-[40px] max-sm:gap-[10px] max-md:gap-[20px] mt-10 w-full">
                {data.map((course, index) => (
                  <CourseCard key={index} {...course} className="" />
                ))}
              </div>
            )}
            {(!data || data.length === 0) && (
              <div className="flex text-white/30 text-[2.25rem] justify-self-center items-center min-h-[800px]">
                Không có khoá học nào
              </div>
            )}
            {/* Thêm TestimonialSection và TeacherSection 
            <TestimonialSection />
            <TeacherSection />*/}
          </div>
        </main>
      </div>
    </>
  );
}

export default CoursePage;
