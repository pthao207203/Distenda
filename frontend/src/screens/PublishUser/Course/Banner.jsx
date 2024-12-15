import React, { useState, useEffect } from 'react';

// Dữ liệu hình ảnh banner (URL hình ảnh hoặc đường dẫn đến các hình ảnh mẫu)
const bannerImages = [
  "https://via.placeholder.com/1920x300/0000FF/808080?text=Chào+mừng+đến+với+khóa+học+của+chúng+tôi!",
  "https://via.placeholder.com/1920x300/00FF00/808080?text=Khám+phá+các+khóa+học+mới+ngay+hôm+nay!",
  "https://via.placeholder.com/1920x300/FF5733/808080?text=Cải+thiện+kỹ+năng+của+bạn+với+các+khóa+học+chuyên+sâu!",
  "https://via.placeholder.com/1920x300/8E44AD/808080?text=Trở+thành+chuyên+gia+trong+lĩnh+vực+của+bạn!"
];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hàm chuyển sang banner kế tiếp (trượt qua trái)
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  // Hàm quay lại banner trước
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  // Sử dụng useEffect để tự động thay đổi banner sau mỗi 2.5 giây
  useEffect(() => {
    const interval = setInterval(nextImage, 2500); // Trượt sau mỗi 2.5 giây
    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []); // Chạy 1 lần khi component được render lần đầu tiên

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
          {bannerImages.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
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
