// [GET] /
export const dashboardService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/dashboard`, {
      method: 'GET',
      credentials: "include"
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/dashboard`)

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

// [GET] /header
export const headerService = async () => {
  try {
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/header`)
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/dashboard/header`, {
      method: 'GET',
      credentials: "include"
    });

    if (!response.ok) {
      console.log("Lỗi");
      throw new Error('Lỗi!!!');
    }

    // console.log("response", response);
    const responseData = await response.json();
    // console.log("response", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};

// [GET] /header
export const roleService = async () => {
  try {
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/dashboard/role`)
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/dashboard/role`, {
      method: 'GET',
      credentials: "include"
    });

    if (!response.ok) {
      console.log("Lỗi");
      throw new Error('Lỗi!!!');
    }

    // console.log("response", response);
    const responseData = await response.json();
    // console.log("response", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};