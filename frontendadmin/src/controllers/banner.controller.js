import { bannersService, bannerCreateService, bannerCreatePostService, bannerUpdateService, bannerUpdatePostService, bannerDeleteService } from '../services/banner.service';

export async function bannersController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await bannersService(); // Gọi API
    // console.log("result admin ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function bannerCreateController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await bannerCreateService(); // Gọi API
    // console.log("result admin ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function bannerCreatePostController(data) {
  try {
    const result = await bannerCreatePostService(data); // Gọi API
    // console.log("result admin ", result);
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
  }
}
export async function bannerUpdateController(setLoading, id) {
  try {
    setLoading(true); // Đang tải
    const result = await bannerUpdateService(id); // Gọi API
    // console.log("result admin ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function bannerUpdatePostController(id, data) {
  try {
    const result = await bannerUpdatePostService(id, data); // Gọi API
    // console.log("result admin ", result);
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
  }
}

export async function bannerDeleteController(id, data) {
  try {
    const result = await bannerDeleteService(id, data); // Gọi API
    // console.log("result admin ", result);
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
  }
}
