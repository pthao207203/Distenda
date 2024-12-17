import React, { useState } from "react";
import moment from 'moment';
import { useNavigate } from "react-router-dom"
import { videoDeleteController } from "../../../controllers/lesson.controller"

import { PopupConfirm } from "../../../components/PopupConfirm";
import { PopupSuccess } from "../../../components/PopupSuccess";
import { PopupError } from "../../../components/PopupError";

export default function LessonRow({ setLoading, video }) {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);
  const [errorPopupVisible, setErrorPopupVisible] = useState(false);
  const navigate = useNavigate()

  const handleEditClick = () => {
    navigate(`/courses/lesson/video/edit/${video._id}`)
  };

  const onClick = () => {
    navigate(`/courses/lesson/video/detail/${video._id}`)
  }

  const handleDeleteClick = () => {
    setPopupContent('Bạn có chắc chắn muốn xoá video này?')
    setPopupVisible(true)
  }

  const confirmAction = async () => {
    const result = await videoDeleteController(setLoading, video._id)
    if (result.code === 200) {
      console.log("thanh cong!!")
      setSuccessPopupVisible(true)
    } else {
      setErrorPopupVisible(true)
    }
  }
  const closePopup = () => {
    setPopupVisible(false);
    setPopupContent("");
  };
  const closeSuccessPopup = () => {
    setSuccessPopupVisible(false);
    // window.location.reload();
  };
  const closeErrorPopup = () => {
    setErrorPopupVisible(false); // Ẩn popup thành công
    // window.location.reload();
  };
  return (
    <>
      <div className="flex overflow-hidden flex-wrap mt-3 w-full bg-white h-[70px] cursor-pointer">
        {/* STT */}
        <div className="flex flex-1 shrink justify-center items-center px-3 h-full bg-[#EBF1F9] shadow-md min-w-[240px]">
          <span className="text-[#131313] text-center text-xl font-medium truncate">
            {video._id}
          </span>
        </div>

        {/* Tên bài học */}
        <div className="flex flex-1 shrink justify-center items-center px-3 h-full bg-white shadow-md min-w-[240px]">

          <button onClick={onClick} className="gap-2.5 self-stretch my-auto">{video.VideoName}</button>
          {/* <span className="text-[#131313] text-center text-xl font-medium truncate">
          {video.VideoName}
        </span> */}
        </div>

        {/* Lần cuối cập nhật */}
        <div className="flex justify-center items-center px-3 h-full w-[200px] bg-[#EBF1F9] shadow-md min-w-[240px]">
          <span className="text-[#131313] text-center text-xl font-medium truncate">
            {moment(video?.editedBy?.[video.editedBy?.length - 1]?.editedAt || video?.createdAt).format("DD/MM/YYYY")}
          </span>
        </div>

        {/* Hành động */}
        <div className="flex gap-2.5 justify-center px-3 py-2 h-full min-w-[240px] w-[247px]">
          {/* Button Sửa */}
          <button
            className="flex flex-1 shrink gap-3 justify-center items-center px-3 h-full bg-[#D1F669] basis-0 rounded-[99px] text-neutral-900 hover:bg-lime-400 transition-colors"
            onClick={handleEditClick}
          >
            <div className="gap-2.5 self-stretch my-auto">Sửa</div>
          </button>
          {/* Button Xóa */}
          <button
            onClick={handleDeleteClick}
            className="flex flex-1 shrink gap-3 justify-center items-center px-3 h-full text-white bg-[#DF322B] basis-0 rounded-[99px] hover:bg-red-700 transition-colors"
          >
            <div className="gap-2.5 self-stretch my-auto">Xóa</div>
          </button>
        </div>

      </div>
      {/* Popup xác nhận */}
      <PopupConfirm
        isVisible={isPopupVisible}
        content={popupContent}
        onConfirm={confirmAction}
        onClose={closePopup}
      />

      {/* Popup thành công */}
      <PopupSuccess
        isVisible={successPopupVisible}
        message="Xoá thành công!"
        onClose={closeSuccessPopup}
      />
      {/* Popup thất bại */}
      <PopupError
        isVisible={errorPopupVisible}
        message="Cập nhật thất bại. Vui lòng thử lại sau!"
        onClose={closeErrorPopup}
      />
    </>
  );
}
