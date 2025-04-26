import React, { useEffect, useState } from "react";
import { categoryCreatePostController } from "../../../controllers/category.controller";

function CategoryPopup({ onClose, data }) {
  const [categoryName, setCategoryName] = useState("");
  const [category, setCategory] = useState(data);
  const [categoryParent_id, setCategoryParent_id] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setCategory((prevRoles) => [
        { _id: "", CategoryName: "Không có danh mục cha" },
        ...category,
      ]);
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddClick = async () => {
    console.log("Danh mục mới:", categoryName);
    // console.log("id:", courseID);

    const result = await categoryCreatePostController(
      categoryName,
      categoryParent_id
    );
    if (result.code === 200) {
      console.log("Them thanh cong");
      onClose();
      // window.location.reload();
    } else {
      setError("Không thể thêm chương mới!");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCategoryParent_id(id);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
      <div className="flex flex-col justify-center px-10 py-16 bg-white rounded-3xl w-[600px] font-medium">
        <div className="flex flex-col items-center w-full text-center">
          <p className="text-xl font-semibold text-neutral-900 mb-2">
            Nhập danh mục cha
          </p>
          <div className="flex gap-2.5 my-2 w-full rounded-lg border border-solid border-slate-500 border-opacity-80 h-[63px]">
            <select
              id="CourseCatogory"
              value={data.CourseCatogory}
              onChange={(e) => handleChange(e)} // Kích hoạt hàm onChange khi chọn
              className="z-0 flex-1 shrink basis-0 px-3 py-2 max-md:max-w-full bg-transparent border-none outline-none"
            >
              {category &&
                category.length > 0 &&
                category.map((option, index) => (
                  <option
                    key={index}
                    value={option._id}
                    disabled={option.disabled}
                    selected={option._id === ""}
                  >
                    {option.CategoryName}
                  </option>
                ))}
            </select>
          </div>
          <p className="text-xl font-semibold text-neutral-900 mb-2">
            Nhập danh mục
          </p>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
            placeholder="Nhập tên danh mục"
          />
          {error && <p className="mt-4 text-red-500">{error}</p>}
          <div className="mt-6 flex gap-4 justify-center items-center max-h-[70px] py-4 rounded-lg text-2xl">
            <button
              className="w-[150px] h-[60px] bg-[#6C8299] text-white rounded-lg hover:bg-slate-600"
              onClick={handleAddClick}
            >
              Thêm
            </button>
            <button
              className="w-[150px] h-[60px] bg-[#CDD5DF] text-[#14375F] rounded-lg hover:bg-gray-400"
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
