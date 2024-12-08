// [GET] /
export const coursesService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/courses`, {
      method: 'GET',
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

// [GET] /courses/detail/:CourseSlug
export const courseDetailService = async (courseSlug) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/courses/detail/${courseSlug}`, {
      method: 'GET',
      credentials: "include",
    });
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/courses/detail/${courseSlug}`)

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

// [POST] /pay/:CourseSlug
export const coursePayService = async (courseSlug) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/pay/${courseSlug}`, {
      method: 'POST',
      credentials: "include",
    });
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/courses/detail/${courseSlug}`)

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