import { loginService, logoutService } from '../services/auth.service';

// [POST] /auth/login
export const loginController = async (data, setSuccess, setError, navigate) => {
  try {
    const result = await loginService(data); // Gọi service để xử lý API
    if (result.code === 400) {
      setError(result.message);
    } else {
      setSuccess(result.message || 'Đăng nhập thành công!');
      setTimeout(() => {
        navigate('/'); // Điều hướng tới trang chủ
      }, 3000);
    }
  } catch (err) {
    setError(err); // Cập nhật lỗi nếu xảy ra
  }
};

// [GET] /auth/logout
export const logoutController = async (navigate) => {
  try {
    const result = await logoutService(); // Gọi service để xử lý API
    navigate('/login');  // Điều hướng tới trang đăng nhập
  } catch (err) {
    // setError(err); // Cập nhật lỗi nếu xảy ra
  }
};



