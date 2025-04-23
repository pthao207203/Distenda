import React, { useState, useRef, useEffect } from "react";
import Popup from "./Popup"; // Import Popup vào file
import { courseReviewController } from "../../../controllers/course.controller";
import CourseReviews from "../../User/CourseDetailPublic/CourseReviews";

const StarRating = ({ setSelectedStars, selectedStars }) => {
  const [hoveredStars, setHoveredStars] = useState(0); // Số ngôi sao khi hover

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
            className={`cursor-pointer text-[1.75rem] max-lg:text-[14px] aspect-square w-[30px] mx-1 justify-center items-start transition duration-200 ${
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

const ReviewSection = ({ setLoading, courseID, courseReview, has }) => {
  const [data, setData] = useState();
  const [selectedStars, setSelectedStars] = useState(0); // Số ngôi sao khi click

  const [review, setReview] = useState(""); // Quản lý nội dung review
  const [showPopup, setShowPopup] = useState(false); // Quản lý trạng thái hiển thị Popup
  const [isSubmitted, setIsSubmitted] = useState(false); // Trạng thái đã đăng
  const textAreaRef = useRef(null); // Tham chiếu tới textarea

  useEffect(() => {
    // Cập nhật giá trị của data khi review hoặc selectedStars thay đổi
    setData((prevData) => ({
      ...prevData,
      Rate: selectedStars,
      Comment: review,
    }));
    console.log("data", data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [review, selectedStars]);

  const handleChange = (e) => {
    setReview(e.target.value);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"; // Reset chiều cao
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Đặt chiều cao theo scrollHeight
    }
  };

  const handleSubmit = async () => {
    if (review.trim()) {
      const result = await courseReviewController(setLoading, courseID, data);
      if (result.code === 200) {
        setShowPopup(true); // Hiển thị Popup khi bấm Đăng
        setIsSubmitted(true); // Đánh dấu là đã đăng, không cho phép đăng lại
      }
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
    <div className="flex flex-col justify-center items-center mt-10 px-16 max-lg:px-0">
      <div className="flex flex-col px-16 w-full text-3xl max-lg:text-[18px] font-semibold text-white max-lg:px-0 max-lg:max-w-full">
        <h2 className="max-lg:max-w-full">Đánh giá</h2>
        <div className="flex mt-2.5 w-full bg-slate-300 min-h-[2px] max-lg:max-w-full"></div>
      </div>
      <CourseReviews {...courseReview} />
      {has === 0 && (
        <div className="justify-center items-center w-full max-w-[1542px]">
          <StarRating
            setSelectedStars={setSelectedStars}
            selectedStars={selectedStars}
          />
          <div>
            <textarea
              ref={textAreaRef}
              value={review}
              onChange={handleChange}
              placeholder="Nhập đánh giá của bạn tại đây..."
              className="flex z-20 mt-[20px] bg-[#CDD5DF] bg-opacity-50 min-h-[137px] lg:p-3 relative w-full border-2 border-gray-400 rounded-lg text-white text-xl max-lg:text-[14px] max-lg:p-[12px] focus:border-white placeholder-white"
              disabled={isSubmitted}
            />
          </div>
          <div className="flex flex-col justify-center items-end mt-5 w-full text-xl max-lg:text-[14px] font-semibold leading-none whitespace-nowrap text-neutral-900 max-lg:max-w-full">
            {!isSubmitted ? (
              <button
                className="flex justify-center items-center px-[12px] py-[12px] bg-[#CFF500] max-h-[56px] w-full max-w-[120px] mb-[40px]"
                aria-label="Submit review"
                onClick={handleSubmit} // Hiển thị Popup khi click vào nút Đăng
              >
                <span className="self-stretch my-auto">Đăng</span>
              </button>
            ) : (
              <button
                className="flex justify-center items-center px-[12px] py-[20px] bg-[#CFF500] max-h-[56px] w-full max-w-[180px] mb-[40px]"
                aria-label="Edit review"
                onClick={handleEdit} // Chuyển về trạng thái chỉnh sửa
              >
                <span className="self-stretch my-auto">Chỉnh sửa</span>
              </button>
            )}
          </div>
        </div>
      )}
      {showPopup && <Popup />} {/* Hiển thị Popup khi bấm nút Đăng */}
    </div>
  );
};

export default ReviewSection;
