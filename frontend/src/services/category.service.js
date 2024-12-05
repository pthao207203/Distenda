// [GET] /
export const categoryService = async (categorySlug) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/category/${categorySlug}`, {
      method: 'GET',
    });
    console.log(`url: ${process.env.REACT_APP_API_BASE_URL}/category/${categorySlug}`)

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
