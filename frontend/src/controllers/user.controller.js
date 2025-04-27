import { userService, userPostService, userMarkVideoCompletedService, getVideoStatusService } from '../services/user.service';

export async function userController() {
  try {
    const result = await userService(); // Gọi API
    // console.log("result courses ", result);
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
  }
}

// [POST] /auth/login
export const userPostController = async (data) => {
  try {
    const result = await userPostService(data); // Gọi service để xử lý API
    return result;
  } catch (err) {
    console.log(err); // Cập nhật lỗi nếu xảy ra
  }
};

// [POST] /user/video-status/mark-video-completed
export const userMarkVideoCompletedController = async (data) => {
  try {
    const result = await userMarkVideoCompletedService(data); // Gọi service để xử lý API
    return result;
  } catch (err) {
    console.error("Lỗi khi đánh dấu video hoàn thành:", err);
    throw new Error(err);
  }
};

// [GET] /user/video-status/:courseId
export async function getVideoStatusController(courseId) {
  try {
    const result = await getVideoStatusService(courseId); // Gọi API
    return result;
  } catch (err) {
    console.error("Error in getVideoStatusController:", err); // Ghi log lỗi
    throw new Error("Failed to fetch video statuses"); // Trả về lỗi rõ ràng
  }
}
