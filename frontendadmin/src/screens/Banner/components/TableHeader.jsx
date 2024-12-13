import * as React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function TableHeader() {
  const navigate = useNavigate(); // Khởi tạo navigate

  // Hàm xử lý khi nhấn vào nút "Banner mới"
  const handleAddBanner = () => {
    navigate("/banner/create"); // Chuyển hướng đến trang AddBannerPage
  };

  return (
    <div className="flex overflow-hidden mt-3 flex-wrap w-full rounded-t-3xl bg-slate-500 h-[70px] max-md:max-w-full">
      <div className="flex gap-3 justify-center items-center px-3 h-full whitespace-nowrap bg-indigo-50 w-[200px]">
        <div className="gap-2.5 self-stretch my-auto">STT</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 h-full text-white basis-0 min-w-[240px] max-md:max-w-full">
        <div className="gap-2.5 self-stretch my-auto">Tên banner</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 h-full bg-indigo-50 basis-0 min-w-[240px] max-md:max-w-full">
        <div className="gap-2.5 self-stretch my-auto">Khóa học liên kết</div>
      </div>
      <button
        className="flex gap-3 justify-center items-center px-3 h-full text-white min-w-[240px] w-[247px]"
        onClick={handleAddBanner} // Gắn sự kiện onClick để điều hướng
      >
        <img
          loading="lazy"
          src={process.env.PUBLIC_URL + "/icons/paper_plus.svg"}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
        />
        <div className="gap-2.5 self-stretch my-auto">Banner mới</div>
      </button>
    </div>
  );
}

export default TableHeader;
