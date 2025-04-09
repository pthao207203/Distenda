import { payService, payDetailService } from '../services/pay.service';

export async function payController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await payService(); // Gọi API
    console.log("result pay ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function payDetailController(PayID,setLoading) {
    try {
      setLoading(true); // Đang tải
      const result = await payDetailService(PayID); // Gọi API
      console.log("result pay detail ", result);
      setLoading(false); // Tải xong
      return result;
    } catch (err) {
      console.error(err); // Ghi log lỗi
      setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
    }
  }