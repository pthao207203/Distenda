import React, { useState, useEffect, useRef } from "react";
import { ActionButton } from "./components/ActionButton";
import FormField from "./components/BannerForm";
import { bannerCreateController } from "../../../controllers/banner.controller";
import uploadImage from "../../../components/UploadImage";
import { Editor } from "@tinymce/tinymce-react";

import Loading from "../../../components/Loading";

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

  const [imageSrc, setImageSrc] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  const uploadImageInputRef = useRef(null);
  const uploadImagePreviewRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageSrc(imageURL);
      setSelectedFileName(file); // Lưu tên tệp đã chọn

      if (uploadImagePreviewRef.current) {
        uploadImagePreviewRef.current.src = imageURL;
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const result = await bannerCreateController(setLoading);
      setLoading(false);
      if (result) {
        setCourse((prevRoles) => [
          { _id: "", CourseName: "Chọn khoá học", disabled: true },
          ...result, // Dữ liệu fetch được sẽ thêm vào sau "Chọn chức vụ"
        ]); // Lưu dữ liệu nếu hợp lệ
      }
    }

    fetchData();
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
  // console.log("course => ", course)

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

  return (
    <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      {/* Thanh điều hướng */}
      <nav className="flex flex-wrap items-center px-5 w-full text-lg font-semibold leading-none bg-white text-neutral-900 max-md:max-w-full">
        {/* Các thành phần trong thanh điều hướng */}
      </nav>

      {/* Form banner */}
      <form className="flex flex-col px-16 pt-16 pb-60 mx-auto w-full text-xl font-medium leading-none bg-white min-h-[983px] max-md:px-5 max-md:pb-24 max-md:mt-1.5 max-md:max-w-full">
        {/* Nút hành động */}
        <div className="flex gap-3 justify-end items-center w-full">
          <ActionButton
            icon="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/1829cc85a1395ac435e855f81f93714a3f953f874b6692060baaea6cd1928f74?apiKey=7a79403a23cb489f853e4845c47ede19&"
            label="Lưu"
            variant="primary"
            handleSubmit={handleSubmit}
          />
          <ActionButton label="Hủy" variant="secondary" />
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
            src={data?.UserAvatar ? data.UserAvatar : ""}
            alt="Banner image"
            className="flex mt-2 w-full bg-[#EBF1F9] max-h-[300px] min-h-[200px] max-md:max-w-full object-contain"
          />
          <div className="flex flex-col mt-2 max-w-full w-[569px]">
            <button
              type="button"
              className="flex gap-3 justify-center items-center self-start px-3 py-3 text-white rounded-lg bg-[#6C8299] min-h-[46px]"
              tabIndex={0}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b516c63e31267ce6e114c8d3b4292335012bee5e99d5deb37cc823ac993268f?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              {/* <div className="gap-2.5 self-stretch my-auto">Chọn tệp</div> */}
              <label htmlFor="BannerPicture">Chọn tệp</label>
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
            {/* <div className="mt-2 text-slate-500">Không có tệp nào được chọn.</div> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default BannerForm;
