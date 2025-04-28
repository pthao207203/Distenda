import React, { useState, useEffect } from "react";
import NavigationBar from "./Navigation";
import LessonList from "./LessonList";
import CodeEditor from "./CodeEditor";
import { useParams } from "react-router-dom";
import { videoController } from "../../../controllers/video.controller";
import {
  userMarkVideoCompletedController,
  getVideoStatusController,
} from "../../../controllers/user.controller";
import Loading from "../../../components/Loading";

function CourseLayout() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const { VideoSlug } = useParams();
  const [videoStatusList, setVideoStatusList] = useState({});

  useEffect(() => {
    async function fetchData(videoSlug) {
      const result = await videoController(setLoading, videoSlug);
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
        // fetchVideoStatuses(result.course._id);
      }
    }

    if (VideoSlug) {
      fetchData(VideoSlug);
    }
  }, [VideoSlug]);

  //  // Fetch trạng thái video của tất cả video trong course
  //  const fetchVideoStatuses = async (courseId) => {
  //   try {
  //     const videoStatuses = await getVideoStatusController(courseId); // Gọi API từ controller

  //     const updatedStatusList = {};

  //     // Lặp qua tất cả video và cập nhật trạng thái
  //     Object.keys(videoStatuses).forEach((videoId) => {
  //       updatedStatusList[videoId] = videoStatuses[videoId].videoStatus; // Cập nhật trạng thái video
  //     });

  //     setVideoStatusList(updatedStatusList); // Cập nhật trạng thái của các video
  //   } catch (error) {
  //     console.error("Error fetching video statuses:", error);
  //   }
  // };


  const markVideoAsCompleted = async (videoId) => {
    if (data) {
      // Gọi API để đánh dấu video đã hoàn thành
      const requestData = {
        courseId: data.course._id,
        videoId: videoId, 
      };
      console.log('Request Data:', requestData);
      try {
        const response = await userMarkVideoCompletedController(requestData);
        console.log('Response from API:', response);
        if (response) {
          setVideoStatusList((prevStatus) => ({
            ...prevStatus,
            [videoId]: 1, // Update video status as completed
          }));
        }
     } catch (error) {
        console.error("Error marking video as completed:", error);
     }
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col bg-neutral-900">
      <NavigationBar {...data} />
      <div className="flex flex-col w-full max-md:max-w-full h-full">
        <div className="flex overflow-hidden flex-wrap flex-1 gap-1.5 justify-center bg-white bg-opacity-10 size-full max-md:max-w-full">
          {data && data.course && (
            <>
              <div className="flex flex-col overflow-y-auto h-[calc(100vh-200px)] max-w-[28rem] lg:block">
                <LessonList
                  course={data.course}
                  videoKey={data._id}
                  videoStatusList={videoStatusList}
                  markVideoAsCompleted={markVideoAsCompleted}
                />
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
