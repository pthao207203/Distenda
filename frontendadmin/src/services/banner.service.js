// [GET] /
export const bannersService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/banner`, {
      method: 'GET',
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/banner`)

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

export const bannerCreateService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/banner/create`, {
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

export const bannerCreatePostService = async (data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/banner/create`, {
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

export const bannerUpdateService = async (id) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/banner/edit/${id}`, {
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

export const bannerUpdatePostService = async (id, data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/banner/edit/${id}`, {
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
export const bannerDeleteService = async (id, data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/banner/delete/${id}`, {
      method: "DELETE",
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