// [GET] /
export const homeService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/`, {
      method: 'GET',
    });
    console.log("path", `${process.env.REACT_APP_API_BASE_URL}/`);

    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }

    const responseData = await response.json();
    console.log("response", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};
