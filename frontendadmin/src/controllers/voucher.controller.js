import { vouchersService, voucherCreateService, voucherCreatePostService, voucherUpdateService, voucherUpdatePostService, voucherDeleteService } from '../services/voucher.service';
import axios from 'axios';

// Lấy chi tiết voucher theo ID
export const getVoucherDetail = async (setLoading, id) => {
  try {
    const res = await axios.get(`/admin/voucher/detail/${id}`);  // Đảm bảo đường dẫn đúng
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  } finally {
    setLoading(false);
  }
};

// Cập nhật voucher theo ID
export const updateVoucherPost = async (setLoading, id, data) => {
  try {
    setLoading(true);
    const res = await axios.post(`/admin/voucher/edit/${id}`, data);  // Cập nhật đúng URL
    return res.data;
  } catch (err) {
    console.error(err);
    return { code: 500 };  // Trả về mã lỗi 500 nếu có lỗi
  } finally {
    setLoading(false);
  }
};

// Lấy tất cả vouchers
export async function vouchersController(setLoading) {
  try {
    setLoading(true);
    const result = await vouchersService();  // Gọi API để lấy dữ liệu
    console.log("API response:", result);
    setLoading(false);
    return result;
  } catch (err) {
    console.error("Lỗi khi gọi API:", err);
    setLoading(false);
  }
}

// Tạo voucher
export async function voucherCreateController(setLoading) {
  try {
    setLoading(true);
    const result = await voucherCreateService();  // Gọi API tạo voucher
    console.log("result voucher ", result);
    setLoading(false);
    return result;
  } catch (err) {
    console.error(err);
    setLoading(false);
  }
}

// Tạo voucher qua POST
export async function voucherCreatePostController(data) {
  try {
    console.log("Dữ liệu gửi lên:", data);  // In dữ liệu gửi lên
    const result = await voucherCreatePostService(data);  // Gọi API tạo voucher
    console.log("Phản hồi từ API tạo voucher:", result);
    return result;
  } catch (err) {
    console.error("Lỗi khi gọi API tạo voucher:", err);
  }
}

// Cập nhật voucher
export async function voucherUpdateController(setLoading, id) {
  try {
    setLoading(true);
    const result = await voucherUpdateService(id);  // Gọi API để cập nhật voucher
    setLoading(false);
    return result;
  } catch (err) {
    console.error(err);
    setLoading(false);
  }
}

// Cập nhật voucher qua POST
export async function voucherUpdatePostController(id, data) {
  try {
    const result = await voucherUpdatePostService(id, data);  // Gọi API cập nhật voucher
    return result;
  } catch (err) {
    console.error(err);
  }
}

// Xóa voucher
export async function voucherDeleteController(id, data) {
  try {
    const result = await voucherDeleteService(id, data);  // Gọi API xóa voucher
    return result;
  } catch (err) {
    console.error(err);
  }
}
