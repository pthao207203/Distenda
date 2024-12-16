import { usersService, userDetailService, userUnblockService, userBlockService } from '../services/user.service';

export async function usersController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await usersService(); // Gọi API
    // console.log("result users ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function userDetailController(UserID, setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await userDetailService(UserID); // Gọi API
    // console.log("result users ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function userUnblockController(setLoading, UserID) {
  try {
    setLoading(true); // Đang tải
    const result = await userUnblockService(UserID); // Gọi API
    // console.log("result users ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function userBlockController(setLoading, UserID) {
  try {
    setLoading(true); // Đang tải
    const result = await userBlockService(UserID); // Gọi API
    // console.log("result users ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}