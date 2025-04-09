import { adminService, adminCreateService, adminCreatePostService, adminUpdatePostService, adminDetailService, adminDeleteService } from '../services/admin.service';

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

export async function adminDetailController(AdminID, setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await adminDetailService(AdminID); // Gọi API
    // console.log("result users ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function adminUpdatePostController(setLoading, AdminID, data) {
  try {
    setLoading(true)
    const result = await adminUpdatePostService(AdminID, data); // Gọi API
    console.log("result admin ", result);
    setLoading(false)
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
  }
}

export async function adminDeleteController(setLoading, AdminID, data) {
  try {
    setLoading(true)
    const result = await adminDeleteService(AdminID, data); // Gọi API
    // console.log("result admin ", result);
    setLoading(false)
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
  }
}