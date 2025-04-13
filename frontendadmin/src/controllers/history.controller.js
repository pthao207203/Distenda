import { courseHistoryService, lessonHistoryService } from '../services/history.service';

// [GET] /admin/courses/history
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

// [GET] /admin/courses/detail/:CourseID/history
export async function lessonHistoryController(setLoading, CourseID) {
  try {
    setLoading(true); // Đang tải
    const result = await lessonHistoryService(CourseID); // Gọi API
    console.log("lesson history ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}