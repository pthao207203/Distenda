// [GET] /
export const settingService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/setting/general`, {
      method: 'GET',
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/setting/`)

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

// [GET] /
export const settingPostService = async (data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/setting/general`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include'
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/setting/general`)

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
