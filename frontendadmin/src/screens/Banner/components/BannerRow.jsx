import * as React from "react";
import { useNavigate } from "react-router-dom";

function BannerRow({ id, index, name, linkedCourse }) {
  const navigate = useNavigate(); // Khởi tạo hook điều hướng
  const [isHidden, setIsHidden] = React.useState(false); // Trạng thái ẩn hoặc hiện

  const handleEdit = () => {
    // Điều hướng đến trang UpdateBannerPage
    navigate(`/banner/edit/${id}`);
  };

  const toggleVisibility = () => {
    // Chuyển đổi trạng thái ẩn hoặc hiện
    setIsHidden(!isHidden);
  };

  return (
    <div className="flex flex-wrap mt-6 w-full bg-white min-h-[70px] max-md:max-w-full">
      {/* Cột ID */}
      <div className="flex gap-3 justify-center items-center px-3 h-full whitespace-nowrap bg-indigo-50 w-[200px]">
        <div className="gap-2.5 self-stretch my-auto">{index}</div>
      </div>

      {/* Cột Tên */}
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 h-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="gap-2.5 self-stretch my-auto">{name}</div>
      </div>

      {/* Cột Khóa học liên kết */}
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 h-full bg-indigo-50 basis-0 min-w-[240px] max-md:max-w-full">
        <div className="gap-2.5 self-stretch my-auto">{linkedCourse}</div>
      </div>

      {/* Cột Hành động */}
      <div className="flex gap-2.5 justify-center px-3 py-2 h-full whitespace-nowrap min-w-[240px] w-[245px]">
        {/* Nút Sửa */}
        <button
          className="flex flex-1 shrink gap-3 justify-center items-center px-3 h-full bg-lime-300 basis-0 rounded-[99px]"
          onClick={handleEdit}
        >
          <div className="gap-2.5 self-stretch my-auto">Sửa</div>
        </button>

        {/* Nút Ẩn/Bỏ Ẩn */}
        <button
          className={`flex flex-1 shrink gap-3 justify-center items-center px-3 h-full ${isHidden ? "bg-gray-300" : "bg-amber-300"
            } basis-0 rounded-[99px]`}
          onClick={toggleVisibility}
        >
          <div className="gap-2.5 self-stretch my-auto">{isHidden ? "Bỏ Ẩn" : "Ẩn"}</div>
        </button>
      </div>
    </div>
  );
}

export default BannerRow;
