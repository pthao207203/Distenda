// [GET] /admin/courses/history
export const courseHistoryService = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/admin/courses/history`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/courses/history`);

    if (!response.ok) {
      throw new Error("Lỗi!!!");
    }

    const responseData = await response.json();
    // console.log("response", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};

// [GET] /admin/courses/detail/:CourseID/history
export const lessonHistoryService = async (CourseId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/admin/courses/detail/${CourseId}/history`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/courses/detail/${CourseId}/history`);

    if (!response.ok) {
      throw new Error("Lỗi!!!");
    }

    const responseData = await response.json();
    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};

// [GET] admin/lesson/detail/:LessonID/history
export const videoHistoryService = async (LessonId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/admin/lesson/detail/${LessonId}/history`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/lesson/detail/${LessonId}/history`);

    if (!response.ok) {
      throw new Error("Lỗi!!!");
    }

    const responseData = await response.json();
    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};

// [GET] admin/video/detail/:VideoID/history
export const videoDetailHistoryService = async (VideoId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/admin/video/detail/${VideoId}/history`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/video/detail/${VideoId}/history`);

    if (!response.ok) {
      throw new Error("Lỗi!!!");
    }

    const responseData = await response.json();
    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};

// [GET] /admin/admin/history
export const adminHistoryService = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/admin/admin/history`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/admin/history`);

    if (!response.ok) {
      throw new Error("Lỗi!!!");
    }

    const responseData = await response.json();
    // console.log("response", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};

// [GET] /admin/admin/detail/:AdminID/history
export const adminDetailHistoryService = async (AdminId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/admin/admin/detail/${AdminId}/history`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/admin/detail/${AdminId}/history`);

    if (!response.ok) {
      throw new Error("Lỗi!!!");
    }

    const responseData = await response.json();
    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};

// [GET] /admin/banner/history
export const bannerHistoryService = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/admin/banner/history`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/banner/history`);

    if (!response.ok) {
      throw new Error("Lỗi!!!");
    }

    const responseData = await response.json();
    // console.log("response", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};

// [GET] /admin/banner/detail/:BannerID/history
export const bannerDetailHistoryService = async (BannerId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/admin/banner/detail/${BannerId}/history`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/banner/detail/${BannerId}/history`);

    if (!response.ok) {
      throw new Error("Lỗi!!!");
    }

    const responseData = await response.json();
    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};