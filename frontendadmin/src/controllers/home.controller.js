import { dashboardService, headerService, roleService } from '../services/home.service';

// [GET] /
export async function dashboardController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await dashboardService(); // Gọi API
    // console.log("result", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

// [GET] /admin/header
export async function headerController(setLoading) {
  try {
    setLoading(true);
    const result = await headerService(); // Gọi service để xử lý API
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    return null; // Trả về null hoặc giá trị mặc định khi lỗi
  } finally {
    setLoading(false); // Tắt trạng thái tải
  }
};

// [GET] /admin/role
export async function roleController(setLoading) {
  try {
    setLoading(true);
    const result = await roleService(); // Gọi service để xử lý API
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    return null; // Trả về null hoặc giá trị mặc định khi lỗi
  } finally {
    setLoading(false); // Tắt trạng thái tải
  }
};