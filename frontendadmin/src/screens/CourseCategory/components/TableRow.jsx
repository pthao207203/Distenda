import React, { useState } from "react";

function TableRow({ id, name, courseCount }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    // Logic lưu thay đổi
    console.log("Changes saved!");
    setIsEditing(false);
  };

  return (
    <div className="flex overflow-hidden flex-wrap mt-3 w-full bg-white min-h-[70px] cursor-pointer">
      {/* ID */}
      <div className="flex gap-3 justify-center items-center px-3 h-full bg-[#EBF1F9] text-neutral-900 w-[200px]">
        <div className="gap-2.5 self-stretch my-auto">{id}</div>
      </div>

      {/* Name */}
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 h-full basis-0 w-[240px] text-neutral-900 max-md:max-w-full">
        <div className="gap-2.5 self-stretch my-auto">{name}</div>
      </div>

      {/* Course Count */}
      <div className="flex gap-3 justify-center items-center px-3 h-full bg-[#EBF1F9] text-neutral-900 w-[205px]">
        <div className="gap-2.5 self-stretch my-auto">{courseCount}</div>
      </div>

      {/* Actions */}
      <div className="flex gap-2.5 justify-center px-3 py-2 h-full min-w-[240px] w-[258px]">
        {isEditing ? (
          <>
            {/* Button Xong */}
            <button
              className="flex flex-1 shrink gap-3 justify-center items-center px-3 h-full bg-[#D1F669] basis-0 rounded-[99px] text-neutral-900 hover:bg-lime-400 transition-colors"
              onClick={handleSaveClick}
            >
              <div className="gap-2.5 self-stretch my-auto">Xong</div>
            </button>
            {/* Button Hủy */}
            <button
              className="flex flex-1 shrink gap-3 justify-center items-center px-3 h-full bg-gray-300 basis-0 rounded-[99px] text-neutral-900 hover:bg-gray-400 transition-colors"
              onClick={handleCancelClick}
            >
              <div className="gap-2.5 self-stretch my-auto">Hủy</div>
            </button>
          </>
        ) : (
          <>
            {/* Button Sửa */}
            <button
              className="flex flex-1 shrink gap-3 justify-center items-center px-3 h-full bg-[#D1F669] basis-0 rounded-[99px] text-neutral-900 hover:bg-lime-400 transition-colors"
              onClick={handleEditClick}
            >
              <div className="gap-2.5 self-stretch my-auto">Sửa</div>
            </button>
            {/* Button Xóa */}
            <button
              className="flex flex-1 shrink gap-3 justify-center items-center px-3 h-full text-white bg-[#DF322B] basis-0 rounded-[99px] hover:bg-red-700 transition-colors"
            >
              <div className="gap-2.5 self-stretch my-auto">Xóa</div>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TableRow;
