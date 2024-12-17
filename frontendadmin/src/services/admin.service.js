// [GET] /
export const adminService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/admin`, {
      method: 'GET',
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/admin`)

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

export const adminCreateService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/admin/create`, {
      method: 'GET',
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/admin`)

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

export const adminCreatePostService = async (personalInfo) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/admin/create`, {
      method: "POST",
      body: JSON.stringify(personalInfo),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    });
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/admin`)

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
export const adminDetailService = async (AdminID) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/admin/detail/${AdminID}`, {
      method: 'GET',
      credentials: 'include',
    });

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

export const adminUpdatePostService = async (AdminID, data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/admin/edit/${AdminID}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    });
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/admin`)

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

export const adminDeleteService = async (AdminID) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/admin/delete/${AdminID}`, {
      method: 'DELETE',
      credentials: 'include',
    });

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