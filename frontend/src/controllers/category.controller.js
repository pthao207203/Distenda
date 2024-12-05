import { categoryService } from '../services/category.service';

export async function categoryController(setLoading, categorySlug) {
  try {
    setLoading(true); // Đang tải
    const result = await categoryService(categorySlug); // Gọi API
    console.log("result courses ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}