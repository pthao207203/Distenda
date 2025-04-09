import { homeService, headerService } from '../services/home.service';

// [GET] /
export async function homeController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await homeService(); // Gọi API
    // console.log("result", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

// [GET] /header
export async function headerController(setLoading) {
  try {
    setLoading(true);
    // console.log("resultcontroller1");
    const result = await headerService(); // Gọi service để xử lý API
    // console.log("resultcontroller2", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
};