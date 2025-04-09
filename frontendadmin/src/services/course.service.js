// [GET] /
export const coursesService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/courses`, {
      method: 'GET',
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/courses`)

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

export const courseDetailService = async (CourseID) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/courses/detail/${CourseID}`, {
      method: 'GET',
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/courses`)

    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }

    const responseData = await response.json();
    console.log("response", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    console.log(error)
    throw new Error(error); // Thông báo lỗi
  }
};
export const courseUpdatePostService = async (CourseID, data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/courses/edit/${CourseID}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/courses/edit/${CourseID}`)

    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }

    const responseData = await response.json();
    console.log("response", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    console.log("error", error)
    throw new Error(error); // Thông báo lỗi
  }
};

export const courseCreateService = async (CourseID) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/courses/create`, {
      method: 'GET',
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/courses`)

    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }

    const responseData = await response.json();
    console.log("response", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    console.log(error)
    throw new Error(error); // Thông báo lỗi
  }
};

export const courseCreatePostService = async (data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/courses/create`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    });
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/courses/edit/${CourseID}`)

    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }

    const responseData = await response.json();
    console.log("response", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    console.log("error", error)
    throw new Error(error); // Thông báo lỗi
  }
};