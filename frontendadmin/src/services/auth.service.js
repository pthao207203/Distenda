// [POST] /admin/auth/login
export const loginService = async (data) => {
  try {
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/auth/login`)
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error('Đăng nhập thất bại');
    }
    console.log(response);

    const responseData = await response.json();

    return responseData; // Trả về kết quả nếu thành công
  } catch (error) {
    throw error.message; // Quăng lỗi để controller xử lý
  }
};


// [GET] /auth/logout
export const logoutService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/auth/logout`, {
      method: 'GET',
      credentials: "include",
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/auth/logout`)

    if (!response.ok) {
      throw new Error('Đăng xuất thất bại');
    }
    console.log(response);

    const responseData = await response.json();

    return responseData; // Trả về kết quả nếu thành công
  } catch (error) {
    throw error.message; // Quăng lỗi để controller xử lý
  }
};

