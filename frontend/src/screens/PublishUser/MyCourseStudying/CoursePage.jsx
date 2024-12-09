import React, { useState, useEffect } from "react";
import CourseCard from "../MyCoursePurchased/CourseCard";
import SearchBar from "../Course/SearchBar"; // Import SearchBar
import { coursesStudyingController } from "../../../controllers/course.controller";

function CoursePage() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await coursesStudyingController(setLoading);
      console.log(result)
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        Đang tải...
      </div>
    )
  }
  console.log("courses => ", data)

  return (
    <div className="flex flex-col w-full min-h-[800px]">

      {/* Nội dung chính */}
      <main>
        <div className="max-w-full min-h-[800px] flex flex-col items-center w-full px-5 pt-12 pb-20 bg-white bg-opacity-10 backdrop-blur-[10px]">
          {/* Thanh tìm kiếm */}
          <SearchBar />
          {/* Khu vực chứa các thẻ */}
          {data && data.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-[60px] mt-10 w-full">
              {data.map((course, index) => (
                <CourseCard key={index} {...course} className="" />
              ))}
            </div>
          )}
          {(!data || data.length === 0) && (
            <div className="flex text-white/30 text-4xl justify-self-center items-center min-h-[800px]">Không có khoá học nào</div>
          )}
        </div>
      </main>
    </div>
  );
}

export default CoursePage;
