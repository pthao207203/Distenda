import { bannerService} from '../services/banner.service';

export async function bannerController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await bannerService(); // Gọi API
    // console.log("result admin ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}