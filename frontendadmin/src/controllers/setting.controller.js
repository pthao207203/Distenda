import { settingService, settingPostService } from '../services/setting.service';

export async function settingController() {
  try {
    const result = await settingService();
    console.log("result pay ", result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function settingPostController(updatedData) {
  try {
    const result = await settingPostService(updatedData); // Gọi API
    console.log("result setting ", result);
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗixw
  }
}