// [GET] /user/profile
export const userService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/user/profile`, {
      method: 'GET',
      credentials: "include",
    });
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/`)

    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }

    const responseData = await response.json();
    // console.log("response", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};

export const userPostService = async (data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/user/profile`, {
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
    // console.log(response);

    const responseData = await response.json();
    console.log(responseData);

    return responseData; // Trả về kết quả nếu thành công
  } catch (error) {
    throw error.message; // Quăng lỗi để controller xử lý
  }
};