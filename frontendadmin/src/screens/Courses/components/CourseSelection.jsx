import React from "react";
import { useNavigate } from "react-router-dom";

function CourseSelection({ onClose }) {
  const navigate = useNavigate(); // Hook để điều hướng

  // Hàm xử lý khi nhấn vào nút "Dài hạn"
  const handleLongTermClick = () => {
    onClose(); // Đóng popup
    navigate("/long-term-course"); // Điều hướng đến trang LongTermCoursePage
  };

  // Hàm xử lý khi nhấn vào nút "Ngắn hạn"
  const handleShortTermClick = () => {
    onClose(); // Đóng popup
    navigate("/short-term-course"); // Điều hướng đến trang ShortTermCoursePage
  };

  return (
    <main className="flex relative flex-col justify-center px-5 py-24 font-medium leading-none bg-white rounded-3xl max-w-[748px] max-md:py-24">
      {/* Nút đóng (X) */}
      <button
        className="absolute top-2 right-2 text-xl font-bold text-black"
        onClick={onClose}
      >✖
      </button>

      <h1 className="z-0 text-2xl text-center text-black max-md:max-w-full">
        Bạn muốn thêm khóa học như thế nào?
      </h1>

      {/* Các nút chọn */}
      <section className="flex z-0 gap-10 items-center self-center mt-16 text-3xl text-white max-md:mt-10 max-md:max-w-full">
        <button
          className="px-10 py-4 bg-[#6C8299] rounded-lg text-white"
          onClick={handleLongTermClick}
        > Dài hạn
        </button>
        <button
          className="px-10 py-4 bg-[#6C8299] rounded-lg text-white"
          onClick={handleShortTermClick}
        > Ngắn hạn
        </button>
      </section>
      
    </main>
  );
}

export default CourseSelection;
