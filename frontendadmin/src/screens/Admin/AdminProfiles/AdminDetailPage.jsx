import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import PersonalInfo from "./components/PersonalInfo";
import CourseTableRow from "./components/CourseTableRow";
import {
  adminDetailController,
  adminUpdatePostController,
  adminDeleteController,
} from "../../../controllers/admin.controller";

import Loading from "../../../components/Loading";
import uploadImage from "../../../components/UploadImage";
import { PopupConfirm } from "../../../components/PopupConfirm";
import { PopupSuccess } from "../../../components/PopupSuccess";
import { PopupError } from "../../../components/PopupError";
import AdminDetailHistory from "./components/AdminDetailHistory";

function AdminDetailPage() {
  const navigate = useNavigate();
  const { AdminID } = useParams(); // Lấy giá trị UserID từ URL
  console.log("ID from URL: ", AdminID);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [roles, setRoles] = useState([]); // Mảng roles duy nhất
  const [action, setAction] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);
  const [errorPopupVisible, setErrorPopupVisible] = useState(false);
  const editorRef = useRef(null);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const [imageUrl, setImageUrl] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  const uploadImageInputRef = useRef(null);
  const uploadImagePreviewRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const result = await adminDetailController(AdminID, setLoading);

      if (result) {
        setData(result);

        setSelectedFileName(result.AdminAvatar);
        setImageUrl(result.AdminAvatar);
        setRoles((prevRoles) => [
          { _id: "", RoleName: "Chọn chức vụ", disabled: true },
          ...result.roles,
        ]);
      }
      setLoading(false);
    }

    fetchData();
  }, [AdminID]);

  if (loading) {
    return <Loading />;
  }

  const handleSubmit = async () => {
    let uploadedImageUrl = data.BannerPicture;
    // Upload ảnh nếu người dùng đã chọn
    console.log("selectedFileName", selectedFileName);
    if (selectedFileName) {
      uploadedImageUrl = await uploadImage(selectedFileName);
      console.log("Uploaded Image URL:", uploadedImageUrl);
    }
    const updatedData = {
      ...data,
      CoursePicture: uploadedImageUrl,
    };

    console.log("Data sent to ActionButton:", updatedData);
    setData(updatedData);
    return updatedData;
  };

  // Hàm cập nhật dữ liệu khi người dùng nhập vào
  const handleChange = (e) => {
    // Kiểm tra nếu e.target tồn tại (dành cho input và select)
    if (e?.target) {
      const { id, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [id]: value, // Cập nhật theo id của input
      }));
    } else if (e) {
      // Nếu không có e.target (TinyMCE)
      setData((prevData) => ({
        ...prevData,
        [e.id]: e.getContent(), // Lấy nội dung từ TinyMCE và cập nhật theo id
      }));
    }
  };

  const handlePopup = (actionType) => {
    setAction(actionType);
    if (actionType === "update") {
      setPopupContent("Bạn có chắc chắn muốn cập nhật những thay đổi không?");
    } else if (actionType === "delete") {
      setPopupContent(
        <>
          Bạn muốn xóa người này?
          <br />
          Bạn sẽ không thể khôi phục sau khi xóa.
        </>
      );
    }
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setPopupContent("");
  };

  const confirmAction = async () => {
    setPopupVisible(false);
    //
    if (action === "update") {
      setLoading(true);
      const newData = await handleSubmit();
      setLoading(false);
      console.log("newData", newData);
      const result = await adminUpdatePostController(
        setLoading,
        data._id,
        newData
      );
      if (result.code === 200) {
        setSuccessPopupVisible(true);
      } else {
        setErrorPopupVisible(true);
      }
    } else {
      console.log("xoas");
      const result = await adminDeleteController(setLoading, data._id);
      if (result.code === 200) {
        setSuccessPopupVisible(true);
      } else {
        setErrorPopupVisible(true);
      }
    }
  };

  const closeSuccessPopup = () => {
    setSuccessPopupVisible(false);
    if (action === "update") {
      window.location.reload();
    } else {
      navigate("/admin");
    }
  };
  const closeErrorPopup = () => {
    setErrorPopupVisible(false); // Ẩn popup thành công
    // window.location.reload();
  };

  const handleToggle = () => {
    setData((prevData) => ({
      ...prevData,
      AdminStatus: prevData.AdminStatus === 1 ? 0 : 1,
    }));
  };

  console.log("Admin Detail => ", data);
  const totalCourse = data?.course.length || 0; // Đảm bảo không lỗi nếu data undefined

  const handleHistoryRequest = () => {
    setIsHistoryVisible(true);
  };

  const handleCloseHistoryRequest = () => {
    setIsHistoryVisible(false);
  };

  return (
    <>
      <div className="flex overflow-hidden flex-col px-16 pt-16 bg-white min-h-screen max-md:px-5">
        <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
          {/* Thông tin giảng viên */}
          <div className="flex flex-wrap flex-1 shrink gap-4 items-center basis-0 min-w-[240px] max-md:max-w-full">
            <img
              loading="lazy"
              src={
                data?.AdminAvatar
                  ? data.AdminAvatar
                  : "https://cdn.builder.io/api/v1/image/assets/TEMP/9f4c77a7cd8d0d6938085c2329962000d9898f65d43cbc645023d10de84cf689?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
              }
              alt="Instructor profile"
              className="object-cover rounded-full shrink-0 self-stretch my-auto aspect-square w-[119px]"
            />
            <div className="flex flex-col self-stretch my-auto">
              <div className="text-2xl font-semibold text-neutral-900">
                {data?.AdminFullName ? data?.AdminFullName : "Null"}
              </div>
              <div className="mt-3 text-lg font-medium text-neutral-900 text-opacity-50">
                {data?.AdminEmail ? data.AdminEmail : "Null"}
              </div>
            </div>
          </div>
          {/* Nút hành động */}
          <div className="flex gap-2.5 items-center text-xl font-medium leading-none text-white min-w-[240px]">
            <button
              className="flex gap-3 justify-center items-center self-stretch px-3 py-3 my-auto rounded-lg bg-slate-500 min-h-[46px]"
              onClick={() => handlePopup("update")}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/84fdfd4c4d34c64c558acb40d245b2d594b0b0f000c7b4c1dd0353682f135f9d?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <span className="gap-2.5 self-stretch my-auto">Cập nhật</span>
            </button>
            <button
              className="flex gap-3 justify-center items-center self-stretch px-3 py-3 my-auto whitespace-nowrap bg-red-600 rounded-lg min-h-[46px]"
              onClick={() => handlePopup("delete")}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/39a71fd8008a53a09d7a877aea83770214d261a5f742c728f7c5a0a06accb635?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <span className="gap-2.5 self-stretch my-auto">Xoá</span>
            </button>
          </div>
        </div>

        {/* Thông tin cá nhân */}
        <PersonalInfo
          data={data}
          roles={roles}
          handleChange={handleChange}
          handleToggle={handleToggle}
          handleHistoryRequest={handleHistoryRequest}
        />

        {/* Tiêu đề Khóa học */}
        <div className="flex flex-col mt-10 w-full text-xl text-neutral-900 max-md:max-w-full">
          <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
            <div className="font-semibold">Khóa học giảng viên</div>
            <div className="flex-1 shrink font-medium leading-none text-right basis-0 max-md:max-w-full">
              Tổng số khóa học: {totalCourse}
            </div>
          </div>

          {/* Header Table */}
          <div className="flex overflow-hidden flex-wrap w-full mt-3 rounded-t-3xl bg-[#6C8299] font-medium min-min-h-[70px] max-md:max-w-full">
            <div className="flex shrink justify-center items-center px-3 py-0 min-h-[70px] bg-[#EBF1F9] basis-1/6 min-w-0">
              <span className="text-center">Tên khóa học</span>
            </div>
            <div className="flex shrink justify-center items-center px-3 py-0 min-h-[70px] text-white basis-1/6 min-w-0">
              <span className="text-center">Tên giảng viên</span>
            </div>
            <div className="flex shrink justify-center items-center px-3 py-0 min-h-[70px] bg-[#EBF1F9] basis-1/6 min-w-0">
              <span className="text-center">Đã bán</span>
            </div>
            <div className="flex shrink justify-center items-center px-3 py-0 min-h-[70px] text-white basis-1/6 min-w-0">
              <span className="text-center">Giá</span>
            </div>
            <div className="flex shrink justify-center items-center px-3 py-0 min-h-[70px] bg-[#EBF1F9] basis-1/6 min-w-0">
              <span className="text-center">Lợi nhuận</span>
            </div>
            <div className="flex shrink justify-center items-center px-3 py-0 min-h-[70px] text-white basis-1/6 min-w-0">
              <span className="text-center">Trạng thái</span>
            </div>
          </div>

          {/* Dữ liệu Table */}
          <div className="flex overflow-hidden flex-wrap w-full rounded-b-3xl bg-white min-min-h-[70px] max-md:max-w-full">
            {data &&
              data.course &&
              data.course.length > 0 &&
              data.course.map((course, index) => (
                <CourseTableRow
                  index={index}
                  name={data?.AdminFullName}
                  course={course}
                />
              ))}
          </div>
        </div>
        {/* Popup xác nhận */}
        <PopupConfirm
          isVisible={isPopupVisible}
          content={popupContent}
          onConfirm={confirmAction}
          onClose={closePopup}
        />

        {/* Popup thành công */}
        <PopupSuccess
          isVisible={successPopupVisible}
          message="Cập nhật thành công!"
          onClose={closeSuccessPopup}
        />
        {/* Popup thất bại */}
        <PopupError
          isVisible={errorPopupVisible}
          message="Cập nhật thất bại. Vui lòng thử lại sau!"
          onClose={closeErrorPopup}
        />
      </div>
      {isHistoryVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 max-md:px-10 overflow-hidden">
          <AdminDetailHistory onClose={handleCloseHistoryRequest} />
        </div>
      )}
    </>
  );
}

export default AdminDetailPage;