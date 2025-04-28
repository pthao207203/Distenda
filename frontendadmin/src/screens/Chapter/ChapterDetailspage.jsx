import React, { useState, useEffect } from "react";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";
import LessonRow from "./components/LessonRow";
import TableHeader from "./components/TableHeader";
import StatusBadge from "./components/StatusBadge";
import EditButton from "./components/EditButton";
import DeleteButton from "./components/DeleteButton";
import uploadImage from "../../components/UploadImage";
import { lessonDetailController } from "../../controllers/lesson.controller";

import Loading from "../../components/Loading";
import ChapterDetailHistory from "./components/ChapterDetailHistory";

// const lessons = [
//   { id: 1, name: "HTML cơ bản", lastUpdated: "29/11/2024 23:13" },
//   { id: 2, name: "HTML cơ bản", lastUpdated: "29/11/2024 23:13" },
//   { id: 3, name: "HTML cơ bản", lastUpdated: "29/11/2024 23:13" },
//   { id: 4, name: "HTML cơ bản", lastUpdated: "29/11/2024 23:13" },
// ];

function CourseLesson() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const { LessonID } = useParams();
  const navigate = useNavigate();

  const onClickExercise = () => {
    navigate(`/courses/lesson/exercise/create/${data._id}`);
  };

  const onClickVideo = () => {
    navigate(`/courses/lesson/video/create/${data._id}`);
  };

  useEffect(() => {
    async function fetchData() {
      // console.log("vaof")
      setLoading(true);
      const result = await lessonDetailController(setLoading, LessonID);
      setLoading(false);
      // console.log(result)
      if (result) {
        setData(result);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }
  console.log("coursedetail => ", data);

  // Hàm cập nhật dữ liệu khi người dùng nhập vào
  const handleChange = (e) => {
    // Kiểm tra nếu e.target tồn tại (dành cho input và select)
    if (e?.target) {
      const { id, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [id]: value, // Cập nhật theo id của input
      }));
    } else if (e) {
      // Nếu không có e.target (TinyMCE)
      setData((prevData) => ({
        ...prevData,
        [e.id]: e.getContent(), // Lấy nội dung từ TinyMCE và cập nhật theo id
      }));
    }
  };

  const lessonChange = (videoID, event) => {
    const newLessonName = event.target.value; // Lấy giá trị từ input
    setData((prevData) => {
      const updatedLessons = prevData.video.map((chapter) =>
        chapter._id === videoID
          ? { ...chapter, VideoName: newLessonName, change: 1 }
          : chapter
      );
      return { ...prevData, video: updatedLessons };
    });
  };

  const handleHistoryRequest = () => {
    setIsHistoryVisible(true);
  };

  const handleCloseHistoryRequest = () => {
    setIsHistoryVisible(false);
  };

  return (
    <>
      <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        {/* <DeleteButton data={data} /> */}
        <div className="flex z-0 flex-col w-full max-md:max-w-full">
          <div className="text-xl font-semibold text-neutral-900 max-md:max-w-full">
            Thông tin cơ bản
          </div>
          <div className="flex flex-wrap gap-10 items-start mt-6 w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-10 font-semibold min-w-[240px] w-full">
              <div className="flex flex-col justify-center max-md:max-w-full min-w-[240px] w-[400px]">
                <label
                  htmlFor="LessonName"
                  className="text-neutral-900 text-opacity-50 max-md:max-w-full"
                >
                  Tên chương học
                </label>
                <span className="p-2.5 mt-2 rounded-lg text-neutral-900">
                  {data.LessonName}
                </span>
                {/* <div className="flex relative gap-2.5 items-start px-2.5 py-3 mt-2 w-full rounded-lg border border-solid border-slate-500 border-opacity-80 min-h-[63px] text-neutral-900 max-md:max-w-full">
                  <input
                    type="text"
                    id="LessonName"
                    value={data.LessonName}
                    onChange={handleChange} // Thêm xử lý onChange
                    className="z-0 flex-1 shrink my-auto basis-0 max-md:max-w-full bg-transparent border-none outline-none"
                  />
                </div> */}
              </div>
              <div className="flex flex-col justify-center max-md:max-w-full min-w-[240px] w-[400px]">
                <div className="flex gap-3 items-center">
                  <div className="text-lg font-semibold text-neutral-900 text-opacity-50">
                    Lần cuối cập nhật
                  </div>
                  <button
                    className="flex gap-3 justify-center items-center"
                    onClick={handleHistoryRequest}
                  >
                    <img
                      loading="lazy"
                      src="/icons/Show.svg"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square filter-[#6c8299] sepia-60 saturate-200 hue-rotate-190 "
                      alt="Icon"
                    />
                  </button>
                </div>
                <span className="p-2.5 mt-2 rounded-lg text-neutral-900">
                  {moment(
                    data?.editedBy?.[data.editedBy?.length - 1]?.editedAt ||
                      data?.createdAt
                  ).format("DD/MM/YYYY")}
                </span>
              </div>
            </div>
            {/* <StatusBadge /> */}
          </div>
        </div>
        <div className="flex z-0 flex-wrap gap-6 items-center mt-10 w-full text-xl max-md:max-w-full">
          <div className="self-stretch my-auto font-semibold text-neutral-900">
            Bài tập
          </div>
          <EditButton onClick={onClickExercise} />
        </div>
        <div className="flex z-0 flex-col mt-10 w-full text-xl text-neutral-900 max-md:max-w-full">
          <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
            <div className="font-semibold">Danh sách bài học</div>
            <div className="flex-1 shrink font-medium leading-none text-right basis-0 max-md:max-w-full">
              Tong so bai hoc: {data?.video?.length}
            </div>
          </div>
          <div className="flex flex-col pb-16 mt-6 w-full font-medium leading-none max-md:max-w-full">
            <TableHeader onClickVideo={onClickVideo} />
            {data?.video?.length > 0 &&
              data.video.map((video, index) => (
                <LessonRow
                  setLoading={setLoading}
                  key={index}
                  video={video}
                  lessonChange={lessonChange}
                />
              ))}
          </div>
        </div>
      </div>
      {isHistoryVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 max-md:px-10 overflow-hidden">
          <ChapterDetailHistory onClose={handleCloseHistoryRequest} />
        </div>
      )}
    </>
  );
}

export default CourseLesson;
