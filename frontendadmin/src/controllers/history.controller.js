import { courseHistoryService, lessonHistoryService, videoHistoryService } from '../services/history.service';

// [GET] /admin/courses/history
export async function courseHistoryController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await courseHistoryService(); // Gọi API
    console.log("courses history", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

// [GET] /admin/courses/detail/:CourseID/history
export async function lessonHistoryController(setLoading, CourseId) {
  try {
    setLoading(true); // Đang tải
    const result = await lessonHistoryService(CourseId); // Gọi API
    console.log("lesson history ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

// [GET] /admin/courses/lesson/detail/:LessonId/history
export async function videoHistoryController(setLoading, LessonId) {
  try {
    setLoading(true); // Đang tải
    const result = await videoHistoryService(LessonId); // Gọi API
    console.log("video history: ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}