// [GET] /
export const homeService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/`, {
      method: 'GET',
      credentials: "include",
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/`)

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

// [GET] /header
export const headerService = async () => {
  try {
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/header`)
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/header`, {
      method: 'GET',
      credentials: "include",
    });

    if (!response.ok) {
      console.log("Lỗi");
      throw new Error('Lỗi!!!');
    }

    // console.log("response", response);
    const responseData = await response.json();
    // console.log("response", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};