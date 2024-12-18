import React, { useState } from "react";
import { courseUpdatePostController } from "../../../controllers/course.controller";

import { PopupConfirm } from "../../../components/PopupConfirm";
import { PopupSuccess } from "../../../components/PopupSuccess";
import { PopupError } from "../../../components/PopupError";
import Loading from "../../../components/Loading";

export function CourseHeader({ data, handleSubmit }) {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);
  const [errorPopupVisible, setErrorPopupVisible] = useState(false); // Trạng thái hiển thị popup thành công
  const [action, setAction] = useState("");
  const [loading, setLoading] = useState(false)

  const handlePopup = (actionType) => {
    setAction(actionType);
    if (actionType === "update") {
      setPopupContent("Bạn có chắc chắn muốn cập nhật những thay đổi không?");
    } else if (actionType === "delete") {
      setPopupContent(
        <>
          Bạn muốn xóa người dùng này?
          <br />
          Khóa học sẽ không thể khôi phục sau khi xóa.
        </>
      );
    }
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setPopupContent("");
  };

  const confirmAction = async () => {
    setPopupVisible(false);
    // 
    if (action === "update") {
      setLoading(true)
      const newData = await handleSubmit()
      setLoading(false)
      console.log("newData", newData)
      const result = await courseUpdatePostController(setLoading, data._id, newData)
      if (result.code === 200) {
        setSuccessPopupVisible(true);
      } else {
        setErrorPopupVisible(true);
      }
    }
  };

  const closeSuccessPopup = () => {
    setSuccessPopupVisible(false);
    // window.location.reload();
  };
  const closeErrorPopup = () => {
    setErrorPopupVisible(false); // Ẩn popup thành công
    // window.location.reload();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex gap-2.5 items-end self-start text-xl font-medium leading-none text-white">
      {/* Nút Cập nhật */}
      <button
        className="flex gap-3 justify-center items-center px-3 py-3 rounded-lg bg-[#6C8299] min-h-[46px]"
        onClick={() => handlePopup("update")}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/84fdfd4c4d34c64c558acb40d245b2d594b0b0f000c7b4c1dd0353682f135f9d"
          alt="Update Icon"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <span className="gap-2.5 self-stretch my-auto">Cập nhật</span>
      </button>

      {/* Nút Xóa */}
      <button
        className="flex gap-3 justify-center items-center px-3 py-3 bg-[#DF322B] rounded-lg min-h-[46px]"
        onClick={() => handlePopup("delete")}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/42648122efa6f387983f11efeb38ca614809d3a449f7a41f54d965ae2b480b89"
          alt="Delete Icon"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <span className="gap-2.5 self-stretch my-auto">Xóa</span>
      </button>

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
        message="Cập nhật thành công!"
        onClose={closeSuccessPopup}
      />
      {/* Popup thất bại */}
      <PopupError
        isVisible={errorPopupVisible}
        message="Cập nhật thất bại. Vui lòng thử lại sau!"
        onClose={closeErrorPopup}
      />
    </div>
  );
}
