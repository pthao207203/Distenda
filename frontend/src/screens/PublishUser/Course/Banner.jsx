import React, { useState, useEffect } from 'react';
import { bannerController } from "../../../controllers/banner.controller";

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await bannerController(setLoading);
      // console.log(result)
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
      
    }

    fetchData();
  }, []);

  // Hàm chuyển sang banner kế tiếp (trượt qua trái)
  const nextImage = () => {
    if (data && data.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }
  };

  // Hàm quay lại banner trước
  const prevImage = () => {
    if (data && data.length > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
    }
  };

  // Sử dụng useEffect để tự động thay đổi banner sau mỗi 2.5 giây
  useEffect(() => {
    if (data?.length) {
      const interval = setInterval(nextImage, 2500); // Trượt sau mỗi 2.5 giây
      return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }
  }, [data]);  // Nếu data có dữ liệu mới sẽ render lại

  
  if (loading) {
    return (
      <div>
        Đang tải...
      </div>
    )
  }
  console.log("Banner => ", data)
  return (
    <div className="relative w-full h-full">
      {/* Nút mũi tên bên trái (SVG) */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        onClick={prevImage}
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Nút mũi tên bên phải (SVG) */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        onClick={nextImage}
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Hiển thị các banner trượt bằng map */}
      <div className="w-full h-full mt-[20px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Điều chỉnh để trượt giữa các ảnh
          }}
        >
          {data && data.length > 0 && data.map((banner, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={banner?.BannerPicture || "https://via.placeholder.com/1920x300?text=No+Image"}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
