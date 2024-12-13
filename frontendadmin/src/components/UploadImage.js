import axios from "axios";

const uploadImage = async (selectedFileName) => {
  try {
    const formData = new FormData();
    formData.append("file", selectedFileName); // File được chọn
    formData.append("upload_preset", "discenda"); // Preset từ Cloudinary

    const response = await axios.post(
      process.env.REACT_APP_CLOUDINARY_URL,
      formData
    );

    const uploadedImageUrl = response.data.secure_url;
    return uploadedImageUrl; // Trả về URL của hình ảnh đã tải lên
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error; // Ném lỗi để xử lý bên ngoài
  }
};

export default uploadImage;
