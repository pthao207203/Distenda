import React, { useState } from "react";
import { rolesDeleteController, rolesCreateController, rolesUpdateController } from "../../../controllers/role.controller";

export default function ActionButtons({ selectedRoles, permissions }) {
  const [popupContent, setPopupContent] = useState(null); // Trạng thái quản lý nội dung popup
  const [isPopupVisible, setPopupVisible] = useState(false); // Trạng thái hiển thị popup xác nhận
  const [successPopupVisible, setSuccessPopupVisible] = useState(false); // Trạng thái hiển thị popup thành công
  const [isAddRolePopupVisible, setAddRolePopupVisible] = useState(false); // Trạng thái hiển thị popup thêm chức vụ
  const [name, setName] = useState(""); // Lưu trữ tên chức vụ
  const [action, setActionType] = useState(null);
  console.log(permissions)

  const handlePopup = (action) => {
    setActionType(action);
    if (action === "delete") {
      setPopupContent("Bạn có chắc chắn muốn xóa không?");
    } else if (action === "update") {
      setPopupContent("Bạn có chắc chắn muốn cập nhật những thay đổi không?");
    } else if (action === "add-role") {
      setPopupContent("Bạn có chắc chắn muốn thêm chức vụ không?");
    }
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setPopupContent(null);
  };

  const confirmAction = async () => {
    setPopupVisible(false); // Ẩn popup xác nhận
    try {
      let response;
      if (action === "delete") {
        // Gọi API xóa
        // console.log("selectedRoles", selectedRoles)
        response = await rolesDeleteController(selectedRoles);
      } else if (action === "update") {
        // Gọi API cập nhật
        response = await rolesUpdateController(permissions);
      }

      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi thực hiện hành động.");
      }
      console.log("API call thành công!");
    } catch (error) {
      console.error("Error calling API:", error);
    }
    setSuccessPopupVisible(true); // Hiển thị popup thành công
  };

  const closeSuccessPopup = () => {
    setSuccessPopupVisible(false); // Ẩn popup thành công
    window.location.reload();
  };

  const handleAddRolePopup = () => {
    setAddRolePopupVisible(true);
  };

  const handleCloseAddRolePopup = () => {
    setAddRolePopupVisible(false);
    setName(""); // Reset tên chức vụ
  };

  const handleConfirmAddRole = async () => {
    console.log(`Thêm chức vụ: ${name}`);
    const response = await rolesCreateController(name);
    setAddRolePopupVisible(false);
    setName(""); // Reset tên chức vụ
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-start md:ml-[5px]">
      {/* Các nút hành động */}
      <div className="flex gap-2.5 items-start self-end text-xl font-semibold leading-none text-white max-md:max-w-full">
        <button
          className="flex gap-3 justify-center items-center px-3 py-3 whitespace-nowrap bg-[#DF322B] rounded-lg min-h-[46px]"
          onClick={() => handlePopup("delete")}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/42648122efa6f387983f11efeb38ca614809d3a449f7a41f54d965ae2b480b89?apiKey=7a79403a23cb489f853e4845c47ede19&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <span className="gap-2.5 self-stretch my-auto min-w-[85px]">Xóa</span>
        </button>
        <button
          className="flex gap-3 justify-center items-center px-3 py-3 rounded-lg bg-[#6C8299] min-h-[46px]"
          onClick={handleAddRolePopup}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/2260a31778e07faf5a50dc88b34903847936c46ef5272e04970d76bf783fa95b?apiKey=7a79403a23cb489f853e4845c47ede19&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <span className="gap-2.5 self-stretch my-auto min-w-[204px]">Thêm chức vụ</span>
        </button>
        <button
          className="flex gap-3 justify-center items-center px-3 py-3 rounded-lg bg-[#6C8299] min-h-[46px]"
          onClick={() => handlePopup("update")}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/e9c84cc0d21b5241ee40d83334bf9289f4fc6a242a7bb8a736e90effdbd86720?apiKey=7a79403a23cb489f853e4845c47ede19&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <span className="gap-2.5 self-stretch my-auto min-w-[96px]">Cập nhật</span>
        </button>
      </div>

      {/* Popup xác nhận */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
          <div className="flex flex-col justify-center px-10 py-16 bg-white rounded-3xl w-[600px] font-semibold">
            <div className="flex flex-col items-center w-full text-center">
              <img
                src={`${process.env.PUBLIC_URL}/icons/charcoal_dot.svg`}
                className="object-contain shrink-0 my-auto w-14 aspect-square"
                alt="Icon"
              />
              <p className="mt-6 text-xl text-neutral-900 font-semibold text-center">{popupContent}</p>
              <div className="mt-4 flex gap-3 justify-center items-center max-h-[70px] py-4 rounded-lg text-2xl">
                <button
                  className="w-[150px] h-[60px] bg-[#6C8299] text-white rounded-lg flex justify-center items-center hover:bg-slate-700"
                  onClick={confirmAction}
                >
                  Có
                </button>
                <button
                  className="w-[150px] h-[60px] bg-[#CDD5DF] text-[#14375F] rounded-lg flex justify-center items-center hover:bg-gray-400"
                  onClick={closePopup}
                >
                  Không
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup thêm chức vụ */}
      {isAddRolePopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
          <div className="flex flex-col justify-center px-10 py-16 bg-white rounded-3xl w-[600px] font-medium">
            <div className="flex flex-col items-center w-full text-center">
              <p className="text-xl font-semibold text-neutral-900 mb-4">
                Nhập chức vụ
              </p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#6C8299]"
                placeholder="Nhập chức vụ"
              />
              <div className="mt-6 flex gap-4 justify-center items-center max-h-[70px] py-4 rounded-lg text-2xl">
                <button
                  className="w-[150px] h-[60px] bg-[#6C8299] text-white rounded-lg hover:bg-slate-600"
                  onClick={handleConfirmAddRole}
                >
                  Thêm
                </button>
                <button
                  className="w-[150px] h-[60px] bg-[#CDD5DF] text-[#14375F] rounded-lg hover:bg-gray-400"
                  onClick={handleCloseAddRolePopup}
                >
                  Hủy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup thành công */}
      {successPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
          <div className="flex flex-col justify-center px-10 py-16 bg-white rounded-3xl w-[600px] font-semibold">
            <div className="flex flex-col items-center w-full text-center">
              <img
                src={`${process.env.PUBLIC_URL}/icons/check_ring.svg`}
                className="object-contain shrink-0 my-auto w-14 aspect-square"
                alt="Success icon"
              />
              <p className="mt-6 text-xl text-neutral-900 font-semibold text-center">Cập nhật thành công!</p>
              <button
                className="w-[150px] h-[60px] bg-[#CDD5DF] text-[#14375F] rounded-lg flex justify-center items-center font-semibold text-2xl hover:bg-gray-400 mt-4"
                onClick={closeSuccessPopup}
              >
                Thoát
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
