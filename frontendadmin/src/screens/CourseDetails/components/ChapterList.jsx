import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import PopUp from "./PopUp"; // Component popup

export function ChapterList({ data, lessonChange }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // const chapters = [
  //   {
  //     id: 1,
  //     title: "Tổng quan về HTML",
  //     lastUpdate: "29/11/2024 23:13",
  //   },
  //   {
  //     id: 2,
  //     title: "HTML cơ bản",
  //     lastUpdate: "29/11/2024 23:13",
  //   },
  // ];

  const handleAddCategoryClick = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div className="flex flex-col mt-10 w-full text-xl text-neutral-900 max-md:max-w-full">
      {/* Header */}
      <div className="flex flex-wrap gap-6 w-full max-md:max-w-full">
        <div className="self-start font-semibold">Danh sách chương</div>
        <div className="flex-1 shrink font-medium leading-none text-right basis-0 max-md:max-w-full">
          Tổng số chương: {data?.lesson?.length || "0"}
        </div>
      </div>

      {/* Table */}
      <div className="flex flex-col pb-16 mt-6 w-full font-medium leading-none max-md:max-w-full">
        <ChapterHeader onAddCategoryClick={handleAddCategoryClick} />
        {data?.lesson?.length > 0 &&
          data.lesson.map((chapter, index) => (
            <ChapterRow
              key={index}
              id={index}
              lesson={chapter}
              lessonChange={lessonChange}
            />
          ))}
      </div>

      {/* Pop-up */}
      {isPopupOpen && <PopUp onClose={handleClosePopup} courseID={data._id} />}
    </div>
  );
}

function ChapterHeader({ onAddCategoryClick }) {
  return (
    <div className="flex shrink overflow-hidden w-full rounded-t-3xl mt-3 bg-[#6C8299] min-h-[70px] max-md:max-w-full">
      <div className="flex basis-1/6 min-w-0 min-h-[70px] gap-3 justify-center items-center px-3 bg-[#EBF1F9]">
        <span className="text-center">STT</span>
      </div>
      <div className="flex basis-1/4 min-w-0 min-h-[70px] justify-center items-center px-3 text-white">
        <span className="text-center">Tên chương</span>
      </div>
      <div className="flex basis-1/4 min-w-0 min-h-[70px] gap-3 justify-center items-center px-3 bg-[#EBF1F9]">
        <span className="text-center">Lần cuối cập nhật</span>
      </div>
      <button
        className="flex basis-1/3 min-w-0 min-h-[70px] gap-3 justify-center items-center px-3  text-white"
        onClick={onAddCategoryClick}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8c4b8a9ea3e04a3f28765b51e5832394bc0fb959c8132d5d62ff26652eebc19?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
          alt="Icon"
          className="w-[30px] aspect-square"
        />
        <span className="text-center">Chương mới</span>
      </button>
    </div>
  );
}

function ChapterRow({ id, lesson, lessonChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleEditClick = () => setIsEditing(true);
  const handleCancelClick = () => setIsEditing(false);
  const handleSaveClick = () => {
    console.log("Lưu thay đổi:");
    setIsEditing(false);
  };

  const handleRowClick = () => {
    navigate(`/courses/lesson/detail/${lesson._id}`);
  };

  return (
    <div className="flex overflow-hidden mt-3 w-full bg-white  text-neutral-900 min-h-[70px] cursor-pointer">
      {/* STT */}
      <div className="flex basis-1/6 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <div className="text-[#131313] text-center text-xl font-medium truncate">
          {id + 1}
        </div>
      </div>

      {/* Tên chương */}
      <div className="flex basis-1/4 min-w-0 min-h-[70px] shrink gap-3 justify-center items-center px-3   text-neutral-900 max-md:max-w-full">
        {isEditing ? (
          <input
            onChange={(e) => lessonChange(lesson._id, e)}
            type="text"
            value={lesson.LessonName}
            className="w-full px-3 py-2 text-[#131313] text-center text-xl font-medium truncate focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <button
            className="text-[#131313] text-center text-xl font-medium truncate"
            onClick={handleRowClick}
          >
            {lesson.LessonName}
          </button>
        )}
      </div>

      {/* Lần cuối cập nhật */}
      <div className="flex basis-1/4 min-w-0 min-h-[70px] gap-3 justify-center items-center px-3  bg-[#EBF1F9] text-neutral-900 w-[240px]">
        <div className="text-[#131313] text-center text-xl font-medium truncate">
          {moment(
            lesson?.editedBy?.[lesson.editedBy?.length - 1]?.editedAt ||
              lesson?.createdAt
          ).format("DD/MM/YYYY")}
        </div>
      </div>

      {/* Actions */}
      <div className="flex basis-1/3 min-w-0 min-h-[70px] gap-2.5 justify-center px-3 py-2 bg-white">
        {isEditing ? (
          <>
            {/* Button Xong */}
            <button
              className="flex basis-1/2 min-w-0 shrink gap-3 justify-center items-center px-3  bg-[#D1F669] rounded-[99px] text-neutral-900 hover:bg-lime-400 transition-colors"
              onClick={handleSaveClick}
            >
              <div className="gap-2.5 self-stretch my-auto">Xong</div>
            </button>
            {/* Button Hủy */}
            <button
              className="flex basis-1/2 min-w-0 justify-center items-center px-3  rounded-[99px] shrink gap-3 bg-gray-300 text-neutral-900 hover:bg-gray-400 transition-colors"
              onClick={handleCancelClick}
            >
              <div className="gap-2.5 self-stretch my-auto">Hủy</div>
            </button>
          </>
        ) : (
          <>
            {/* Button Sửa */}
            <button
              className="flex basis-1/2 min-w-0 shrink gap-3 justify-center items-center px-3  bg-[#D1F669] rounded-[99px] text-neutral-900 hover:bg-lime-400 transition-colors"
              onClick={handleEditClick}
            >
              <div className="gap-2.5 self-stretch my-auto">Sửa</div>
            </button>
            {/* Button Xóa */}
            <button className="flex basis-1/2 min-w-0 shrink gap-3 justify-center items-center px-3  text-white bg-[#DF322B] rounded-[99px] hover:bg-red-700 transition-colors">
              <div className="gap-2.5 self-stretch my-auto">Xóa</div>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
