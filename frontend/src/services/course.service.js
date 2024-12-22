// [GET] /
export const coursesService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/courses`, {
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

// [GET] /courses/completed
export const coursesCompletedService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/courses/completed`, {
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

// [GET] /courses/purchased
export const coursesPurchasedService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/courses/purchased`, {
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

// [GET] /courses/studying
export const coursesStudyingService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/courses/studying`, {
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

export const courseReviewService = async (courseID, data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/user/comment/add/${courseID}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
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