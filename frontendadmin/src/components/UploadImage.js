import axios from "axios";

const uploadImage = async (selectedFileName) => {
  try {
    const formData = new FormData();
    formData.append("file", selectedFileName); // File được chọn
    formData.append("upload_preset", "discenda"); // Preset từ Cloudinary

    const response = await axios.post(
      process.env.REACT_APP_CLOUDINARY_IMAGE_URL,
      formData, {
      headers: { "Content-Type": "multipart/form-data" }
    }
    );

    const uploadedImageUrl = response.data.secure_url;
    return uploadedImageUrl; // Trả về URL của hình ảnh đã tải lên
  } catch (error) {
    if (error.response) {
      console.error("Phản hồi lỗi từ Cloudinary:", error.response.data);
    } else {
      console.error("Lỗi yêu cầu:", error.message);
    }
    console.error("Error uploading image:", error);
    throw error; // Ném lỗi để xử lý bên ngoài
  }
};

export default uploadImage;
