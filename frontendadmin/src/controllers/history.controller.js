import { courseHistoryService, lessonHistoryService, videoHistoryService, videoDetailHistoryService, adminHistoryService, adminDetailHistoryService, bannerHistoryService, bannerDetailHistoryService } from '../services/history.service';

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

// [GET] /admin/lesson/detail/:LessonId/history
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

// [GET] /admin/video/detail/:VideoId/history
export async function videoDetailHistoryController(setLoading, VideoId) {
  try {
    setLoading(true); // Đang tải
    const result = await videoDetailHistoryService(VideoId); // Gọi API
    console.log("video detail history: ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

// [GET] /admin/admin/history
export async function adminHistoryController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await adminHistoryService(); // Gọi API
    console.log("admin history: ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

// [GET] /admin/admin/detail/:AdminID/history
export async function adminDetailHistoryController(setLoading, AdminId) {
  try {
    setLoading(true); // Đang tải
    const result = await adminDetailHistoryService(AdminId); // Gọi API
    console.log("admin detail history ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

// [GET] /admin/banner/history
export async function bannerHistoryController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await bannerHistoryService(); // Gọi API
    console.log("banner history", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

// [GET] /admin/banner/detail/:BannerID/history
export async function bannerDetailHistoryController(setLoading, BannerId) {
  try {
    setLoading(true); // Đang tải
    const result = await bannerDetailHistoryService(BannerId); // Gọi API
    console.log("banner detail history ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}