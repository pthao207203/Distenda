import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FileUpload } from "./components/FIleUpload";
import { ContactInput } from "./components/Contact";
import { SocialLink } from "./components/SocialLink";
import { TextArea } from "./components/TextArea";
import uploadImage from "../../components/UploadImage"
import { settingController, settingPostController } from "../../controllers/setting.controller";

import { PopupConfirm } from "../../components/PopupConfirm";
import { PopupSuccess } from "../../components/PopupSuccess";
import { PopupError } from "../../components/PopupError";
import Loading from "../../components/Loading";


export default function Settingpage() {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  // const editorRef = useRef(null);

  const [imageUrls, setImageUrls] = useState({}); // Lưu URLs của ảnh, key là id
  const [selectedFiles, setSelectedFiles] = useState({}); // Lưu tệp ảnh theo id


  const uploadImageInputRef = useRef({});
  const uploadImagePreviewRef = useRef({}); // Lưu trữ refs theo id

  const [popupContent, setPopupContent] = useState(null); // Trạng thái quản lý nội dung popup
  const [isPopupVisible, setPopupVisible] = useState(false); // Trạng thái hiển thị popup xác nhận
  const [successPopupVisible, setSuccessPopupVisible] = useState(false); // Trạng thái hiển thị popup thành công
  const [errorPopupVisible, setErrorPopupVisible] = useState(false); // Trạng thái hiển thị popup thành công

  // Thay đổi hình ảnh 
  const handleImageChange = (e) => {
    const { id } = e.target; // Lấy id từ input
    const file = e.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);

      // Cập nhật URL và tệp ảnh theo id
      setImageUrls((prev) => ({
        ...prev,
        [id]: imageURL,
      }));
      console.log("imageURL", imageURL)
      setSelectedFiles((prev) => ({
        ...prev,
        [id]: file,
      }));

      // Nếu cần cập nhật trực tiếp trên ref preview
      if (uploadImagePreviewRef.current[id]) {
        uploadImagePreviewRef.current[id].src = imageURL; // Đặt ảnh vào thẻ img
      }
    }
  };

  // Lấy data từ database
  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const result = await settingController(setLoading);
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
        setSelectedFiles({
          WebsiteLogoAdmin: result.WebsiteLogoAdmin || "",
          WebsiteLogoUser: result.WebsiteLogoUser || "",
          WebsiteIcon: result.WebsiteIcon || "",
        });
        setImageUrls({
          WebsiteLogoAdmin: result.WebsiteLogoAdmin || "",
          WebsiteLogoUser: result.WebsiteLogoUser || "",
          WebsiteIcon: result.WebsiteIcon || "",
        });
      }
      setLoading(false)
    }

    fetchData();
  }, []);

  // Khi nhấn cập nhật
  const handleSubmit = async () => {
    const updatedUrls = { ...data };

    setLoading(true)
    for (const [id, file] of Object.entries(selectedFiles)) {
      const uploadedUrl = await uploadImage(file);
      console.log(`Uploaded Image for ${id}:`, uploadedUrl);
      updatedUrls[id] = uploadedUrl;
    }
    const response = await settingPostController(updatedUrls);

    setLoading(false)
    if (response.code === 200) {
      setSuccessPopupVisible(true);
      setData(response.updatedData);
      setImageUrls({});
      setSelectedFiles({});
    } else {
      setErrorPopupVisible(true);
      console.error("Cập nhật thất bại:", response);
    }
  };

  // Cập nhật dữ liệu khi người dùng nhập vào
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

  // Cập nhật dữ liệu khi người dùng nhập vào social
  const handleIconChange = (e) => {
    if (e?.target) {
      const { value, dataset } = e.target;
      const arrayIndex = parseInt(dataset.index, 10);
      const key = dataset.key;

      if (!isNaN(arrayIndex) && key) {
        setData((prevData) => {
          const updatedSocial = [...(prevData?.WebsiteSocial || [])];
          updatedSocial[arrayIndex] = {
            ...updatedSocial[arrayIndex],
            [key]: value,
          };

          return {
            ...prevData,
            WebsiteSocial: updatedSocial,
          };
        });
      }
    }
  };
  const textAreas = [
    { label: "Giới thiệu", id: "WebsiteDiscription", minHeight: 101, value: data?.WebsiteDiscription },
    { label: "Tuyển dụng", id: "WebsiteRecruit", minHeight: 88, value: data?.WebsiteRecruit },
    { label: "Chính sách bảo mật", id: "WebsiteSecurity", minHeight: 101, value: data?.WebsiteSecurity },
    { label: "Hỗ trợ", id: "WebsiteSupport", minHeight: 88, value: data?.WebsiteSupport },
  ];

  // Thao tác popup
  const handlePopup = (action) => {
    if (action === "update") {
      setPopupContent("Bạn có chắc chắn muốn cập nhật những thay đổi không?");
    }
    setPopupVisible(true);
  };
  const closePopup = () => {
    setPopupVisible(false);
    setPopupContent(null);
  };
  const confirmAction = async () => {
    closePopup();
    await handleSubmit();
  };
  const closeSuccessPopup = () => {
    setSuccessPopupVisible(false); // Ẩn popup thành công
    window.location.reload();
  };
  const closeErrorPopup = () => {
    setErrorPopupVisible(false); // Ẩn popup thành công
    // window.location.reload();
  };

  if (loading) {
    return <Loading />;
  }
  console.log("social => ", data)

  // const socialLinks = [
  //   {
  //     id: "WebsiteFacebook",
  //     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e02aeb2fb0a5596f245e0de6d4cedc110a0e1cf5e761b628a6a8a76fdbfb4941?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b",
  //     url: "facebook.com",
  //     value: data?.WebsiteFacebook
  //   },
  //   {
  //     id: "WebsiteInstagram",
  //     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/364f76b00741a55a173b8ad0e5c1838609e0070fe7107da38b1bd1e110f332b5?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b",
  //     url: "instagram.com",
  //     value: data?.WebsiteInstagram
  //   },
  //   {
  //     id: "WebsiteTiktok",
  //     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e02aeb2fb0a5596f245e0de6d4cedc110a0e1cf5e761b628a6a8a76fdbfb4941?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b",
  //     url: "tiktok.com",
  //     value: data?.WebsiteTiktok
  //   },
  //   {
  //     id: "WebsiteGithub",
  //     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/364f76b00741a55a173b8ad0e5c1838609e0070fe7107da38b1bd1e110f332b5?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b",
  //     url: "github.com",
  //     value: data?.WebsiteGithub
  //   },
  // ];


  return (
    <>
      <Helmet>
        <title>Thông tin web</title>
      </Helmet>
      <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <div className="flex z-0 flex-col w-full max-md:max-w-full">
          <div className="flex justify-end items-center w-full">
            <button
              className="flex gap-3 justify-center items-center px-3 font-medium leading-none text-white rounded-lg bg-[#6C8299] h-[46px] min-h-[46px]"
              onClick={() => handlePopup("update")} // Sửa lỗi: Truyền tham số "update"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9c84cc0d21b5241ee40d83334bf9289f4fc6a242a7bb8a736e90effdbd86720?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <span className="gap-2.5 self-stretch my-auto" >Cập nhật</span>
            </button>
          </div>
          <div className="font-semibold text-neutral-900 max-md:max-w-full">
            Cài đặt chung
          </div>
          <div className="flex flex-col mt-6 w-full font-medium leading-none max-md:max-w-full">
            <div className="flex flex-col max-w-full min-h-[91px] w-[360px]">
              <label className="text-neutral-900 text-opacity-50" htmlFor="website-name">
                Tên website
              </label>
              <input
                id="WebsiteName"
                type="text"
                value={data?.WebsiteName}
                onChange={handleChange}
                className="flex-1 shrink gap-2.5 self-stretch p-2.5 mt-2 whitespace-nowrap rounded-lg border border-solid border-slate-500 border-opacity-80 size-full text-neutral-900"
              />
            </div>
            <div className="flex flex-wrap gap-3 justify-between items-start mt-8 w-full max-md:max-w-full">
              <FileUpload
                label="Logo Admin"
                id="WebsiteLogoAdmin"
                uploadImagePreviewRef={uploadImagePreviewRef["WebsiteLogoAdmin"]}
                uploadImageInputRef={uploadImageInputRef["WebsiteLogoAdmin"]}
                handleImageChange={handleImageChange}
                imageUrl={imageUrls["WebsiteLogoAdmin"]}
                onFileSelect={handleImageChange}
              />
              <FileUpload
                label="Logo User"
                id="WebsiteLogoUser"
                uploadImagePreviewRef={uploadImagePreviewRef["WebsiteLogoUser"]}
                uploadImageInputRef={uploadImageInputRef["WebsiteLogoUser"]}
                handleImageChange={handleImageChange}
                imageUrl={imageUrls["WebsiteLogoUser"]}
              />

              <div className="flex flex-col min-w-[240px] max-md:max-w-full">
                <div className="text-neutral-900 text-opacity-50 max-md:max-w-full">
                  Icon Web
                </div>
                <div className="flex flex-wrap gap-4 items-center mt-2 w-full text-white max-md:max-w-full">
                  <img
                    loading="lazy"
                    src={imageUrls["WebsiteIcon"]}
                    alt={`"Icon Web" preview`}
                    className="object-contain self-stretch my-auto w-[67px] h-[67px] rounded-lg bg-[#CFCFCF]"
                    ref={uploadImagePreviewRef["WebsiteIcon"]}
                  />
                  <button
                    className="flex gap-3 justify-center items-center self-stretch px-3 py-3 my-auto rounded-lg bg-[#6C8299] min-h-[46px]"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b89b8bfd22bc2795389e527250a9a6d8837d50745dd80eb6ef8da7f2fb81f4a1?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <span className="gap-2.5 self-stretch my-auto"></span>
                    <label htmlFor="WebsiteIcon">
                      Chọn tệp
                    </label>
                    <input
                      type="file"
                      className="gap-2.5 self-stretch my-auto form-control-file hidden" // Ẩn input file
                      id="WebsiteIcon"
                      name="WebsiteIcon"
                      accept="image/*"
                      ref={uploadImageInputRef["WebsiteIcon"]}
                      onChange={handleImageChange}
                    />
                  </button>
                </div>
                {/* <div className="mt-2 text-slate-500 text-opacity-80 max-md:max-w-full">
        Không có tệp nào được chọn
      </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex z-0 flex-col mt-10 w-full font-medium max-md:max-w-full">
          <div className="font-semibold text-neutral-900 max-md:max-w-full">
            Thông tin liên hệ
          </div>
          <div className="flex flex-wrap gap-2 justify-between items-start mt-6 w-full max-md:max-w-full">
            <ContactInput id="WebsitePhone" label="Số điện thoại" value={data?.WebsitePhone} type="tel" handleChange={handleChange} />
            <ContactInput id="WebsiteEmail" label="Email" value={data?.WebsiteEmail} type="email" handleChange={handleChange} />
            <ContactInput id="WebsiteCopyright" label="Copyright" value={data?.WebsiteCopyright} handleChange={handleChange} />
          </div>

          {data?.WebsiteSocial && data.WebsiteSocial.map((link, index) => (
            <SocialLink
              key={index}
              {...link}
              data-index={index}
              handleChange={(e) =>
                handleIconChange({ ...e, target: { ...e.target, dataset: { index, key: 'Value' } } })
              }
            />
          ))}
        </div>

        <div className="flex z-0 flex-col mt-10 w-full font-medium text-neutral-900 text-opacity-50 max-md:max-w-full">
          <div className="font-semibold text-neutral-900 max-md:max-w-full">
            Về chúng tôi
          </div>
          {textAreas.slice(0, 2).map((area, index) => (
            <TextArea
              key={index}
              label={area.label}
              id={area.id}
              minHeight={area.minHeight}
              value={data?.[area.id] || ""}
              handleChange={(id, value) => setData((prevData) => ({
                ...prevData,
                [id]: value,  // Sử dụng id làm key
              }))}
            />
          ))}

        </div>

        <div className="flex z-0 flex-col pb-16 mt-10 w-full font-medium text-neutral-900 text-opacity-50 max-md:max-w-full">
          <div className="font-semibold text-neutral-900 max-md:max-w-full">
            RESOURCE
          </div>
          {textAreas.slice(2).map((area, index) => (
            <TextArea
              key={index}
              label={area.label}
              id={area.id}
              minHeight={area.minHeight}
              value={data?.[area.id] || ""}
              handleChange={(id, value) => setData((prevData) => ({
                ...prevData,
                [id]: value,  // Sử dụng id làm key
              }))}
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

    </>
  );
}