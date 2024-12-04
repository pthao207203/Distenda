import { coursesService } from '../services/course.service';

export async function coursesController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await coursesService(); // Gọi API
    console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}