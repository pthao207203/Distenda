import { rolesService, rolesDeleteService, rolesCreateService, rolesUpdateService } from '../services/role.service';

export async function rolesController(setLoading) {
  try {
    setLoading(true); // Đang tải
    const result = await rolesService(); // Gọi API
    // console.log("result users ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function rolesDeleteController(setLoading, selectedRoles) {
  try {
    setLoading(true); // Đang tải
    const result = await rolesDeleteService(selectedRoles); // Gọi API
    // console.log("result users ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function rolesCreateController(setLoading, name) {
  try {
    setLoading(true); // Đang tải
    const result = await rolesCreateService(name); // Gọi API
    // console.log("result users ", result);
    setLoading(false); // Tải xong
    return result;
  } catch (err) {
    console.error(err); // Ghi log lỗi
    setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
  }
}

export async function rolesUpdateController(permissions) {
  try {
    await rolesUpdateService(permissions); // Gọi API
    // console.log("result users ", result);
    return {
      code: 200,
      message: "Thành công!"
    };;
  } catch (err) {
    console.error(err); // Ghi log lỗi
  }
}