import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { videoCreatePostController } from "../../../controllers/lesson.controller";
import { Editor } from "@tinymce/tinymce-react";

import Loading from "../../../components/Loading";
import { PopupConfirm } from "../../../components/PopupConfirm";
import { PopupSuccess } from "../../../components/PopupSuccess";
import { PopupError } from "../../../components/PopupError";

import uploadVideo from "../../../components/UploadVideo";
import { PopupLoading } from "../../../components/PopupLoading";

export function CourseForm() {
  const { LessonID } = useParams();
  const [data, setData] = useState({
    LessonId: LessonID,
    VideoName: "",
    VideoDescription: "",
    VideoUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const editorRef = useRef();
  const uploadVideoInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [videoUrl, setVideoUrl] = useState(null);

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);
  const [errorPopupVisible, setErrorPopupVisible] = useState(false); // Trạng thái hiển thị popup thành công
  const [isLoading, setPopupLoading] = useState(false);

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      console.log("File type:", file.type);
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setSelectedFileName(file);
    }
  };

  const handlePopup = async (actionType) => {
    if (actionType === "create") {
      setPopupLoading(true);
      // Upload video nếu người dùng đã chọn
      let uploadedVideoUrl = "";
      console.log("Uploaded Image URL:", selectedFileName);
      if (selectedFileName) {
        uploadedVideoUrl = await uploadVideo(selectedFileName);
        console.log("Uploaded Image URL:", uploadedVideoUrl);
        setData((prev) => ({
          ...prev,
          VideoUrl: uploadedVideoUrl,
        }));
      }
      const result = await videoCreatePostController(
        setLoading,
        LessonID,
        data
      );
      setPopupLoading(false);
      if (result.code === 200) {
        setSuccessPopupVisible(true);
      } else {
        setErrorPopupVisible(true);
      }
    } else if (actionType === "cancel") {
      setPopupContent(
        <>
          Bạn có muốn thoát?
          <br />
          Những thay đổi vừa rồi sẽ không được lưu.
        </>
      );
    }
    // setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setPopupContent("");
  };

  const confirmAction = async () => {
    setPopupVisible(false);
    navigate(`/courses/lesson/detail/${LessonID}`);
  };

  const closeSuccessPopup = () => {
    setSuccessPopupVisible(false);
    navigate(`/courses/lesson/detail/${LessonID}`);
  };
  const closeErrorPopup = () => {
    setErrorPopupVisible(false); // Ẩn popup thành công
    // window.location.reload();
  };

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
  console.log(data);
  if (loading) {
    return <Loading />;
  } else
    return (
      <>
        <form className="flex overflow-hidden flex-col px-16 pt-8 w-full font-medium bg-white max-md:px-5 max-md:max-w-full min-h-screen">
          <div className="flex flex-col pb-16 w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-10 w-full max-md:max-w-full">
              <div className="flex flex-col flex-1 shrink justify-center self-start text-xl basis-0 min-w-[240px] max-md:max-w-full">
                <label
                  htmlFor="VideoName"
                  className="text-neutral-900 text-opacity-50 max-md:max-w-full"
                >
                  Tên bài <span className="text-red-600">*</span>
                </label>
                <input
                  onChange={handleChange}
                  id="VideoName"
                  type="text"
                  value={data.VideoName}
                  className="flex-1 shrink gap-2.5 self-stretch px-3 py-3 mt-2 w-full rounded-lg border border-solid border-slate-500 border-opacity-80 min-h-[63px] text-neutral-900 max-md:max-w-full"
                  aria-required="true"
                />
              </div>
              <div className="flex gap-2.5 items-end px-2 text-xl whitespace-nowrap min-w-[240px]">
                <button
                  onClick={() => handlePopup("create")}
                  type="button"
                  className="flex gap-3 justify-center items-center px-3 py-3 text-white rounded-lg bg-[#6C8299] min-h-[63px] w-[180px]"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/06c25587ce9cf91cec2298d9a319552d6f67f260590ab623aa6b5c1e069f1103?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                  <span className="gap-2.5 self-stretch my-auto">Lưu</span>
                </button>
                <button
                  onClick={() => handlePopup("cancel")}
                  type="button"
                  className="flex gap-3 justify-center items-center px-3 py-3 rounded-lg bg-[#CDD5DF] min-h-[63px] text-[#14375F] w-[180px]"
                >
                  <span className="gap-2.5 self-stretch my-auto">Hủy</span>
                </button>
              </div>
            </div>
            {/* <div className="flex flex-col flex-1 shrink pt-3 justify-center self-start text-xl basis-0 min-w-[240px] w-full max-md:max-w-full">
              <label htmlFor="VideoUrl" className="text-neutral-900 text-opacity-50 max-md:max-w-full">
                Link video <span className="text-red-600">*</span>
              </label>
              <textarea
                onChange={handleChange}
                id="VideoUrl"
                type="text"
                value={data.VideoUrl}
                className="flex-1 shrink gap-2.5 self-stretch px-3 py-3 mt-2 w-full rounded-lg border border-solid border-slate-500 border-opacity-80 min-h-[200px] text-neutral-900 max-md:max-w-full"
                aria-required="true"
              />
            </div> */}
            <div className="flex flex-col flex-1 shrink pt-3 justify-center self-start text-xl basis-0 min-w-[240px] w-full max-md:max-w-full">
              <label
                htmlFor="VideoUrl"
                className="text-neutral-900 text-opacity-50 max-md:max-w-full"
              >
                Mô tả
              </label>
              <Editor
                id="VideoDescription"
                apiKey="ra8co6ju1rrspizsq3cqhi3e8p7iknltlh2v77d58cbrys8m"
                onInit={(_evt, editor) => (editorRef.current = editor)}
                value={data.VideoDescription} // Giá trị hiện tại
                onEditorChange={(content, editor) => handleChange(editor)} // Hàm xử lý khi nội dung thay đổi
                init={{
                  height: "300px", // Chiều cao của editor
                  width: "100%",
                  menubar: false, // Ẩn thanh menu
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>
            <div className="flex flex-col mt-11 w-full text-xl max-md:mt-10 max-md:max-w-full">
              <label
                htmlFor="videoUpload"
                className="text-neutral-900 text-opacity-50 max-md:max-w-full"
              >
                Video <span className="text-red-600">*</span>
              </label>
              {/* <div className="flex mt-2 w-full bg-[#EBF1F9] min-h-[897px] max-md:max-w-full" /> */}
              {videoUrl && (
                <video
                  controls
                  width="100%"
                  src={videoUrl}
                  className="rounded-xl shadow-md"
                />
              )}
              {/* <video
                ref={uploadVideoPreviewRef}
                loading="lazy"
                src={data?.UserAvatar ? data.UserAvatar : ""}
                alt="Banner image"
                className="flex mt-2 w-full bg-[#EBF1F9] max-h-[300px] min-h-[200px] max-md:max-w-full object-contain"
              /> */}
              <div className="flex flex-col mt-2 max-w-full">
                <label
                  for="VideoFile"
                  type="button"
                  className="flex gap-3 justify-center items-center self-start px-3 py-3 text-white rounded-lg bg-[#6C8299] min-h-[46px]"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c99e21ebf8289a5ca1f155d497040eba85af0f2bf7275330ff4d1854229cb2a?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                  <span className="gap-2.5 self-stretch my-auto">Chọn tệp</span>
                </label>
                <div className="mt-2 text-slate-500">
                  {selectedFileName
                    ? selectedFileName.name
                    : "Không có tệp nào được chọn."}
                </div>
                <input
                  type="file"
                  className="gap-2.5 self-stretch my-auto form-control-file hidden" // Ẩn input file
                  id="VideoFile"
                  name="VideoFile"
                  accept="video/mp4,video/webm"
                  ref={uploadVideoInputRef}
                  onChange={handleVideoChange}
                />
              </div>
            </div>
          </div>
        </form>
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
        <PopupLoading isVisible={isLoading} />
      </>
    );
}
