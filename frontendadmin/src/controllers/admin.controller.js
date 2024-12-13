import { adminService, adminCreateService, adminCreatePostService } from '../services/admin.service';

export async function adminController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await adminService(); // Gọi API
    // console.log("result admin ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function adminCreateController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await adminCreateService(); // Gọi API
    // console.log("result admin ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function adminCreatePostController(personalInfo) {
  try {
    const result = await adminCreatePostService(personalInfo); // Gọi API
    // console.log("result admin ", result);
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
  }
}
