// [GET] /
export const myAccountService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/my-account`, {
      method: 'GET',
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/my-account`)

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

export const myAccountPostService = async (updatedData) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/my-account/edit`, {
      method: "POST",
      body: JSON.stringify(updatedData),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/my-account`)

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