import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FileUpload } from "./components/FIleUpload";
import { ContactInput } from "./components/Contact";
import { SocialLink } from "./components/SocialLink";
import { TextArea } from "./components/TextArea";
import uploadImage from "../../components/UploadImage"
import { settingController, settingPostController } from "../../controllers/setting.controller";

export default function Settingpage() {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const editorRef = useRef(null);


  const [imageSrc, setImageSrc] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  const uploadImageInputRef = useRef(null);
  const uploadImagePreviewRef = useRef(null);


  const [popupContent, setPopupContent] = useState(null); // Trạng thái quản lý nội dung popup
  const [isPopupVisible, setPopupVisible] = useState(false); // Trạng thái hiển thị popup xác nhận
  const [successPopupVisible, setSuccessPopupVisible] = useState(false); // Trạng thái hiển thị popup thành công

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
      // console.log("vaof")
      const result = await settingController(setLoading);
      // console.log(result)
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    fetchData();
  }, []);

  const handleSubmit = async () => {
    let uploadedImageUrl = data.WebsiteLogoAdmin;
    // Upload ảnh nếu người dùng đã chọn
    if (selectedFileName) {
      uploadedImageUrl = await uploadImage(selectedFileName);;
      console.log("Uploaded Image URL:", uploadedImageUrl);
    }
    const updatedData = {
      ...data,
      WebsiteLogoAdmin: uploadedImageUrl,
    };

    console.log("Data sent to ActionButton:", updatedData);
    setData(updatedData)
    const response = await settingPostController(updatedData); // Gửi dữ liệu cập nhật
    if (response.code === 200) {
      alert("Cập nhật thành công!");
      setData(response.updatedData); // Cập nhật lại dữ liệu trên giao diện
    }
  };


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
    setSuccessPopupVisible(true);
  };


  const closeSuccessPopup = () => {
    setSuccessPopupVisible(false); // Ẩn popup thành công
    window.location.reload();
  };

  if (loading) {
    return (
      <div>
        Đang tải...
      </div>
    )
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
              className="flex gap-3 justify-center items-center px-3 font-medium leading-none text-white rounded-lg bg-slate-500 h-[46px] min-h-[46px]"
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
            <div className="flex flex-wrap gap-10 justify-between items-start mt-8 w-full max-md:max-w-full">
              <FileUpload
                label="Logo Admin"
                imageUrl={data?.WebsiteLogoAdmin}
                onFileSelect={() => { }}
              />
              <FileUpload
                label="Logo User"
                imageUrl={data?.WebsiteLogoUser}
                onFileSelect={() => { }}
              />
            </div>
          </div>
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
                    className="w-[150px] h-[60px] bg-slate-500 text-white rounded-lg flex justify-center items-center hover:bg-slate-700"
                    onClick={confirmAction}
                  >
                    Có
                  </button>
                  <button
                    className="w-[150px] h-[60px] bg-gray-300 text-gray-900 rounded-lg flex justify-center items-center hover:bg-gray-400"
                    onClick={closePopup}
                  >
                    Không
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
                  className="w-[150px] h-[60px] bg-gray-300 text-gray-900 rounded-lg flex justify-center items-center font-semibold text-2xl hover:bg-gray-400 mt-4"
                  onClick={closeSuccessPopup}
                >
                  Thoát
                </button>
              </div>
            </div>
          </div>
        )}

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

    </>
  );
}