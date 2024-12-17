import { coursesService, courseDetailService, courseUpdatePostService, courseCreateService, courseCreatePostService } from '../services/course.service';

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

export async function courseDetailController(setLoading, CourseID) {
  try {
    setLoading(true); // Đang tải
    const result = await courseDetailService(CourseID); // Gọi API
    console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function courseUpdatePostController(setLoading, CourseID, data) {
  try {
    setLoading(true); // Đang tải
    const result = await courseUpdatePostService(CourseID, data); // Gọi API
    console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function courseCreateController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await courseCreateService(); // Gọi API
    console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function courseCreatePostController(setLoading, data) {
  try {
    setLoading(true); // Đang tải
    const result = await courseCreatePostService(data); // Gọi API
    console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}