import { videoService, exerciseService } from '../services/video.service';

export async function videoController(setLoading, videoSlug) {
  try {
    setLoading(true); // Đang tải
    const result = await videoService(videoSlug); // Gọi API
    // console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function exerciseController(setLoading, exerciseSlug) {
  try {
    setLoading(true); // Đang tải
    const result = await exerciseService(exerciseSlug); // Gọi API
    // console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}