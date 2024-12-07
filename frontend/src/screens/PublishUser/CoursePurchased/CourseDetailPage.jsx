import React, { useState, useEffect } from "react";
import CourseHeader from "./CourseHeader";
import CourseContent from "./CourseContent";
import { courseDetailController } from "../../../controllers/course.controller";

import { useParams } from "react-router-dom";

export default function CourseDetailPage() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const { CourseSlug } = useParams();

  useEffect(() => {
    async function fetchData(courseSlug) {
      // console.log("vao")
      const result = await courseDetailController(setLoading, courseSlug);
      // console.log(result);
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    if (CourseSlug) {
      fetchData(CourseSlug); // Gọi fetchData với CourseSlug
    }
  }, [CourseSlug]);

  if (loading) {
    return (
      <div>
        Đang tải...
      </div>
    )
  }
  console.log("course => ", data)

  return (
    <div className="flex overflow-hidden flex-col">
      <CourseHeader {...data} />
      <div className="flex z-10 flex-col mt-0 w-full bg-white bg-opacity-10 min-h-screen max-md:mt-0 max-md:max-w-full">
        <CourseContent {...data} />
      </div>
    </div>
  );
}