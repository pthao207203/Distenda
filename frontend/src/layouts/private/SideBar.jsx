import React, { useState, useEffect } from "react";

const SideBar = ({ headerHeight }) => {
  const [isOpen, setIsOpen] = useState(false); // Quản lý trạng thái mở/đóng của Sidebar
  const [isDesktop, setIsDesktop] = useState(false); // Xác định xem có phải màn hình lớn hay không

  const menuItems = [
    "Khóa học của tôi",
    "Đang học",
    "Đã hoàn thành",
    "Thi thử",
    "Bài tập",
  ];

  // Kiểm tra kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Màn hình >= 1024px là desktop
    };

    handleResize(); // Kiểm tra kích thước ngay khi component mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  // Đóng Sidebar khi chuyển từ màn hình nhỏ sang lớn
  useEffect(() => {
    if (isDesktop) {
      setIsOpen(false); // Đặt về mặc định là không mở khi ở desktop
    }
  }, [isDesktop]);

  return (
    <>
      {/* Lớp phủ toàn màn hình khi Sidebar mở */}
      {isOpen && !isDesktop && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)} // Đóng Sidebar khi nhấn vào overlay
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-40 text-white transition-all duration-300 ${isDesktop || isOpen ? `w-[292px] mt-[${headerHeight}px]` : "w-0 "
          } overflow-hidden`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)", // Nền trắng mờ
          backdropFilter: "blur(30px)", // Làm mờ nền
          top: `${headerHeight}px`
        }} // Thay thế giá trị top bằng chiều cao header
      >
        {/* Thông tin người dùng */}
        <div className="flex gap-2 justify-center items-center px-[16px] w-full pt-[20px] pb-[27px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbae0514e8058efa2ff3c88f32951fbd7beba3099187677c6ba1c2f96547ea3f?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e"
            alt="User profile"
            className="object-contain shrink-0 self-stretch my-auto w-[64px] h-[62px] rounded-full aspect-[1.03] mr-[8px]"
          />
          <div className="flex flex-col flex-1 shrink self-stretch my-auto ">
            <div className="flex items-center px-[12px] text-[28px] w-auto font-semibold ">
              <div className="flex-1">Cá biết bay</div>
            </div>
            <div className="flex items-center px-[12px] text-[18px] font-medium">
              <div className="flex-1">Thành viên mới</div>
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex flex-col w-full text-[28px] font-light mx-[8px]">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 items-center py-[20px] px-[24px] w-full transition"
              style={{
                background: "rgba(0, 0, 0, 0)", // Mặc định trong suốt
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(0, 0, 0, 0.6)") // Hiệu ứng hover
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(0, 0, 0, 0)") // Reset khi rời chuột
              }
            >
              <div className="flex-1">{item}</div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Nút mở Sidebar */}
      {!isDesktop && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-5 left-5 z-50 p-2 bg-black text-white rounded-md"
        >
          {/* Biểu tượng SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="20"
            viewBox="0 0 38 20"
            fill="none"
          >
            <path
              d="M1 1H37"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1 10H37"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1 19H37"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default SideBar;