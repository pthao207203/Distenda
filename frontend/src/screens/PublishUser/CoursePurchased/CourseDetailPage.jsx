import React, { useState, useEffect } from "react";
import CourseHeader from "./CourseHeader";
import CourseContent from "./CourseContent";
import { courseDetailController } from "../../../controllers/course.controller";
import Loading from "../../../components/Loading";
import { useParams } from "react-router-dom";
import Rating from "./Rating";


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
      <Loading />
    )
  }
  // console.log("course => ", data)

  return (
    <div className="flex overflow-hidden flex-col">
      <CourseHeader {...data} />
      <div className="flex z-10 flex-col mt-0 w-full bg-white bg-opacity-10 min-h-screen max-md:mt-0 max-md:max-w-full">
        <CourseContent {...data} />
        <Rating/>
        
      </div>
    </div>
  );
}