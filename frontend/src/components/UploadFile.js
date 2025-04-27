import axios from "axios";

const uploadFile = async (selectedFile) => {
  try {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "discenda");  // Preset cloudinary của bạn

    const response = await axios.post(process.env.REACT_APP_CLOUDINARY_FILE_URL, formData);
    console.log(process.env.REACT_APP_CLOUDINARY_URL);

    return response.data.secure_url;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

export default uploadFile;
