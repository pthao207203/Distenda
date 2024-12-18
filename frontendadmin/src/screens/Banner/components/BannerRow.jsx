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
    <div className="flex overflow-hidden flex-wrap mt-3 w-full bg-white min-h-[70px] max-md:max-w-full">
      {/* Cột ID */}
      <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center bg-[#EBF1F9]">
        <div className="text-[#131313] text-center text-xl font-medium truncate">{index}</div>
      </div>

      {/* Cột Tên */}
      <div className="flex basis-1/3 min-w-0 min-h-[70px] shrink gap-3 justify-center items-center px-3 max-md:max-w-full">
        <div className="text-[#131313] text-center text-xl font-medium truncate">{name}</div>
      </div>

      {/* Cột Khóa học liên kết */}
      <div className="flex basis-1/4 min-w-0 min-h-[70px] shrink gap-3 justify-center items-center px-3 bg-[#EBF1F9] max-md:max-w-full">
        <div className="text-[#131313] text-center text-xl font-medium truncate">{linkedCourse}</div>
      </div>

      {/* Cột Hành động */}
      <div className="flex basis-1/4 min-w-0 shrink gap-3 justify-center items-center px-3 min-h-[70px] max-md:max-w-full">
        {/* Nút Sửa */}
        <button
          className="flex basis-1/2 min-w-0 shrink gap-3 justify-center items-center px-3  bg-[#D1F669] rounded-[99px]"
          onClick={handleEdit}
        >
          <div className="self-center shrink w-[90%] max-w-full px-4 py-2 rounded-[99px] justify-center items-center inline-flex text-[#131313] text-center text-xl font-medium">Sửa</div>
        </button>

        {/* Nút Ẩn/Bỏ Ẩn */}
        <button
          className={`flex basis-1/2 min-w-0 shrink gap-3 justify-center items-center px-3  ${isHidden ? "bg-gray-300" : "bg-[#FFD75B]"
            } basis-0 rounded-[99px]`}
          onClick={toggleVisibility}
        >
          <div className="self-center shrink w-[90%] max-w-full px-4 py-2 rounded-[99px] justify-center items-center inline-flex text-[#131313] text-center text-xl font-medium">{isHidden ? "Bỏ Ẩn" : "Ẩn"}</div>
        </button>
      </div>
    </div>
  );
}

export default BannerRow;
