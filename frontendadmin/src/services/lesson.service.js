export const lessonDetailService = async (LessonID) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/lesson/detail/${LessonID}`, {
      method: 'GET',
      credentials: 'include',
    });
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/courses`)

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
export const lessonUpdatePostService = async (LessonID, data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/lesson/edit/${LessonID}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/courses/edit/${LessonID}`)

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

export const lessonCreatePostService = async (lessonName, courseID) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/lesson/create/${courseID}`, {
      method: "POST",
      body: JSON.stringify({ LessonName: lessonName }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/courses/create/${courseID}`)

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

export const lessonDeleteService = async (LessonID) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/lesson/delete/${LessonID}`, {
      method: 'DELETE',
      credentials: 'include',
    });

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

export const videoCreatePostService = async (LessonID, data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/video/create/${LessonID}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/video/create/${LessonID}`)

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

export const videoDetailService = async (VideoID) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/video/detail/${VideoID}`, {
      method: 'GET',
      credentials: 'include',
    });
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/courses`)

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

export const videoUpdatePostService = async (VideoID, data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/video/edit/${VideoID}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/video/create/${VideoID}`)

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

export const videoDeleteService = async (VideoID) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/video/delete/${VideoID}`, {
      method: 'DELETE',
      credentials: 'include',
    });
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/courses`)

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

export const exerciseDetailService = async (LessonID) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/exercise/detail/${LessonID}`, {
      method: 'GET',
      credentials: 'include',
    });
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/courses`)

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

export const exerciseUpdatePostService = async (LessonID, data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/exercise/edit/${LessonID}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/courses/edit/${LessonID}`)

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