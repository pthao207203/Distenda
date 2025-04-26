import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ActionButton from "./components/ActionButton";
import FormField from "./components/FormField";
import uploadImage from "../../../components/UploadImage";
import { bannerUpdateController } from "../../../controllers/banner.controller";
import { Editor } from "@tinymce/tinymce-react";
import moment from "moment";
import Loading from "../../../components/Loading";
import BannerDetailHistory from "./components/BannerDetailHistory";

function BannerForm() {
  const [data, setData] = useState({
    BannerName: "",
    BannerCourse: "", // Giả sử bạn có giá trị khóa học ở đây
    BannerDescription: "", // Thêm một trường miêu tả cho banner
    BannerPicture: "", // Lưu trữ đường dẫn ảnh nếu có
  });

  const [course, setCourse] = useState();
  const [loading, setLoading] = useState(false);

  const editorRef = useRef(null);

  // const [imageSrc, setImageSrc] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  const uploadImageInputRef = useRef(null);
  const uploadImagePreviewRef = useRef(null);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      // setImageSrc(imageURL);
      setSelectedFileName(file); // Lưu tên tệp đã chọn

      if (uploadImagePreviewRef.current) {
        uploadImagePreviewRef.current.src = imageURL;
      }
    }
  };

  const { BannerID } = useParams();

  useEffect(() => {
    async function fetchData() {
      // console.log("vaof")
      setLoading(true);
      const result = await bannerUpdateController(setLoading, BannerID);
      setLoading(false);
      // console.log(result)
      if (result) {
        setCourse((prevRoles) => [
          { _id: "", CourseName: "Chọn khoá học", disabled: true },
          ...result.course, // Dữ liệu fetch được sẽ thêm vào sau "Chọn chức vụ"
        ]); // Lưu dữ liệu nếu hợp lệ
        setData(result);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async () => {
    let uploadedImageUrl = data.BannerPicture;
    // Upload ảnh nếu người dùng đã chọn
    if (selectedFileName) {
      uploadedImageUrl = await uploadImage(selectedFileName);
      console.log("Uploaded Image URL:", uploadedImageUrl);
    }
    const updatedData = {
      ...data,
      BannerPicture: uploadedImageUrl,
    };

    console.log("Data sent to ActionButton:", updatedData);
    setData(updatedData);
    return updatedData;
  };

  if (loading) {
    return <Loading />;
  }
  // console.log("banner => ", data)

  // Hàm cập nhật dữ liệu khi người dùng nhập vào
  const handleChange = (e) => {
    // Kiểm tra nếu e.target tồn tại (dành cho input và select)
    if (e?.target) {
      const { id, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    } else {
      // Nếu không có e.target, xử lý nội dung của TinyMCE Editor
      setData((prevData) => ({
        ...prevData,
        BannerDescription: e, // Lấy nội dung từ TinyMCE
      }));
    }
  };

  const handleHistoryRequest = () => {
    setIsHistoryVisible(true);
  };

  const handleCloseHistoryRequest = () => {
    setIsHistoryVisible(false);
  };

  return (
    <>
      <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        {/* Form banner */}
        <form className="flex flex-col px-16 pt-16 pb-60 mx-auto w-full text-xl font-medium leading-none bg-white min-h-[983px] max-md:px-5 max-md:pb-24 max-md:mt-1.5 max-md:max-w-full">
          <div className="flex justify-between items-center max-md:max-w-full">
            <div className="flex flex-col justify-center max-md:max-w-full min-w-[240px] w-[400px]">
              <div className="flex gap-3 items-center">
                <div className="text-lg font-semibold text-neutral-900 text-opacity-50">
                  Lần cuối cập nhật
                </div>
                <button
                  type="button"
                  className="flex gap-3 justify-center items-center"
                  onClick={handleHistoryRequest}
                >
                  <img
                    loading="lazy"
                    src="/icons/Show.svg"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square filter-[#6c8299] sepia-60 saturate-200 hue-rotate-190 "
                    alt="Icon"
                  />
                </button>
              </div>
              <span className="p-2.5 mt-2 rounded-lg text-neutral-900">
                {moment(
                  data?.editedBy?.[data.editedBy?.length - 1]?.editedAt ||
                    data?.createdAt
                ).format("DD/MM/YYYY")}
              </span>
            </div>
            {/* Nút hành động */}
            <div div className="flex gap-2.5 items-start self-start text-white">
              <ActionButton
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8a519aeacd2020baeb94ebfcc67db11646f466943744fdfc76c6c8f7eb3fe974?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
                text="Cập nhật"
                variant="gray"
                handleSubmit={handleSubmit}
              />
              <ActionButton
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/42648122efa6f387983f11efeb38ca614809d3a449f7a41f54d965ae2b480b89?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
                text="Xóa"
                variant="red"
                handleSubmit={handleSubmit}
              />
            </div>
          </div>

          {/* Trường nhập liệu */}
          <FormField
            label="Tên banner"
            value={data.BannerName}
            id="BannerName"
            onChange={handleChange} // Gửi sự kiện thay đổi
          />

          {/* Trường chọn khóa học */}
          <div className="flex flex-col justify-center mt-10 w-full max-md:max-w-full">
            <label
              htmlFor="BannerCourse"
              className="text-neutral-900 text-opacity-50 max-md:max-w-full"
            >
              Chọn khoá học
            </label>
            <div className="flex relative gap-2.5 items-start px-2.5 py-6 mt-2 w-full rounded-lg border border-solid border-slate-500 border-opacity-80 min-h-[63px] text-neutral-900 max-md:max-w-full">
              <select
                id="BannerCourse"
                value={data.BannerCourse}
                onChange={(e) => handleChange(e)} // Kích hoạt hàm onChange khi chọn
                className="z-0 flex-1 shrink my-auto basis-0 max-md:max-w-full bg-transparent border-none outline-none"
              >
                {course &&
                  course.length > 0 &&
                  course.map((option, index) => (
                    <option
                      key={index}
                      value={option._id}
                      disabled={option.disabled}
                    >
                      {option.CourseName}
                    </option>
                  ))}
              </select>
            </div>

            <div className="flex flex-col justify-center mt-10 w-full max-md:max-w-full">
              <label
                htmlFor="BannerDescription"
                className="text-neutral-900 text-opacity-50 max-md:max-w-full pb-2"
              >
                Mô tả banner
              </label>
              <Editor
                id="BannerDescription"
                apiKey="ra8co6ju1rrspizsq3cqhi3e8p7iknltlh2v77d58cbrys8m" // Thay bằng API Key từ TinyMCE
                onInit={(_evt, editor) => (editorRef.current = editor)}
                value={data.BannerDescription} // Giá trị hiện tại
                onEditorChange={handleChange} // Hàm xử lý khi nội dung thay đổi
                init={{
                  height: 500,
                  menubar: false,
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

            {/* Trường tải lên ảnh */}
            <div className="flex flex-col mt-10 w-full max-md:max-w-full">
              <label className="text-neutral-900 text-opacity-50 max-md:max-w-full">
                Banner
              </label>
              {/* <div className="flex mt-2 w-full bg-[#EBF1F9] min-h-[217px] max-md:max-w-full" /> */}
              <img
                ref={uploadImagePreviewRef}
                loading="lazy"
                src={data?.BannerPicture ? data.BannerPicture : ""}
                alt="Profile avatar"
                className="flex mt-2 w-full bg-[#EBF1F9] max-h-[300px] min-h-[200px] max-md:max-w-full object-contain"
              />
              <div className="flex flex-col mt-2 max-w-full w-[569px]">
                <button type="button" tabIndex={0}>
                  {/* <div className="gap-2.5 self-stretch my-auto">Chọn tệp</div> */}
                  <label
                    htmlFor="BannerPicture"
                    className="flex gap-3 justify-center items-center self-start px-3 py-3 text-white rounded-lg bg-[#6C8299] min-h-[46px] w-[166px]"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b516c63e31267ce6e114c8d3b4292335012bee5e99d5deb37cc823ac993268f?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    Chọn tệp
                  </label>
                  <input
                    type="file"
                    className="gap-2.5 self-stretch my-auto form-control-file hidden" // Ẩn input file
                    id="BannerPicture"
                    name="BannerPicture"
                    accept="image/*"
                    ref={uploadImageInputRef}
                    onChange={handleImageChange}
                  />
                </button>
                <div className="mt-2 text-slate-500">
                  Không có tệp nào được chọn.
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {isHistoryVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 max-md:px-10 overflow-hidden">
          <BannerDetailHistory onClose={handleCloseHistoryRequest} />
        </div>
      )}
    </>
  );
}

export default BannerForm;
