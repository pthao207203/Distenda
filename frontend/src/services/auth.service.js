// [POST] /auth/login
export const loginService = async (data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, {
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

// [POST] /auth/register
export const registerService = async (data) => {
  try {
    const response = await fetch('http://localhost:3001/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error('Đăng ký thất bại');
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
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/logout`, {
      method: 'GET',
      credentials: "include",
    });

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

// [POST] /auth/password/forgot
export const loginResetService = async (data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/password/forgot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/auth/password/forgot`)

    if (!response.ok) {
      throw new Error('Gửi mail thất bại');
    }
    console.log(response);

    const responseData = await response.json();

    return responseData; // Trả về kết quả nếu thành công
  } catch (error) {
    throw error.message; // Quăng lỗi để controller xử lý
  }
};

// [POST] /auth/password/otp
export const loginOTPService = async (data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/password/otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/auth/password/otp`)

    if (!response.ok) {
      throw new Error('Xác nhận thất bại');
    }
    console.log(response);

    const responseData = await response.json();

    return responseData; // Trả về kết quả nếu thành công
  } catch (error) {
    throw error.message; // Quăng lỗi để controller xử lý
  }
};

// [POST] /auth/password/new
export const loginNewService = async (data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/password/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/auth/password/new`)

    if (!response.ok) {
      throw new Error('Xác nhận thất bại');
    }
    console.log(response);

    const responseData = await response.json();

    return responseData; // Trả về kết quả nếu thành công
  } catch (error) {
    throw error.message; // Quăng lỗi để controller xử lý
  }
};