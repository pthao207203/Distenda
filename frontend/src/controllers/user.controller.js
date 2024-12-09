import { userService, userPostService } from '../services/user.service';

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