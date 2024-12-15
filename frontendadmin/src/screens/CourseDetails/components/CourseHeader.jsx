import React, { useState } from "react";

export function CourseHeader() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);
  const [action, setAction] = useState("");

  const handlePopup = (actionType) => {
    setAction(actionType);
    if (actionType === "update") {
      setPopupContent("Bạn có chắc chắn muốn cập nhật những thay đổi không?");
    } else if (actionType === "delete") {
      setPopupContent(
        <>
          Bạn muốn xóa khóa học này?
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

  const confirmAction = () => {
    setPopupVisible(false);
    // Thực hiện logic cập nhật hoặc xóa ở đây
    console.log(`${action} action confirmed.`);
    setSuccessPopupVisible(true);
  };

  const closeSuccessPopup = () => {
    setSuccessPopupVisible(false);
    console.log("Success popup closed.");
  };

  return (
    <div className="flex gap-2.5 items-start self-start text-xl font-medium leading-none text-white">
      {/* Nút Cập nhật */}
      <button
        className="flex gap-3 justify-center items-center px-3 py-3 rounded-lg bg-slate-500 min-h-[46px]"
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
        className="flex gap-3 justify-center items-center px-3 py-3 bg-red-600 rounded-lg min-h-[46px]"
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
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
          <div className="flex flex-col justify-center px-10 py-16 bg-white rounded-3xl w-[600px] font-semibold">
            <div className="flex flex-col items-center w-full text-center">
              <img
                src={`${process.env.PUBLIC_URL}/icons/charcoal_dot.svg`}
                className="object-contain shrink-0 my-auto w-14 aspect-square"
                alt="Icon"
              />
              <p className="mt-6 text-xl text-neutral-900 font-semibold text-center">
                {popupContent}
              </p>
              <div className="mt-4 flex gap-3 justify-center items-center max-h-[70px] py-4 rounded-lg text-2xl">
                <button
                  className="w-[150px] h-[60px] bg-[#6C8299] text-white rounded-lg flex justify-center items-center hover:bg-slate-700"
                  onClick={confirmAction}
                >
                  Có
                </button>
                <button
                  className="w-[150px] h-[60px] bg-gray-300 text-gray-900 rounded-lg flex justify-center items-center hover:bg-gray-400"
                  onClick={closePopup}
                >
                  Không
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup thành công */}
      {successPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
          <div className="flex flex-col justify-center px-10 py-16 bg-white rounded-3xl w-[600px] font-semibold">
            <div className="flex flex-col items-center w-full text-center">
              <img
                src={`${process.env.PUBLIC_URL}/icons/check_ring.svg`}
                className="object-contain shrink-0 my-auto w-14 aspect-square"
                alt="Success Icon"
              />
              <p className="mt-6 text-xl text-neutral-900 font-semibold text-center">
                Cập nhật thành công!
              </p>
              <button
                className="w-[150px] h-[60px] bg-gray-300 text-gray-900 rounded-lg flex justify-center items-center font-semibold text-2xl hover:bg-gray-400 mt-4"
                onClick={closeSuccessPopup}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
