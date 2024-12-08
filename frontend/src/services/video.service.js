// [GET] /video/detail/:videoSlug
export const videoService = async (videoSlug) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/video/detail/${videoSlug}`, {
      method: 'GET',
      credentials: "include",
    });
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/video/detail/${videoSlug}`)

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

// [GET] /exercise/detail/:exerciseSlug
export const exerciseService = async (exerciseSlug) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/exercise/detail/${exerciseSlug}`, {
      method: 'GET',
      credentials: "include",
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/exercise/detail/${exerciseSlug}`)

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