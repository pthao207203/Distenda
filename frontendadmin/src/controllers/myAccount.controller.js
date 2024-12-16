import { myAccountService } from '../services/my-account.service';
export async function myAccountController(setLoading) {
    try {
      setLoading(true); // Đang tải
      const result = await myAccountService(setLoading); // Gọi API
      console.log("result my account", result);
      setLoading(false); // Tải xong
      return result;
    } catch (err) {
      console.error(err); // Ghi log lỗi
      setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
    }
  }