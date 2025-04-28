import { lessonDetailService, lessonUpdatePostService, lessonCreatePostService, lessonDeleteService, videoCreatePostService, videoDetailService, videoUpdatePostService, videoDeleteService, exerciseDetailService, exerciseUpdatePostService } from '../services/lesson.service';

export async function lessonDetailController(setLoading, LessonID) {
  try {
    setLoading(true); // Đang tải
    const result = await lessonDetailService(LessonID); // Gọi API
    console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function lessonUpdatePostController(setLoading, LessonID) {
  try {
    setLoading(true); // Đang tải
    const result = await lessonUpdatePostService(LessonID); // Gọi API
    console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function lessonCreatePostController(lessonName, courseID) {
  try {
    const result = await lessonCreatePostService(lessonName, courseID); // Gọi API
    console.log("result courses ", result);
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
  }
}

export async function lessonDeleteController(setLoading, LessonID) {
  try {
    setLoading(true); // Đang tải
    const result = await lessonDeleteService(LessonID); // Gọi API
    console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function videoCreatePostController(setLoading, LessonID, data) {
  try {
    setLoading(true); // Đang tải
    const result = await videoCreatePostService(LessonID, data); // Gọi API
    console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function videoUpdatePostController(VideoID, data) {
  try {
    const result = await videoUpdatePostService(VideoID, data); // Gọi API
    console.log("result courses ", result);
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
  }
}

export async function videoDetailController(setLoading, VideoID) {
  try {
    setLoading(true); // Đang tải
    const result = await videoDetailService(VideoID); // Gọi API
    console.log("result video ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function videoDeleteController(setLoading, VideoID) {
  try {
    setLoading(true); // Đang tải
    console.log("videoid", VideoID)
    const result = await videoDeleteService(VideoID); // Gọi API
    console.log("result video ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function exerciseDetailController(setLoading, LessonID) {
  try {
    setLoading(true); // Đang tải
    const result = await exerciseDetailService(LessonID); // Gọi API
    console.log("result exer ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function exerciseUpdatePostController(setLoading, LessonID, data) {
  try {
    setLoading(true); // Đang tải
    const result = await exerciseUpdatePostService(LessonID, data); // Gọi API
    console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}