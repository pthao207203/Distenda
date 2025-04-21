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
export const lessonHistoryService = async (CourseID) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/admin/courses/detail/${CourseID}/history`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/courses/detail/${CourseID}/history`);

    if (!response.ok) {
      throw new Error("Lỗi!!!");
    }

    const responseData = await response.json();
    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};