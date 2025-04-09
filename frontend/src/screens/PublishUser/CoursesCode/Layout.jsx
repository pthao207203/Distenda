import React, { useState, useEffect } from "react";
import BreadcrumbNav from "./Nav";
import TaskContent from "./Content";
import CodeEditor from "./Editor";
import { useParams } from "react-router-dom";
import { exerciseController } from "../../../controllers/video.controller";
import Loading from "../../../components/Loading";

function CourseLayout() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const { ExerciseSlug } = useParams();
  console.log(ExerciseSlug)

  useEffect(() => {
    async function fetchData(exerciseSlug) {
      // console.log("vao")
      const result = await exerciseController(setLoading, exerciseSlug);
      // console.log(result);
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    if (ExerciseSlug) {
      fetchData(ExerciseSlug); // Gọi fetchData với CourseSlug
    }
  }, [ExerciseSlug]);

  if (loading) {
    return (
      <Loading />
    )
  }
  // console.log("exer => ", data)

  return (
    <div className="flex flex-col">
      <div className="flex relative flex-col py-0.5 w-full max-md:max-w-full">
        <BreadcrumbNav {...data} />
        <div className="flex overflow-hidden relative flex-wrap items-start mt-1 h-full">
          <TaskContent {...data} />
          <CodeEditor {...data} />
        </div>
      </div>
    </div>
  );
}

export default CourseLayout;