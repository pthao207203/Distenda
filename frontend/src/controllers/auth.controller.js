import { loginService, registerService } from '../services/auth.service';

// [POST] /auth/login
export const loginController = async (data, setSuccess, setError, navigate) => {
  try {
    const result = await loginService(data); // Gọi service để xử lý API
    if (result.code === 400) {
      setError(result.message);
    } else {
      setSuccess(result.message || 'Đăng nhập thành công!');
      setTimeout(() => {
        navigate('/courses'); // Điều hướng tới trang chủ (trang khóa học)
      }, 3000);
    }
  } catch (err) {
    setError(err); // Cập nhật lỗi nếu xảy ra
  }
};

// [POST] /auth/register
export const registerController = async (data, setSuccess, setError, navigate) => {
  try {
    const result = await registerService(data); // Gọi service để xử lý API
    if (result.code === 400) {
      setError(result.message);
    } else {
      setSuccess(result.message || 'Đăng ký thành công!');
      setTimeout(() => {
        navigate('/courses'); // Điều hướng tới trang chủ (trang khóa học)
      }, 3000);
    }
  } catch (err) {
    setError(err); // Cập nhật lỗi nếu xảy ra
  }
};

