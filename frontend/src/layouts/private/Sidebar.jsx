import React, { useState, useEffect } from 'react';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);  // Mặc định Sidebar đóng trên màn hình nhỏ
  const [isFullScreen, setIsFullScreen] = useState(false);  // Kiểm tra nếu là màn hình full-width

  const menuItems = [
    "Khóa học của tôi",
    "Đang học",
    "Đã hoàn thành",
    "Thi thử",
    "Bài tập"
  ];

  // Kiểm tra kích thước màn hình và xác định nếu màn hình là full-width
  useEffect(() => {
    const handleResize = () => {
      setIsFullScreen(window.innerWidth >= 2220);  // Kiểm tra nếu màn hình rộng hơn 1024px
    };

    window.addEventListener('resize', handleResize);
    handleResize();  // Kiểm tra khi component mount

    return () => window.removeEventListener('resize', handleResize); // Cleanup listener
  }, []);

  return (
    <div>
      {/* Nút mở hoặc đóng Sidebar chỉ hiển thị khi màn hình nhỏ */}
      {!isFullScreen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-5 left-5 z-50 px-4 py-2 text-white bg-blue-500 rounded-md"
        >
          {isOpen ? "Đóng Sidebar" : "Mở Sidebar"}
        </button>
      )}

      {/* Sidebar */}
      {(isOpen || isFullScreen) && (
        <aside
          className="fixed top-0 left-0 h-screen flex flex-col pt-5 leading-none text-white bg-black w-full max-w-md overflow-y-auto z-40"
        >
          <div
            data-layername="ngườiDung"
            className="flex gap-2 justify-center items-center px-4 w-full"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbae0514e8058efa2ff3c88f32951fbd7beba3099187677c6ba1c2f96547ea3f?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e"
              alt="User profile"
              className="object-contain shrink-0 self-stretch my-auto w-16 rounded-full aspect-[1.03]"
            />
            <div
              data-layername="ttNgườiDung"
              className="flex flex-col flex-1 shrink self-stretch my-auto basis-0"
            >
              <div
                data-layername="button"
                className="flex gap-3 items-end px-3 w-full text-3xl font-semibold"
              >
                <div
                  data-layername="button"
                  className="flex-1 shrink gap-2 self-stretch w-full"
                >
                  Cá biết bay
                </div>
              </div>
              <div
                data-layername="button"
                className="flex gap-3 items-end px-3 mt-2 w-full text-lg font-medium" // Giảm "mt-4" thành "mt-2"
              >
                <div
                  data-layername="button"
                  className="flex-1 shrink gap-2 self-stretch w-full"
                >
                  Thành viên mới
                </div>
              </div>
            </div>
          </div>
          <nav
            data-layername="khoaHọc"
            className="flex flex-col mt-7 w-full text-3xl font-light"
          >
            {menuItems.map((item, index) => (
              <div
                key={index}
                data-layername="button"
                className="flex gap-3 items-center px-6 py-6 w-full min-h-[77px] max-md:px-5"
              >
                <div
                  data-layername="button"
                  className="flex-1 shrink gap-2.5 self-stretch my-auto w-full min-w-[240px]"
                >
                  {item}
                </div>
              </div>
            ))}
          </nav>
        </aside>
      )}
    </div>
  );
};

export default SideBar;