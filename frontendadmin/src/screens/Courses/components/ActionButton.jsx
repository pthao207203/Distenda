import React, { useState } from "react";
import CourseSelection from "./CourseSelection";

function ActionButton({ text }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      {/* Nút Action */}
      <button
        className="flex gap-3 justify-center items-center px-3 py-5 rounded-lg bg-slate-500 min-w-[240px]"
        onClick={togglePopup}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/63efcc48669f127d74e546af9bf5839c0403a27b9d45018b06ece519a1baf104?apiKey=ce9d43b270ae41158192dec03af70a1a&"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt=""
        />
        <span className="gap-2.5 self-stretch my-auto">{text}</span>
      </button>

      {/* Popup */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={togglePopup} // Đóng popup khi click ra ngoài
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            onClick={(e) => e.stopPropagation()} // Ngăn đóng popup khi click vào nội dung
          >
            <CourseSelection onClose={togglePopup} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ActionButton;
