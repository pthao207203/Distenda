import { homeService } from '../services/home.service';

// [GET] /
export async function homeController(setLoading) {
  try {
    const result = await homeService(); // Gọi service để xử lý API
    console.log("result", result)
    setLoading(true)
    return result;
  } catch (err) {
    console.log(err); // Cập nhật lỗi nếu xảy ra
  }
};