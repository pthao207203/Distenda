import { dashboardService, headerService } from '../services/home.service';

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

// [GET] /header
export async function headerController(setLoading) {
  try {
    setLoading(true); 
    console.log("Calling headerService...");
    
    const result = await headerService(); // Gọi service để xử lý API
    console.log("Header: ", result);
    
    return result; // Trả về kết quả
  } catch (err) {
    console.error(err); // Ghi log lỗi
    return null; // Trả về null hoặc giá trị mặc định khi lỗi
  } finally {
    setLoading(false); // Tắt trạng thái tải
  }
};