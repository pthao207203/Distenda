// [GET] /user/profile
export const userService = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/user/profile`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/`)

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

export const userPostService = async (data) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/user/profile`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Đăng nhập thất bại");
    }
    // console.log(response);

    const responseData = await response.json();
    console.log(responseData);

    return responseData; // Trả về kết quả nếu thành công
  } catch (error) {
    throw error.message; // Quăng lỗi để controller xử lý
  }
};

// [POST] /user/video-status/mark-video-completed
export const userMarkVideoCompletedService = async (data) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/user/video-status/mark-video-completed`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      }
    );

    if (!response.ok) {
      // Lấy lỗi chi tiết từ response
      const errorData = await response.json();
      throw new Error(errorData.message || "Đánh dấu video thất bại");
    }

    const responseData = await response.json();
    console.log("API Response:", responseData);

    return responseData; // Trả về kết quả nếu thành công
  } catch (error) {
    // Quăng lỗi ra ngoài để controller xử lý
    console.error("API fetch error:", error);
    throw new Error(error.message || "Có lỗi xảy ra khi gửi yêu cầu");
  }
};

// [GET] /user/video-status/:courseId
export const getVideoStatusService = async (courseId) => {
  try {
    const response = await fetch(`/user/video-status/${courseId}`, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Error fetching video statuses");
    }

    const data = await response.json();
    return data; // Trả về trạng thái video
  } catch (error) {
    console.error("Error in getVideoStatusService:", error);
    throw error; // Xử lý lỗi ở nơi gọi controller
  }
};
