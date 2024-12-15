import React, { useState, useRef, useEffect } from "react";
import Popup from "./Popup"; // Import Popup vào file

const StarRating = () => {
  const [hoveredStars, setHoveredStars] = useState(0); // Số ngôi sao khi hover
  const [selectedStars, setSelectedStars] = useState(0); // Số ngôi sao khi click

  const handleMouseEnter = (index) => {
    setHoveredStars(index); // Cập nhật số ngôi sao được hover
  };

  const handleMouseLeave = () => {
    setHoveredStars(0); // Trở lại trạng thái ban đầu
  };

  const handleClick = (index) => {
    setSelectedStars(index); // Cập nhật số ngôi sao khi click
  };

  const stars = Array(5).fill(null);

  return (
    <div className="flex items-start self-start ">
      {stars.map((_, index) => {
        const starIndex = index + 1; // Đánh số từ 1 đến 5
        const isActive = starIndex <= (hoveredStars || selectedStars);

        return (
          <span
            key={`star-${index}`}
            className={`cursor-pointer text-[50px] aspect-square w-[50px] mx-1 justify-center items-start transition duration-200 ${
              isActive ? "text-yellow-500" : "text-gray-400"
            }`}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starIndex)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

const ReviewSection = () => {
  const [review, setReview] = useState(""); // Quản lý nội dung review
  const [showPopup, setShowPopup] = useState(false); // Quản lý trạng thái hiển thị Popup
  const [isSubmitted, setIsSubmitted] = useState(false); // Trạng thái đã đăng
  const textAreaRef = useRef(null); // Tham chiếu tới textarea

  const handleChange = (e) => {
    setReview(e.target.value);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"; // Reset chiều cao
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Đặt chiều cao theo scrollHeight
    }
  };

  const handleSubmit = () => {
    if (review.trim()) {
      setShowPopup(true); // Hiển thị Popup khi bấm Đăng
      setIsSubmitted(true); // Đánh dấu là đã đăng, không cho phép đăng lại
    }
  };

  const handleEdit = () => {
    setIsSubmitted(false); // Chuyển về trạng thái chỉnh sửa
    setReview(""); // Xóa nội dung cũ nếu cần thiết
    setShowPopup(false); // Đảm bảo popup không hiển thị khi chỉnh sửa
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-10 px-16 max-md:px-5">
      <div className="flex flex-col w-full text-3xl font-semibold text-white max-md:max-w-full">
        <div className="max-md:max-w-full">Đánh giá</div>
        <div className="flex mt-2.5 w-full bg-slate-300 min-h-[2px] max-md:max-w-full" />
      </div>
      <div className="justify-center items-center w-full max-w-[1542px]">
        <StarRating />
        <div className="flex mt-[20px] max-w-full bg-slate-300 bg-opacity-50 min-h-[137px] p-[20px]">
          <textarea
            ref={textAreaRef}
            value={review}
            onChange={handleChange}
            placeholder="Nhập đánh giá của bạn tại đây..."
            className="w-full min-h-[137px] p-2 bg-transparent border-2 border-gray-400 rounded-md text-black focus:outline-none focus:border-white overflow-y-hidden"
            disabled={isSubmitted} // Disable textarea khi đã đăng
          />
        </div>
        <div className="flex flex-col justify-center items-end mt-5 w-full text-xl font-semibold leading-none whitespace-nowrap text-neutral-900 max-md:max-w-full">
          {!isSubmitted ? (
            <button
              className="flex justify-center items-center px-[12px] py-[20px] bg-[#CFF150] max-h-[56px] w-full max-w-[180px] mb-[40px]"
              aria-label="Submit review"
              onClick={handleSubmit} // Hiển thị Popup khi click vào nút Đăng
            >
              <span className="self-stretch my-auto">Đăng</span>
            </button>
          ) : (
            <button
              className="flex justify-center items-center px-[12px] py-[20px] bg-[#CFF150] max-h-[56px] w-full max-w-[180px] mb-[40px]"
              aria-label="Edit review"
              onClick={handleEdit} // Chuyển về trạng thái chỉnh sửa
            >
              <span className="self-stretch my-auto">Chỉnh sửa</span>
            </button>
          )}
        </div>
      </div>
      {showPopup && <Popup />} {/* Hiển thị Popup khi bấm nút Đăng */}
    </div>
  );
};

export default ReviewSection;
