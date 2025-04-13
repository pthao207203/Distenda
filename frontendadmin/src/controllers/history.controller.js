import { courseHistoryService } from '../services/history.service';

export async function courseHistoryController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await courseHistoryService(); // Gọi API
    console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}