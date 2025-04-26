import React, { useState, useEffect } from "react";
import NavigationBar from "./Navigation";
import LessonList from "./LessonList";
import CodeEditor from "./CodeEditor";
import { useParams } from "react-router-dom";
import { videoController } from "../../../controllers/video.controller";
import Loading from "../../../components/Loading";

function CourseLayout() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const { VideoSlug } = useParams();
  // console.log(VideoSlug)

  useEffect(() => {
    async function fetchData(videoSlug) {
      // console.log("vao")
      const result = await videoController(setLoading, videoSlug);
      // console.log(result);
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    if (VideoSlug) {
      fetchData(VideoSlug); // Gọi fetchData với CourseSlug
    }
  }, [VideoSlug]);

  if (loading) {
    return <Loading />;
  }
  // console.log("video => ", data)

  return (
    <div className="flex flex-col bg-neutral-900">
      <NavigationBar {...data} />
      <div className="flex flex-col w-full max-md:max-w-full h-full">
        <div className="flex overflow-hidden flex-wrap flex-1 gap-1.5 justify-center bg-white bg-opacity-10 size-full max-md:max-w-full">
          {data && data.course && (
            <>
              <div className="flex flex-col overflow-y-auto h-[calc(100vh-200px)] w-[220px] hidden lg:block">
                <LessonList {...data} />
              </div>
              <CodeEditor {...data} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseLayout;
