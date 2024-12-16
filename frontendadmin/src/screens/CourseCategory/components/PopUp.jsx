import React, { useState } from "react";

function CategoryPopup({ onClose }) {
  const [categoryName, setCategoryName] = useState("");

  const handleAddClick = () => {
    console.log("Danh mục mới:", categoryName);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
      <div className="flex flex-col justify-center px-10 py-16 bg-white rounded-3xl w-[600px] font-medium">
        <div className="flex flex-col items-center w-full text-center">
          <p className="text-xl font-semibold text-neutral-900 mb-4">
            Nhập danh mục
          </p>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
            placeholder="Nhập tên danh mục"
          />
          <div className="mt-6 flex gap-4 justify-center items-center max-h-[70px] py-4 rounded-lg text-2xl">
            <button
              className="w-[150px] h-[60px] bg-[#6C8299] text-white rounded-lg hover:bg-slate-600"
              onClick={handleAddClick}
            >
              Thêm
            </button>
            <button
              className="w-[150px] h-[60px] bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400"
              onClick={onClose}
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPopup;
