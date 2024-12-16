// [GET] /
export const usersService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/user`, {
      method: 'GET',
      credentials: 'include',
    });
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/user`)

    // console.log("response => ", response.text());

    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }

    const responseData = await response.json();
    console.log("responseData => ", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};

// [GET] /
export const userDetailService = async (UserID) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/user/detail/${UserID}`, {
      method: 'GET',
      credentials: 'include',
    });
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/user`)

    // console.log("response => ", response.text());

    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }

    const responseData = await response.json();
    console.log("responseData => ", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};

export const userUnblockService = async (UserID) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/user/change-status/active/${UserID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include'
    });
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/user`)

    // console.log("response => ", response.text());

    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }

    const responseData = await response.json();
    console.log("responseData => ", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};

export const userBlockService = async (UserID) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/user/change-status/inactive/${UserID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include'
    });
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/user`)

    // console.log("response => ", response.text());

    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }

    const responseData = await response.json();
    console.log("responseData => ", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};