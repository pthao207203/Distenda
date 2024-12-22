import { coursesService, courseDetailService, coursePayService, coursesCompletedService, coursesPurchasedService, coursesStudyingService, courseReviewService } from '../services/course.service';

export async function coursesController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await coursesService(); // Gọi API
    // console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function courseDetailController(setLoading, courseSlug) {
  try {
    setLoading(true); // Đang tải
    const result = await courseDetailService(courseSlug); // Gọi API
    // console.log("result course ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function coursePayController(courseSlug) {
  try {
    // setLoading(true); // Đang tải
    const result = await coursePayService(courseSlug); // Gọi API
    // console.log("result course ", result);
    // setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    // setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function coursesCompletedController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await coursesCompletedService(); // Gọi API
    // console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function coursesPurchasedController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await coursesPurchasedService(); // Gọi API
    // console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function coursesStudyingController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await coursesStudyingService(); // Gọi API
    // console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function courseReviewController(setLoading, courseID, data) {
  try {
    setLoading(true); // Đang tải
    const result = await courseReviewService(courseID, data); // Gọi API
    // console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}