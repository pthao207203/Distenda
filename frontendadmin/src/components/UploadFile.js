import axios from "axios";

const uploadFile = async (selectedFile) => {
  try {
    const formData = new FormData();
    formData.append("file", selectedFile);  // File được chọn
    formData.append("upload_preset", "discenda");  // Preset từ Cloudinary

    const response = await axios.post(
      process.env.REACT_APP_CLOUDINARY_FILE_URL,  // URL cho raw file
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" }
      }
    );

    const uploadedFileUrl = response.data.secure_url;
    return uploadedFileUrl;  // Trả về URL của file đã upload
  } catch (error) {
    if (error.response) {
      console.error("📄 Phản hồi lỗi từ Cloudinary:", error.response.data);
    } else {
      console.error("❌ Lỗi yêu cầu:", error.message);
    }
    console.error("🔥 Error uploading file:", error);
    throw error;  // Ném lỗi để xử lý bên ngoài
  }
};

export default uploadFile;
